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
    scan_info_sub: 'Ambil gambar, pilih dari galeri, atau taip manual. Tekan Imbas AI untuk baca resit.',
    scan_title: 'Ambil gambar resit',
    scan_sub: 'Gambar akan dibuka dalam borang, kemudian tekan Imbas AI',
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
    payment_label: 'Cara pembayaran',
    pay_none: 'Tidak dinyatakan',
    pay_cash: 'Tunai',
    pay_debit: 'Kad debit',
    pay_credit: 'Kad kredit',
    pay_transfer: 'Pindahan bank / DuitNow',
    pay_ewallet: 'E-dompet (TNG, GrabPay)',
    pay_other: 'Lain-lain',
    csv_payment: 'Cara Bayar',
    sec_payment: 'Cara pembayaran',
    new_pay_ph: 'Cara pembayaran baharu',
    need_pay_name: 'Sila isi nama cara pembayaran.',
    pay_exists: 'Cara pembayaran itu sudah wujud.',
    pay_added: 'Cara pembayaran ditambah.',
    delete_pay_aria: 'Padam cara pembayaran',
    confirm_del_pay_used: 'Cara pembayaran "{name}" digunakan oleh {used} resit (resit tidak akan dipadam). Teruskan?',
    confirm_del_pay: 'Padam cara pembayaran "{name}"?',
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
    // ---- Imbas AI (manual) ----
    scan_ai_btn: 'Imbas AI',
    scan_hint: 'Gambar ditambah. Tekan "Imbas AI" untuk baca resit.',
    scan_need_image: 'Sila tambah gambar resit dahulu.',
    scanning_title: 'Mengimbas resit...',
    scanning_sub: 'AI sedang membaca butiran resit',
    scan_retry: 'Pelayan sibuk. Mencuba lagi ({n}/{max})...',
    scan_done: 'Siap!',
    scan_cancel: 'Batal',
    preview_btn: 'Pratonton',
    zoom_in: 'Zum masuk',
    zoom_out: 'Zum keluar',
    zoom_reset: 'Set semula',
    drag_hint: 'Seret untuk susun',
    scan_basic_btn: 'Imbas Asas',
    scanning_basic_title: 'Mengimbas (asas)...',
    basic_loading: 'Memuatkan enjin imbasan (kali pertama agak lama)...',
    basic_reading: 'Membaca teks... {p}%',
    basic_pdf: 'Membaca teks PDF...',
    basic_done: 'Siap (asas). Sila semak betul-betul, mungkin tidak tepat.',
    basic_none: 'Tiada maklumat dapat dikesan. Cuba gambar yang lebih jelas atau isi manual.',
    basic_failed: 'Imbasan asas gagal: {msg}',
    basic_lib_missing: 'Pustaka imbasan tidak dapat dimuat. Sambung ke internet dan cuba lagi.',
    ai_busy: 'Pelayan AI sedang sibuk (503). Cuba Imbas AI sekali lagi, atau guna Imbas Asas.',
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
    scan_info_sub: 'Take a photo, pick from gallery, or enter manually. Tap AI Scan to read the receipt.',
    scan_title: 'Take receipt photo',
    scan_sub: 'The photo opens in the form, then tap AI Scan',
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
    payment_label: 'Payment method',
    pay_none: 'Not specified',
    pay_cash: 'Cash',
    pay_debit: 'Debit card',
    pay_credit: 'Credit card',
    pay_transfer: 'Bank transfer / DuitNow',
    pay_ewallet: 'E-wallet (TNG, GrabPay)',
    pay_other: 'Other',
    csv_payment: 'Payment',
    sec_payment: 'Payment methods',
    new_pay_ph: 'New payment method',
    need_pay_name: 'Please enter a payment method name.',
    pay_exists: 'That payment method already exists.',
    pay_added: 'Payment method added.',
    delete_pay_aria: 'Delete payment method',
    confirm_del_pay_used: 'Payment method "{name}" is used by {used} receipt(s) (receipts will not be deleted). Continue?',
    confirm_del_pay: 'Delete payment method "{name}"?',
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
    // ---- AI Scan (manual) ----
    scan_ai_btn: 'AI Scan',
    scan_hint: 'Image added. Tap "AI Scan" to read the receipt.',
    scan_need_image: 'Please add a receipt image first.',
    scanning_title: 'Scanning receipt...',
    scanning_sub: 'AI is reading the receipt details',
    scan_retry: 'Server busy. Retrying ({n}/{max})...',
    scan_done: 'Done!',
    scan_cancel: 'Cancel',
    preview_btn: 'Preview',
    zoom_in: 'Zoom in',
    zoom_out: 'Zoom out',
    zoom_reset: 'Reset',
    drag_hint: 'Drag to reorder',
    scan_basic_btn: 'Basic Scan',
    scanning_basic_title: 'Scanning (basic)...',
    basic_loading: 'Loading scan engine (slow the first time)...',
    basic_reading: 'Reading text... {p}%',
    basic_pdf: 'Reading PDF text...',
    basic_done: 'Done (basic). Please check carefully, it may be inaccurate.',
    basic_none: 'Nothing could be detected. Try a clearer image or enter manually.',
    basic_failed: 'Basic scan failed: {msg}',
    basic_lib_missing: 'Scan library could not be loaded. Go online and try again.',
    ai_busy: 'The AI server is busy (503). Try AI Scan again, or use Basic Scan.',
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
  'credit-card', 'banknote', 'landmark',
];

