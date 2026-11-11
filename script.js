// ==========================================
// 0. BAHASA (BM / EN)
// ==========================================
const I18N = {
  ms: {
    title_history: 'Sejarah',
    search_ph: 'Cari kedai atau nota',
    filter_all: 'Semua',
    receipts_count: '{n} resit',
    empty_none: 'Belum ada resit. Tekan Tambah atau butang kamera untuk bermula.',
    empty_nomatch: 'Tiada padanan.',
    title_dashboard: 'Ringkasan',
    dash_sub: 'Kosongkan tarikh untuk lihat semua data',
    date_from: 'Dari',
    date_to: 'Hingga',
    chart_title: 'Graf',
    chart_type: 'Jenis graf',
    ct_pie: 'Carta pai',
    ct_bar: 'Bar menegak',
    ct_hbar: 'Bar mendatar',
    ct_stacked: 'Bar bertindan',
    compare: 'Bandingkan dengan julat tarikh lain (B)',
    chart_hint: 'Julat A guna tarikh Dari/Hingga di atas. Graf menunjukkan perbelanjaan.',
    all_dates: 'Semua tarikh',
    chart_total: 'Jumlah',
    chart_unavailable: 'Pustaka graf belum dimuat. Sambung ke internet dan muat semula.',
    net_balance: 'Baki bersih',
    income: 'Pendapatan',
    expense: 'Perbelanjaan',
    by_category: 'Perbelanjaan mengikut kategori',
    no_expense: 'Tiada perbelanjaan untuk tempoh ini.',
    add_receipt: 'Tambah resit',
    scan_info_sub: 'Imbas dengan kamera, pilih dari galeri, atau taip manual',
    scan_title: 'Imbas resit',
    scan_sub: 'Ambil gambar resit dengan kamera',
    manual: 'Manual',
    gallery: 'Galeri',
    title_settings: 'Tetapan',
    settings_sub: 'Tetapan aplikasi',
    sec_general: 'Umum',
    theme: 'Tema',
    theme_to_light: 'Mod cerah',
    theme_to_dark: 'Mod gelap',
    language: 'Bahasa',
    currency: 'Mata wang',
    sec_category: 'Kategori',
    new_cat_ph: 'Nama kategori baharu',
    add: 'Tambah',
    sec_account: 'Akaun',
    sec_data: 'Data',
    export_csv: 'Eksport CSV',
    download: 'Muat turun',
    delete_all: 'Padam semua data',
    delete: 'Padam',
    user_id: 'ID pengguna: {id}',
    default_tag: 'Lalai',
    delete_cat_aria: 'Padam kategori',
    icon_aria: 'Ikon {n}',
    sheet_add: 'Tambah resit',
    sheet_edit: 'Edit resit',
    close: 'Tutup',
    merchant_label: 'Kedai / butiran',
    merchant_ph: 'cth: Restoran Nasi Kandar',
    amount_label: 'Jumlah',
    date_label: 'Tarikh',
    category_label: 'Kategori',
    notes_label: 'Nota (pilihan)',
    camera: 'Kamera',
    remove: 'Buang',
    save: 'Simpan',
    saving: 'Menyimpan...',
    delete_receipt: 'Padam resit ini',
    no_attachment: 'Tiada lampiran. Tambah gambar resit (pilihan).',
    open_pdf: 'Buka PDF',
    receipt_alt: 'Resit',
    file_too_big: 'Fail terlalu besar (maks 10MB).',
    ai_reading: 'AI sedang membaca resit...',
    ai_done: 'Siap. Sila semak butiran sebelum simpan.',
    ai_failed: 'AI gagal: {msg}',
    need_merchant: 'Sila isi nama kedai / butiran.',
    need_amount: 'Sila isi jumlah yang sah.',
    need_date: 'Sila pilih tarikh.',
    not_logged_in: 'Belum log masuk. Cuba sebentar lagi.',
    no_session: 'Belum log masuk (sesi belum sedia). Sila muat semula aplikasi.',
    saved: 'Resit disimpan.',
    updated: 'Resit dikemas kini.',
    save_failed: 'Gagal simpan: {msg}',
    upload_failed: 'Muat naik gambar gagal: {msg}',
    save_data_failed: 'Simpan data gagal: {msg}',
    confirm_delete_receipt: 'Padam resit ini? Tindakan ini tidak boleh dibatalkan.',
    deleted: 'Resit dipadam.',
    delete_failed: 'Gagal padam: {msg}',
    need_cat_name: 'Sila isi nama kategori.',
    cat_exists: 'Kategori itu sudah wujud.',
    cat_added: 'Kategori ditambah.',
    confirm_del_cat_used: 'Kategori "{name}" digunakan oleh {used} resit (resit tidak akan dipadam). Teruskan?',
    confirm_del_cat: 'Padam kategori "{name}"?',
    no_export: 'Tiada data untuk dieksport.',
    no_delete: 'Tiada data untuk dipadam.',
    confirm_delete_all: 'Padam SEMUA {n} resit dan gambar? Tidak boleh dibatalkan.',
    confirm_sure: 'Anda pasti? Sila sahkan sekali lagi.',
    all_deleted: 'Semua data dipadam.',
    db_error: 'Ralat sambungan pangkalan data: {msg}',
    fetch_failed: 'Gagal tarik data: {msg}',
    csv_date: 'Tarikh',
    csv_store: 'Kedai',
    csv_type: 'Jenis',
    csv_category: 'Kategori',
    csv_amount: 'Jumlah',
    csv_notes: 'Nota',
    csv_image: 'Pautan Gambar',
    acc_status: 'Status',
    acc_guest: 'Tetamu (data pada peranti ini sahaja)',
    acc_pending: 'Menunggu pengesahan untuk <b>{email}</b>. Semak e-mel anda dan klik pautan.',
    email_ph: 'E-mel anda',
    link_btn: 'Simpan akaun (kekalkan data)',
    send_link_btn: 'Dah ada akaun? Hantar pautan log masuk',
    no_pwd_note: 'Tiada kata laluan diperlukan. Kami hantar pautan ke e-mel anda.',
    signed_in_as: 'Log masuk sebagai',
    logout: 'Log keluar',
    invalid_email: 'Sila isi e-mel yang sah.',
    email_exists: 'E-mel itu sudah berdaftar. Guna "Hantar pautan log masuk".',
    failed: 'Gagal: {msg}',
    confirm_diff_account: 'Data tetamu pada peranti ini TIDAK akan dipindahkan ke akaun yang anda log masuk. Teruskan?',
    account_not_found: 'Akaun dengan e-mel itu tidak dijumpai.',
    confirm_sent: 'Pautan pengesahan dihantar. Semak e-mel anda.',
    login_sent: 'Pautan log masuk dihantar. Semak e-mel anda.',
    confirm_logout: 'Log keluar? Anda boleh log masuk semula dengan e-mel yang sama.',
    login_ok: 'Log masuk berjaya.',
    email_verified: 'E-mel disahkan. Akaun anda kini kekal.',
  },
  en: {
    title_history: 'History',
    search_ph: 'Search store or notes',
    filter_all: 'All',
    receipts_count: '{n} receipt(s)',
    empty_none: 'No receipts yet. Tap Add or the camera button to get started.',
    empty_nomatch: 'No matches.',
    title_dashboard: 'Summary',
    dash_sub: 'Clear the dates to see all data',
    date_from: 'From',
    date_to: 'To',
    chart_title: 'Chart',
    chart_type: 'Chart type',
    ct_pie: 'Pie chart',
    ct_bar: 'Vertical bar',
    ct_hbar: 'Horizontal bar',
    ct_stacked: 'Stacked bar',
    compare: 'Compare with another date range (B)',
    chart_hint: 'Range A uses the From/To dates above. The chart shows expenses.',
    all_dates: 'All dates',
    chart_total: 'Total',
    chart_unavailable: 'Chart library not loaded. Go online and refresh.',
    net_balance: 'Net balance',
    income: 'Income',
    expense: 'Expense',
    by_category: 'Expenses by category',
    no_expense: 'No expenses for this period.',
    add_receipt: 'Add receipt',
    scan_info_sub: 'Scan with the camera, pick from gallery, or enter manually',
    scan_title: 'Scan receipt',
    scan_sub: 'Take a photo of your receipt',
    manual: 'Manual',
    gallery: 'Gallery',
    title_settings: 'Settings',
    settings_sub: 'App settings',
    sec_general: 'General',
    theme: 'Theme',
    theme_to_light: 'Light mode',
    theme_to_dark: 'Dark mode',
    language: 'Language',
    currency: 'Currency',
    sec_category: 'Categories',
    new_cat_ph: 'New category name',
    add: 'Add',
    sec_account: 'Account',
    sec_data: 'Data',
    export_csv: 'Export CSV',
    download: 'Download',
    delete_all: 'Delete all data',
    delete: 'Delete',
    user_id: 'User ID: {id}',
    default_tag: 'Default',
    delete_cat_aria: 'Delete category',
    icon_aria: 'Icon {n}',
    sheet_add: 'Add receipt',
    sheet_edit: 'Edit receipt',
    close: 'Close',
    merchant_label: 'Store / description',
    merchant_ph: 'e.g. Nasi Kandar Restaurant',
    amount_label: 'Amount',
    date_label: 'Date',
    category_label: 'Category',
    notes_label: 'Notes (optional)',
    camera: 'Camera',
    remove: 'Remove',
    save: 'Save',
    saving: 'Saving...',
    delete_receipt: 'Delete this receipt',
    no_attachment: 'No attachment. Add a receipt image (optional).',
    open_pdf: 'Open PDF',
    receipt_alt: 'Receipt',
    file_too_big: 'File is too large (max 10MB).',
    ai_reading: 'AI is reading the receipt...',
    ai_done: 'Done. Please review the details before saving.',
    ai_failed: 'AI failed: {msg}',
    need_merchant: 'Please enter the store / description.',
    need_amount: 'Please enter a valid amount.',
    need_date: 'Please choose a date.',
    not_logged_in: 'Not signed in yet. Try again shortly.',
    no_session: 'Not signed in yet (session not ready). Refresh the app.',
    saved: 'Receipt saved.',
    updated: 'Receipt updated.',
    save_failed: 'Failed to save: {msg}',
    upload_failed: 'Image upload failed: {msg}',
    save_data_failed: 'Saving data failed: {msg}',
    confirm_delete_receipt: 'Delete this receipt? This cannot be undone.',
    deleted: 'Receipt deleted.',
    delete_failed: 'Failed to delete: {msg}',
    need_cat_name: 'Please enter a category name.',
    cat_exists: 'That category already exists.',
    cat_added: 'Category added.',
    confirm_del_cat_used: 'Category "{name}" is used by {used} receipt(s) (receipts will not be deleted). Continue?',
    confirm_del_cat: 'Delete category "{name}"?',
    no_export: 'No data to export.',
    no_delete: 'No data to delete.',
    confirm_delete_all: 'Delete ALL {n} receipts and images? This cannot be undone.',
    confirm_sure: 'Are you sure? Please confirm once more.',
    all_deleted: 'All data deleted.',
    db_error: 'Database connection error: {msg}',
    fetch_failed: 'Failed to load data: {msg}',
    csv_date: 'Date',
    csv_store: 'Store',
    csv_type: 'Type',
    csv_category: 'Category',
    csv_amount: 'Amount',
    csv_notes: 'Notes',
    csv_image: 'Image Link',
    acc_status: 'Status',
    acc_guest: 'Guest (data on this device only)',
    acc_pending: 'Waiting for confirmation of <b>{email}</b>. Check your email and click the link.',
    email_ph: 'Your email',
    link_btn: 'Save account (keep data)',
    send_link_btn: 'Already have an account? Send login link',
    no_pwd_note: 'No password needed. We will send a link to your email.',
    signed_in_as: 'Signed in as',
    logout: 'Sign out',
    invalid_email: 'Please enter a valid email.',
    email_exists: 'That email is already registered. Use "Send login link".',
    failed: 'Failed: {msg}',
    confirm_diff_account: 'Guest data on this device will NOT be moved to the account you sign in to. Continue?',
    account_not_found: 'No account found with that email.',
    confirm_sent: 'Confirmation link sent. Check your email.',
    login_sent: 'Login link sent. Check your email.',
    confirm_logout: 'Sign out? You can sign back in with the same email.',
    login_ok: 'Signed in successfully.',
    email_verified: 'Email verified. Your account is now permanent.',
  },
};

