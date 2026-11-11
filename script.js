// ==========================================
// 1. SUPABASE & STATE
// ==========================================
const SUPABASE_URL = 'https://pbxyagcrbojmxtshdute.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_jfS8HxzHPYs1_S3UVCMqqw_7wuR9_uo';
const BUCKET = 'receipt-images';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Ikon kategori ialah nama simbol dalam sprite SVG (index.html), contoh 'utensils' -> #i-utensils
const DEFAULT_CATS = [
  { name: 'F&B', icon: 'utensils' },
  { name: 'Utility', icon: 'receipt' },
  { name: 'Accommodation', icon: 'bed' },
  { name: 'Transportation', icon: 'car' },
  { name: 'Shopping', icon: 'bag' },
  { name: 'Medical', icon: 'heart-pulse' },
  { name: 'Gaji', icon: 'wallet' },
  { name: 'Lain-lain', icon: 'package' },
];
const CAT_ICONS = [
  'utensils', 'receipt', 'bed', 'car', 'bag', 'heart-pulse', 'wallet', 'package', 'tag',
  'coffee', 'home', 'zap', 'plane', 'gift', 'book', 'phone', 'briefcase',
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
let newCatIcon = 'tag';

const $ = (id) => document.getElementById(id);

// Hasilkan SVG ikon daripada sprite
const ico = (name, cls = '') =>
  `<svg class="ic ${cls}" aria-hidden="true"><use href="#i-${esc(name)}"></use></svg>`;

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
// Kategori lama yang masih guna emoji (disimpan dalam localStorage) akan dipaparkan sebagai ikon 'tag'
const catIcon = (name) => {
  const icon = allCats().find((c) => c.name === name)?.icon;
  return CAT_ICONS.includes(icon) ? icon : 'tag';
};

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
    renderAccount();
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
  $('theme-btn').innerHTML =
    theme === 'dark' ? `${ico('sun', 'ic-sm')}Mod cerah` : `${ico('moon', 'ic-sm')}Mod gelap`;
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
  if (viewName === 'settings') {
    renderCategorySettings();
    renderIconPicker();
    renderAccount();
  }
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
  // <option> hanya boleh teks, jadi ikon dipaparkan di senarai & ringkasan sahaja
  const opts = allCats()
    .map((c) => `<option value="${esc(c.name)}">${esc(c.name)}</option>`)
    .join('');
  const f = $('f-category');
  f.innerHTML = opts;
  if (selected && allCats().some((c) => c.name === selected)) f.value = selected;
  else if (selected) {
    // kategori lama yang sudah dipadam: papar juga supaya data tidak hilang
    f.insertAdjacentHTML('beforeend', `<option value="${esc(selected)}">${esc(selected)}</option>`);
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

  $('sheet-title').textContent = r ? 'Edit resit' : 'Tambah resit';
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
      html = `<div class="pdf-badge">${ico('file')}<span>${esc(pendingFile.name)}</span></div>`;
    } else {
      previewObjectUrl = URL.createObjectURL(pendingFile);
      html = `<img src="${previewObjectUrl}" alt="Resit" />`;
    }
  } else if (r?.image_url && !removeImageFlag) {
    hasImage = true;
    const isPdf = /\.pdf($|\?)/i.test(r.image_url);
    html = isPdf
      ? `<div class="pdf-badge">${ico('file')}<a href="${esc(r.image_url)}" target="_blank" rel="noopener" style="color:var(--primary)">Buka PDF</a></div>`
      : `<a href="${esc(r.image_url)}" target="_blank" rel="noopener"><img src="${esc(r.image_url)}" alt="Resit" /></a>`;
  } else {
    html = `<p class="muted" style="margin-bottom:10px">Tiada lampiran. Tambah gambar resit (pilihan).</p>`;
  }

  box.innerHTML = html;
  $('remove-image-btn').style.display = hasImage ? 'inline-flex' : 'none';
}

// Kamera / Galeri / PDF -> semua masuk ke sini
async function handleFile(file) {
  if (!file) return;
  if (file.size > 10 * 1024 * 1024) {
    toast('Fail terlalu besar (maks 10MB).');
    return;
  }
  if (!$('sheet').classList.contains('open')) openSheet(null, file);
  else setPendingFile(file);

  toast('AI sedang membaca resit...');
  try {
    const ai = await extractReceiptData(file);
    // pastikan borang masih terbuka dan fail yang sama
    if (!ai || !$('sheet').classList.contains('open') || pendingFile !== file) return;

    if (ai.merchant_name) $('f-merchant').value = ai.merchant_name;
    if (ai.total_amount != null) $('f-amount').value = ai.total_amount;
    if (ai.receipt_date) $('f-date').value = ai.receipt_date;
    if (ai.category && allCats().some((c) => c.name === ai.category)) $('f-category').value = ai.category;
    toast('Siap. Sila semak butiran sebelum simpan.');
  } catch (e) {
    console.warn('AI gagal baca resit:', e);
    toast('AI gagal: ' + e.message);
  }
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result.split(',')[1]);
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
}