const PAYMENT_METHODS = ['cash', 'debit', 'credit', 'transfer', 'ewallet', 'other'];
const PAY_ICONS = {
  cash: 'banknote', debit: 'credit-card', credit: 'credit-card',
  transfer: 'landmark', ewallet: 'phone', other: 'package',
};
// Tersuai: [{ name, icon }]. Versi lama simpan teks sahaja, ditukar automatik.
let customPays = loadJSON('customPays', []).map((p) =>
  typeof p === 'string' ? { name: p, icon: 'tag' } : p
);
let payOrder = loadJSON('payOrder', []);
let newPayIcon = 'tag';

// Pulang senarai kunci (lalai + nama tersuai) mengikut susunan pengguna
const allPays = () =>
  sortByOrder([...PAYMENT_METHODS, ...customPays.map((p) => p.name)], payOrder, (k) => k);

const payIcon = (k) => {
  const icon = PAY_ICONS[k] || customPays.find((p) => p.name === k)?.icon;
  return CAT_ICONS.includes(icon) ? icon : 'tag';
};

// Lalai: terjemah ikut bahasa. Tersuai: papar nama asal.
const payLabel = (k) => (k ? I18N[currentLang]['pay_' + k] ?? k : '');

function fillPaymentSelect(selected) {
  const f = $('f-payment');
  f.innerHTML =
    `<option value="">${esc(t('pay_none'))}</option>` +
    allPays().map((k) => `<option value="${esc(k)}">${esc(payLabel(k))}</option>`).join('');
  // cara bayar tersuai yang sudah dipadam: papar juga supaya data tak hilang
  if (selected && !allPays().includes(selected)) {
    f.insertAdjacentHTML('beforeend', `<option value="${esc(selected)}">${esc(selected)}</option>`);
  }
  f.value = selected || '';
}

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
let scanToken = 0; // untuk batal / abaikan hasil imbasan lama

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
  toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}

let catOrder = loadJSON('catOrder', []);

// Susun mengikut senarai kunci yang disimpan; item baharu diletak di hujung
function sortByOrder(list, order, keyFn) {
  const pos = new Map(order.map((k, i) => [k, i]));
  const rank = (x, i) => (pos.has(keyFn(x)) ? pos.get(keyFn(x)) : 1e6 + i);
  return list
    .map((x, i) => ({ x, r: rank(x, i) }))
    .sort((a, b) => a.r - b.r)
    .map((o) => o.x);
}

const allCats = () => sortByOrder([...DEFAULT_CATS, ...customCats], catOrder, (c) => c.name);

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
  fillPaymentSelect($('f-payment').value);
  renderImagePreview();
  renderHistory();
  renderDashboard();
  renderCategorySettings();
  renderPaymentSettings();
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
    renderPaymentSettings();
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
  cancelScan();
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
  fillPaymentSelect(r?.payment_method || '');

  if (file) setPendingFile(file);
  else renderImagePreview();

  $('sheet').classList.add('open');
}

function closeSheet() {
  closeViewer();
  cancelScan();
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

function previewHtml(src) {
  const label = esc(t('preview_btn'));
  return `<div class="preview-wrap"><img src="${esc(src)}" alt="${esc(t('receipt_alt'))}" /><button type="button" class="preview-zoom-btn" onclick="openViewer()" aria-label="${label}">${ico('expand', 'ic-sm')}<span>${label}</span></button></div>`;
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
      html = previewHtml(previewObjectUrl);
    }
  } else if (r?.image_url && !removeImageFlag) {
    hasImage = true;
    const isPdf = /\.pdf($|\?)/i.test(r.image_url);
    html = isPdf
      ? `<div class="pdf-badge">${ico('file')}<a href="${esc(r.image_url)}" target="_blank" rel="noopener" style="color:var(--primary)">${esc(t('open_pdf'))}</a></div>`
      : previewHtml(r.image_url);
    } else {
    html = `<p class="muted" style="margin-bottom:10px">${esc(t('no_attachment'))}</p>`;
  }

  box.innerHTML = html;
  $('remove-image-btn').style.display = hasImage ? 'inline-flex' : 'none';
  // Butang Imbas AI hanya muncul bila ada gambar / PDF
  $('scan-ai-btn').style.display = hasImage ? 'inline-flex' : 'none';
  $('scan-basic-btn').style.display = hasImage ? 'inline-flex' : 'none';
}

// ==========================================
// PRATONTON GAMBAR (zoom / gerak)
// ==========================================
const viewer = { s: 1, x: 0, y: 0, ptrs: new Map(), multi: false, dist: 0, lastTap: 0 };
const VIEWER_MAX = 6;