// Nama kategori lalai disimpan dalam DB dalam bentuk asal; hanya paparan diterjemah
const CAT_LABELS = {
  'F&B': { ms: 'Makanan & Minuman', en: 'F&B' },
  Utility: { ms: 'Utiliti', en: 'Utility' },
  Accommodation: { ms: 'Penginapan', en: 'Accommodation' },
  Transportation: { ms: 'Pengangkutan', en: 'Transportation' },
  Shopping: { ms: 'Membeli-belah', en: 'Shopping' },
  Medical: { ms: 'Perubatan', en: 'Medical' },
  Gaji: { ms: 'Gaji', en: 'Salary' },
  'Lain-lain': { ms: 'Lain-lain', en: 'Others' },
};

let currentLang = localStorage.getItem('lang') === 'en' ? 'en' : 'ms';

const t = (key, params = {}) =>
  (I18N[currentLang][key] ?? I18N.ms[key] ?? key).replace(/\{(\w+)\}/g, (_, k) => params[k] ?? '');

const catLabel = (name) => CAT_LABELS[name]?.[currentLang] || name;

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
  return new Date(str + 'T00:00:00').toLocaleDateString(currentLang === 'ms' ? 'ms-MY' : 'en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
  });
}

let toastTimer;
function toast(msg) {
  const el = $('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
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
function renderUserInfo() {
  $('user-info').textContent = currentUser ? t('user_id', { id: currentUser.id.slice(0, 8) + '…' }) : '';
}

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
    renderUserInfo();
    renderAccount();
    await fetchReceipts();
  } catch (err) {
    console.error('Gagal log masuk:', err);
    toast(t('db_error', { msg: err.message }));
  }
}

