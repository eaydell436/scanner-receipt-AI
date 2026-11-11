// ==========================================
// 1. SUPABASE & STATE
// ==========================================
const SUPABASE_URL = 'https://pbxyagcrbojmxtshdute.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_jfS8HxzHPYs1_S3UVCMqqw_7wuR9_uo';
const BUCKET = 'receipt-images';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const DEFAULT_CATS = [
  { name: 'F&B', icon: '🍽️' },
  { name: 'Utility', icon: '🧾' },
  { name: 'Accommodation', icon: '🛏️' },
  { name: 'Transportation', icon: '🚗' },
  { name: 'Shopping', icon: '🛍️' },
  { name: 'Medical', icon: '🏥' },
  { name: 'Gaji', icon: '💰' },
  { name: 'Lain-lain', icon: '📦' },
];

let currentUser = null;
let receipts = [];
let customCats = loadJSON('customCats', []);
let currency = localStorage.getItem('currency') || 'MYR';

// State sheet
let editingId = null;
let pendingFile = null; // fail baharu yang belum dimuat naik
let removeImageFlag = false; // tandakan gambar lama untuk dibuang
let currentType = 'expense';
let previewObjectUrl = null;

const $ = (id) => document.getElementById(id);

function loadJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function esc(str) {
  return String(str ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function money(n) {
  return `${currency} ${Number(n).toLocaleString('en-MY', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function todayStr() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().split('T')[0];
}

function formatDate(str) {
  return new Date(str + 'T00:00:00').toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
  });
}

let toastTimer;
function toast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

const allCats = () => [...DEFAULT_CATS, ...customCats];
const catIcon = (name) => allCats().find((c) => c.name === name)?.icon || '🧾';

// ==========================================
// 2. AUTH (guna semula sesi sedia ada!)
// ==========================================
async function initAuth() {
  try {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session) {
      currentUser = session.user;
    } else {
      const { data, error } = await supabaseClient.auth.signInAnonymously();
      if (error) throw error;
      currentUser = data.user;
    }
    $('user-info').textContent = `ID pengguna: ${currentUser.id.slice(0, 8)}…`;
    await fetchReceipts();
  } catch (err) {
    console.error('Gagal log masuk:', err);
    toast('Ralat sambungan pangkalan data: ' + err.message);
  }
}

// ==========================================
// 3. TEMA & NAVIGASI
// ==========================================
const htmlTag = document.documentElement;

function applyTheme(theme) {
  htmlTag.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  $('theme-btn').innerText = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
}
function toggleTheme() {
  applyTheme(htmlTag.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
}

function switchView(viewName) {
  document.querySelectorAll('.view').forEach((v) => v.classList.remove('active'));
  $(`view-${viewName}`).classList.add('active');
  document.querySelectorAll('.nav-item[data-view]').forEach((btn) =>
    btn.classList.toggle('active', btn.dataset.view === viewName)
  );
  $('app-content').scrollTop = 0;
  if (viewName === 'dashboard') renderDashboard();
  if (viewName === 'settings') renderCategorySettings();
}

function triggerScan() {
  switchView('upload');
  $('file-camera').click();
}

// ==========================================
// 4. DATA (SUPABASE)
// ==========================================
async function fetchReceipts() {
  if (!currentUser) return;
  const { data, error } = await supabaseClient
    .from('receipts')
    .select('*')
    .order('receipt_date', { ascending: false })
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Gagal tarik data:', error);
    toast('Gagal tarik data: ' + error.message);
    return;
  }
  receipts = data || [];
  renderHistory();
  renderDashboard();
}

// ==========================================
// 5. SHEET TAMBAH / EDIT
// ==========================================
function fillCategorySelects(selected) {
  const opts = allCats()
    .map((c) => `<option value="${esc(c.name)}">${esc(c.icon)} ${esc(c.name)}</option>`)
    .join('');
  const f = $('f-category');
  f.innerHTML = opts;
  if (selected && allCats().some((c) => c.name === selected)) f.value = selected;
  else if (selected) {
    // kategori lama yang sudah dipadam: papar juga supaya data tidak hilang
    f.insertAdjacentHTML('beforeend', `<option value="${esc(selected)}">🧾 ${esc(selected)}</option>`);
    f.value = selected;
  }

  const filter = $('filter-cat');
  const prev = filter.value;
  filter.innerHTML = `<option value="">Semua</option>` + opts;
  filter.value = prev;
}

function setType(type) {
  currentType = type;
  $('type-expense').classList.toggle('active', type === 'expense');
  $('type-income').classList.toggle('active', type === 'income');
}

function openSheet(id = null, file = null) {
  editingId = id;
  pendingFile = null;
  removeImageFlag = false;
  const r = id ? receipts.find((x) => x.id === id) : null;

  $('sheet-title').textContent = r ? 'Edit Resit' : 'Tambah Resit';
  $('delete-btn').style.display = r ? 'block' : 'none';
  setType(r?.type || 'expense');
  $('f-merchant').value = r?.merchant_name || '';
  $('f-amount').value = r ? r.total_amount : '';
  $('f-date').value = r?.receipt_date || todayStr();
  $('f-notes').value = r?.notes || '';
  fillCategorySelects(r?.category || 'Lain-lain');

  if (file) setPendingFile(file);
  else renderImagePreview();

  $('sheet').classList.add('open');
}

function closeSheet() {
  $('sheet').classList.remove('open');
  pendingFile = null;
  editingId = null;
  if (previewObjectUrl) {
    URL.revokeObjectURL(previewObjectUrl);
    previewObjectUrl = null;
  }
}

function setPendingFile(file) {
  pendingFile = file;
  removeImageFlag = false;
  renderImagePreview();
}

function removeImage() {
  pendingFile = null;
  removeImageFlag = true;
  renderImagePreview();
}

function renderImagePreview() {
  if (previewObjectUrl) {
    URL.revokeObjectURL(previewObjectUrl);
    previewObjectUrl = null;
  }
  const box = $('image-preview');
  const r = editingId ? receipts.find((x) => x.id === editingId) : null;
  let html = '';
  let hasImage = false;

  if (pendingFile) {
    hasImage = true;
    if (pendingFile.type === 'application/pdf') {
      html = `<div class="pdf-badge">📄 ${esc(pendingFile.name)}</div>`;
    } else {
      previewObjectUrl = URL.createObjectURL(pendingFile);
      html = `<img src="${previewObjectUrl}" alt="Resit" />`;
    }
  } else if (r?.image_url && !removeImageFlag) {
    hasImage = true;
    const isPdf = /\.pdf($|\?)/i.test(r.image_url);
    html = isPdf
      ? `<div class="pdf-badge">📄 <a href="${esc(r.image_url)}" target="_blank" rel="noopener" style="color:var(--primary)">Buka PDF</a></div>`
      : `<a href="${esc(r.image_url)}" target="_blank" rel="noopener"><img src="${esc(r.image_url)}" alt="Resit" /></a>`;
  } else {
    html = `<p class="muted" style="margin-bottom:10px">Tiada lampiran. Tambah gambar resit (pilihan).</p>`;
  }

  box.innerHTML = html;
  $('remove-image-btn').style.display = hasImage ? 'inline-block' : 'none';
}

// Kamera / Galeri / PDF -> semua masuk ke sini
async function handleFile(file) {
  if (!file) return;
  if (file.size > 10 * 1024 * 1024) {
    toast('Fail terlalu besar (maks 10MB).');
    return;
  }
  if (!$('sheet').classList.contains('open')) {
    openSheet(null, file);
    toast('Sila semak & lengkapkan butiran resit.');
  } else {
    setPendingFile(file);
  }

  // Auto-isi melalui AI (jika sudah disambungkan)
  try {
    const ai = await extractReceiptData(file);
    if (ai) {
      if (ai.merchant_name && !$('f-merchant').value) $('f-merchant').value = ai.merchant_name;
      if (ai.total_amount && !$('f-amount').value) $('f-amount').value = ai.total_amount;
      if (ai.receipt_date) $('f-date').value = ai.receipt_date;
      if (ai.category && allCats().some((c) => c.name === ai.category)) $('f-category').value = ai.category;
    }
  } catch (e) {
    console.warn('AI gagal baca resit:', e);
  }
}

// TODO: sambungkan ke API OCR/AI anda (Edge Function Supabase, dll).
// Pulangkan: { merchant_name, total_amount, receipt_date: 'YYYY-MM-DD', category } atau null
async function extractReceiptData(file) {
  return null;
}

async function saveReceipt() {
  const merchant = $('f-merchant').value.trim();
  const amount = parseFloat($('f-amount').value);
  const date = $('f-date').value;

  if (!merchant) return toast('Sila isi nama kedai / butiran.');
  if (isNaN(amount) || amount < 0) return toast('Sila isi jumlah yang sah.');
  if (!date) return toast('Sila pilih tarikh.');
  if (!currentUser) return toast('Belum log masuk. Cuba sebentar lagi.');

  const btn = $('save-btn');
  btn.disabled = true;
  btn.textContent = 'Menyimpan...';

  try {
    const old = editingId ? receipts.find((x) => x.id === editingId) : null;
    let image_url = old?.image_url || null;
    let image_path = old?.image_path || null;
    let pathToDelete = null;

    if (pendingFile) {
      const ext = (pendingFile.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '');
      const path = `${currentUser.id}/${Date.now()}.${ext}`;
      const { error: upErr } = await supabaseClient.storage
        .from(BUCKET)
        .upload(path, pendingFile, { contentType: pendingFile.type });
      if (upErr) throw upErr;
      pathToDelete = old?.image_path || null;
      image_path = path;
      image_url = supabaseClient.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;
    } else if (removeImageFlag) {
      pathToDelete = old?.image_path || null;
      image_path = null;
      image_url = null;
    }

    const payload = {
      merchant_name: merchant,
      receipt_date: date,
      total_amount: amount,
      category: $('f-category').value,
      type: currentType,
      notes: $('f-notes').value.trim() || null,
      image_url,
      image_path,
    };

    const { error } = editingId
      ? await supabaseClient.from('receipts').update(payload).eq('id', editingId)
      : await supabaseClient.from('receipts').insert([{ ...payload, user_id: currentUser.id }]);
    if (error) throw error;

    if (pathToDelete) await supabaseClient.storage.from(BUCKET).remove([pathToDelete]);

    const wasEdit = !!editingId;
    closeSheet();
    toast(wasEdit ? 'Resit dikemas kini.' : 'Resit disimpan!');
    await fetchReceipts();
    if ($('view-upload').classList.contains('active')) switchView('history');
  } catch (err) {
    console.error(err);
    toast('Gagal simpan: ' + err.message);
  } finally {
    btn.disabled = false;
    btn.textContent = 'Simpan';
  }
}

async function deleteReceipt() {
  if (!editingId) return;
  if (!confirm('Padam resit ini? Tindakan ini tidak boleh dibatalkan.')) return;
  const r = receipts.find((x) => x.id === editingId);
  try {
    const { error } = await supabaseClient.from('receipts').delete().eq('id', editingId);
    if (error) throw error;
    if (r?.image_path) await supabaseClient.storage.from(BUCKET).remove([r.image_path]);
    closeSheet();
    toast('Resit dipadam.');
    await fetchReceipts();
  } catch (err) {
    toast('Gagal padam: ' + err.message);
  }
}

// ==========================================
// 6. RENDER HISTORY & DASHBOARD
// ==========================================
function renderHistory() {
  const q = $('search-input').value.trim().toLowerCase();
  const cat = $('filter-cat').value;
  const list = receipts.filter(
    (r) =>
      (!cat || r.category === cat) &&
      (!q || [r.merchant_name, r.notes, r.category].some((v) => (v || '').toLowerCase().includes(q)))
  );

  $('history-count').textContent = `${list.length} receipt(s)`;
  const box = $('receipt-list');

  if (list.length === 0) {
    box.innerHTML = `<p class="empty-msg">${
      receipts.length ? 'Tiada padanan.' : 'Tiada resit lagi. Tekan ➕ atau 📷 untuk tambah.'
    }</p>`;
    return;
  }

  box.innerHTML = list
    .map((r) => {
      const isIncome = r.type === 'income';
      return `
      <div class="receipt-item" data-id="${esc(r.id)}">
        <div class="receipt-left">
          <div class="receipt-icon">${esc(catIcon(r.category))}</div>
          <div class="receipt-info">
            <h4>${esc(r.merchant_name)}</h4>
            <p>${formatDate(r.receipt_date)}${r.image_url ? ' · 📎' : ''}</p>
          </div>
        </div>
        <div class="receipt-amount ${isIncome ? 'income' : 'expense'}">${isIncome ? '+' : '-'}${money(r.total_amount)}</div>
      </div>`;
    })
    .join('');
}

function renderDashboard() {
  const month = $('month-input').value; // 'YYYY-MM' atau ''
  const list = receipts.filter((r) => !month || r.receipt_date.startsWith(month));

  let income = 0, expense = 0;
  const byCat = {};
  list.forEach((r) => {
    const amt = parseFloat(r.total_amount) || 0;
    if (r.type === 'income') income += amt;
    else {
      expense += amt;
      const k = r.category || 'Lain-lain';
      byCat[k] = (byCat[k] || 0) + amt;
    }
  });

  const net = income - expense;
  $('dash-net').textContent = `${net < 0 ? '-' : ''}${money(Math.abs(net))}`;
  $('dash-income').textContent = money(income);
  $('dash-expense').textContent = money(expense);

  const rows = Object.entries(byCat).sort((a, b) => b[1] - a[1]);
  $('dash-breakdown').innerHTML = rows.length
    ? rows
        .map(([name, amt]) => `
        <div class="bar-row">
          <div class="bar-label"><span>${esc(catIcon(name))} ${esc(name)}</span><span>${money(amt)}</span></div>
          <div class="bar-track"><div class="bar-fill" style="width:${expense ? (amt / expense) * 100 : 0}%"></div></div>
        </div>`)
        .join('')
    : `<p class="empty-msg">Tiada perbelanjaan untuk tempoh ini.</p>`;
}

// ==========================================
// 7. TETAPAN: KATEGORI, CSV, PADAM SEMUA
// ==========================================
function renderCategorySettings() {
  const defaults = DEFAULT_CATS.map(
    (c) => `<div class="setting-row"><span>${esc(c.icon)} ${esc(c.name)}</span><span class="muted">Lalai</span></div>`
  ).join('');
  const custom = customCats
    .map(
      (c, i) => `
      <div class="setting-row">
        <span>${esc(c.icon)} ${esc(c.name)}</span>
        <button class="del" onclick="deleteCategory(${i})" aria-label="Padam">🗑️</button>
      </div>`
    )
    .join('');
  $('cat-settings-list').innerHTML = defaults + custom;
}

function addCategory() {
  const name = $('new-cat-name').value.trim();
  const icon = $('new-cat-icon').value.trim() || '🏷️';
  if (!name) return toast('Sila isi nama kategori.');
  if (allCats().some((c) => c.name.toLowerCase() === name.toLowerCase()))
    return toast('Kategori itu sudah wujud.');
  customCats.push({ name, icon });
  localStorage.setItem('customCats', JSON.stringify(customCats));
  $('new-cat-name').value = '';
  $('new-cat-icon').value = '';
  fillCategorySelects();
  renderCategorySettings();
  toast('Kategori ditambah.');
}

function deleteCategory(index) {
  const c = customCats[index];
  if (!c) return;
  const used = receipts.filter((r) => r.category === c.name).length;
  const msg = used
    ? `Kategori "${c.name}" digunakan oleh ${used} resit (resit tidak akan dipadam). Teruskan?`
    : `Padam kategori "${c.name}"?`;
  if (!confirm(msg)) return;
  customCats.splice(index, 1);
  localStorage.setItem('customCats', JSON.stringify(customCats));
  fillCategorySelects();
  renderCategorySettings();
  renderHistory();
}

function exportCSV() {
  if (!receipts.length) return toast('Tiada data untuk dieksport.');
  const cell = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const header = ['Tarikh', 'Kedai', 'Jenis', 'Kategori', 'Jumlah', 'Nota', 'Pautan Gambar'];
  const rows = receipts.map((r) =>
    [r.receipt_date, r.merchant_name, r.type || 'expense', r.category, r.total_amount, r.notes, r.image_url]
      .map(cell)
      .join(',')
  );
  const blob = new Blob(['\uFEFF' + [header.map(cell).join(','), ...rows].join('\n')], {
    type: 'text/csv;charset=utf-8;',
  });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `resit-${todayStr()}.csv`;
  a.click();
  URL.revokeObjectURL(a.href);
}

async function deleteAllData() {
  if (!receipts.length) return toast('Tiada data untuk dipadam.');
  if (!confirm(`Padam SEMUA ${receipts.length} resit dan gambar? Tidak boleh dibatalkan.`)) return;
  if (!confirm('Anda pasti? Sila sahkan sekali lagi.')) return;
  try {
    const paths = receipts.map((r) => r.image_path).filter(Boolean);
    if (paths.length) await supabaseClient.storage.from(BUCKET).remove(paths);
    const { error } = await supabaseClient.from('receipts').delete().eq('user_id', currentUser.id);
    if (error) throw error;
    toast('Semua data dipadam.');
    await fetchReceipts();
  } catch (err) {
    toast('Gagal padam: ' + err.message);
  }
}

// ==========================================
// 8. EVENT LISTENERS & MULA
// ==========================================
['file-camera', 'file-gallery', 'file-pdf'].forEach((id) => {
  $(id).addEventListener('change', (e) => {
    handleFile(e.target.files[0]);
    e.target.value = ''; // benarkan pilih fail sama semula
  });
});

$('receipt-list').addEventListener('click', (e) => {
  const item = e.target.closest('.receipt-item');
  if (item) openSheet(item.dataset.id);
});
$('search-input').addEventListener('input', renderHistory);
$('filter-cat').addEventListener('change', renderHistory);
$('month-input').addEventListener('change', renderDashboard);
$('currency-select').addEventListener('change', (e) => {
  currency = e.target.value;
  localStorage.setItem('currency', currency);
  renderHistory();
  renderDashboard();
});

// Init
applyTheme(localStorage.getItem('theme') || 'dark');
$('currency-select').value = currency;
$('month-input').value = todayStr().slice(0, 7);
fillCategorySelects();
switchView('history');
initAuth();