function viewerApply() {
  const img = $('viewer-img');
  const stage = $('viewer-stage');
  // had gerak supaya gambar tak lari keluar skrin
  const maxX = Math.max(0, (img.clientWidth * viewer.s - stage.clientWidth) / 2);
  const maxY = Math.max(0, (img.clientHeight * viewer.s - stage.clientHeight) / 2);
  viewer.x = Math.min(maxX, Math.max(-maxX, viewer.x));
  viewer.y = Math.min(maxY, Math.max(-maxY, viewer.y));
  img.style.transform = `translate(${viewer.x}px, ${viewer.y}px) scale(${viewer.s})`;
  $('viewer-zoom-label').textContent = Math.round(viewer.s * 100) + '%';
}

// cx, cy: titik zum, relatif kepada pusat paparan
function viewerZoomAt(ns, cx, cy) {
  ns = Math.min(VIEWER_MAX, Math.max(1, ns));
  const k = ns / viewer.s;
  viewer.x = cx - (cx - viewer.x) * k;
  viewer.y = cy - (cy - viewer.y) * k;
  viewer.s = ns;
  if (ns === 1) { viewer.x = 0; viewer.y = 0; }
  viewerApply();
}

const viewerZoomBy = (factor) => viewerZoomAt(viewer.s * factor, 0, 0);

function viewerReset() {
  viewer.s = 1; viewer.x = 0; viewer.y = 0;
  viewerApply();
}

function openViewer() {
  const src = $('image-preview').querySelector('img')?.src;
  if (!src) return;
  $('viewer-img').src = src;
  viewer.ptrs.clear();
  viewerReset();
  $('img-viewer').classList.add('open');
}

function closeViewer() {
  $('img-viewer').classList.remove('open');
  $('viewer-img').removeAttribute('src');
  viewer.ptrs.clear();
}

(function initViewer() {
  const stage = $('viewer-stage');
  const pt = (e) => {
    const r = stage.getBoundingClientRect();
    return { x: e.clientX - r.left - r.width / 2, y: e.clientY - r.top - r.height / 2 };
  };

  stage.addEventListener('pointerdown', (e) => {
    stage.setPointerCapture(e.pointerId);
    viewer.ptrs.set(e.pointerId, pt(e));
    if (viewer.ptrs.size === 1) { viewer.multi = false; viewer.dist = 0; }
    else viewer.multi = true;
  });

  stage.addEventListener('pointermove', (e) => {
    const prev = viewer.ptrs.get(e.pointerId);
    if (!prev) return;
    const cur = pt(e);

    if (viewer.ptrs.size === 1) {
      const dx = cur.x - prev.x, dy = cur.y - prev.y;
      viewer.dist += Math.abs(dx) + Math.abs(dy);
      if (viewer.s > 1) { viewer.x += dx; viewer.y += dy; viewerApply(); }
    } else if (viewer.ptrs.size === 2) {
      const other = [...viewer.ptrs.entries()].find(([id]) => id !== e.pointerId)[1];
      const oldDist = Math.hypot(prev.x - other.x, prev.y - other.y);
      const newDist = Math.hypot(cur.x - other.x, cur.y - other.y);
      const oldMid = { x: (prev.x + other.x) / 2, y: (prev.y + other.y) / 2 };
      const newMid = { x: (cur.x + other.x) / 2, y: (cur.y + other.y) / 2 };
      viewer.x += newMid.x - oldMid.x;
      viewer.y += newMid.y - oldMid.y;
      if (oldDist > 0) viewerZoomAt(viewer.s * (newDist / oldDist), newMid.x, newMid.y);
      else viewerApply();
    }
    viewer.ptrs.set(e.pointerId, cur);
  });

  const endPtr = (e) => {
    if (!viewer.ptrs.delete(e.pointerId)) return;
    // ketuk dua kali: zum 2.5x / set semula
    if (viewer.ptrs.size === 0 && !viewer.multi && viewer.dist < 8 && e.type === 'pointerup') {
      const now = Date.now();
      if (now - viewer.lastTap < 300) {
        const p = pt(e);
        if (viewer.s > 1) viewerReset();
        else viewerZoomAt(2.5, p.x, p.y);
        viewer.lastTap = 0;
      } else {
        viewer.lastTap = now;
      }
    }
  };
  stage.addEventListener('pointerup', endPtr);
  stage.addEventListener('pointercancel', endPtr);

  // roda tetikus (komputer)
  stage.addEventListener('wheel', (e) => {
    e.preventDefault();
    const p = pt(e);
    viewerZoomAt(viewer.s * (e.deltaY < 0 ? 1.15 : 1 / 1.15), p.x, p.y);
  }, { passive: false });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $('img-viewer').classList.contains('open')) closeViewer();
  });
})();

// Kamera / Galeri / PDF -> masuk ke sini. TIDAK lagi auto-scan.
// Pengguna perlu tekan butang "Imbas AI" secara manual.
function handleFile(file) {
  if (!file) return;
  if (file.size > 10 * 1024 * 1024) {
    toast(t('file_too_big'));
    return;
  }
  if (!$('sheet').classList.contains('open')) openSheet(null, file);
  else setPendingFile(file);
  toast(t('scan_hint'));
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result.split(',')[1]);
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
}