// ==========================================
// 3. TEMA, BAHASA & NAVIGASI
// ==========================================
const htmlTag = document.documentElement;

function applyTheme(theme) {
  htmlTag.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  $('theme-btn').innerHTML =
    theme === 'dark'
      ? `${ico('sun', 'ic-sm')}${esc(t('theme_to_light'))}`
      : `${ico('moon', 'ic-sm')}${esc(t('theme_to_dark'))}`;
  renderChart(); // warna graf ikut tema
}

function toggleTheme() {
  applyTheme(htmlTag.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
}

// Terapkan bahasa pada semua teks statik dan render semula bahagian dinamik
function applyLang(lang) {
  currentLang = lang === 'en' ? 'en' : 'ms';
  localStorage.setItem('lang', currentLang);
  htmlTag.lang = currentLang === 'ms' ? 'ms' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
  ['ms', 'en'].forEach((l) => {
    const b = $(`lang-${l}`);
    b.classList.toggle('active', l === currentLang);
    b.setAttribute('aria-pressed', String(l === currentLang));
  });

  applyTheme(htmlTag.getAttribute('data-theme') || 'light');
  $('sheet-title').textContent = editingId ? t('sheet_edit') : t('sheet_add');
  fillCategorySelects($('f-category').value);
  renderImagePreview();
  renderHistory();
  renderDashboard();
  renderCategorySettings();
  renderIconPicker();
  renderAccount();
  renderUserInfo();
}
const setLang = applyLang;

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
    toast(t('fetch_failed', { msg: error.message }));
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
    .map((c) => `<option value="${esc(c.name)}">${esc(catLabel(c.name))}</option>`)
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
  filter.innerHTML = `<option value="">${esc(t('filter_all'))}</option>` + opts;
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

  $('sheet-title').textContent = r ? t('sheet_edit') : t('sheet_add');
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
      html = `<img src="${previewObjectUrl}" alt="${esc(t('receipt_alt'))}" />`;
    }
  } else if (r?.image_url && !removeImageFlag) {
    hasImage = true;
    const isPdf = /\.pdf($|\?)/i.test(r.image_url);
    html = isPdf
      ? `<div class="pdf-badge">${ico('file')}<a href="${esc(r.image_url)}" target="_blank" rel="noopener" style="color:var(--primary)">${esc(t('open_pdf'))}</a></div>`
      : `<a href="${esc(r.image_url)}" target="_blank" rel="noopener"><img src="${esc(r.image_url)}" alt="${esc(t('receipt_alt'))}" /></a>`;
  } else {
    html = `<p class="muted" style="margin-bottom:10px">${esc(t('no_attachment'))}</p>`;
  }

  box.innerHTML = html;
  $('remove-image-btn').style.display = hasImage ? 'inline-flex' : 'none';
}