// Kecilkan gambar (maks 1600px) supaya laju & jimat kuota
async function prepareForAI(file) {
  if (file.type === 'application/pdf') {
    return { mimeType: 'application/pdf', image: await blobToBase64(file) };
  }
  const bmp = await createImageBitmap(file);
  const scale = Math.min(1, 1600 / Math.max(bmp.width, bmp.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bmp.width * scale);
  canvas.height = Math.round(bmp.height * scale);
  canvas.getContext('2d').drawImage(bmp, 0, 0, canvas.width, canvas.height);
  const blob = await new Promise((r) => canvas.toBlob(r, 'image/jpeg', 0.85));
  return { mimeType: 'image/jpeg', image: await blobToBase64(blob) };
}

// Panggil Supabase Edge Function 'scan-receipt' (Gemini)
async function extractReceiptData(file) {
  if (!currentUser) throw new Error('Belum log masuk (sesi belum sedia). Refresh app.');
  const payload = await prepareForAI(file);
  const { data, error } = await supabaseClient.functions.invoke('scan-receipt', {
    body: { ...payload, categories: allCats().map((c) => c.name) },
  });
  if (error) {
    let msg = error.message;
    try {
      const body = await error.context.json(); // mesej sebenar daripada Edge Function
      msg = body.error || msg;
    } catch {}
    throw new Error(msg);
  }
  return data;
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
    const { data: { session } } = await supabaseClient.auth.getSession();
    const uid = session?.user?.id || currentUser.id;
    const old = editingId ? receipts.find((x) => x.id === editingId) : null;
    let image_url = old?.image_url || null;
    let image_path = old?.image_path || null;
    let pathToDelete = null;

    if (pendingFile) {
      const ext = (pendingFile.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '');
      const path = `${uid}/${Date.now()}.${ext}`;
      const { error: upErr } = await supabaseClient.storage
        .from(BUCKET)
        .upload(path, pendingFile, { contentType: pendingFile.type });
      if (upErr) throw new Error('Muat naik gambar gagal: ' + upErr.message);
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
      : await supabaseClient.from('receipts').insert([{ ...payload, user_id: uid }]);
    if (error) throw new Error('Simpan data gagal: ' + error.message);

    if (pathToDelete) await supabaseClient.storage.from(BUCKET).remove([pathToDelete]);

    const wasEdit = !!editingId;
    closeSheet();
    toast(wasEdit ? 'Resit dikemas kini.' : 'Resit disimpan.');
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

  $('history-count').textContent = `${list.length} resit`;
  const box = $('receipt-list');

  if (list.length === 0) {
    box.innerHTML = `<p class="empty-msg">${
      receipts.length ? 'Tiada padanan.' : 'Belum ada resit. Tekan Tambah atau butang kamera untuk bermula.'
    }</p>`;
    return;
  }

  box.innerHTML = list
    .map((r) => {
      const isIncome = r.type === 'income';
      return `
      <div class="receipt-item" data-id="${esc(r.id)}">
        <div class="receipt-left">
          <div class="receipt-icon">${ico(catIcon(r.category))}</div>
          <div class="receipt-info">
            <h4>${esc(r.merchant_name)}</h4>
            <p><span>${formatDate(r.receipt_date)}</span>${r.image_url ? ico('paperclip', 'ic-sm') : ''}</p>
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
          <div class="bar-label"><span class="name">${ico(catIcon(name), 'ic-sm')}${esc(name)}</span><span class="amt">${money(amt)}</span></div>
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
    (c) => `<div class="setting-row"><span class="lead">${ico(catIcon(c.name))}${esc(c.name)}</span><span class="muted">Lalai</span></div>`
  ).join('');
  const custom = customCats
    .map(
      (c, i) => `
      <div class="setting-row">
        <span class="lead">${ico(catIcon(c.name))}${esc(c.name)}</span>
        <button class="del" onclick="deleteCategory(${i})" aria-label="Padam kategori">${ico('trash', 'ic-sm')}</button>
      </div>`
    )
    .join('');
  $('cat-settings-list').innerHTML = defaults + custom;
}

function renderIconPicker() {
  $('new-cat-picker').innerHTML = CAT_ICONS.map(
    (n) => `<button type="button" class="icon-opt${n === newCatIcon ? ' active' : ''}" data-icon="${n}" aria-label="Ikon ${n}" aria-pressed="${n === newCatIcon}">${ico(n)}</button>`
  ).join('');
}

function addCategory() {
  const name = $('new-cat-name').value.trim();
  if (!name) return toast('Sila isi nama kategori.');
  if (allCats().some((c) => c.name.toLowerCase() === name.toLowerCase()))
    return toast('Kategori itu sudah wujud.');
  customCats.push({ name, icon: newCatIcon });
  localStorage.setItem('customCats', JSON.stringify(customCats));
  $('new-cat-name').value = '';
  newCatIcon = 'tag';
  renderIconPicker();
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
// 7b. AKAUN (LOG MASUK E-MEL TANPA KATA LALUAN)
// ==========================================
const REDIRECT_URL = location.origin + location.pathname;
const isValidEmail = (e) => /^\S+@\S+\.\S+$/.test(e);

function renderAccount() {
  const box = $('account-box');
  if (!box || !currentUser) return;

  if (currentUser.is_anonymous) {
    const pending = currentUser.new_email
      ? `<p class="acc-note">${ico('clock', 'ic-sm')}<span>Menunggu pengesahan untuk <b>${esc(currentUser.new_email)}</b>. Semak e-mel anda dan klik pautan.</span></p>`
      : '';
    box.innerHTML = `
      <div class="setting-row">
        <span class="lead">${ico('user')}Status</span><span class="muted">Tetamu (data pada peranti ini sahaja)</span>
      </div>
      ${pending}
      <div class="acc-form">
        <input type="email" id="acc-email" placeholder="E-mel anda" autocomplete="email" />
        <button class="btn btn-primary" onclick="linkAccount()">Simpan akaun (kekalkan data)</button>
        <button class="btn" onclick="sendLoginLink()">Dah ada akaun? Hantar pautan log masuk</button>
      </div>
      <p class="acc-note">Tiada kata laluan diperlukan. Kami hantar pautan ke e-mel anda.</p>`;
  } else {
    box.innerHTML = `
      <div class="setting-row">
        <span class="lead">${ico('user')}Log masuk sebagai</span><span class="muted">${esc(currentUser.email || '')}</span>
      </div>
      <div class="setting-row">
        <span class="lead">${ico('logout')}Log keluar</span>
        <button class="btn btn-danger" onclick="signOutAccount()">Log keluar</button>
      </div>`;
  }
}

// Tukar akaun tetamu kepada akaun e-mel (data sedia ada KEKAL)
async function linkAccount() {
  const email = $('acc-email').value.trim();
  if (!isValidEmail(email)) return toast('Sila isi e-mel yang sah.');
  const { error } = await supabaseClient.auth.updateUser({ email }, { emailRedirectTo: REDIRECT_URL });
  if (error) {
    const exists = /already|registered|exists/i.test(error.message);
    return toast(exists ? 'E-mel itu sudah berdaftar. Guna "Hantar pautan log masuk".' : 'Gagal: ' + error.message);
  }
  const { data } = await supabaseClient.auth.getUser();
  if (data?.user) currentUser = data.user;
  renderAccount();
  toast('Pautan pengesahan dihantar. Semak e-mel anda.');
}

// Untuk peranti baharu: log masuk ke akaun sedia ada
async function sendLoginLink() {
  const email = $('acc-email').value.trim();
  if (!isValidEmail(email)) return toast('Sila isi e-mel yang sah.');
  if (
    receipts.length &&
    !confirm('Data tetamu pada peranti ini TIDAK akan dipindahkan ke akaun yang anda log masuk. Teruskan?')
  )
    return;
  const { error } = await supabaseClient.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: REDIRECT_URL, shouldCreateUser: false },
  });
  if (error) {
    const notFound = /signups not allowed|not found/i.test(error.message);
    return toast(notFound ? 'Akaun dengan e-mel itu tidak dijumpai.' : 'Gagal: ' + error.message);
  }
  toast('Pautan log masuk dihantar. Semak e-mel anda.');
}

async function signOutAccount() {
  if (!confirm('Log keluar? Anda boleh log masuk semula dengan e-mel yang sama.')) return;
  await supabaseClient.auth.signOut();
  location.reload(); // mulakan sesi tetamu baharu
}

// Kemas kini bila sesi berubah (klik pautan e-mel, log masuk, dll)
supabaseClient.auth.onAuthStateChange((event, session) => {
  // elak await panggilan Supabase terus dalam callback
  setTimeout(async () => {
    if (!session?.user) return;
    const changed = currentUser?.id !== session.user.id;
    currentUser = session.user;
    renderAccount();
    if (changed && event !== 'INITIAL_SESSION') {
      await fetchReceipts();
      toast('Log masuk berjaya.');
    } else if (event === 'USER_UPDATED' && !session.user.is_anonymous) {
      toast('E-mel disahkan. Akaun anda kini kekal.');
    }
  }, 0);
});

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
$('new-cat-picker').addEventListener('click', (e) => {
  const btn = e.target.closest('.icon-opt');
  if (!btn) return;
  newCatIcon = btn.dataset.icon;
  renderIconPicker();
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
applyTheme(localStorage.getItem('theme') || 'light');
$('currency-select').value = currency;
$('month-input').value = todayStr().slice(0, 7);
fillCategorySelects();
renderIconPicker();
switchView('history');
initAuth();