// Kecilkan gambar (maks 1280px) supaya laju & jimat kuota
async function prepareForAI(file) {
  if (isPdfFile(file)) {
    return { mimeType: 'application/pdf', image: await blobToBase64(file) };
  }
    const bmp = await createImageBitmap(file);
  const scale = Math.min(1, 1280 / Math.max(bmp.width, bmp.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bmp.width * scale);
  canvas.height = Math.round(bmp.height * scale);
  canvas.getContext('2d').drawImage(bmp, 0, 0, canvas.width, canvas.height);
  const blob = await new Promise((r) => canvas.toBlob(r, 'image/jpeg', 0.75));
  return { mimeType: 'image/jpeg', image: await blobToBase64(blob) };
}

// Panggil Supabase Edge Function 'scan-receipt' (Gemini) sekali sahaja
async function invokeScan(payload) {
  const { data, error } = await supabaseClient.functions.invoke('scan-receipt', {
    body: { ...payload, categories: allCats().map((c) => c.name) },
  });
  if (error) {
    let msg = error.message;
    const status = error.context?.status;
    try {
      const body = await error.context.json(); // mesej sebenar daripada Edge Function
      msg = body.error || msg;
    } catch {}
    const err = new Error(msg);
    err.status = status;
    err.network = error.name === 'FunctionsFetchError' || error.name === 'FunctionsRelayError';
    throw err;
  }
  return data;
}

const isRetryable = (e) =>
  [429, 500, 502, 503, 504].includes(e.status) ||
  e.network ||
  /503|overload|unavailable|high demand|busy|timeout/i.test(e.message || '');

// Cuba semula automatik jika 503 / pelayan sibuk (backoff 1.5s, 3s)
async function invokeScanWithRetry(payload, token, maxTries = 2) {
  let lastErr;
  for (let i = 1; i <= maxTries; i++) {
    try {
      return await invokeScan(payload);
    } catch (e) {
      lastErr = e;
      if (token !== scanToken) throw e;
      if (!isRetryable(e) || i === maxTries) break;
      $('scan-modal-sub').textContent = t('scan_retry', { n: i + 1, max: maxTries });
      await new Promise((r) => setTimeout(r, 1500 * i));
      if (token !== scanToken) throw e;
    }
  }
  throw lastErr;
}

// ---------- Pop up animasi imbasan ----------
function openScanModal() {
  const img = $('image-preview').querySelector('img');
  const inner = img
    ? `<img src="${esc(img.src)}" alt="" />`
    : `<div class="scan-paper"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>`;
  $('scan-frame').innerHTML =
    inner +
    `<div class="scan-line"></div><span class="sc tl"></span><span class="sc tr"></span><span class="sc bl"></span><span class="sc br"></span>` +
    `<div class="scan-check">${ico('check', 'ic-xl')}</div>`;
  $('scan-modal-title').textContent = t('scanning_title');
  $('scan-modal-sub').textContent = t('scanning_sub');
  $('scan-cancel').style.display = '';
  $('scan-modal').classList.remove('done');
  $('scan-modal').classList.add('open');
}

function closeScanModal() {
  $('scan-modal').classList.remove('open', 'done');
}

function cancelScan() {
  scanToken++;
  closeScanModal();
}

// Dapatkan fail untuk diimbas: fail baharu, atau gambar sedia ada (mod edit)
async function getScanSource() {
  if (pendingFile) return pendingFile;
  const r = editingId ? receipts.find((x) => x.id === editingId) : null;
  if (r?.image_url && !removeImageFlag) {
    const res = await fetch(r.image_url);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const blob = await res.blob();
    return new File([blob], 'receipt', { type: blob.type || 'image/jpeg' });
  }
  return null;
}

const isPdfFile = (f) => f.type === 'application/pdf' || /\.pdf$/i.test(f.name || '');

// Isi borang daripada hasil imbasan. Pulang bilangan medan yang berjaya diisi.
function applyScanResult(r) {
  let n = 0;
  if (r.merchant_name) { $('f-merchant').value = r.merchant_name; n++; }
  const amt = parseFloat(r.total_amount);
  if (!isNaN(amt)) { $('f-amount').value = amt; n++; }
  if (r.receipt_date) { $('f-date').value = r.receipt_date; n++; }
  if (r.category && allCats().some((c) => c.name === r.category)) { $('f-category').value = r.category; n++; }
  if (r.payment_method && allPays().includes(r.payment_method)) { $('f-payment').value = r.payment_method; n++; }
  return n;
}

// Papar keadaan siap pada pop up, kemudian tutup
function finishScan(token, doneToast) {
  $('scan-modal').classList.add('done');
  $('scan-modal-title').textContent = t('scan_done');
  $('scan-modal-sub').textContent = '';
  $('scan-cancel').style.display = 'none';
  setTimeout(() => {
    if (token !== scanToken) return;
    closeScanModal();
    toast(doneToast);
  }, 900);
}

// Butang "Imbas AI"
async function runScan() {
  if ($('scan-modal').classList.contains('open')) return;
  if (!currentUser) return toast(t('no_session'));
  if (!$('sheet').classList.contains('open')) return;

  const token = ++scanToken;
  openScanModal();

  try {
    const file = await getScanSource();
    if (token !== scanToken) return;
    if (!file) {
      closeScanModal();
      return toast(t('scan_need_image'));
    }
    if (file.size > 10 * 1024 * 1024) {
      closeScanModal();
      return toast(t('file_too_big'));
    }

    const payload = await prepareForAI(file);
    const ai = await invokeScanWithRetry(payload, token);
    if (token !== scanToken) return;
    if (!ai) throw new Error('Tiada data');

    applyScanResult(ai);
    finishScan(token, t('ai_done'));
  } catch (e) {
    if (token !== scanToken) return;
    console.warn('AI gagal baca resit:', e);
    closeScanModal();
    toast(isRetryable(e) && e.status !== 429 && !e.network ? t('ai_busy') : t('ai_failed', { msg: e.message }));
  }
}

// ==========================================
// IMBAS ASAS (tanpa AI): OCR untuk gambar, pdf.js untuk PDF
// ==========================================
const TESS_SRC = 'https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js';
const PDFJS_VER = '3.11.174';
const PDFJS_SRC = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VER}/pdf.min.js`;
const PDFJS_WORKER = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VER}/pdf.worker.min.js`;