// Kamera / Galeri / PDF -> semua masuk ke sini
async function handleFile(file) {
  if (!file) return;
  if (file.size > 10 * 1024 * 1024) {
    toast(t('file_too_big'));
    return;
  }
  if (!$('sheet').classList.contains('open')) openSheet(null, file);
  else setPendingFile(file);

  toast(t('ai_reading'));
  try {
    const ai = await extractReceiptData(file);
    // pastikan borang masih terbuka dan fail yang sama
    if (!ai || !$('sheet').classList.contains('open') || pendingFile !== file) return;

    if (ai.merchant_name) $('f-merchant').value = ai.merchant_name;
    if (ai.total_amount != null) $('f-amount').value = ai.total_amount;
    if (ai.receipt_date) $('f-date').value = ai.receipt_date;
    if (ai.category && allCats().some((c) => c.name === ai.category)) $('f-category').value = ai.category;
    toast(t('ai_done'));
  } catch (e) {
    console.warn('AI gagal baca resit:', e);
    toast(t('ai_failed', { msg: e.message }));
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
  if (!currentUser) throw new Error(t('no_session'));
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

  if (!merchant) return toast(t('need_merchant'));
  if (isNaN(amount) || amount < 0) return toast(t('need_amount'));
  if (!date) return toast(t('need_date'));
  if (!currentUser) return toast(t('not_logged_in'));

  const btn = $('save-btn');
  btn.disabled = true;
  btn.textContent = t('saving');

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
      if (upErr) throw new Error(t('upload_failed', { msg: upErr.message }));
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
    if (error) throw new Error(t('save_data_failed', { msg: error.message }));

    if (pathToDelete) await supabaseClient.storage.from(BUCKET).remove([pathToDelete]);

    const wasEdit = !!editingId;
    closeSheet();
    toast(wasEdit ? t('updated') : t('saved'));
    await fetchReceipts();
    if ($('view-upload').classList.contains('active')) switchView('history');
  } catch (err) {
    console.error(err);
    toast(t('save_failed', { msg: err.message }));
  } finally {
    btn.disabled = false;
    btn.textContent = t('save');
  }
}