// Muat pustaka hanya bila perlu
const libPromises = {};
function loadScript(src) {
  if (!libPromises[src]) {
    libPromises[src] = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = () => {
        delete libPromises[src];
        reject(new Error(t('basic_lib_missing')));
      };
      document.head.appendChild(s);
    });
  }
  return libPromises[src];
}

let ocrWorkerPromise = null;
let ocrProgress = null;
function getOcrWorker() {
  if (!ocrWorkerPromise) {
    ocrWorkerPromise = (async () => {
      await loadScript(TESS_SRC);
      return Tesseract.createWorker('eng', 1, {
        logger: (m) => {
          if (m.status === 'recognizing text' && ocrProgress) ocrProgress(Math.round(m.progress * 100));
        },
      });
    })().catch((e) => {
      ocrWorkerPromise = null;
      throw e;
    });
  }
  return ocrWorkerPromise;
}

async function ocrCanvas(canvas) {
  const worker = await getOcrWorker();
  const { data } = await worker.recognize(canvas);
  return data.text || '';
}

// Kelabu + tambah kontras supaya OCR lebih tepat pada resit kertas terma
function enhanceForOcr(canvas) {
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const g = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
    const v = Math.max(0, Math.min(255, (g - 128) * 1.35 + 128));
    d[i] = d[i + 1] = d[i + 2] = v;
  }
  ctx.putImageData(img, 0, 0);
}

async function imageToOcrCanvas(file) {
  const bmp = await createImageBitmap(file);
  const scale = Math.min(2, 1800 / Math.max(bmp.width, bmp.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bmp.width * scale);
  canvas.height = Math.round(bmp.height * scale);
  canvas.getContext('2d').drawImage(bmp, 0, 0, canvas.width, canvas.height);
  enhanceForOcr(canvas);
  return canvas;
}

// PDF digital: baca teks terus (tepat). PDF imbasan (tiada teks): OCR halaman pertama.
async function pdfToText(file) {
  await loadScript(PDFJS_SRC);
  pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
  const pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
  const pages = Math.min(pdf.numPages, 3);
  let text = '';

  for (let p = 1; p <= pages; p++) {
    const page = await pdf.getPage(p);
    const content = await page.getTextContent();
    const rows = {};
    content.items.forEach((it) => {
      if (!it.str.trim()) return;
      const y = Math.round(it.transform[5] / 3); // kumpulkan teks sebaris
      (rows[y] ||= []).push({ x: it.transform[4], s: it.str });
    });
    Object.keys(rows)
      .map(Number)
      .sort((a, b) => b - a)
      .forEach((y) => {
        text += rows[y].sort((a, b) => a.x - b.x).map((r) => r.s).join(' ') + '\n';
      });
  }

  if (text.replace(/\s/g, '').length < 20) {
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 2 });
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(viewport.width);
    canvas.height = Math.round(viewport.height);
    await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
    enhanceForOcr(canvas);
    return await ocrCanvas(canvas);
  }
  return text;
}

// ---------- Tafsir teks resit ----------
const pad2 = (n) => String(n).padStart(2, '0');
const MONTHS = { jan: 1, feb: 2, mar: 3, mac: 3, apr: 4, may: 5, mei: 5, jun: 6, jul: 7, aug: 8, ogo: 8, sep: 9, oct: 10, okt: 10, nov: 11, dec: 12, dis: 12 };

function ymdStr(y, m, d) {
  if (y < 100) y += 2000;
  if (y < 2000 || y > 2100 || m < 1 || m > 12 || d < 1 || d > 31) return null;
  return `${y}-${pad2(m)}-${pad2(d)}`;
}

function findDate(text) {
  let m, r;
  const iso = /\b(\d{4})[\/\-.](\d{1,2})[\/\-.](\d{1,2})\b/g;
  while ((m = iso.exec(text))) if ((r = ymdStr(+m[1], +m[2], +m[3]))) return r;
  const num = /\b(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{4}|\d{2})\b/g; // Malaysia: hari/bulan/tahun
  while ((m = num.exec(text))) if ((r = ymdStr(+m[3], +m[2], +m[1]))) return r;
  const txt = /\b(\d{1,2})[\s\-]+([A-Za-z]{3,9})\.?[\s\-,]+(\d{4})\b/g;
  while ((m = txt.exec(text))) {
    const mon = MONTHS[m[2].slice(0, 3).toLowerCase()];
    if (mon && (r = ymdStr(+m[3], mon, +m[1]))) return r;
  }
  return null;
}

const MONEY_RX = /(\d{1,3}(?:,\d{3})+|\d+)\.(\d{2})\b/g;
const amountsIn = (line) =>
  [...line.matchAll(MONEY_RX)].map((m) => parseFloat(m[1].replace(/,/g, '') + '.' + m[2]));
const BAD_LINE = /sub\s*-?\s*total|change|baki|tunai|cash|tender|rounding|pembundaran|diskaun|discount|tax|cukai|sst|gst|service/i;

function findTotal(lines) {
  const tiers = [
    /grand\s*total|jumlah\s*besar|jumlah\s*bayaran|amount\s*due|total\s*due|net\s*total|total\s*amount|total\s*payable|amount\s*paid/i,
    /\btotal\b|\bjumlah\b|\bamaun\b|\bamount\b|\bjml\b/i,
  ];
  for (const rx of tiers) {
    for (let i = lines.length - 1; i >= 0; i--) {
      if (!rx.test(lines[i]) || BAD_LINE.test(lines[i])) continue;
      let a = amountsIn(lines[i]);
      if (!a.length && lines[i + 1]) a = amountsIn(lines[i + 1]); // label & nilai berlainan baris
      if (a.length) return a[a.length - 1];
    }
  }
  // Sandaran: nilai terbesar (bukan baris tunai/baki)
  const all = lines.filter((l) => !BAD_LINE.test(l)).flatMap(amountsIn);
  return all.length ? Math.max(...all) : null;
}

function findMerchant(lines) {
  const skip = /^(tax\s*invoice|invoice|receipt|resit|e-?invoice|cash\s*(sale|bill)|duplicate|copy|salinan|welcome|selamat datang|your .*transaction|thank)/i;
  const meta = /^(no|tel|phone|gst|sst|reg|tarikh|date)\b/i;
  for (const l of lines.slice(0, 8)) {
    const letters = (l.match(/[A-Za-z]/g) || []).length;
    if (letters < 3 || letters / l.length < 0.5 || skip.test(l) || meta.test(l)) continue;
    return l.replace(/\s{2,}/g, ' ').slice(0, 80);
  }
  return null;
}