async function deleteReceipt() {
  if (!editingId) return;
  if (!confirm(t('confirm_delete_receipt'))) return;
  const r = receipts.find((x) => x.id === editingId);
  try {
    const { error } = await supabaseClient.from('receipts').delete().eq('id', editingId);
    if (error) throw error;
    if (r?.image_path) await supabaseClient.storage.from(BUCKET).remove([r.image_path]);
    closeSheet();
    toast(t('deleted'));
    await fetchReceipts();
  } catch (err) {
    toast(t('delete_failed', { msg: err.message }));
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
      (!q ||
        [r.merchant_name, r.notes, r.category, catLabel(r.category)].some((v) =>
          (v || '').toLowerCase().includes(q)
        ))
  );

  $('history-count').textContent = t('receipts_count', { n: list.length });
  const box = $('receipt-list');

  if (list.length === 0) {
    box.innerHTML = `<p class="empty-msg">${esc(receipts.length ? t('empty_nomatch') : t('empty_none'))}</p>`;
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
  let from = $('date-from').value; // 'YYYY-MM-DD' atau ''
  let to = $('date-to').value;
  if (from && to && from > to) [from, to] = [to, from]; // betulkan jika terbalik
  const list = receipts.filter(
    (r) => (!from || r.receipt_date >= from) && (!to || r.receipt_date <= to)
  );
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
          <div class="bar-label"><span class="name">${ico(catIcon(name), 'ic-sm')}${esc(catLabel(name))}</span><span class="amt">${money(amt)}</span></div>
          <div class="bar-track"><div class="bar-fill" style="width:${expense ? (amt / expense) * 100 : 0}%"></div></div>
        </div>`)
        .join('')
    : `<p class="empty-msg">${esc(t('no_expense'))}</p>`;

  renderChart();
}

// ==========================================
// 6b. GRAF (pai, bar menegak/mendatar, bertindan, banding julat)
// ==========================================
const CHART_COLORS = [
  '#1f4e79', '#2f7d5b', '#d98e2b', '#b4412f', '#7a5ea8',
  '#2a9db0', '#8c6d3f', '#c25b8e', '#5f6b7a', '#7fa650',
];
let chartInstances = [];

// Julat A (atas) + julat B (jika dibandingkan) -> jumlah perbelanjaan mengikut kategori
function getChartRanges() {
  const defs = [{ letter: 'A', from: $('date-from').value, to: $('date-to').value }];
  if ($('cmp-on').checked) {
    defs.push({ letter: 'B', from: $('cmp-from').value, to: $('cmp-to').value });
  }

  return defs.map((r) => {
    let { from, to } = r;
    if (from && to && from > to) [from, to] = [to, from];

    const totals = {};
    receipts.forEach((x) => {
      if (x.type === 'income') return;
      if (from && x.receipt_date < from) return;
      if (to && x.receipt_date > to) return;
      const k = x.category || 'Lain-lain';
      totals[k] = (totals[k] || 0) + (parseFloat(x.total_amount) || 0);
    });

    const dates =
      !from && !to
        ? t('all_dates')
        : `${from ? formatDate(from) : '…'} – ${to ? formatDate(to) : '…'}`;
    const sum = Object.values(totals).reduce((a, b) => a + b, 0);
    return { letter: r.letter, dates, label: `${r.letter}: ${dates}`, totals, sum };
  });
}

function renderChart() {
  const wrap = $('chart-wrap');
  if (!wrap) return;

  chartInstances.forEach((c) => c.destroy());
  chartInstances = [];
  wrap.innerHTML = '';
  $('cmp-fields').style.display = $('cmp-on').checked ? 'block' : 'none';

  if (typeof Chart === 'undefined') {
    wrap.innerHTML = `<p class="empty-msg">${esc(t('chart_unavailable'))}</p>`;
    return;
  }

  const type = $('chart-type').value;
  const ranges = getChartRanges();
  const cats = [...new Set(ranges.flatMap((r) => Object.keys(r.totals)))].sort(
    (a, b) => ranges.reduce((s, r) => s + (r.totals[b] || 0) - (r.totals[a] || 0), 0)
  );
  if (!cats.length) {
    wrap.innerHTML = `<p class="empty-msg">${esc(t('no_expense'))}</p>`;
    return;
  }

  // Warna ikut tema semasa
  const css = getComputedStyle(document.documentElement);
  const cMuted = css.getPropertyValue('--text-muted').trim();
  const cGrid = css.getPropertyValue('--border-color').trim();
  const cCard = css.getPropertyValue('--bg-card').trim();
  const rangeColors = [css.getPropertyValue('--primary').trim(), '#d98e2b'];
  Chart.defaults.color = cMuted;
  Chart.defaults.font.family = "'IBM Plex Sans', system-ui, sans-serif";

  const colorOf = (name) => {
    const i = allCats().findIndex((c) => c.name === name);
    return CHART_COLORS[(i < 0 ? cats.indexOf(name) : i) % CHART_COLORS.length];
  };
  const addChart = (height, config) => {
    const box = document.createElement('div');
    box.className = 'chart-box';
    box.style.height = height + 'px';
    const cv = document.createElement('canvas');
    box.appendChild(cv);
    wrap.appendChild(box);
    chartInstances.push(new Chart(cv, config));
  };
  const base = { responsive: true, maintainAspectRatio: false };
  const axisTick = { callback: (v) => Number(v).toLocaleString('en-MY') };
  const legendBottom = { position: 'bottom', labels: { boxWidth: 12 } };

  // ----- PAI: satu pai bagi setiap julat -----
  if (type === 'pie') {
    ranges.forEach((r) => {
      const sub = document.createElement('p');
      sub.className = 'chart-sub';
      sub.textContent = `${r.label} · ${money(r.sum)}`;
      wrap.appendChild(sub);

      const names = cats.filter((c) => r.totals[c]);
      if (!names.length) {
        wrap.insertAdjacentHTML('beforeend', `<p class="empty-msg">${esc(t('no_expense'))}</p>`);
        return;
      }
      addChart(250, {
        type: 'pie',
        data: {
          labels: names.map(catLabel),
          datasets: [{
            data: names.map((n) => r.totals[n]),
            backgroundColor: names.map(colorOf),
            borderColor: cCard,
            borderWidth: 2,
          }],
        },
        options: {
          ...base,
          plugins: {
            legend: legendBottom,
            tooltip: { callbacks: { label: (c) => `${c.label}: ${money(c.parsed)}` } },
          },
        },
      });
    });
    return;
  }

  // ----- BAR BERTINDAN: x = julat, tindanan = kategori -----
  if (type === 'stacked') {
    addChart(340, {
      type: 'bar',
      data: {
        labels: ranges.map((r) => [r.letter, r.dates]),
        datasets: cats.map((c) => ({
          label: catLabel(c),
          data: ranges.map((r) => r.totals[c] || 0),
          backgroundColor: colorOf(c),
        })),
      },
      options: {
        ...base,
        plugins: {
          legend: legendBottom,
          tooltip: {
            filter: (item) => item.parsed.y > 0,
            callbacks: {
              label: (c) => `${c.dataset.label}: ${money(c.parsed.y)}`,
              footer: (items) => `${t('chart_total')}: ${money(ranges[items[0].dataIndex].sum)}`,
            },
          },
        },
        scales: {
          x: { stacked: true, grid: { display: false } },
          y: { stacked: true, beginAtZero: true, grid: { color: cGrid }, ticks: axisTick },
        },
      },
    });
    return;
  }

  // ----- BAR MENEGAK / MENDATAR: x = kategori, satu bar bagi setiap julat -----
  const horizontal = type === 'hbar';
  const catAxis = horizontal ? 'y' : 'x';
  const valAxis = horizontal ? 'x' : 'y';
  const height = horizontal ? Math.max(240, cats.length * (ranges.length * 22 + 16) + 70) : 320;

  addChart(height, {
    type: 'bar',
    data: {
      labels: cats.map(catLabel),
      datasets: ranges.map((r, i) => ({
        label: r.label,
        data: cats.map((c) => r.totals[c] || 0),
        backgroundColor: rangeColors[i],
        borderRadius: 4,
      })),
    },
    options: {
      ...base,
      indexAxis: horizontal ? 'y' : 'x',
      plugins: {
        legend: { ...legendBottom, display: ranges.length > 1 },
        tooltip: { callbacks: { label: (c) => `${c.dataset.label}: ${money(c.parsed[valAxis])}` } },
      },
      scales: {
        [catAxis]: { grid: { display: false } },
        [valAxis]: { beginAtZero: true, grid: { color: cGrid }, ticks: axisTick },
      },
    },
  });
}

// ==========================================
// 7. TETAPAN: KATEGORI, CSV, PADAM SEMUA
// ==========================================
function renderCategorySettings() {
  const defaults = DEFAULT_CATS.map(
    (c) => `<div class="setting-row"><span class="lead">${ico(catIcon(c.name))}${esc(catLabel(c.name))}</span><span class="muted">${esc(t('default_tag'))}</span></div>`
  ).join('');
  const custom = customCats
    .map(
      (c, i) => `
      <div class="setting-row">
        <span class="lead">${ico(catIcon(c.name))}${esc(c.name)}</span>
        <button class="del" onclick="deleteCategory(${i})" aria-label="${esc(t('delete_cat_aria'))}">${ico('trash', 'ic-sm')}</button>
      </div>`
    )
    .join('');
  $('cat-settings-list').innerHTML = defaults + custom;
}

function renderIconPicker() {
  $('new-cat-picker').innerHTML = CAT_ICONS.map(
    (n) => `<button type="button" class="icon-opt${n === newCatIcon ? ' active' : ''}" data-icon="${n}" aria-label="${esc(t('icon_aria', { n }))}" aria-pressed="${n === newCatIcon}">${ico(n)}</button>`
  ).join('');
}

function addCategory() {
  const name = $('new-cat-name').value.trim();
  if (!name) return toast(t('need_cat_name'));
  if (allCats().some((c) => c.name.toLowerCase() === name.toLowerCase() || catLabel(c.name).toLowerCase() === name.toLowerCase()))
    return toast(t('cat_exists'));
  customCats.push({ name, icon: newCatIcon });
  localStorage.setItem('customCats', JSON.stringify(customCats));
  $('new-cat-name').value = '';
  newCatIcon = 'tag';
  renderIconPicker();
  fillCategorySelects($('f-category').value);
  renderCategorySettings();
  toast(t('cat_added'));
}

function deleteCategory(index) {
  const c = customCats[index];
  if (!c) return;
  const used = receipts.filter((r) => r.category === c.name).length;
  const msg = used
    ? t('confirm_del_cat_used', { name: c.name, used })
    : t('confirm_del_cat', { name: c.name });
  if (!confirm(msg)) return;
  customCats.splice(index, 1);
  localStorage.setItem('customCats', JSON.stringify(customCats));
  fillCategorySelects($('f-category').value);
  renderCategorySettings();
  renderHistory();
}

function exportCSV() {
  if (!receipts.length) return toast(t('no_export'));
  const cell = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const header = [
    t('csv_date'), t('csv_store'), t('csv_type'), t('csv_category'),
    t('csv_amount'), t('csv_notes'), t('csv_image'),
  ];
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
  if (!receipts.length) return toast(t('no_delete'));
  if (!confirm(t('confirm_delete_all', { n: receipts.length }))) return;
  if (!confirm(t('confirm_sure'))) return;
  try {
    const paths = receipts.map((r) => r.image_path).filter(Boolean);
    if (paths.length) await supabaseClient.storage.from(BUCKET).remove(paths);
    const { error } = await supabaseClient.from('receipts').delete().eq('user_id', currentUser.id);
    if (error) throw error;
    toast(t('all_deleted'));
    await fetchReceipts();
  } catch (err) {
    toast(t('delete_failed', { msg: err.message }));
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

  // Kekalkan e-mel yang sedang ditaip bila bahasa ditukar
  const typed = $('acc-email')?.value || '';

  if (currentUser.is_anonymous) {
    const pending = currentUser.new_email
      ? `<p class="acc-note">${ico('clock', 'ic-sm')}<span>${t('acc_pending', { email: esc(currentUser.new_email) })}</span></p>`
      : '';
    box.innerHTML = `
      <div class="setting-row">
        <span class="lead">${ico('user')}${esc(t('acc_status'))}</span><span class="muted">${esc(t('acc_guest'))}</span>
      </div>
      ${pending}
      <div class="acc-form">
        <input type="email" id="acc-email" placeholder="${esc(t('email_ph'))}" autocomplete="email" />
        <button class="btn btn-primary" onclick="linkAccount()">${esc(t('link_btn'))}</button>
        <button class="btn" onclick="sendLoginLink()">${esc(t('send_link_btn'))}</button>
      </div>
      <p class="acc-note">${esc(t('no_pwd_note'))}</p>`;
    if (typed) $('acc-email').value = typed;
  } else {
    box.innerHTML = `
      <div class="setting-row">
        <span class="lead">${ico('user')}${esc(t('signed_in_as'))}</span><span class="muted">${esc(currentUser.email || '')}</span>
      </div>
      <div class="setting-row">
        <span class="lead">${ico('logout')}${esc(t('logout'))}</span>
        <button class="btn btn-danger" onclick="signOutAccount()">${esc(t('logout'))}</button>
      </div>`;
  }
}

// Tukar akaun tetamu kepada akaun e-mel (data sedia ada KEKAL)
async function linkAccount() {
  const email = $('acc-email').value.trim();
  if (!isValidEmail(email)) return toast(t('invalid_email'));
  const { error } = await supabaseClient.auth.updateUser({ email }, { emailRedirectTo: REDIRECT_URL });
  if (error) {
    const exists = /already|registered|exists/i.test(error.message);
    return toast(exists ? t('email_exists') : t('failed', { msg: error.message }));
  }
  const { data } = await supabaseClient.auth.getUser();
  if (data?.user) currentUser = data.user;
  renderAccount();
  toast(t('confirm_sent'));
}

// Untuk peranti baharu: log masuk ke akaun sedia ada
async function sendLoginLink() {
  const email = $('acc-email').value.trim();
  if (!isValidEmail(email)) return toast(t('invalid_email'));
  if (receipts.length && !confirm(t('confirm_diff_account'))) return;
  const { error } = await supabaseClient.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: REDIRECT_URL, shouldCreateUser: false },
  });
  if (error) {
    const notFound = /signups not allowed|not found/i.test(error.message);
    return toast(notFound ? t('account_not_found') : t('failed', { msg: error.message }));
  }
  toast(t('login_sent'));
}

async function signOutAccount() {
  if (!confirm(t('confirm_logout'))) return;
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
    renderUserInfo();
    if (changed && event !== 'INITIAL_SESSION') {
      await fetchReceipts();
      toast(t('login_ok'));
    } else if (event === 'USER_UPDATED' && !session.user.is_anonymous) {
      toast(t('email_verified'));
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
$('date-from').addEventListener('change', renderDashboard);
$('date-to').addEventListener('change', renderDashboard);
['chart-type', 'cmp-on', 'cmp-from', 'cmp-to'].forEach((id) =>
  $(id).addEventListener('change', renderChart)
);
$('currency-select').addEventListener('change', (e) => {
  currency = e.target.value;
  localStorage.setItem('currency', currency);
  renderHistory();
  renderDashboard();
});

// Init
$('currency-select').value = currency;
$('date-from').value = todayStr().slice(0, 7) + '-01'; // 1hb bulan ini
$('date-to').value = todayStr(); // hari ini

// Julat B lalai: seluruh bulan lepas
const ymd = (x) =>
  `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`;
const nowD = new Date();
$('cmp-from').value = ymd(new Date(nowD.getFullYear(), nowD.getMonth() - 1, 1));
$('cmp-to').value = ymd(new Date(nowD.getFullYear(), nowD.getMonth(), 0));
applyTheme(localStorage.getItem('theme') || 'light');
applyLang(currentLang);
switchView('history');
initAuth();

// BARU: daftar service worker (untuk PWA / pasang app)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js')
      .catch((e) => console.warn('Service worker gagal:', e));
  });
}