function findPayment(text) {
  const low = text.toLowerCase();
  const custom = customPays.find((p) => low.includes(p.name.toLowerCase()));
  if (custom) return custom.name;
  if (/touch\s*'?n\s*go|\btng\b|grabpay|boost|shopeepay|e-?wallet|bigpay/.test(low)) return 'ewallet';
  if (/visa|master\s*card|mastercard|credit/.test(low)) return 'credit';
  if (/debit/.test(low)) return 'debit';
  if (/duitnow|fpx|qr\s*pay|transfer/.test(low)) return 'transfer';
  if (/\bcash\b|tunai/.test(low)) return 'cash';
  return null;
}

const CAT_HINTS = [
  ['Transportation', /petronas|shell|petron|caltex|bhp|setel|touch\s*'?n\s*go|\btol\b|parking|parkir|\bgrab\b|\blrt\b|\bmrt\b|\bktm\b|fuel|minyak/i],
  ['F&B', /restoran|restaurant|cafe|kafe|kopitiam|mamak|nasi|mcd|mcdonald|kfc|starbucks|pizza|bakery|bubble|coffee|makan/i],
  ['Utility', /tenaga|\btnb\b|syabas|air selangor|indah water|unifi|maxis|celcom|\bdigi\b|u mobile|telekom|astro/i],
  ['Accommodation', /hotel|resort|\binn\b|homestay|airbnb|motel/i],
  ['Medical', /klinik|clinic|pharmacy|farmasi|guardian|watsons?|hospital|dental|pergigian/i],
  ['Shopping', /mydin|aeon|giant|tesco|lotus|99\s*speedmart|ikea|uniqlo|mr\.?\s*diy|econsave|jaya grocer|7-?eleven|kk\s*mart|shopee|lazada/i],
];

function parseReceiptText(text) {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const cat = CAT_HINTS.find(([, rx]) => rx.test(text))?.[0] || null;
  return {
    merchant_name: findMerchant(lines),
    total_amount: findTotal(lines),
    receipt_date: findDate(text),
    category: cat,
    payment_method: findPayment(text),
  };
}

// Butang "Imbas Asas"
async function runBasicScan() {
  if ($('scan-modal').classList.contains('open')) return;
  if (!$('sheet').classList.contains('open')) return;

  const token = ++scanToken;
  openScanModal();
  $('scan-modal-title').textContent = t('scanning_basic_title');
  $('scan-modal-sub').textContent = t('basic_loading');
  ocrProgress = (p) => {
    if (token === scanToken) $('scan-modal-sub').textContent = t('basic_reading', { p });
  };

  try {
    const file = await getScanSource();
    if (token !== scanToken) return;
    if (!file) {
      closeScanModal();
      return toast(t('scan_need_image'));
    }
    if (file.size > 10 * 1024 * 1024) {
      closeScanModal();
      return toast(t('file_too_big'));
    }

    let text;
    if (isPdfFile(file)) {
      $('scan-modal-sub').textContent = t('basic_pdf');
      text = await pdfToText(file);
    } else {
      text = await ocrCanvas(await imageToOcrCanvas(file));
    }
    if (token !== scanToken) return;

    const n = applyScanResult(parseReceiptText(text));
    if (!n) {
      closeScanModal();
      return toast(t('basic_none'));
    }
    finishScan(token, t('basic_done'));
  } catch (e) {
    if (token !== scanToken) return;
    console.warn('Imbasan asas gagal:', e);
    closeScanModal();
    toast(t('basic_failed', { msg: e.message }));
  } finally {
    ocrProgress = null;
  }
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
      const contentType =
        pendingFile.type || (ext === 'pdf' ? 'application/pdf' : 'image/jpeg');
      // Baca fail ke memori dahulu (elak ralat Chrome Android pada fail PDF dari aplikasi lain)
      const body = new Blob([await pendingFile.arrayBuffer()], { type: contentType });
      const { error: upErr } = await supabaseClient.storage
        .from(BUCKET)
        .upload(path, body, { contentType });
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
      payment_method: $('f-payment').value || null,
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
            <p><span>${formatDate(r.receipt_date)}${r.payment_method ? ' · ' + esc(payLabel(r.payment_method)) : ''}</span>${r.image_url ? ico('paperclip', 'ic-sm') : ''}</p>
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
    const i = [...DEFAULT_CATS, ...customCats].findIndex((c) => c.name === name);
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
  $('cat-settings-list').innerHTML = allCats()
    .map((c) => {
      const ci = customCats.indexOf(c);
      const right =
        ci < 0
          ? `<span class="muted">${esc(t('default_tag'))}</span>`
          : `<button class="del" onclick="deleteCategory(${ci})" aria-label="${esc(t('delete_cat_aria'))}">${ico('trash', 'ic-sm')}</button>`;
      return `
      <div class="setting-row sort-row" data-key="${esc(c.name)}">
        <span class="lead"><span class="drag-handle" style="touch-action:none" aria-label="${esc(t('drag_hint'))}">${ico('grip', 'ic-sm')}</span>${ico(catIcon(c.name))}${esc(catLabel(c.name))}</span>
        ${right}
      </div>`;
    })
    .join('');
}

function renderIconPicker() {
  const make = (selected) =>
    CAT_ICONS.map(
      (n) => `<button type="button" class="icon-opt${n === selected ? ' active' : ''}" data-icon="${n}" aria-label="${esc(t('icon_aria', { n }))}" aria-pressed="${n === selected}">${ico(n)}</button>`
    ).join('');
  $('new-cat-picker').innerHTML = make(newCatIcon);
  $('new-pay-picker').innerHTML = make(newPayIcon);
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

function renderPaymentSettings() {
  $('pay-settings-list').innerHTML = allPays()
    .map((k) => {
      const ci = customPays.findIndex((p) => p.name === k);
      const right =
        ci < 0
          ? `<span class="muted">${esc(t('default_tag'))}</span>`
          : `<button class="del" onclick="deletePayment(${ci})" aria-label="${esc(t('delete_pay_aria'))}">${ico('trash', 'ic-sm')}</button>`;
      return `
      <div class="setting-row sort-row" data-key="${esc(k)}">
        <span class="lead"><span class="drag-handle" style="touch-action:none" aria-label="${esc(t('drag_hint'))}">${ico('grip', 'ic-sm')}</span>${ico(payIcon(k))}${esc(payLabel(k))}</span>
        ${right}
      </div>`;
    })
    .join('');
}

function addPayment() {
  const name = $('new-pay-name').value.trim();
  if (!name) return toast(t('need_pay_name'));
  const lower = name.toLowerCase();
  const exists =
    PAYMENT_METHODS.some((k) => k === lower || payLabel(k).toLowerCase() === lower) ||
    customPays.some((p) => p.name.toLowerCase() === lower);
  if (exists) return toast(t('pay_exists'));
  customPays.push({ name, icon: newPayIcon });
  localStorage.setItem('customPays', JSON.stringify(customPays));
  $('new-pay-name').value = '';
  newPayIcon = 'tag';
  renderIconPicker();
  fillPaymentSelect($('f-payment').value);
  renderPaymentSettings();
  toast(t('pay_added'));
}

function deletePayment(index) {
  const item = customPays[index];
  if (!item) return;
  const name = item.name;
  const used = receipts.filter((r) => r.payment_method === name).length;
  const msg = used
    ? t('confirm_del_pay_used', { name, used })
    : t('confirm_del_pay', { name });
  if (!confirm(msg)) return;
  customPays.splice(index, 1);
  localStorage.setItem('customPays', JSON.stringify(customPays));
  fillPaymentSelect($('f-payment').value);
  renderPaymentSettings();
  renderHistory();
}

function exportCSV() {
  if (!receipts.length) return toast(t('no_export'));
  const cell = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const header = [
    t('csv_date'), t('csv_store'), t('csv_type'), t('csv_category'), t('csv_payment'),
    t('csv_amount'), t('csv_notes'), t('csv_image'),
  ];
  const rows = receipts.map((r) =>
    [r.receipt_date, r.merchant_name, r.type || 'expense', r.category, payLabel(r.payment_method), r.total_amount, r.notes, r.image_url]
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
$('image-preview').addEventListener('click', (e) => {
  if (e.target.closest('img')) openViewer();
});
$('new-cat-picker').addEventListener('click', (e) => {
  const btn = e.target.closest('.icon-opt');
  if (!btn) return;
  newCatIcon = btn.dataset.icon;
  renderIconPicker();
});

$('new-pay-picker').addEventListener('click', (e) => {
  const btn = e.target.closest('.icon-opt');
  if (!btn) return;
  newPayIcon = btn.dataset.icon;
  renderIconPicker();
});

// Seret untuk susun: pegang ikon ⋮⋮ di kiri baris, kemudian gerak ke atas / bawah
function makeSortable(container, onReorder) {
  if (!container) return;

  container.addEventListener('contextmenu', (e) => {
    if (e.target.closest('.drag-handle')) e.preventDefault();
  });

  // Halang tatal halaman bila jari mula pada pemegang
  container.addEventListener(
    'touchstart',
    (e) => {
      if (e.target.closest('.drag-handle')) e.preventDefault();
    },
    { passive: false }
  );

  container.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const handle = e.target.closest('.drag-handle');
    if (!handle) return;
    const row = handle.closest('[data-key]');
    if (!row) return;

    const rows = [...container.querySelectorAll(':scope > [data-key]')];
    const from = rows.indexOf(row);
    if (from < 0) return;

    e.preventDefault();
    const pid = e.pointerId;
    const rects = rows.map((r) => r.getBoundingClientRect());
    const h = rects[from].height;
    const startY = e.clientY;
    let to = from;
    row.classList.add('dragging');

    const stopScroll = (ev) => ev.preventDefault();

    const onMove = (ev) => {
      if (ev.pointerId !== pid) return;
      const minDy = rects[0].top - rects[from].top;
      const maxDy = rects[rects.length - 1].top - rects[from].top;
      const dy = Math.min(maxDy, Math.max(minDy, ev.clientY - startY));
      row.style.transform = `translateY(${dy}px)`;

      const center = rects[from].top + dy + h / 2;
      to = rects.reduce((n, r, i) => n + (i !== from && r.top + r.height / 2 < center ? 1 : 0), 0);

      rows.forEach((r, i) => {
        if (i === from) return;
        let shift = 0;
        if (from < to && i > from && i <= to) shift = -h;
        else if (from > to && i >= to && i < from) shift = h;
        r.style.transform = shift ? `translateY(${shift}px)` : '';
      });
    };

    const onEnd = (ev) => {
      if (ev.pointerId !== pid) return;
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerup', onEnd);
      document.removeEventListener('pointercancel', onEnd);
      document.removeEventListener('touchmove', stopScroll);
      rows.forEach((r) => {
        r.style.transform = '';
        r.classList.remove('dragging');
      });
      if (ev.type === 'pointerup' && to !== from) {
        const keys = rows.map((r) => r.dataset.key);
        keys.splice(to, 0, keys.splice(from, 1)[0]);
        onReorder(keys);
      }
    };

    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', onEnd);
    document.addEventListener('pointercancel', onEnd);
    document.addEventListener('touchmove', stopScroll, { passive: false });
  });
}

makeSortable($('cat-settings-list'), (keys) => {
  catOrder = keys;
  localStorage.setItem('catOrder', JSON.stringify(keys));
  fillCategorySelects($('f-category').value);
  renderCategorySettings();
});

makeSortable($('pay-settings-list'), (keys) => {
  payOrder = keys;
  localStorage.setItem('payOrder', JSON.stringify(keys));
  fillPaymentSelect($('f-payment').value);
  renderPaymentSettings();
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

// Daftar service worker (untuk PWA / pasang app)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js')
      .catch((e) => console.warn('Service worker gagal:', e));
  });
}