// ==========================================
// 0. BAHASA (BM / EN)
// ==========================================
const I18N = {
  ms: {
    title_history: 'Sejarah', search_ph: 'Cari kedai atau nota', filter_all: 'Semua', receipts_count: '{n} resit',
    empty_none: 'Belum ada resit. Tekan Tambah atau butang kamera untuk bermula.', empty_nomatch: 'Tiada padanan.',
    empty_cta: 'Tambah resit pertama', login_cta: 'Log masuk',
    title_dashboard: 'Ringkasan', dash_sub: 'Kosongkan tarikh untuk lihat semua data', date_from: 'Dari', date_to: 'Hingga',
    chart_title: 'Graf', chart_type: 'Jenis graf', ct_pie: 'Carta pai', ct_bar: 'Bar menegak', ct_hbar: 'Bar mendatar', ct_stacked: 'Bar bertindan',
    compare: 'Bandingkan dengan julat tarikh lain (B)', chart_hint: 'Julat A guna tarikh Dari/Hingga di atas. Graf menunjukkan perbelanjaan.',
    all_dates: 'Semua tarikh', chart_total: 'Jumlah', chart_unavailable: 'Pustaka graf belum dimuat. Sambung ke internet dan muat semula.',
    net_balance: 'Baki bersih', income: 'Pendapatan', expense: 'Perbelanjaan',
    by_category: 'Perbelanjaan mengikut kategori', by_payment: 'Perbelanjaan mengikut cara pembayaran', no_expense: 'Tiada perbelanjaan untuk tempoh ini.',
    add_receipt: 'Tambah resit', scan_info_sub: 'Ambil gambar, pilih dari galeri, atau taip manual. Tekan Imbas AI untuk baca resit.',
    scan_title: 'Ambil gambar resit', scan_sub: 'Gambar akan dibuka dalam borang, kemudian tekan Imbas AI',
    manual: 'Manual', gallery: 'Galeri', title_settings: 'Tetapan', settings_sub: 'Tetapan aplikasi', sec_general: 'Umum',
    theme: 'Tema', theme_light: 'Cerah', theme_dark: 'Gelap', theme_auto: 'Auto (ikut peranti)', theme_night: 'Jadual (malam 7 mlm - 7 pagi)',
    language: 'Bahasa', currency: 'Mata wang', sec_category: 'Kategori', new_cat_ph: 'Nama kategori baharu', add: 'Tambah',
    sec_account: 'Akaun', sec_data: 'Data', export_csv: 'Eksport CSV', download: 'Muat turun', delete_all: 'Padam semua data', delete: 'Padam',
    user_id: 'ID pengguna: {id}', default_tag: 'Lalai', delete_cat_aria: 'Padam kategori', cancel: 'Batal', edit_aria: 'Edit',
    cat_updated: 'Kategori dikemas kini.', pay_updated: 'Cara pembayaran dikemas kini.', icon_aria: 'Ikon {n}',
    sheet_add: 'Tambah resit', sheet_edit: 'Edit resit', close: 'Tutup', merchant_label: 'Kedai / butiran', merchant_ph: 'cth: Restoran Nasi Kandar',
    amount_label: 'Jumlah', date_label: 'Tarikh', category_label: 'Kategori', payment_label: 'Cara pembayaran',
    pay_none: 'Tidak dinyatakan', pay_cash: 'Tunai', pay_debit: 'Kad debit', pay_credit: 'Kad kredit', pay_transfer: 'Pindahan bank / DuitNow',
    pay_ewallet: 'E-dompet (TNG, GrabPay)', pay_other: 'Lain-lain', csv_payment: 'Cara Bayar',
    sec_payment: 'Cara pembayaran', new_pay_ph: 'Cara pembayaran baharu', need_pay_name: 'Sila isi nama cara pembayaran.',
    pay_exists: 'Cara pembayaran itu sudah wujud.', pay_added: 'Cara pembayaran ditambah.', delete_pay_aria: 'Padam cara pembayaran',
    confirm_del_pay_used: 'Cara pembayaran "{name}" digunakan oleh {used} resit (resit tidak akan dipadam). Teruskan?',
    confirm_del_pay: 'Padam cara pembayaran "{name}"?',
    notes_label: 'Nota (pilihan)', camera: 'Kamera', remove: 'Buang', save: 'Simpan', saving: 'Menyimpan...', delete_receipt: 'Padam resit ini',
    no_attachment: 'Tiada lampiran. Tambah gambar resit (pilihan).', open_pdf: 'Buka PDF', receipt_alt: 'Resit', file_too_big: 'Fail terlalu besar (maks 10MB).',
    scan_ai_btn: 'Imbas AI', scan_hint: 'Gambar ditambah. Tekan "Imbas AI" untuk baca resit.', scan_need_image: 'Sila tambah gambar resit dahulu.',
    scanning_title: 'Mengimbas resit...', scanning_sub: 'AI sedang membaca butiran resit', scan_retry: 'Pelayan sibuk. Mencuba lagi ({n}/{max})...',
    scan_done: 'Siap!', scan_cancel: 'Batal', preview_btn: 'Pratonton', zoom_in: 'Zum masuk', zoom_out: 'Zum keluar', zoom_reset: 'Set semula',
    drag_hint: 'Seret untuk susun', scan_basic_btn: 'Imbas Asas', scanning_basic_title: 'Mengimbas (asas)...',
    basic_loading: 'Memuatkan enjin imbasan (kali pertama agak lama)...', basic_reading: 'Membaca teks... {p}%', basic_pdf: 'Membaca teks PDF...',
    basic_done: 'Siap (asas). Sila semak betul-betul, mungkin tidak tepat.', basic_none: 'Tiada maklumat dapat dikesan. Cuba gambar yang lebih jelas atau isi manual.',
    basic_failed: 'Imbasan asas gagal: {msg}', basic_lib_missing: 'Pustaka imbasan tidak dapat dimuat. Sambung ke internet dan cuba lagi.',
    ai_busy: 'Pelayan AI sedang sibuk (503). Cuba Imbas AI sekali lagi, atau guna Imbas Asas.', ai_done: 'Siap. Sila semak butiran sebelum simpan.',
    ai_failed: 'AI gagal: {msg}', rate_wait: 'Sila tunggu beberapa saat sebelum imbas semula.',
    arith_warn: 'Jumlah item + cukai ({sum}) tidak sepadan dengan jumlah ({total}). Sila semak.', low_conf: 'Medan berwarna kuning kurang pasti. Sila semak.',
    need_merchant: 'Sila isi nama kedai / butiran.', need_amount: 'Sila isi jumlah yang sah.', need_date: 'Sila pilih tarikh.',
    saved: 'Resit disimpan.', updated: 'Resit dikemas kini.', save_failed: 'Gagal simpan: {msg}', upload_failed: 'Muat naik gambar gagal: {msg}',
    save_data_failed: 'Simpan data gagal: {msg}', confirm_delete_receipt: 'Padam resit ini? Tindakan ini tidak boleh dibatalkan.',
    deleted: 'Resit dipadam.', delete_failed: 'Gagal padam: {msg}', undo: 'Batal', confirm_ok: 'Teruskan',
    need_cat_name: 'Sila isi nama kategori.', cat_exists: 'Kategori itu sudah wujud.', cat_added: 'Kategori ditambah.',
    confirm_del_cat_used: 'Kategori "{name}" digunakan oleh {used} resit (resit tidak akan dipadam). Teruskan?', confirm_del_cat: 'Padam kategori "{name}"?',
    no_export: 'Tiada data untuk dieksport.', no_delete: 'Tiada data untuk dipadam.', confirm_delete_all: 'Padam SEMUA {n} resit dan gambar? Tidak boleh dibatalkan.',
    confirm_sure: 'Anda pasti? Sila sahkan sekali lagi.', all_deleted: 'Semua data dipadam.', db_error: 'Ralat sambungan pangkalan data: {msg}',
    fetch_failed: 'Gagal tarik data: {msg}', offline_cache: 'Tiada sambungan. Memaparkan data tersimpan.',
    csv_date: 'Tarikh', csv_store: 'Kedai', csv_type: 'Jenis', csv_category: 'Kategori', csv_amount: 'Jumlah', csv_notes: 'Nota', csv_image: 'Pautan Gambar',
    acc_status: 'Status', acc_guest: 'Belum log masuk (tiada data disimpan)', email_ph: 'E-mel anda', link_btn: 'Hantar pautan log masuk',
    no_pwd_note: 'Tiada kata laluan diperlukan. Akaun baharu dicipta automatik jika e-mel belum berdaftar.',
    need_login: 'Sila log masuk dengan e-mel dahulu untuk menyimpan resit.', empty_login: 'Sila log masuk dengan e-mel di Tetapan untuk melihat dan menyimpan resit.',
    signed_in_as: 'Log masuk sebagai', logout: 'Log keluar', invalid_email: 'Sila isi e-mel yang sah.', failed: 'Gagal: {msg}',
    login_sent: 'Pautan log masuk dihantar. Semak e-mel anda.', confirm_logout: 'Log keluar? Anda boleh log masuk semula dengan e-mel yang sama.', login_ok: 'Log masuk berjaya.',
    // ---- baharu ----
    filter_btn: 'Tapis', select_btn: 'Pilih', f_all_types: 'Semua jenis', min_ph: 'Jumlah min', max_ph: 'Jumlah maks',
    sort_date_desc: 'Tarikh terbaru', sort_date_asc: 'Tarikh terlama', sort_amt_desc: 'Jumlah tertinggi', sort_amt_asc: 'Jumlah terendah', sort_name: 'Nama A-Z',
    sel_count: '{n} dipilih', bulk_cat_ph: 'Tukar kategori...', bulk_apply: 'Guna', bulk_done: '{n} resit dikemas kini.', bulk_deleted: '{n} resit dipadam.',
    confirm_bulk_delete: 'Padam {n} resit terpilih? Tidak boleh dibatalkan.', load_more: 'Papar lagi ({n})',
    preset_month: 'Bulan ini', preset_last: 'Bulan lepas', preset_30: '30 hari', preset_year: 'Tahun ini', preset_all: 'Semua',
    report_btn: 'Laporan PDF', report_title: 'Laporan Perbelanjaan', popup_blocked: 'Pelayar menyekat tetingkap. Benarkan pop-up dan cuba lagi.',
    sec_budget: 'Bajet bulan ini', budget_ph: 'Bajet bulanan (RM, pilihan)', budget_of: '{spent} daripada {limit}',
    budget_warn80: 'Amaran: "{name}" sudah guna {p}% bajet bulan ini.', budget_over: 'Bajet "{name}" telah melebihi had ({p}%)!',
    budget_none: 'Tiada bajet ditetapkan. Isi bajet semasa tambah atau edit kategori di Tetapan.', budget_tag: 'Bajet {v}',
    sec_insight: 'Insight bulan ini', avg_daily: 'Purata harian', projection: 'Unjuran bulan ini', sec_compare: 'Bulan ini vs bulan lepas',
    sec_top: 'Kedai teratas', top_freq: 'Paling kerap', top_spend: 'Paling mahal', visits: '{n} kali', sec_trend: 'Trend 6 bulan', sec_heat: 'Kalendar perbelanjaan',
    sec_recurring: 'Perbelanjaan berulang', recurring_label: 'Ulang setiap bulan', recurring_empty: 'Tiada rekod berulang.',
    recurring_added: 'Resit ini akan dijana automatik setiap bulan.', recurring_made: '{n} resit berulang dijana.', confirm_del_rec: 'Berhenti jana "{name}" setiap bulan?',
    sec_legal: 'Maklumat', privacy: 'Dasar Privasi', terms: 'Terma Perkhidmatan',
    import_csv: 'Import CSV', choose_file: 'Pilih fail', import_confirm: 'Import {n} baris ke akaun anda?', import_done: '{n} resit diimport.', import_none: 'Tiada baris sah dalam fail.',
    onb1_t: 'Ambil gambar', onb1_d: 'Foto resit anda, atau pilih dari galeri / PDF.',
    onb2_t: 'Imbas AI', onb2_d: 'Tekan Imbas AI untuk isi kedai, jumlah dan tarikh secara automatik.',
    onb3_t: 'Lihat ringkasan', onb3_d: 'Pantau perbelanjaan, bajet dan trend di tab Ringkasan.',
    onb_next: 'Seterusnya', onb_start: 'Mula', onb_skip: 'Langkau', pull_hint: 'Tarik untuk muat semula', pull_release: 'Lepaskan untuk muat semula',
        // ---- approval ----
    pending_approval: 'Akaun anda menunggu kelulusan admin. Hubungi admin untuk dibenarkan.',
    not_allowed: 'Email ini belum diluluskan. Hubungi admin.',
    allowlist_check_failed: 'Gagal semak kebenaran akaun: {msg}',
        // ---- admin panel ----
    admin_title: 'Panel Admin',
    admin_sub: 'Urus siapa boleh log masuk ke app.',
    admin_loading: 'Memuatkan...',
    admin_pending: 'Menunggu kelulusan',
    admin_allowed: 'Email dibenarkan',
    admin_no_pending: 'Tiada permohonan baharu.',
    admin_approve: 'Luluskan',
    admin_reject: 'Tolak',
    admin_remove: 'Buang',
    admin_add: 'Tambah',
    admin_add_ph: 'email@contoh.com',
    admin_approved: '{email} diluluskan.',
    admin_rejected: 'Permohonan ditolak.',
    admin_removed: '{email} dibuang dari senarai.',
    admin_confirm_reject: 'Tolak permohonan dari "{email}"?',
    admin_confirm_remove: 'Buang "{email}" dari senarai dibenarkan? Mereka tidak lagi boleh log masuk melalui app.',
    admin_error: 'Ralat panel admin: {msg}',
  },
  en: {
    title_history: 'History', search_ph: 'Search store or notes', filter_all: 'All', receipts_count: '{n} receipt(s)',
    empty_none: 'No receipts yet. Tap Add or the camera button to get started.', empty_nomatch: 'No matches.',
    empty_cta: 'Add your first receipt', login_cta: 'Sign in',
    title_dashboard: 'Summary', dash_sub: 'Clear the dates to see all data', date_from: 'From', date_to: 'To',
    chart_title: 'Chart', chart_type: 'Chart type', ct_pie: 'Pie chart', ct_bar: 'Vertical bar', ct_hbar: 'Horizontal bar', ct_stacked: 'Stacked bar',
    compare: 'Compare with another date range (B)', chart_hint: 'Range A uses the From/To dates above. The chart shows expenses.',
    all_dates: 'All dates', chart_total: 'Total', chart_unavailable: 'Chart library not loaded. Go online and refresh.',
    net_balance: 'Net balance', income: 'Income', expense: 'Expense',
    by_category: 'Expenses by category', by_payment: 'Expenses by payment method', no_expense: 'No expenses for this period.',
    add_receipt: 'Add receipt', scan_info_sub: 'Take a photo, pick from gallery, or enter manually. Tap AI Scan to read the receipt.',
    scan_title: 'Take receipt photo', scan_sub: 'The photo opens in the form, then tap AI Scan',
    manual: 'Manual', gallery: 'Gallery', title_settings: 'Settings', settings_sub: 'App settings', sec_general: 'General',
    theme: 'Theme', theme_light: 'Light', theme_dark: 'Dark', theme_auto: 'Auto (follow device)', theme_night: 'Schedule (dark 7 pm - 7 am)',
    language: 'Language', currency: 'Currency', sec_category: 'Categories', new_cat_ph: 'New category name', add: 'Add',
    sec_account: 'Account', sec_data: 'Data', export_csv: 'Export CSV', download: 'Download', delete_all: 'Delete all data', delete: 'Delete',
    user_id: 'User ID: {id}', default_tag: 'Default', delete_cat_aria: 'Delete category', cancel: 'Cancel', edit_aria: 'Edit',
    cat_updated: 'Category updated.', pay_updated: 'Payment method updated.', icon_aria: 'Icon {n}',
    sheet_add: 'Add receipt', sheet_edit: 'Edit receipt', close: 'Close', merchant_label: 'Store / description', merchant_ph: 'e.g. Nasi Kandar Restaurant',
    amount_label: 'Amount', date_label: 'Date', category_label: 'Category', payment_label: 'Payment method',
    pay_none: 'Not specified', pay_cash: 'Cash', pay_debit: 'Debit card', pay_credit: 'Credit card', pay_transfer: 'Bank transfer / DuitNow',
    pay_ewallet: 'E-wallet (TNG, GrabPay)', pay_other: 'Other', csv_payment: 'Payment',
    sec_payment: 'Payment methods', new_pay_ph: 'New payment method', need_pay_name: 'Please enter a payment method name.',
    pay_exists: 'That payment method already exists.', pay_added: 'Payment method added.', delete_pay_aria: 'Delete payment method',
    confirm_del_pay_used: 'Payment method "{name}" is used by {used} receipt(s) (receipts will not be deleted). Continue?',
    confirm_del_pay: 'Delete payment method "{name}"?',
    notes_label: 'Notes (optional)', camera: 'Camera', remove: 'Remove', save: 'Save', saving: 'Saving...', delete_receipt: 'Delete this receipt',
    no_attachment: 'No attachment. Add a receipt image (optional).', open_pdf: 'Open PDF', receipt_alt: 'Receipt', file_too_big: 'File is too large (max 10MB).',
    scan_ai_btn: 'AI Scan', scan_hint: 'Image added. Tap "AI Scan" to read the receipt.', scan_need_image: 'Please add a receipt image first.',
    scanning_title: 'Scanning receipt...', scanning_sub: 'AI is reading the receipt details', scan_retry: 'Server busy. Retrying ({n}/{max})...',
    scan_done: 'Done!', scan_cancel: 'Cancel', preview_btn: 'Preview', zoom_in: 'Zoom in', zoom_out: 'Zoom out', zoom_reset: 'Reset',
    drag_hint: 'Drag to reorder', scan_basic_btn: 'Basic Scan', scanning_basic_title: 'Scanning (basic)...',
    basic_loading: 'Loading scan engine (slow the first time)...', basic_reading: 'Reading text... {p}%', basic_pdf: 'Reading PDF text...',
    basic_done: 'Done (basic). Please check carefully, it may be inaccurate.', basic_none: 'Nothing could be detected. Try a clearer image or enter manually.',
    basic_failed: 'Basic scan failed: {msg}', basic_lib_missing: 'Scan library could not be loaded. Go online and try again.',
    ai_busy: 'The AI server is busy (503). Try AI Scan again, or use Basic Scan.', ai_done: 'Done. Please review the details before saving.',
    ai_failed: 'AI failed: {msg}', rate_wait: 'Please wait a few seconds before scanning again.',
    arith_warn: 'Items + tax ({sum}) do not match the total ({total}). Please check.', low_conf: 'Fields in yellow are uncertain. Please review.',
    need_merchant: 'Please enter the store / description.', need_amount: 'Please enter a valid amount.', need_date: 'Please choose a date.',
    saved: 'Receipt saved.', updated: 'Receipt updated.', save_failed: 'Failed to save: {msg}', upload_failed: 'Image upload failed: {msg}',
    save_data_failed: 'Saving data failed: {msg}', confirm_delete_receipt: 'Delete this receipt? This cannot be undone.',
    deleted: 'Receipt deleted.', delete_failed: 'Failed to delete: {msg}', undo: 'Undo', confirm_ok: 'Continue',
    need_cat_name: 'Please enter a category name.', cat_exists: 'That category already exists.', cat_added: 'Category added.',
    confirm_del_cat_used: 'Category "{name}" is used by {used} receipt(s) (receipts will not be deleted). Continue?', confirm_del_cat: 'Delete category "{name}"?',
    no_export: 'No data to export.', no_delete: 'No data to delete.', confirm_delete_all: 'Delete ALL {n} receipts and images? This cannot be undone.',
    confirm_sure: 'Are you sure? Please confirm once more.', all_deleted: 'All data deleted.', db_error: 'Database connection error: {msg}',
    fetch_failed: 'Failed to load data: {msg}', offline_cache: 'No connection. Showing saved data.',
    csv_date: 'Date', csv_store: 'Store', csv_type: 'Type', csv_category: 'Category', csv_amount: 'Amount', csv_notes: 'Notes', csv_image: 'Image Link',
    acc_status: 'Status', acc_guest: 'Not signed in (nothing is saved)', email_ph: 'Your email', link_btn: 'Send login link',
    no_pwd_note: 'No password needed. A new account is created automatically if the email is not registered.',
    need_login: 'Please sign in with email first to save receipts.', empty_login: 'Sign in with email in Settings to view and save receipts.',
    signed_in_as: 'Signed in as', logout: 'Sign out', invalid_email: 'Please enter a valid email.', failed: 'Failed: {msg}',
    login_sent: 'Login link sent. Check your email.', confirm_logout: 'Sign out? You can sign back in with the same email.', login_ok: 'Signed in successfully.',
    // ---- new ----
    filter_btn: 'Filter', select_btn: 'Select', f_all_types: 'All types', min_ph: 'Min amount', max_ph: 'Max amount',
    sort_date_desc: 'Newest first', sort_date_asc: 'Oldest first', sort_amt_desc: 'Highest amount', sort_amt_asc: 'Lowest amount', sort_name: 'Name A-Z',
    sel_count: '{n} selected', bulk_cat_ph: 'Set category...', bulk_apply: 'Apply', bulk_done: '{n} receipt(s) updated.', bulk_deleted: '{n} receipt(s) deleted.',
    confirm_bulk_delete: 'Delete {n} selected receipt(s)? This cannot be undone.', load_more: 'Show more ({n})',
    preset_month: 'This month', preset_last: 'Last month', preset_30: '30 days', preset_year: 'This year', preset_all: 'All',
    report_btn: 'PDF report', report_title: 'Expense Report', popup_blocked: 'The browser blocked the window. Allow pop-ups and try again.',
    sec_budget: 'This month\'s budget', budget_ph: 'Monthly budget (RM, optional)', budget_of: '{spent} of {limit}',
    budget_warn80: 'Warning: "{name}" has used {p}% of this month\'s budget.', budget_over: 'Budget "{name}" is over the limit ({p}%)!',
    budget_none: 'No budgets set. Enter a budget when adding or editing a category in Settings.', budget_tag: 'Budget {v}',
    sec_insight: 'This month\'s insight', avg_daily: 'Daily average', projection: 'Projected this month', sec_compare: 'This month vs last month',
    sec_top: 'Top stores', top_freq: 'Most frequent', top_spend: 'Highest spend', visits: '{n} visits', sec_trend: '6-month trend', sec_heat: 'Spending calendar',
    sec_recurring: 'Recurring expenses', recurring_label: 'Repeat every month', recurring_empty: 'No recurring entries.',
    recurring_added: 'This receipt will be generated automatically every month.', recurring_made: '{n} recurring receipt(s) generated.', confirm_del_rec: 'Stop generating "{name}" monthly?',
    sec_legal: 'Information', privacy: 'Privacy Policy', terms: 'Terms of Service',
    import_csv: 'Import CSV', choose_file: 'Choose file', import_confirm: 'Import {n} rows into your account?', import_done: '{n} receipt(s) imported.', import_none: 'No valid rows in the file.',
    onb1_t: 'Take a photo', onb1_d: 'Photograph your receipt, or pick from gallery / PDF.',
    onb2_t: 'AI Scan', onb2_d: 'Tap AI Scan to fill in store, amount and date automatically.',
    onb3_t: 'See the summary', onb3_d: 'Track spending, budgets and trends in the Summary tab.',
    onb_next: 'Next', onb_start: 'Start', onb_skip: 'Skip', pull_hint: 'Pull to refresh', pull_release: 'Release to refresh',
        // ---- approval ----
    pending_approval: 'Your account is awaiting admin approval. Contact admin to be allowed.',
    not_allowed: 'This email is not approved yet. Contact admin.',
    allowlist_check_failed: 'Failed to check account permission: {msg}',
        // ---- admin panel ----
    admin_title: 'Admin Panel',
    admin_sub: 'Manage who can sign in to the app.',
    admin_loading: 'Loading...',
    admin_pending: 'Awaiting approval',
    admin_allowed: 'Allowed emails',
    admin_no_pending: 'No new requests.',
    admin_approve: 'Approve',
    admin_reject: 'Reject',
    admin_remove: 'Remove',
    admin_add: 'Add',
    admin_add_ph: 'email@example.com',
    admin_approved: '{email} approved.',
    admin_rejected: 'Request rejected.',
    admin_removed: '{email} removed from allowlist.',
    admin_confirm_reject: 'Reject request from "{email}"?',
    admin_confirm_remove: 'Remove "{email}" from allowlist? They will no longer be able to sign in via the app.',
    admin_error: 'Admin panel error: {msg}',
  },
};

// Nama kategori lalai disimpan dalam DB dalam bentuk asal; hanya paparan diterjemah
const CAT_LABELS = {
  'Gaji': { en: 'Salary' }, 'Pendapatan Lain': { en: 'Other Income' }, 'Penjagaan Ibu Bapa': { en: 'Parents Care' },
  'Makanan & Minuman': { en: 'Food & Drinks' }, 'Rumah Tangga': { en: 'Household' }, 'Pengangkutan': { en: 'Transportation' },
  'Kenderaan & Servis': { en: 'Vehicle & Service' }, 'Utiliti & Internet': { en: 'Utilities & Internet' }, 'Gaya Hidup': { en: 'Lifestyle' },
  'Perubatan & Kesihatan': { en: 'Medical & Health' }, 'Anak & Tanggungan': { en: 'Children & Dependents' }, 'Sukan Tambahan': { en: 'Sports & Extras' },
  'Insuran & Persaraan': { en: 'Insurance & Retirement' }, 'Pinjaman Rumah': { en: 'Home Loan' }, 'SSPN & Simpanan': { en: 'SSPN & Savings' },
  'Pelancongan': { en: 'Travel' }, 'Pendidikan & Kemahiran': { en: 'Education & Skills' },
};

let currentLang = localStorage.getItem('lang') === 'en' ? 'en' : 'ms';
const t = (key, params = {}) =>
  (I18N[currentLang][key] ?? I18N.ms[key] ?? key).replace(/\{(\w+)\}/g, (_, k) => params[k] ?? '');

// ==========================================
// 1. SUPABASE, PEMBANTU & STATE
// ==========================================
const SUPABASE_URL = 'https://pbxyagcrbojmxtshdute.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_jfS8HxzHPYs1_S3UVCMqqw_7wuR9_uo';
const BUCKET = 'receipt-images';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const $ = (id) => document.getElementById(id);
const pad2 = (n) => String(n).padStart(2, '0');
const ymd = (x) => `${x.getFullYear()}-${pad2(x.getMonth() + 1)}-${pad2(x.getDate())}`;
const monthKey = (d = new Date()) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}`;
const debounce = (fn, ms) => { let h; return (...a) => { clearTimeout(h); h = setTimeout(() => fn(...a), ms); }; };
const buzz = (ms = 10) => { try { navigator.vibrate && navigator.vibrate(ms); } catch {} };
const safe = (fn) => { try { fn(); } catch (e) { console.warn('Paparan gagal:', e); } };
const locale = () => (currentLang === 'ms' ? 'ms-MY' : 'en-GB');

function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function esc(str) {
  return String(str ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
const ico = (name, cls = '') => `<svg class="ic ${cls}" aria-hidden="true"><use href="#i-${esc(name)}"></use></svg>`;

let currency = localStorage.getItem('currency') || 'MYR';
function money(n) {
  return `${currency} ${Number(n).toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
function todayStr() { return ymd(new Date()); }
function formatDate(str) {
  return new Date(str + 'T00:00:00').toLocaleDateString(locale(), { day: 'numeric', month: 'short', year: 'numeric' });
}

// ---------- Tetapan (disimpan setempat + disegerakkan ke Supabase) ----------
const SYNC_KEYS = ['customCats', 'catOverrides', 'catOrder', 'customPays', 'payOverrides', 'payOrder', 'budgets', 'merchantCat', 'recurring'];
const normPays = (a) => (a || []).map((p) => (typeof p === 'string' ? { name: p, icon: 'tag' } : p));
let customCats = loadJSON('customCats', []);
let catOverrides = loadJSON('catOverrides', {}); // { kunci: { label?, icon? } }
let catOrder = loadJSON('catOrder', []);
let customPays = normPays(loadJSON('customPays', []));
let payOverrides = loadJSON('payOverrides', {});
let payOrder = loadJSON('payOrder', []);
let budgets = loadJSON('budgets', {}); // { kategori: had bulanan }
let merchantCat = loadJSON('merchantCat', {}); // { kedai(huruf kecil): kategori }
let recurring = loadJSON('recurring', []); // [{ id, merchant_name, total_amount, category, payment_method, type, notes, day, last }]

let syncTimer;
function saveSetting(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
  clearTimeout(syncTimer);
  if (isLoggedIn()) syncTimer = setTimeout(pushSettings, 1500);
}
async function pushSettings() {
  if (!isLoggedIn()) return;
  const data = {};
  SYNC_KEYS.forEach((k) => { const v = loadJSON(k, null); if (v !== null) data[k] = v; });
  const { error } = await supabaseClient.from('user_settings').upsert({ user_id: currentUser.id, data, updated_at: new Date().toISOString() });
  if (error) console.warn('Sync tetapan gagal:', error.message);
}
async function pullSettings() {
  const { data, error } = await supabaseClient.from('user_settings').select('data').eq('user_id', currentUser.id).maybeSingle();
  if (error) { console.warn('Tarik tetapan gagal:', error.message); return; }
  if (!data) { await pushSettings(); return; } // peranti pertama: naikkan tetapan setempat
  const d = data.data || {};
  SYNC_KEYS.forEach((k) => { if (d[k] !== undefined) localStorage.setItem(k, JSON.stringify(d[k])); });
  customCats = loadJSON('customCats', []); catOverrides = loadJSON('catOverrides', {}); catOrder = loadJSON('catOrder', []);
  customPays = normPays(loadJSON('customPays', [])); payOverrides = loadJSON('payOverrides', {}); payOrder = loadJSON('payOrder', []);
  budgets = loadJSON('budgets', {}); merchantCat = loadJSON('merchantCat', {}); recurring = loadJSON('recurring', []);
  fillCategorySelects($('f-category').value);
  fillPaymentSelect($('f-payment').value);
  renderCategorySettings(); renderPaymentSettings(); renderRecurringSettings();
}

let currentUser = null;
let receipts = [];
let loadingReceipts = true;
const pendingDeletes = new Map(); // id -> { timer, r }

// State sheet
let editingId = null;
let pendingFile = null; // fail baharu yang belum dimuat naik
let removeImageFlag = false; // tandakan gambar lama untuk dibuang
let currentType = 'expense';
let previewObjectUrl = null;
let newCatIcon = 'tag';
let newPayIcon = 'tag';
let editingCatKey = null;
let editingPayKey = null;
let scanToken = 0; // untuk batal / abaikan hasil imbasan lama
let lastScanAt = 0;
let catTouched = false;
let histLimit = 50;
let bulkMode = false;
const selected = new Set();

// ---------- Kategori ----------
const DEFAULT_CATS = [
  { name: 'Gaji', icon: 'wallet' }, { name: 'Pendapatan Lain', icon: 'receipt' }, { name: 'Penjagaan Ibu Bapa', icon: 'heart-pulse' },
  { name: 'Makanan & Minuman', icon: 'utensils' }, { name: 'Rumah Tangga', icon: 'home' }, { name: 'Pengangkutan', icon: 'car' },
  { name: 'Kenderaan & Servis', icon: 'car' }, { name: 'Utiliti & Internet', icon: 'receipt' }, { name: 'Gaya Hidup', icon: 'bag' },
  { name: 'Perubatan & Kesihatan', icon: 'heart-pulse' }, { name: 'Anak & Tanggungan', icon: 'package' }, { name: 'Sukan Tambahan', icon: 'heart-pulse' },
  { name: 'Insuran & Persaraan', icon: 'package' }, { name: 'Pinjaman Rumah', icon: 'home' }, { name: 'SSPN & Simpanan', icon: 'receipt' },
  { name: 'Pelancongan', icon: 'plane' }, { name: 'Pendidikan & Kemahiran', icon: 'package' },
];
const FALLBACK_CAT = 'Anak & Tanggungan';
const CAT_ICONS = [
  'utensils', 'receipt', 'bed', 'car', 'bag', 'heart-pulse', 'wallet', 'package', 'tag', 'coffee', 'home', 'zap', 'plane', 'gift', 'book',
  'phone', 'briefcase', 'credit-card', 'banknote', 'landmark',
];
const LEGACY_CATS = {
  'F&B': 'Makanan & Minuman', Utility: 'Utiliti & Internet', Accommodation: 'Pelancongan', Transportation: 'Pengangkutan',
  Shopping: 'Gaya Hidup', Medical: 'Perubatan & Kesihatan', 'Lain-lain': 'Anak & Tanggungan',
};
const catLabel = (name) => catOverrides[name]?.label || CAT_LABELS[name]?.[currentLang] || name;

// Sekali sahaja: bersihkan localStorage lama
if (!localStorage.getItem('catsV2')) {
  const defNames = DEFAULT_CATS.map((c) => c.name);
  customCats = customCats.filter((c) => !defNames.includes(c.name));
  catOverrides = {}; catOrder = [];
  localStorage.setItem('customCats', JSON.stringify(customCats));
  localStorage.setItem('catOverrides', '{}');
  localStorage.setItem('catOrder', '[]');
}
async function migrateCategories() {
  if (localStorage.getItem('catsV2') || !currentUser) return;
  try {
    for (const [oldName, newName] of Object.entries(LEGACY_CATS)) {
      const { error } = await supabaseClient.from('receipts').update({ category: newName }).eq('category', oldName).eq('user_id', currentUser.id);
      if (error) throw error;
    }
    localStorage.setItem('catsV2', '1');
  } catch (e) { console.warn('Migrasi kategori gagal:', e); }
}

function sortByOrder(list, order, keyFn) {
  const pos = new Map(order.map((k, i) => [k, i]));
  const rank = (x, i) => (pos.has(keyFn(x)) ? pos.get(keyFn(x)) : 1e6 + i);
  return list.map((x, i) => ({ x, r: rank(x, i) })).sort((a, b) => a.r - b.r).map((o) => o.x);
}
const allCats = () => sortByOrder([...DEFAULT_CATS, ...customCats], catOrder, (c) => c.name);
const catIcon = (name) => {
  const icon = catOverrides[name]?.icon || allCats().find((c) => c.name === name)?.icon;
  return CAT_ICONS.includes(icon) ? icon : 'tag';
};

// ---------- Cara pembayaran ----------
const PAYMENT_METHODS = ['cash', 'debit', 'credit', 'transfer', 'ewallet', 'other'];
const PAY_ICONS = { cash: 'banknote', debit: 'credit-card', credit: 'credit-card', transfer: 'landmark', ewallet: 'phone', other: 'package' };
const allPays = () => sortByOrder([...PAYMENT_METHODS, ...customPays.map((p) => p.name)], payOrder, (k) => k);
const payIcon = (k) => {
  const icon = payOverrides[k]?.icon || PAY_ICONS[k] || customPays.find((p) => p.name === k)?.icon;
  return CAT_ICONS.includes(icon) ? icon : 'tag';
};
const payLabel = (k) => (k ? payOverrides[k]?.label || (I18N[currentLang]['pay_' + k] ?? k) : '');
function fillPaymentSelect(selected) {
  const f = $('f-payment');
  f.innerHTML = `<option value="">${esc(t('pay_none'))}</option>` + allPays().map((k) => `<option value="${esc(k)}">${esc(payLabel(k))}</option>`).join('');
  if (selected && !allPays().includes(selected)) f.insertAdjacentHTML('beforeend', `<option value="${esc(selected)}">${esc(selected)}</option>`);
  f.value = selected || '';
}

// ---------- Toast (giliran + butang tindakan) ----------
const toastQ = [];
let toastBusy = false;
let toastTimer;
function toast(msg, opts = {}) {
  toastQ.push({ msg, ...opts });
  if (!toastBusy) nextToast();
}
function nextToast() {
  const it = toastQ.shift();
  const el = $('toast');
  if (!it) { toastBusy = false; return; }
  toastBusy = true;
  el.textContent = '';
  const span = document.createElement('span');
  span.textContent = it.msg;
  el.appendChild(span);
  el.classList.toggle('has-act', !!it.action);
  const end = () => {
    clearTimeout(toastTimer);
    el.classList.remove('show');
    setTimeout(nextToast, 250);
  };
  if (it.action) {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'toast-act'; b.textContent = it.action;
    b.onclick = () => { it.onAction && it.onAction(); end(); };
    el.appendChild(b);
  }
  el.classList.add('show');
  toastTimer = setTimeout(end, it.ms || (toastQ.length ? 1800 : 3000));
}

// ---------- Dialog pengesahan (ganti confirm()) ----------
function trapFocus(el, onEsc) {
  const prev = document.activeElement;
  const h = (e) => {
    if (e.key === 'Escape' && onEsc) { onEsc(); return; }
    if (e.key !== 'Tab') return;
    const f = [...el.querySelectorAll('button,a[href],input,select,textarea')].filter((x) => !x.disabled && x.offsetParent !== null);
    if (!f.length) return;
    const a = f[0], z = f[f.length - 1];
    if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
    else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
  };
  el.addEventListener('keydown', h);
  return () => { el.removeEventListener('keydown', h); if (prev && prev.focus) prev.focus(); };
}

function confirmDialog(msg, { ok, danger = true } = {}) {
  return new Promise((res) => {
    const m = $('confirm-modal'), okb = $('confirm-ok'), cb = $('confirm-cancel');
    $('confirm-msg').textContent = msg;
    okb.textContent = ok || t('confirm_ok');
    okb.className = 'btn ' + (danger ? 'btn-danger' : 'btn-primary');
    cb.textContent = t('cancel');
    m.classList.add('open');
    let release;
    const done = (v) => { m.classList.remove('open'); release(); okb.onclick = cb.onclick = m.onclick = null; res(v); };
    release = trapFocus(m, () => done(false));
    okb.onclick = () => done(true);
    cb.onclick = () => done(false);
    m.onclick = (e) => { if (e.target === m) done(false); };
    cb.focus();
  });
}

// ---------- Cache luar talian (IndexedDB) ----------
const idb = {
  open() {
    return new Promise((res, rej) => {
      const r = indexedDB.open('kira-belanja', 1);
      r.onupgradeneeded = () => r.result.createObjectStore('kv');
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
  },
  async get(k) {
    try {
      const db = await this.open();
      return await new Promise((res) => { const q = db.transaction('kv').objectStore('kv').get(k); q.onsuccess = () => res(q.result); q.onerror = () => res(undefined); });
    } catch { return undefined; }
  },
  async set(k, v) {
    try {
      const db = await this.open();
      await new Promise((res) => { const tx = db.transaction('kv', 'readwrite'); tx.objectStore('kv').put(v, k); tx.oncomplete = res; tx.onerror = res; });
    } catch {}
  },
};

// ==========================================
// 2. AUTH
// ==========================================
function renderUserInfo() {
  $('user-info').textContent = currentUser ? t('user_id', { id: currentUser.id.slice(0, 8) + '…' }) : '';
}
const isLoggedIn = () => !!currentUser && !currentUser.is_anonymous;

function requireLogin() {
  if (isLoggedIn()) return true;
  toast(t('need_login'));
  switchView('settings');
  return false;
}

let readyUid = null;
let realtimeCh = null;
function subscribeRealtime() {
  try {
    if (realtimeCh) supabaseClient.removeChannel(realtimeCh);
    realtimeCh = supabaseClient
      .channel('receipts-' + currentUser.id)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'receipts', filter: `user_id=eq.${currentUser.id}` }, debounce(() => fetchReceipts(), 700))
      .subscribe();
  } catch (e) { console.warn('Realtime gagal:', e); }
}

// Dipanggil sekali bila pengguna sah dikenal pasti
async function onLoggedIn() {
  if (!isLoggedIn() || readyUid === currentUser.id) return;
  readyUid = currentUser.id;
  const cached = await idb.get('receipts:' + currentUser.id);
  if (Array.isArray(cached) && cached.length && !receipts.length) { receipts = cached; renderHistory(); renderDashboard(); }
  subscribeRealtime();
  await pullSettings();
  await migrateCategories();
  await fetchReceipts();
  await runRecurring();
}

async function initAuth() {
  try {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session && !session.user.is_anonymous) {
      // --- SEMAK ALLOWLIST ---
      const { data: allowed, error: allowErr } = await supabaseClient.rpc('is_email_allowed');
      if (allowErr) {
        console.warn('Semak allowlist gagal:', allowErr.message);
        // Gagal semak: jangan biar masuk (fail-closed)
        await supabaseClient.auth.signOut({ scope: 'local' });
        currentUser = null;
        receipts = [];
        renderUserInfo(); renderAccount();
        loadingReceipts = false;
        renderHistory(); renderDashboard();
        toast(t('allowlist_check_failed', { msg: allowErr.message }));
        return;
      }
      if (!allowed) {
        // User login berjaya (session ada) tapi tiada dalam allowlist.
        await supabaseClient.auth.signOut({ scope: 'local' });
        currentUser = null;
        receipts = [];
        renderUserInfo(); renderAccount();
        loadingReceipts = false;
        renderHistory(); renderDashboard();
        toast(t('pending_approval'), { ms: 6000 });
        return;
      }
      currentUser = session.user;

      // --- CACHE FLAG ADMIN (dipindah ke DALAM try, selepas currentUser ditetapkan) ---
      try {
        const { data: adminFlag } = await supabaseClient.rpc('is_admin');
        currentUser.isAdmin = !!adminFlag;
      } catch (e) {
        console.warn('is_admin gagal:', e);
        currentUser.isAdmin = false;
      }
    } else {
      if (session) await supabaseClient.auth.signOut({ scope: 'local' });
      currentUser = null;
    }
    receipts = [];
    renderUserInfo(); renderAccount();
    if (currentUser) await onLoggedIn();
    else { loadingReceipts = false; renderHistory(); renderDashboard(); }
  } catch (err) {
    console.error('Gagal semak sesi:', err);
    loadingReceipts = false;
    toast(t('db_error', { msg: err.message }));
    renderHistory();
  }
}

// ==========================================
// 3. TEMA, BAHASA & NAVIGASI
// ==========================================
const htmlTag = document.documentElement;
let themeMode = localStorage.getItem('themeMode') || localStorage.getItem('theme') || 'light';
if (!['light', 'dark', 'auto', 'night'].includes(themeMode)) themeMode = 'light';
const effectiveTheme = () => {
  if (themeMode === 'auto') return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  if (themeMode === 'night') { const h = new Date().getHours(); return h >= 19 || h < 7 ? 'dark' : 'light'; }
  return themeMode;
};
function applyTheme(theme) {
  htmlTag.setAttribute('data-theme', theme);
  const m = document.querySelector('meta[name="theme-color"]');
  if (m) m.content = theme === 'dark' ? '#0e141b' : '#f4f5f7';
  safe(renderChart); safe(renderTrend);
}
function setThemeMode(mode) {
  themeMode = mode;
  localStorage.setItem('themeMode', mode);
  applyTheme(effectiveTheme());
}
setInterval(() => { if (themeMode === 'night' && effectiveTheme() !== htmlTag.getAttribute('data-theme')) applyTheme(effectiveTheme()); }, 60000);
try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { if (themeMode === 'auto') applyTheme(effectiveTheme()); }); } catch {}

function applyLang(lang) {
  currentLang = lang === 'en' ? 'en' : 'ms';
  localStorage.setItem('lang', currentLang);
  htmlTag.lang = currentLang === 'ms' ? 'ms' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  ['ms', 'en'].forEach((l) => {
    const b = $(`lang-${l}`);
    b.classList.toggle('active', l === currentLang);
    b.setAttribute('aria-pressed', String(l === currentLang));
  });
  $('theme-select').value = themeMode;
  $('sheet-title').textContent = editingId ? t('sheet_edit') : t('sheet_add');
  fillCategorySelects($('f-category').value);
  fillPaymentSelect($('f-payment').value);
  renderImagePreview(); renderHistory(); renderDashboard();
  renderCategorySettings(); renderPaymentSettings(); renderRecurringSettings();
  renderIconPicker(); renderAccount(); renderUserInfo(); syncEditUi();
safe(renderAdminPanel);
}
const setLang = applyLang;

function switchView(viewName) {
  document.querySelectorAll('.view').forEach((v) => v.classList.remove('active'));
  $(`view-${viewName}`).classList.add('active');
  document.querySelectorAll('.nav-item[data-view]').forEach((btn) => btn.classList.toggle('active', btn.dataset.view === viewName));
  $('app-content').scrollTop = 0;
  if (viewName === 'dashboard') renderDashboard();
if (viewName === 'settings') {
    renderCategorySettings(); renderPaymentSettings(); renderRecurringSettings(); renderIconPicker(); renderAccount();
    safe(renderAdminPanel);
}
}

function triggerScan() {
  if (!requireLogin()) return;
  switchView('upload');
  $('file-camera').click();
}

// ==========================================
// 4. DATA (SUPABASE)
// ==========================================
let fetchCtl = null;
async function fetchReceipts() {
  if (!isLoggedIn()) { receipts = []; loadingReceipts = false; renderHistory(); renderDashboard(); return; }
  if (fetchCtl) fetchCtl.abort();
  const ctl = (fetchCtl = new AbortController());
  try {
    const { data, error } = await supabaseClient
    .from('receipts').select('*').eq('user_id', currentUser.id)
    .order('receipt_date', { ascending: false })
    .abortSignal(ctl.signal);
    if (ctl.signal.aborted) return;
    if (error) throw error;
    receipts = (data || []).filter((r) => !pendingDeletes.has(r.id));
    idb.set('receipts:' + currentUser.id, receipts);
  } catch (err) {
    if (ctl.signal.aborted || err?.name === 'AbortError') return;
    console.error('Gagal tarik data:', err);
    toast(receipts.length ? t('offline_cache') : t('fetch_failed', { msg: err.message }));
  } finally {
    if (fetchCtl === ctl) { loadingReceipts = false; renderHistory(); renderDashboard(); }
  }
}
const sortReceipts = () =>
  receipts.sort((a, b) => String(b.receipt_date).localeCompare(String(a.receipt_date)) || String(b.created_at || '').localeCompare(String(a.created_at || '')));

// ---------- Resit berulang ----------
let recurringRan = false;
async function runRecurring() {
  if (recurringRan || !isLoggedIn() || !recurring.length) return;
  recurringRan = true;
  const curKey = monthKey();
  const rows = [];
  for (const rule of recurring) {
    let [y, m] = rule.last.split('-').map(Number);
    for (;;) {
      m++; if (m > 12) { m = 1; y++; }
      const key = `${y}-${pad2(m)}`;
      if (key > curKey) break;
      const d = Math.min(rule.day, new Date(y, m, 0).getDate());
      const date = `${key}-${pad2(d)}`;
      if (date > todayStr()) break;
      rows.push({
        user_id: currentUser.id, merchant_name: rule.merchant_name, receipt_date: date, total_amount: rule.total_amount,
        category: rule.category, payment_method: rule.payment_method || null, type: rule.type, notes: rule.notes || null, image_url: null, image_path: null,
      });
      rule.last = key;
    }
  }
  if (!rows.length) return;
  const { error } = await supabaseClient.from('receipts').insert(rows);
  if (error) { console.warn('Jana berulang gagal:', error.message); recurring = loadJSON('recurring', []); recurringRan = false; return; }
  saveSetting('recurring', recurring);
  toast(t('recurring_made', { n: rows.length }));
  await fetchReceipts();
}

// ==========================================
// 5. SHEET TAMBAH / EDIT
// ==========================================
function fillCategorySelects(sel) {
  const opts = allCats().map((c) => `<option value="${esc(c.name)}">${esc(catLabel(c.name))}</option>`).join('');
  const f = $('f-category');
  f.innerHTML = opts;
  if (sel && allCats().some((c) => c.name === sel)) f.value = sel;
  else if (sel) { f.insertAdjacentHTML('beforeend', `<option value="${esc(sel)}">${esc(sel)}</option>`); f.value = sel; }

  const filter = $('filter-cat');
  const prev = filter.value;
  filter.innerHTML = `<option value="">${esc(t('filter_all'))}</option>` + opts;
  filter.value = prev;

  const bulk = $('bulk-cat');
  bulk.innerHTML = `<option value="">${esc(t('bulk_cat_ph'))}</option>` + opts;
}

function setType(type) {
  currentType = type;
  $('type-expense').classList.toggle('active', type === 'expense');
  $('type-income').classList.toggle('active', type === 'income');
}

let sheetRelease = null;
function openSheet(id = null, file = null) {
  if (!requireLogin()) return;
  cancelScan();
  editingId = id;
  pendingFile = null;
  removeImageFlag = false;
  catTouched = false;
  const r = id ? receipts.find((x) => x.id === id) : null;

  $('sheet-title').textContent = r ? t('sheet_edit') : t('sheet_add');
  $('delete-btn').style.display = r ? 'block' : 'none';
  setType(r?.type || 'expense');
  $('f-merchant').value = r?.merchant_name || '';
  $('f-amount').value = r ? r.total_amount : '';
  $('f-date').value = r?.receipt_date || todayStr();
  $('f-notes').value = r?.notes || '';
  $('f-recurring').checked = false;
  document.querySelectorAll('.low-conf').forEach((e) => e.classList.remove('low-conf'));
  fillCategorySelects(r?.category || FALLBACK_CAT);
  fillPaymentSelect(r?.payment_method || '');

  if (file) setPendingFile(file);
  else renderImagePreview();

  $('sheet').classList.add('open');
  if (sheetRelease) sheetRelease();
  sheetRelease = trapFocus($('sheet'));
}

function closeSheet() {
  closeViewer();
  cancelScan();
  $('sheet').classList.remove('open');
  if (sheetRelease) { sheetRelease(); sheetRelease = null; }
  pendingFile = null;
  editingId = null;
  if (previewObjectUrl) { URL.revokeObjectURL(previewObjectUrl); previewObjectUrl = null; }
}

function setPendingFile(file) { pendingFile = file; removeImageFlag = false; renderImagePreview(); }
function removeImage() { pendingFile = null; removeImageFlag = true; renderImagePreview(); }

function previewHtml(src) {
  const label = esc(t('preview_btn'));
  return `<div class="preview-wrap"><img src="${esc(src)}" alt="${esc(t('receipt_alt'))}" /><button type="button" class="preview-zoom-btn" onclick="openViewer()" aria-label="${label}">${ico('expand', 'ic-sm')}<span>${label}</span></button></div>`;
}

function renderImagePreview() {
  if (previewObjectUrl) { URL.revokeObjectURL(previewObjectUrl); previewObjectUrl = null; }
  const box = $('image-preview');
  const r = editingId ? receipts.find((x) => x.id === editingId) : null;
  let html = '';
  let hasImage = false;

  if (pendingFile) {
    hasImage = true;
    if (isPdfFile(pendingFile)) html = `<div class="pdf-badge">${ico('file')}<span>${esc(pendingFile.name)}</span></div>`;
    else { previewObjectUrl = URL.createObjectURL(pendingFile); html = previewHtml(previewObjectUrl); }
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
  $('scan-ai-btn').style.display = hasImage ? 'inline-flex' : 'none';
  $('scan-basic-btn').style.display = hasImage ? 'inline-flex' : 'none';
}

// ---------- Pratonton gambar (zoom / gerak) ----------
const viewer = { s: 1, x: 0, y: 0, ptrs: new Map(), multi: false, dist: 0, lastTap: 0 };
const VIEWER_MAX = 6;
let viewerRelease = null;

function viewerApply() {
  const img = $('viewer-img'), stage = $('viewer-stage');
  const maxX = Math.max(0, (img.clientWidth * viewer.s - stage.clientWidth) / 2);
  const maxY = Math.max(0, (img.clientHeight * viewer.s - stage.clientHeight) / 2);
  viewer.x = Math.min(maxX, Math.max(-maxX, viewer.x));
  viewer.y = Math.min(maxY, Math.max(-maxY, viewer.y));
  img.style.transform = `translate(${viewer.x}px, ${viewer.y}px) scale(${viewer.s})`;
  $('viewer-zoom-label').textContent = Math.round(viewer.s * 100) + '%';
}
function viewerZoomAt(ns, cx, cy) {
  ns = Math.min(VIEWER_MAX, Math.max(1, ns));
  const k = ns / viewer.s;
  viewer.x = cx - (cx - viewer.x) * k;
  viewer.y = cy - (cy - viewer.y) * k;
  viewer.s = ns;
  if (ns === 1) { viewer.x = 0; viewer.y = 0; }
  viewerApply();
}
const viewerZoomBy = (f) => viewerZoomAt(viewer.s * f, 0, 0);
function viewerReset() { viewer.s = 1; viewer.x = 0; viewer.y = 0; viewerApply(); }

function openViewer() {
  const src = $('image-preview').querySelector('img')?.src;
  if (!src) return;
  $('viewer-img').src = src;
  viewer.ptrs.clear();
  viewerReset();
  $('img-viewer').classList.add('open');
  if (viewerRelease) viewerRelease();
  viewerRelease = trapFocus($('img-viewer'), closeViewer);
}
function closeViewer() {
  $('img-viewer').classList.remove('open');
  $('viewer-img').removeAttribute('src');
  viewer.ptrs.clear();
  if (viewerRelease) { viewerRelease(); viewerRelease = null; }
}

(function initViewer() {
  const stage = $('viewer-stage');
  const pt = (e) => { const r = stage.getBoundingClientRect(); return { x: e.clientX - r.left - r.width / 2, y: e.clientY - r.top - r.height / 2 }; };
  stage.addEventListener('pointerdown', (e) => {
    stage.setPointerCapture(e.pointerId);
    viewer.ptrs.set(e.pointerId, pt(e));
    if (viewer.ptrs.size === 1) { viewer.multi = false; viewer.dist = 0; } else viewer.multi = true;
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
      if (oldDist > 0) viewerZoomAt(viewer.s * (newDist / oldDist), newMid.x, newMid.y); else viewerApply();
    }
    viewer.ptrs.set(e.pointerId, cur);
  });
  const endPtr = (e) => {
    if (!viewer.ptrs.delete(e.pointerId)) return;
    if (viewer.ptrs.size === 0 && !viewer.multi && viewer.dist < 8 && e.type === 'pointerup') {
      const now = Date.now();
      if (now - viewer.lastTap < 300) {
        const p = pt(e);
        if (viewer.s > 1) viewerReset(); else viewerZoomAt(2.5, p.x, p.y);
        viewer.lastTap = 0;
      } else viewer.lastTap = now;
    }
  };
  stage.addEventListener('pointerup', endPtr);
  stage.addEventListener('pointercancel', endPtr);
  stage.addEventListener('wheel', (e) => {
    e.preventDefault();
    const p = pt(e);
    viewerZoomAt(viewer.s * (e.deltaY < 0 ? 1.15 : 1 / 1.15), p.x, p.y);
  }, { passive: false });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && $('img-viewer').classList.contains('open')) closeViewer(); });
})();

// ---------- Seret sheet ke bawah untuk tutup ----------
(function initSheetDrag() {
  const sheet = $('sheet').querySelector('.sheet'), grip = $('sheet-grip');
  let y0 = null, dy = 0;
  grip.addEventListener('pointerdown', (e) => { y0 = e.clientY; dy = 0; grip.setPointerCapture(e.pointerId); sheet.style.transition = 'none'; });
  grip.addEventListener('pointermove', (e) => { if (y0 === null) return; dy = Math.max(0, e.clientY - y0); sheet.style.transform = `translateY(${dy}px)`; });
  const end = () => {
    if (y0 === null) return;
    const close = dy > 110;
    y0 = null; dy = 0;
    sheet.style.transition = ''; sheet.style.transform = '';
    if (close) closeSheet();
  };
  grip.addEventListener('pointerup', end);
  grip.addEventListener('pointercancel', end);
})();

// ---------- Fail ----------
const isPdfFile = (f) => f.type === 'application/pdf' || /\.pdf$/i.test(f.name || '');

function handleFile(file) {
  if (!file) return;
  if (!requireLogin()) return;
  if (file.size > 10 * 1024 * 1024) { toast(t('file_too_big')); return; }
  if (!$('sheet').classList.contains('open')) openSheet(null, file); else setPendingFile(file);
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

async function resizeImage(file, maxSide, quality) {
  const bmp = await createImageBitmap(file);
  const scale = Math.min(1, maxSide / Math.max(bmp.width, bmp.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bmp.width * scale);
  canvas.height = Math.round(bmp.height * scale);
  canvas.getContext('2d').drawImage(bmp, 0, 0, canvas.width, canvas.height);
  return new Promise((r) => canvas.toBlob(r, 'image/jpeg', quality));
}

// Mampat gambar sebelum muat naik (maks 1600px, kualiti 0.7); kekal asal jika tak lebih kecil
async function compressForUpload(file) {
  if (isPdfFile(file) || !/^image\/(jpeg|png|webp)$/i.test(file.type)) return file;
  try {
    const blob = await resizeImage(file, 1600, 0.7);
    if (!blob || blob.size >= file.size) return file;
    return new File([blob], (file.name || 'resit').replace(/\.\w+$/, '') + '.jpg', { type: 'image/jpeg' });
  } catch { return file; }
}

async function prepareForAI(file) {
  if (isPdfFile(file)) return { mimeType: 'application/pdf', image: await blobToBase64(file) };
  return { mimeType: 'image/jpeg', image: await blobToBase64(await resizeImage(file, 1280, 0.75)) };
}

// ---------- Imbas AI ----------
async function invokeScan(payload) {
  const { data, error } = await supabaseClient.functions.invoke('scan-receipt', {
    body: { ...payload, categories: allCats().map((c) => c.name) },
  });
  if (error) {
    let msg = error.message;
    const status = error.context?.status;
    try { const body = await error.context.json(); msg = body.error || msg; } catch {}
    const err = new Error(msg);
    err.status = status;
    err.network = error.name === 'FunctionsFetchError' || error.name === 'FunctionsRelayError';
    throw err;
  }
  return data;
}
const isRetryable = (e) => [429, 500, 502, 503, 504].includes(e.status) || e.network || /503|overload|unavailable|high demand|busy|timeout/i.test(e.message || '');

async function invokeScanWithRetry(payload, token, maxTries = 2) {
  let lastErr;
  for (let i = 1; i <= maxTries; i++) {
    try { return await invokeScan(payload); }
    catch (e) {
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

let scanRelease = null;
function openScanModal() {
  const img = $('image-preview').querySelector('img');
  const inner = img
    ? `<img src="${esc(img.src)}" alt="" />`
    : `<div class="scan-paper"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>`;
  $('scan-frame').innerHTML =
    inner + `<div class="scan-line"></div><span class="sc tl"></span><span class="sc tr"></span><span class="sc bl"></span><span class="sc br"></span>` +
    `<div class="scan-check">${ico('check', 'ic-xl')}</div>`;
  $('scan-modal-title').textContent = t('scanning_title');
  $('scan-modal-sub').textContent = t('scanning_sub');
  $('scan-cancel').style.display = '';
  $('scan-modal').classList.remove('done');
  $('scan-modal').classList.add('open');
  if (scanRelease) scanRelease();
  scanRelease = trapFocus($('scan-modal'));
  $('scan-cancel').focus();
}
function closeScanModal() {
  $('scan-modal').classList.remove('open', 'done');
  if (scanRelease) { scanRelease(); scanRelease = null; }
}
function cancelScan() { scanToken++; closeScanModal(); }

async function getScanSource() {
  if (pendingFile) return pendingFile;
  const r = editingId ? receipts.find((x) => x.id === editingId) : null;
  if (r?.image_url && !removeImageFlag) {
    const res = await fetch(r.image_url);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const blob = await res.blob();
    return new File([blob], /\.pdf($|\?)/i.test(r.image_url) ? 'receipt.pdf' : 'receipt', { type: blob.type || 'image/jpeg' });
  }
  return null;
}

// Auto-belajar kategori: ingat kategori terakhir bagi setiap kedai
const merchantKey = (s) => String(s || '').trim().toLowerCase();
function applyLearned() {
  const c = merchantCat[merchantKey($('f-merchant').value)];
  if (c && allCats().some((x) => x.name === c)) $('f-category').value = c;
}

// Isi borang daripada hasil imbasan; serlahkan medan kurang pasti
function applyScanResult(r) {
  let n = 0;
  document.querySelectorAll('.low-conf').forEach((e) => e.classList.remove('low-conf'));
  if (r.merchant_name) { $('f-merchant').value = r.merchant_name; n++; }
  const amt = parseFloat(r.total_amount);
  if (!isNaN(amt)) { $('f-amount').value = amt; n++; }
  if (r.receipt_date) { $('f-date').value = r.receipt_date; n++; }
  if (r.category && allCats().some((c) => c.name === r.category)) { $('f-category').value = r.category; n++; }
  if (r.payment_method && allPays().includes(r.payment_method)) { $('f-payment').value = r.payment_method; n++; }
  applyLearned();

  const warns = [];
  const conf = r.confidence || {};
  const map = { merchant_name: 'f-merchant', total_amount: 'f-amount', receipt_date: 'f-date', category: 'f-category' };
  Object.entries(map).forEach(([k, id]) => {
    if (typeof conf[k] === 'number' && conf[k] < 0.7) { $(id).classList.add('low-conf'); warns.push(k); }
  });
  if (Array.isArray(r.items) && r.items.length && !isNaN(amt)) {
    const sum = r.items.reduce((a, b) => a + (Number(b) || 0), 0) + (Number(r.tax) || 0);
    if (Math.abs(sum - amt) > 0.05) { $('f-amount').classList.add('low-conf'); toast(t('arith_warn', { sum: money(sum), total: money(amt) }), { ms: 4500 }); }
  }
  if (warns.length) toast(t('low_conf'), { ms: 3500 });
  return n;
}

function finishScan(token, doneToast) {
  $('scan-modal').classList.add('done');
  $('scan-modal-title').textContent = t('scan_done');
  $('scan-modal-sub').textContent = '';
  $('scan-cancel').style.display = 'none';
  buzz(20);
  setTimeout(() => {
    if (token !== scanToken) return;
    closeScanModal();
    toast(doneToast);
  }, 900);
}

async function runScan() {
  if ($('scan-modal').classList.contains('open')) return;
  if (!requireLogin()) return;
  if (!$('sheet').classList.contains('open')) return;
  if (Date.now() - lastScanAt < 5000) return toast(t('rate_wait'));
  lastScanAt = Date.now();

  const token = ++scanToken;
  openScanModal();
  try {
    const file = await getScanSource();
    if (token !== scanToken) return;
    if (!file) { closeScanModal(); return toast(t('scan_need_image')); }
    if (file.size > 10 * 1024 * 1024) { closeScanModal(); return toast(t('file_too_big')); }
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

const libPromises = {};
function loadScript(src) {
  if (!libPromises[src]) {
    libPromises[src] = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = () => { delete libPromises[src]; reject(new Error(t('basic_lib_missing'))); };
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
        logger: (m) => { if (m.status === 'recognizing text' && ocrProgress) ocrProgress(Math.round(m.progress * 100)); },
      });
    })().catch((e) => { ocrWorkerPromise = null; throw e; });
  }
  return ocrWorkerPromise;
}
async function ocrCanvas(canvas) {
  const worker = await getOcrWorker();
  const { data } = await worker.recognize(canvas);
  return data.text || '';
}
function enhanceForOcr(canvas) {
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const g = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
    d[i] = d[i + 1] = d[i + 2] = Math.max(0, Math.min(255, (g - 128) * 1.35 + 128));
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

// PDF digital: baca teks semua halaman (maks 20). PDF imbasan: OCR sehingga 5 halaman.
async function pdfToText(file) {
  await loadScript(PDFJS_SRC);
  pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
  const pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
  const pages = Math.min(pdf.numPages, 20);
  let text = '';
  for (let p = 1; p <= pages; p++) {
    const page = await pdf.getPage(p);
    const content = await page.getTextContent();
    const rows = {};
    content.items.forEach((it) => {
      if (!it.str.trim()) return;
      const y = Math.round(it.transform[5] / 3);
      (rows[y] ||= []).push({ x: it.transform[4], s: it.str });
    });
    Object.keys(rows).map(Number).sort((a, b) => b - a).forEach((y) => {
      text += rows[y].sort((a, b) => a.x - b.x).map((r) => r.s).join(' ') + '\n';
    });
  }
  if (text.replace(/\s/g, '').length < 20) {
    text = '';
    for (let p = 1; p <= Math.min(pdf.numPages, 5); p++) {
      const page = await pdf.getPage(p);
      const viewport = page.getViewport({ scale: 2 });
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(viewport.width);
      canvas.height = Math.round(viewport.height);
      await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
      enhanceForOcr(canvas);
      text += (await ocrCanvas(canvas)) + '\n';
    }
  }
  return text;
}

// ---------- Tafsir teks resit ----------
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
  const num = /\b(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{4}|\d{2})\b/g;
  while ((m = num.exec(text))) if ((r = ymdStr(+m[3], +m[2], +m[1]))) return r;
  const txt = /\b(\d{1,2})[\s\-]+([A-Za-z]{3,9})\.?[\s\-,]+(\d{4})\b/g;
  while ((m = txt.exec(text))) {
    const mon = MONTHS[m[2].slice(0, 3).toLowerCase()];
    if (mon && (r = ymdStr(+m[3], mon, +m[1]))) return r;
  }
  return null;
}
const MONEY_RX = /(\d{1,3}(?:,\d{3})+|\d+)\.(\d{2})\b/g;
const amountsIn = (line) => [...line.matchAll(MONEY_RX)].map((m) => parseFloat(m[1].replace(/,/g, '') + '.' + m[2]));
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
      if (!a.length && lines[i + 1]) a = amountsIn(lines[i + 1]);
      if (a.length) return a[a.length - 1];
    }
  }
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
  ['Pengangkutan', /petronas|shell|petron|caltex|bhp|setel|touch\s*'?n\s*go|\btol\b|parking|parkir|\bgrab\b|\blrt\b|\bmrt\b|\bktm\b|fuel|minyak/i],
  ['Makanan & Minuman', /restoran|restaurant|cafe|kafe|kopitiam|mamak|nasi|mcd|mcdonald|kfc|starbucks|pizza|bakery|bubble|coffee|makan/i],
  ['Utiliti & Internet', /tenaga|\btnb\b|syabas|air selangor|indah water|unifi|maxis|celcom|\bdigi\b|u mobile|telekom|astro/i],
  ['Pelancongan', /hotel|resort|\binn\b|homestay|airbnb|motel/i],
  ['Perubatan & Kesihatan', /klinik|clinic|pharmacy|farmasi|guardian|watsons?|hospital|dental|pergigian/i],
  ['Gaya Hidup', /mydin|aeon|giant|tesco|lotus|99\s*speedmart|ikea|uniqlo|mr\.?\s*diy|econsave|jaya grocer|7-?eleven|kk\s*mart|shopee|lazada/i],
];
function parseReceiptText(text) {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  return {
    merchant_name: findMerchant(lines), total_amount: findTotal(lines), receipt_date: findDate(text),
    category: CAT_HINTS.find(([, rx]) => rx.test(text))?.[0] || null, payment_method: findPayment(text),
  };
}

async function runBasicScan() {
  if ($('scan-modal').classList.contains('open')) return;
  if (!$('sheet').classList.contains('open')) return;
  const token = ++scanToken;
  openScanModal();
  $('scan-modal-title').textContent = t('scanning_basic_title');
  $('scan-modal-sub').textContent = t('basic_loading');
  ocrProgress = (p) => { if (token === scanToken) $('scan-modal-sub').textContent = t('basic_reading', { p }); };
  try {
    const file = await getScanSource();
    if (token !== scanToken) return;
    if (!file) { closeScanModal(); return toast(t('scan_need_image')); }
    if (file.size > 10 * 1024 * 1024) { closeScanModal(); return toast(t('file_too_big')); }
    let text;
    if (isPdfFile(file)) { $('scan-modal-sub').textContent = t('basic_pdf'); text = await pdfToText(file); }
    else text = await ocrCanvas(await imageToOcrCanvas(file));
    if (token !== scanToken) return;
    const n = applyScanResult(parseReceiptText(text));
    if (!n) { closeScanModal(); return toast(t('basic_none')); }
    finishScan(token, t('basic_done'));
  } catch (e) {
    if (token !== scanToken) return;
    console.warn('Imbasan asas gagal:', e);
    closeScanModal();
    toast(t('basic_failed', { msg: e.message }));
  } finally { ocrProgress = null; }
}

// ---------- Bajet: amaran 80% / 100% ----------
function spentThisMonth(cat) {
  const mk = monthKey();
  return receipts.filter((r) => r.type !== 'income' && (r.category || FALLBACK_CAT) === cat && String(r.receipt_date).startsWith(mk))
    .reduce((s, r) => s + (parseFloat(r.total_amount) || 0), 0);
}
function checkBudget(cat, date, amount, oldAmount) {
  const limit = parseFloat(budgets[cat]);
  if (!(limit > 0) || !String(date).startsWith(monthKey())) return;
  const after = spentThisMonth(cat);
  const before = after - amount + (oldAmount || 0);
  const lvl = (v) => (v >= limit ? 2 : v >= limit * 0.8 ? 1 : 0);
  if (lvl(after) <= lvl(before)) return;
  const p = Math.round((after / limit) * 100);
  toast(lvl(after) === 2 ? t('budget_over', { name: catLabel(cat), p }) : t('budget_warn80', { name: catLabel(cat), p }), { ms: 4500 });
  buzz([30, 60, 30]);
}

// ---------- Simpan / padam ----------
async function saveReceipt() {
  const merchant = $('f-merchant').value.trim();
  const amount = parseFloat($('f-amount').value);
  const date = $('f-date').value;
  if (!merchant) return toast(t('need_merchant'));
  if (isNaN(amount) || amount < 0) return toast(t('need_amount'));
  if (!date) return toast(t('need_date'));
  if (!requireLogin()) return;

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
      const up = await compressForUpload(pendingFile);
      const ext = (up.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '');
      const path = `${uid}/${Date.now()}.${ext}`;
      const contentType = up.type || (ext === 'pdf' ? 'application/pdf' : 'image/jpeg');
      const body = new Blob([await up.arrayBuffer()], { type: contentType });
      const { error: upErr } = await supabaseClient.storage.from(BUCKET).upload(path, body, { contentType });
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
      merchant_name: merchant, receipt_date: date, total_amount: amount, category: $('f-category').value,
      payment_method: $('f-payment').value || null, type: currentType, notes: $('f-notes').value.trim() || null, image_url, image_path,
    };
    const { error } = editingId
      ? await supabaseClient.from('receipts').update(payload).eq('id', editingId)
      : await supabaseClient.from('receipts').insert([{ ...payload, user_id: uid }]);
    if (error) throw new Error(t('save_data_failed', { msg: error.message }));
    if (pathToDelete) await supabaseClient.storage.from(BUCKET).remove([pathToDelete]);

    // auto-belajar kategori + peraturan berulang
    if (payload.type !== 'income') { merchantCat[merchantKey(merchant)] = payload.category; saveSetting('merchantCat', merchantCat); }
    const wantRec = $('f-recurring').checked;
    if (wantRec) {
      recurring = recurring.filter((x) => merchantKey(x.merchant_name) !== merchantKey(merchant));
      recurring.push({
        id: Date.now(), merchant_name: merchant, total_amount: amount, category: payload.category, payment_method: payload.payment_method,
        type: payload.type, notes: payload.notes, day: +date.slice(8, 10), last: date.slice(0, 7),
      });
      saveSetting('recurring', recurring);
      renderRecurringSettings();
    }

    const wasEdit = !!editingId;
    const oldAmt = old && old.category === payload.category && String(old.receipt_date).startsWith(date.slice(0, 7)) ? parseFloat(old.total_amount) || 0 : 0;
    closeSheet();
    toast(wantRec ? t('recurring_added') : wasEdit ? t('updated') : t('saved'));
    await fetchReceipts();
    if (payload.type !== 'income') checkBudget(payload.category, date, amount, oldAmt);
    if ($('view-upload').classList.contains('active')) switchView('history');
  } catch (err) {
    console.error(err);
    toast(t('save_failed', { msg: err.message }));
  } finally {
    btn.disabled = false;
    btn.textContent = t('save');
  }
}

// Padam dengan Undo: simpan dalam memori 5 saat sebelum benar-benar padam dari DB
function deleteReceipt() {
  if (!editingId) return;
  const r = receipts.find((x) => x.id === editingId);
  closeSheet();
  if (!r) return;
  receipts = receipts.filter((x) => x.id !== r.id);
  renderHistory(); renderDashboard();
  pendingDeletes.set(r.id, { r, timer: setTimeout(() => commitDelete(r), 5000) });
  toast(t('deleted'), { action: t('undo'), ms: 5000, onAction: () => undoDelete(r.id) });
}
function undoDelete(id) {
  const p = pendingDeletes.get(id);
  if (!p) return;
  clearTimeout(p.timer);
  pendingDeletes.delete(id);
  receipts.push(p.r); sortReceipts();
  renderHistory(); renderDashboard();
}
async function commitDelete(r) {
  pendingDeletes.delete(r.id);
  try {
    const { error } = await supabaseClient.from('receipts').delete().eq('id', r.id);
    if (error) throw error;
    if (r.image_path) await supabaseClient.storage.from(BUCKET).remove([r.image_path]);
    idb.set('receipts:' + currentUser.id, receipts);
  } catch (err) {
    receipts.push(r); sortReceipts();
    renderHistory(); renderDashboard();
    toast(t('delete_failed', { msg: err.message }));
  }
}

// ==========================================
// 6. SEJARAH (tapis, susun, pilih berbilang)
// ==========================================
function emptyState(msg, cta, onclick) {
  return `<div class="empty-state"><div class="empty-art">${ico('receipt', 'ic-xl')}</div><p>${esc(msg)}</p><button type="button" class="btn btn-primary" onclick="${onclick}">${esc(cta)}</button></div>`;
}

function renderHistory() {
  const q = $('search-input').value.trim().toLowerCase();
  const cat = $('filter-cat').value;
  const typeF = $('f-type').value;
  const min = parseFloat($('f-min').value);
  const max = parseFloat($('f-max').value);
  const sort = $('f-sort').value;
  $('adv-toggle').classList.toggle('active', !!(typeF || !isNaN(min) || !isNaN(max) || sort !== 'date_desc'));

  let list = receipts.filter((r) => {
    const amt = parseFloat(r.total_amount) || 0;
    return (!cat || r.category === cat) &&
      (!typeF || (r.type || 'expense') === typeF) &&
      (isNaN(min) || amt >= min) && (isNaN(max) || amt <= max) &&
      (!q || [r.merchant_name, r.notes, r.category, catLabel(r.category)].some((v) => (v || '').toLowerCase().includes(q)));
  });
  const cmp = {
    date_asc: (a, b) => String(a.receipt_date).localeCompare(String(b.receipt_date)),
    amt_desc: (a, b) => b.total_amount - a.total_amount,
    amt_asc: (a, b) => a.total_amount - b.total_amount,
    name: (a, b) => String(a.merchant_name).localeCompare(String(b.merchant_name), 'ms'),
  }[sort];
  if (cmp) list = [...list].sort(cmp);

  let inc = 0, exp = 0;
  list.forEach((r) => { const a = parseFloat(r.total_amount) || 0; if (r.type === 'income') inc += a; else exp += a; });
  $('history-count').textContent = t('receipts_count', { n: list.length });
  $('history-total').textContent = list.length ? `${t('expense')} ${money(exp)}${inc ? ` · ${t('income')} ${money(inc)}` : ''}` : '';

  const box = $('receipt-list');
  if (loadingReceipts && !receipts.length) {
    box.innerHTML = Array.from({ length: 4 }, () => `<div class="receipt-item skel" aria-hidden="true"><div class="receipt-left"><div class="skel-box" style="width:40px;height:40px;border-radius:10px"></div><div><div class="skel-box" style="width:120px;height:12px"></div><div class="skel-box" style="width:80px;height:10px;margin-top:8px"></div></div></div><div class="skel-box" style="width:70px;height:14px"></div></div>`).join('');
    return;
  }
  if (!list.length) {
    box.innerHTML = !isLoggedIn()
      ? emptyState(t('empty_login'), t('login_cta'), "switchView('settings')")
      : receipts.length ? `<p class="empty-msg">${esc(t('empty_nomatch'))}</p>` : emptyState(t('empty_none'), t('empty_cta'), 'openSheet()');
    updateBulkBar();
    return;
  }

  const shown = list.slice(0, histLimit);
  box.innerHTML = shown.map((r) => {
    const isIncome = r.type === 'income';
    const sel = selected.has(r.id);
    return `
      <div class="receipt-item${sel ? ' sel' : ''}" data-id="${esc(r.id)}">
        <div class="receipt-left">
          ${bulkMode ? `<span class="bulk-chk${sel ? ' on' : ''}" aria-hidden="true">${sel ? ico('check', 'ic-sm') : ''}</span>` : ''}
          <div class="receipt-icon">${ico(catIcon(r.category))}</div>
          <div class="receipt-info">
            <h4>${esc(r.merchant_name)}</h4>
            <p><span>${formatDate(r.receipt_date)}${r.payment_method ? ' · ' + esc(payLabel(r.payment_method)) : ''}</span>${r.image_url ? ico('paperclip', 'ic-sm') : ''}</p>
          </div>
        </div>
        <div class="receipt-amount ${isIncome ? 'income' : 'expense'}">${isIncome ? '+' : '-'}${money(r.total_amount)}</div>
      </div>`;
  }).join('') + (list.length > histLimit ? `<button type="button" class="btn btn-block" id="load-more">${esc(t('load_more', { n: list.length - histLimit }))}</button>` : '');
  updateBulkBar();
}
const resetHist = () => { histLimit = 50; renderHistory(); };

function toggleAdv() {
  const p = $('adv-panel');
  p.style.display = p.style.display === 'none' ? 'grid' : 'none';
}
function toggleBulk() {
  bulkMode = !bulkMode;
  selected.clear();
  $('bulk-bar').style.display = bulkMode ? 'flex' : 'none';
  $('bulk-toggle').classList.toggle('active', bulkMode);
  renderHistory();
}
function updateBulkBar() { $('bulk-count').textContent = t('sel_count', { n: selected.size }); }

async function bulkDelete() {
  if (!selected.size) return;
  const ids = [...selected];
  if (!(await confirmDialog(t('confirm_bulk_delete', { n: ids.length })))) return;
  const items = receipts.filter((r) => selected.has(r.id));
  const { error } = await supabaseClient.from('receipts').delete().in('id', ids);
  if (error) return toast(t('delete_failed', { msg: error.message }));
  const paths = items.map((r) => r.image_path).filter(Boolean);
  if (paths.length) await supabaseClient.storage.from(BUCKET).remove(paths);
  toast(t('bulk_deleted', { n: ids.length }));
  toggleBulk();
  await fetchReceipts();
}
async function bulkSetCategory() {
  const cat = $('bulk-cat').value;
  if (!cat || !selected.size) return;
  const ids = [...selected];
  const { error } = await supabaseClient.from('receipts').update({ category: cat }).in('id', ids);
  if (error) return toast(t('failed', { msg: error.message }));
  toast(t('bulk_done', { n: ids.length }));
  toggleBulk();
  await fetchReceipts();
}

// ==========================================
// 6a. RINGKASAN (preset tarikh, bajet, insight)
// ==========================================
let preset = localStorage.getItem('preset') || 'month';
function presetRange(p) {
  const n = new Date(), y = n.getFullYear(), m = n.getMonth();
  if (p === 'month') return [ymd(new Date(y, m, 1)), todayStr()];
  if (p === 'last') return [ymd(new Date(y, m - 1, 1)), ymd(new Date(y, m, 0))];
  if (p === '30') { const d = new Date(); d.setDate(d.getDate() - 29); return [ymd(d), todayStr()]; }
  if (p === 'year') return [`${y}-01-01`, todayStr()];
  return ['', ''];
}
function renderPresetChips() {
  document.querySelectorAll('#preset-chips .chip').forEach((c) => c.classList.toggle('active', c.dataset.preset === preset));
}
function setPreset(p) {
  preset = p;
  localStorage.setItem('preset', p);
  if (p !== 'custom') { const [f, to] = presetRange(p); $('date-from').value = f; $('date-to').value = to; }
  renderPresetChips();
  renderDashboard();
}
function onDateChange() {
  preset = 'custom';
  localStorage.setItem('preset', 'custom');
  localStorage.setItem('dateFrom', $('date-from').value);
  localStorage.setItem('dateTo', $('date-to').value);
  renderPresetChips();
  renderDashboard();
}

const barRow = (icon, name, amt, pct, color) => `
  <div class="bar-row">
    <div class="bar-label"><span class="name">${ico(icon, 'ic-sm')}${esc(name)}</span><span class="amt">${amt}</span></div>
    <div class="bar-track"><div class="bar-fill" style="width:${Math.min(100, pct)}%${color ? `;background:${color}` : ''}"></div></div>
  </div>`;

function renderBudgetBox() {
  const rows = Object.entries(budgets).filter(([c, v]) => parseFloat(v) > 0 && allCats().some((x) => x.name === c));
  $('dash-budget').innerHTML = rows.length
    ? rows.map(([c, v]) => {
        const limit = parseFloat(v), spent = spentThisMonth(c), pct = (spent / limit) * 100;
        const color = pct >= 100 ? 'var(--danger)' : pct >= 80 ? '#d98e2b' : 'var(--success)';
        return barRow(catIcon(c), catLabel(c), esc(t('budget_of', { spent: money(spent), limit: money(limit) })), pct, color);
      }).join('')
    : `<p class="muted">${esc(t('budget_none'))}</p>`;
}

function renderInsights() {
  const now = new Date(), mk = monthKey(now);
  const cur = {}, prevM = {};
  const pk = monthKey(new Date(now.getFullYear(), now.getMonth() - 1, 1));
  let total = 0;
  receipts.forEach((r) => {
    if (r.type === 'income') return;
    const a = parseFloat(r.total_amount) || 0, c = r.category || FALLBACK_CAT, d = String(r.receipt_date);
    if (d.startsWith(mk)) { cur[c] = (cur[c] || 0) + a; total += a; }
    else if (d.startsWith(pk)) prevM[c] = (prevM[c] || 0) + a;
  });
  const dim = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const avg = total / Math.max(1, now.getDate());
  $('dash-insight').innerHTML = `
    <div class="stat-grid">
      <div class="stat-box"><span class="muted">${esc(t('avg_daily'))}</span><h4>${money(avg)}</h4></div>
      <div class="stat-box"><span class="muted">${esc(t('projection'))}</span><h4>${money(avg * dim)}</h4></div>
    </div>`;

  const cats = [...new Set([...Object.keys(cur), ...Object.keys(prevM)])].sort((a, b) => (cur[b] || 0) - (cur[a] || 0)).slice(0, 6);
  $('dash-compare').innerHTML = cats.length
    ? cats.map((c) => {
        const a = cur[c] || 0, b = prevM[c] || 0;
        const pct = b > 0 ? ((a - b) / b) * 100 : null;
        const tag = pct === null ? '' : `<span class="cmp-pct ${pct > 0 ? 'up' : 'down'}">${pct > 0 ? '▲' : '▼'} ${Math.abs(Math.round(pct))}%</span>`;
        return `<div class="cmp-row"><span class="name">${ico(catIcon(c), 'ic-sm')}${esc(catLabel(c))}</span><span class="amt">${money(a)} ${tag}</span></div>`;
      }).join('')
    : `<p class="muted">${esc(t('no_expense'))}</p>`;
}

function renderTop(list) {
  const g = {};
  list.forEach((r) => {
    if (r.type === 'income') return;
    const k = merchantKey(r.merchant_name);
    (g[k] ||= { name: r.merchant_name, n: 0, sum: 0 });
    g[k].n++; g[k].sum += parseFloat(r.total_amount) || 0;
  });
  const arr = Object.values(g);
  const col = (title, items, fmt) => `<div><p class="chart-sub">${esc(title)}</p>${
    items.length ? items.map((x, i) => `<div class="cmp-row"><span class="name">${i + 1}. ${esc(x.name)}</span><span class="amt">${fmt(x)}</span></div>`).join('') : `<p class="muted">-</p>`}</div>`;
  $('dash-top').innerHTML =
    col(t('top_freq'), [...arr].sort((a, b) => b.n - a.n).slice(0, 5), (x) => esc(t('visits', { n: x.n }))) +
    col(t('top_spend'), [...arr].sort((a, b) => b.sum - a.sum).slice(0, 5), (x) => money(x.sum));
}

let trendChart = null;
const axisTick = { callback: (v) => Number(v).toLocaleString('en-MY') };
function renderTrend() {
  const wrap = $('trend-wrap');
  if (!wrap) return;
  if (trendChart) { trendChart.destroy(); trendChart = null; }
  wrap.innerHTML = '';
  if (typeof Chart === 'undefined' || !receipts.length) return;
  const now = new Date(), keys = [], labels = [];
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    keys.push(monthKey(d));
    labels.push(d.toLocaleDateString(locale(), { month: 'short' }));
  }
  const exp = keys.map(() => 0), inc = keys.map(() => 0);
  receipts.forEach((r) => {
    const i = keys.indexOf(String(r.receipt_date).slice(0, 7));
    if (i < 0) return;
    const a = parseFloat(r.total_amount) || 0;
    if (r.type === 'income') inc[i] += a; else exp[i] += a;
  });
  const css = getComputedStyle(document.documentElement);
  Chart.defaults.color = css.getPropertyValue('--text-muted').trim();
  Chart.defaults.font.family = "'IBM Plex Sans', system-ui, sans-serif";
  const box = document.createElement('div');
  box.className = 'chart-box';
  box.style.height = '220px';
  const cv = document.createElement('canvas');
  box.appendChild(cv);
  wrap.appendChild(box);
  trendChart = new Chart(cv, {
    type: 'line',
    data: { labels, datasets: [
      { label: t('expense'), data: exp, borderColor: css.getPropertyValue('--danger').trim(), backgroundColor: 'transparent', tension: 0.3 },
      { label: t('income'), data: inc, borderColor: css.getPropertyValue('--success').trim(), borderDash: [5, 4], backgroundColor: 'transparent', tension: 0.3 },
    ] },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { boxWidth: 12 } }, tooltip: { callbacks: { label: (c) => `${c.dataset.label}: ${money(c.parsed.y)}` } } },
      scales: { x: { grid: { display: false } }, y: { beginAtZero: true, grid: { color: css.getPropertyValue('--border-color').trim() }, ticks: axisTick } },
    },
  });
}

function renderHeatmap() {
  const box = $('heatmap');
  if (!box) return;
  const to = $('date-to').value || todayStr();
  const [Y, M] = to.split('-').map(Number);
  const first = new Date(Y, M - 1, 1), dim = new Date(Y, M, 0).getDate(), pre = `${Y}-${pad2(M)}`;
  const sums = {};
  receipts.forEach((r) => {
    if (r.type === 'income' || !String(r.receipt_date).startsWith(pre)) return;
    const d = +String(r.receipt_date).slice(8, 10);
    sums[d] = (sums[d] || 0) + (parseFloat(r.total_amount) || 0);
  });
  const mx = Math.max(0, ...Object.values(sums));
  const wd = currentLang === 'ms' ? ['Is', 'Se', 'Ra', 'Kh', 'Ju', 'Sa', 'Ah'] : ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  let h = `<p class="chart-sub">${esc(first.toLocaleDateString(locale(), { month: 'long', year: 'numeric' }))}</p><div class="heat-grid">`;
  wd.forEach((w) => { h += `<span class="heat-wd">${w}</span>`; });
  for (let i = 0; i < (first.getDay() + 6) % 7; i++) h += '<span></span>';
  for (let d = 1; d <= dim; d++) {
    const v = sums[d] || 0;
    const lvl = v && mx ? Math.min(4, Math.ceil((v / mx) * 4)) : 0;
    h += `<button type="button" class="heat-cell l${lvl}" data-d="${pre}-${pad2(d)}" data-v="${v}">${d}</button>`;
  }
  box.innerHTML = h + '</div>';
}

function renderDashboard() {
  let from = $('date-from').value, to = $('date-to').value;
  if (from && to && from > to) [from, to] = [to, from];
  const list = receipts.filter((r) => (!from || r.receipt_date >= from) && (!to || r.receipt_date <= to));
  let income = 0, expense = 0;
  const byCat = {}, byPay = {};
  list.forEach((r) => {
    const amt = parseFloat(r.total_amount) || 0;
    if (r.type === 'income') income += amt;
    else {
      expense += amt;
      const k = r.category || FALLBACK_CAT;
      byCat[k] = (byCat[k] || 0) + amt;
      const p = r.payment_method || '';
      byPay[p] = (byPay[p] || 0) + amt;
    }
  });
  const net = income - expense;
  $('dash-net').textContent = `${net < 0 ? '-' : ''}${money(Math.abs(net))}`;
  $('dash-income').textContent = money(income);
  $('dash-expense').textContent = money(expense);

  const rows = Object.entries(byCat).sort((a, b) => b[1] - a[1]);
  $('dash-breakdown').innerHTML = rows.length
    ? rows.map(([n, a]) => barRow(catIcon(n), catLabel(n), money(a), expense ? (a / expense) * 100 : 0)).join('')
    : `<p class="empty-msg">${esc(t('no_expense'))}</p>`;
  const payRows = Object.entries(byPay).sort((a, b) => b[1] - a[1]);
  $('dash-pay-breakdown').innerHTML = payRows.length
    ? payRows.map(([k, a]) => barRow(payIcon(k), k ? payLabel(k) : t('pay_none'), money(a), expense ? (a / expense) * 100 : 0)).join('')
    : `<p class="empty-msg">${esc(t('no_expense'))}</p>`;

  safe(renderBudgetBox); safe(renderInsights); safe(() => renderTop(list));
  safe(renderTrend); safe(renderHeatmap); safe(renderChart);
}

// ---------- Laporan PDF (cetak ke PDF) ----------
function exportReport() {
  let from = $('date-from').value, to = $('date-to').value;
  if (from && to && from > to) [from, to] = [to, from];
  const list = receipts.filter((r) => (!from || r.receipt_date >= from) && (!to || r.receipt_date <= to))
    .sort((a, b) => String(a.receipt_date).localeCompare(String(b.receipt_date)));
  if (!list.length) return toast(t('no_export'));
  let inc = 0, exp = 0;
  const byCat = {};
  list.forEach((r) => {
    const a = parseFloat(r.total_amount) || 0;
    if (r.type === 'income') inc += a; else { exp += a; byCat[r.category] = (byCat[r.category] || 0) + a; }
  });
  const range = !from && !to ? t('all_dates') : `${from ? formatDate(from) : '…'} – ${to ? formatDate(to) : '…'}`;
  let chartImg = '';
  try { chartImg = chartInstances[0]?.toBase64Image?.() || ''; } catch {}
  const html = `<!doctype html><html lang="${currentLang}"><head><meta charset="utf-8"><title>${esc(t('report_title'))}</title><style>
    body{font-family:Arial,sans-serif;color:#16202e;margin:24px;font-size:12px}h1{font-size:20px;margin:0 0 4px}h2{font-size:14px;margin:18px 0 6px}
    table{width:100%;border-collapse:collapse}th,td{border-bottom:1px solid #ddd;padding:5px 6px;text-align:left}td.n,th.n{text-align:right}
    .sum{display:flex;gap:24px;margin:10px 0}.sum div{flex:1;border:1px solid #ddd;padding:8px;border-radius:6px}.sum b{display:block;font-size:15px}
    img{max-width:100%;max-height:260px}@media print{body{margin:10mm}}</style></head><body>
    <h1>${esc(t('report_title'))}</h1><div>${esc(range)}</div>
    <div class="sum"><div>${esc(t('income'))}<b>${money(inc)}</b></div><div>${esc(t('expense'))}<b>${money(exp)}</b></div><div>${esc(t('net_balance'))}<b>${money(inc - exp)}</b></div></div>
    <h2>${esc(t('by_category'))}</h2><table>${Object.entries(byCat).sort((a, b) => b[1] - a[1]).map(([c, a]) => `<tr><td>${esc(catLabel(c))}</td><td class="n">${money(a)}</td></tr>`).join('')}</table>
    ${chartImg ? `<h2>${esc(t('chart_title'))}</h2><img src="${chartImg}" alt="">` : ''}
    <h2>${esc(t('title_history'))} (${list.length})</h2><table><tr><th>${esc(t('csv_date'))}</th><th>${esc(t('csv_store'))}</th><th>${esc(t('csv_category'))}</th><th>${esc(t('csv_payment'))}</th><th class="n">${esc(t('csv_amount'))}</th></tr>
    ${list.map((r) => `<tr><td>${esc(r.receipt_date)}</td><td>${esc(r.merchant_name)}</td><td>${esc(catLabel(r.category))}</td><td>${esc(payLabel(r.payment_method))}</td><td class="n">${r.type === 'income' ? '+' : '-'}${money(r.total_amount)}</td></tr>`).join('')}</table></body></html>`;
  const w = window.open('', '_blank');
  if (!w) return toast(t('popup_blocked'));
  w.document.write(html);
  w.document.close();
  setTimeout(() => w.print(), 500);
}

// ==========================================
// 6b. GRAF (pai, bar menegak/mendatar, bertindan, banding julat)
// ==========================================
const CHART_COLORS = ['#1f4e79', '#2f7d5b', '#d98e2b', '#b4412f', '#7a5ea8', '#2a9db0', '#8c6d3f', '#c25b8e', '#5f6b7a', '#7fa650'];
let chartInstances = [];

function getChartRanges() {
  const defs = [{ letter: 'A', from: $('date-from').value, to: $('date-to').value }];
  if ($('cmp-on').checked) defs.push({ letter: 'B', from: $('cmp-from').value, to: $('cmp-to').value });
  return defs.map((r) => {
    let { from, to } = r;
    if (from && to && from > to) [from, to] = [to, from];
    const totals = {};
    receipts.forEach((x) => {
      if (x.type === 'income') return;
      if (from && x.receipt_date < from) return;
      if (to && x.receipt_date > to) return;
      const k = x.category || FALLBACK_CAT;
      totals[k] = (totals[k] || 0) + (parseFloat(x.total_amount) || 0);
    });
    const dates = !from && !to ? t('all_dates') : `${from ? formatDate(from) : '…'} – ${to ? formatDate(to) : '…'}`;
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
  if (typeof Chart === 'undefined') { wrap.innerHTML = `<p class="empty-msg">${esc(t('chart_unavailable'))}</p>`; return; }

  const type = $('chart-type').value;
  const ranges = getChartRanges();
  const cats = [...new Set(ranges.flatMap((r) => Object.keys(r.totals)))].sort(
    (a, b) => ranges.reduce((s, r) => s + (r.totals[b] || 0) - (r.totals[a] || 0), 0)
  );
  if (!cats.length) { wrap.innerHTML = `<p class="empty-msg">${esc(t('no_expense'))}</p>`; return; }

  const css = getComputedStyle(document.documentElement);
  const cGrid = css.getPropertyValue('--border-color').trim();
  const cCard = css.getPropertyValue('--bg-card').trim();
  const rangeColors = [css.getPropertyValue('--primary').trim(), '#d98e2b'];
  Chart.defaults.color = css.getPropertyValue('--text-muted').trim();
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
  const legendBottom = { position: 'bottom', labels: { boxWidth: 12 } };

  if (type === 'pie') {
    ranges.forEach((r) => {
      const sub = document.createElement('p');
      sub.className = 'chart-sub';
      sub.textContent = `${r.label} · ${money(r.sum)}`;
      wrap.appendChild(sub);
      const names = cats.filter((c) => r.totals[c]);
      if (!names.length) { wrap.insertAdjacentHTML('beforeend', `<p class="empty-msg">${esc(t('no_expense'))}</p>`); return; }
      addChart(250, {
        type: 'pie',
        data: { labels: names.map(catLabel), datasets: [{ data: names.map((n) => r.totals[n]), backgroundColor: names.map(colorOf), borderColor: cCard, borderWidth: 2 }] },
        options: { ...base, plugins: { legend: legendBottom, tooltip: { callbacks: { label: (c) => `${c.label}: ${money(c.parsed)}` } } } },
      });
    });
    return;
  }
  if (type === 'stacked') {
    addChart(340, {
      type: 'bar',
      data: { labels: ranges.map((r) => [r.letter, r.dates]), datasets: cats.map((c) => ({ label: catLabel(c), data: ranges.map((r) => r.totals[c] || 0), backgroundColor: colorOf(c) })) },
      options: {
        ...base,
        plugins: { legend: legendBottom, tooltip: { filter: (i) => i.parsed.y > 0, callbacks: { label: (c) => `${c.dataset.label}: ${money(c.parsed.y)}`, footer: (items) => `${t('chart_total')}: ${money(ranges[items[0].dataIndex].sum)}` } } },
        scales: { x: { stacked: true, grid: { display: false } }, y: { stacked: true, beginAtZero: true, grid: { color: cGrid }, ticks: axisTick } },
      },
    });
    return;
  }
  const horizontal = type === 'hbar';
  const catAxis = horizontal ? 'y' : 'x', valAxis = horizontal ? 'x' : 'y';
  addChart(horizontal ? Math.max(240, cats.length * (ranges.length * 22 + 16) + 70) : 320, {
    type: 'bar',
    data: { labels: cats.map(catLabel), datasets: ranges.map((r, i) => ({ label: r.label, data: cats.map((c) => r.totals[c] || 0), backgroundColor: rangeColors[i], borderRadius: 4 })) },
    options: {
      ...base, indexAxis: horizontal ? 'y' : 'x',
      plugins: { legend: { ...legendBottom, display: ranges.length > 1 }, tooltip: { callbacks: { label: (c) => `${c.dataset.label}: ${money(c.parsed[valAxis])}` } } },
      scales: { [catAxis]: { grid: { display: false } }, [valAxis]: { beginAtZero: true, grid: { color: cGrid }, ticks: axisTick } },
    },
  });
}

// ==========================================
// 7. TETAPAN: KATEGORI, CARA BAYAR, BERULANG, CSV
// ==========================================
function renderCategorySettings() {
  $('cat-settings-list').innerHTML = allCats().map((c) => {
    const ci = customCats.indexOf(c);
    const extra = ci < 0
      ? `<span class="muted">${esc(t('default_tag'))}</span>`
      : `<button class="del" onclick="deleteCategory(${ci})" aria-label="${esc(t('delete_cat_aria'))}">${ico('trash', 'ic-sm')}</button>`;
    const bt = parseFloat(budgets[c.name]) > 0 ? `<span class="muted">${esc(t('budget_tag', { v: money(budgets[c.name]) }))}</span>` : '';
    return `
      <div class="setting-row sort-row" data-key="${esc(c.name)}">
        <span class="lead"><span class="drag-handle" style="touch-action:none" aria-label="${esc(t('drag_hint'))}">${ico('grip', 'ic-sm')}</span>${ico(catIcon(c.name))}${esc(catLabel(c.name))}</span>
        <span class="row-actions">${bt}<button type="button" class="edit" aria-label="${esc(t('edit_aria'))}">${ico('pencil', 'ic-sm')}</button>${extra}</span>
      </div>`;
  }).join('');
}

function renderIconPicker() {
  const make = (sel) => CAT_ICONS.map((n) =>
    `<button type="button" class="icon-opt${n === sel ? ' active' : ''}" data-icon="${n}" aria-label="${esc(t('icon_aria', { n }))}" aria-pressed="${n === sel}">${ico(n)}</button>`).join('');
  $('new-cat-picker').innerHTML = make(newCatIcon);
  $('new-pay-picker').innerHTML = make(newPayIcon);
}

function setBudget(key, raw) {
  const v = parseFloat(raw);
  if (v > 0) budgets[key] = v; else delete budgets[key];
  saveSetting('budgets', budgets);
}

async function addCategory() {
  const name = $('new-cat-name').value.trim();
  if (!name) return toast(t('need_cat_name'));
  const lower = name.toLowerCase();
  if (allCats().some((c) => c.name !== editingCatKey && (c.name.toLowerCase() === lower || catLabel(c.name).toLowerCase() === lower))) return toast(t('cat_exists'));
  if (editingCatKey) return saveCategoryEdit(name);
  customCats.push({ name, icon: newCatIcon });
  saveSetting('customCats', customCats);
  setBudget(name, $('new-cat-budget').value);
  $('new-cat-name').value = '';
  $('new-cat-budget').value = '';
  newCatIcon = 'tag';
  renderIconPicker(); fillCategorySelects($('f-category').value); renderCategorySettings(); renderDashboard();
  toast(t('cat_added'));
}

async function deleteCategory(index) {
  const c = customCats[index];
  if (!c) return;
  const used = receipts.filter((r) => r.category === c.name).length;
  if (!(await confirmDialog(used ? t('confirm_del_cat_used', { name: c.name, used }) : t('confirm_del_cat', { name: c.name })))) return;
  customCats.splice(index, 1);
  if (editingCatKey === c.name) cancelEditCategory();
  saveSetting('customCats', customCats);
  delete budgets[c.name]; saveSetting('budgets', budgets);
  fillCategorySelects($('f-category').value); renderCategorySettings(); renderHistory(); renderDashboard();
}

function renderPaymentSettings() {
  $('pay-settings-list').innerHTML = allPays().map((k) => {
    const ci = customPays.findIndex((p) => p.name === k);
    const extra = ci < 0
      ? `<span class="muted">${esc(t('default_tag'))}</span>`
      : `<button class="del" onclick="deletePayment(${ci})" aria-label="${esc(t('delete_pay_aria'))}">${ico('trash', 'ic-sm')}</button>`;
    return `
      <div class="setting-row sort-row" data-key="${esc(k)}">
        <span class="lead"><span class="drag-handle" style="touch-action:none" aria-label="${esc(t('drag_hint'))}">${ico('grip', 'ic-sm')}</span>${ico(payIcon(k))}${esc(payLabel(k))}</span>
        <span class="row-actions"><button type="button" class="edit" aria-label="${esc(t('edit_aria'))}">${ico('pencil', 'ic-sm')}</button>${extra}</span>
      </div>`;
  }).join('');
}

async function addPayment() {
  const name = $('new-pay-name').value.trim();
  if (!name) return toast(t('need_pay_name'));
  const lower = name.toLowerCase();
  const exists = PAYMENT_METHODS.some((k) => k !== editingPayKey && (k === lower || payLabel(k).toLowerCase() === lower)) ||
    customPays.some((p) => p.name !== editingPayKey && p.name.toLowerCase() === lower);
  if (exists) return toast(t('pay_exists'));
  if (editingPayKey) return savePaymentEdit(name);
  customPays.push({ name, icon: newPayIcon });
  saveSetting('customPays', customPays);
  $('new-pay-name').value = '';
  newPayIcon = 'tag';
  renderIconPicker(); fillPaymentSelect($('f-payment').value); renderPaymentSettings();
  toast(t('pay_added'));
}

async function deletePayment(index) {
  const item = customPays[index];
  if (!item) return;
  const used = receipts.filter((r) => r.payment_method === item.name).length;
  if (!(await confirmDialog(used ? t('confirm_del_pay_used', { name: item.name, used }) : t('confirm_del_pay', { name: item.name })))) return;
  customPays.splice(index, 1);
  if (editingPayKey === item.name) cancelEditPayment();
  saveSetting('customPays', customPays);
  fillPaymentSelect($('f-payment').value); renderPaymentSettings(); renderHistory();
}

function syncEditUi() {
  $('cat-add-btn').textContent = editingCatKey ? t('save') : t('add');
  $('cat-cancel-btn').style.display = editingCatKey ? '' : 'none';
  $('pay-add-btn').textContent = editingPayKey ? t('save') : t('add');
  $('pay-cancel-btn').style.display = editingPayKey ? '' : 'none';
}

function startEditCategory(key) {
  editingCatKey = key;
  $('new-cat-name').value = catLabel(key);
  $('new-cat-budget').value = budgets[key] || '';
  newCatIcon = catIcon(key);
  syncEditUi(); renderIconPicker();
  $('new-cat-name').focus();
}
function cancelEditCategory() {
  editingCatKey = null;
  $('new-cat-name').value = '';
  $('new-cat-budget').value = '';
  newCatIcon = 'tag';
  syncEditUi(); renderIconPicker();
}
async function saveCategoryEdit(name) {
  const key = editingCatKey;
  const ci = customCats.findIndex((c) => c.name === key);
  let finalKey = key;
  if (ci >= 0) {
    if (name !== key) {
      const { error } = await supabaseClient.from('receipts').update({ category: name }).eq('category', key).eq('user_id', currentUser.id);
      if (error) return toast(t('failed', { msg: error.message }));
      receipts.forEach((r) => { if (r.category === key) r.category = name; });
      catOrder = catOrder.map((k) => (k === key ? name : k)); saveSetting('catOrder', catOrder);
      Object.keys(merchantCat).forEach((m) => { if (merchantCat[m] === key) merchantCat[m] = name; }); saveSetting('merchantCat', merchantCat);
      if (budgets[key] !== undefined) { budgets[name] = budgets[key]; delete budgets[key]; }
      finalKey = name;
    }
    customCats[ci] = { name, icon: newCatIcon };
    saveSetting('customCats', customCats);
  } else {
    const o = { icon: newCatIcon };
    if (name !== (CAT_LABELS[key]?.[currentLang] || key)) o.label = name;
    catOverrides[key] = o;
    saveSetting('catOverrides', catOverrides);
  }
  setBudget(finalKey, $('new-cat-budget').value);
  const sel = $('f-category').value;
  cancelEditCategory();
  fillCategorySelects(sel === key ? finalKey : sel);
  renderCategorySettings(); renderHistory(); renderDashboard();
  toast(t('cat_updated'));
}

function startEditPayment(key) {
  editingPayKey = key;
  $('new-pay-name').value = payLabel(key);
  newPayIcon = payIcon(key);
  syncEditUi(); renderIconPicker();
  $('new-pay-name').focus();
}
function cancelEditPayment() {
  editingPayKey = null;
  $('new-pay-name').value = '';
  newPayIcon = 'tag';
  syncEditUi(); renderIconPicker();
}
async function savePaymentEdit(name) {
  const key = editingPayKey;
  const ci = customPays.findIndex((p) => p.name === key);
  if (ci >= 0) {
    if (name !== key) {
      const { error } = await supabaseClient.from('receipts').update({ payment_method: name }).eq('payment_method', key).eq('user_id', currentUser.id);
      if (error) return toast(t('failed', { msg: error.message }));
      receipts.forEach((r) => { if (r.payment_method === key) r.payment_method = name; });
      payOrder = payOrder.map((k) => (k === key ? name : k)); saveSetting('payOrder', payOrder);
    }
    customPays[ci] = { name, icon: newPayIcon };
    saveSetting('customPays', customPays);
  } else {
    const o = { icon: newPayIcon };
    if (name !== (I18N[currentLang]['pay_' + key] ?? key)) o.label = name;
    payOverrides[key] = o;
    saveSetting('payOverrides', payOverrides);
  }
  const sel = $('f-payment').value;
  cancelEditPayment();
  fillPaymentSelect(sel === key ? name : sel);
  renderPaymentSettings(); renderHistory(); renderDashboard();
  toast(t('pay_updated'));
}

// ---------- Peraturan berulang ----------
function renderRecurringSettings() {
  const box = $('rec-settings-list');
  if (!box) return;
  box.innerHTML = recurring.length
    ? recurring.map((r, i) => `
      <div class="setting-row">
        <span class="lead">${ico('repeat')}${esc(r.merchant_name)}</span>
        <span class="row-actions"><span class="muted">${money(r.total_amount)} · ${r.day}</span><button class="del" onclick="deleteRecurring(${i})" aria-label="${esc(t('delete'))}">${ico('trash', 'ic-sm')}</button></span>
      </div>`).join('')
    : `<p class="muted" style="padding:12px 0">${esc(t('recurring_empty'))}</p>`;
}
async function deleteRecurring(i) {
  const r = recurring[i];
  if (!r || !(await confirmDialog(t('confirm_del_rec', { name: r.merchant_name })))) return;
  recurring.splice(i, 1);
  saveSetting('recurring', recurring);
  renderRecurringSettings();
}

// ---------- CSV ----------
function exportCSV() {
  if (!receipts.length) return toast(t('no_export'));
  const cell = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const header = [t('csv_date'), t('csv_store'), t('csv_type'), t('csv_category'), t('csv_payment'), t('csv_amount'), t('csv_notes'), t('csv_image')];
  const rows = receipts.map((r) =>
    [r.receipt_date, r.merchant_name, r.type || 'expense', r.category, payLabel(r.payment_method), r.total_amount, r.notes, r.image_url].map(cell).join(','));
  const blob = new Blob(['\uFEFF' + [header.map(cell).join(','), ...rows].join('\n')], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `resit-${todayStr()}.csv`;
  a.click();
  URL.revokeObjectURL(a.href);
}

function parseCSV(text) {
  const rows = [];
  let row = [], f = '', q = false;
  text = text.replace(/^\uFEFF/, '');
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(f); f = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(f); f = '';
      if (row.some((x) => x !== '')) rows.push(row);
      row = [];
    } else f += c;
  }
  row.push(f);
  if (row.some((x) => x !== '')) rows.push(row);
  return rows;
}
function normDate(s) {
  s = String(s || '').trim();
  let m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (m) return ymdStr(+m[1], +m[2], +m[3]);
  m = s.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})/);
  return m ? ymdStr(+m[3], +m[2], +m[1]) : null;
}

async function importCSV(file) {
  if (!file || !requireLogin()) return;
  const rows = parseCSV(await file.text());
  if (rows.length < 2) return toast(t('import_none'));
  const H = { date: ['date', 'tarikh'], store: ['store', 'kedai', 'merchant'], type: ['type', 'jenis'], cat: ['category', 'kategori'], pay: ['payment', 'cara bayar'], amt: ['amount', 'jumlah'], notes: ['notes', 'nota'] };
  const head = rows[0].map((h) => h.trim().toLowerCase());
  const def = { date: 0, store: 1, type: 2, cat: 3, pay: 4, amt: 5, notes: 6 };
  const ix = {};
  Object.keys(H).forEach((k) => { const i = head.findIndex((h) => H[k].includes(h)); ix[k] = i >= 0 ? i : def[k]; });

  const out = [], newPays = [];
  rows.slice(1).forEach((c) => {
    const date = normDate(c[ix.date]);
    const amt = parseFloat(String(c[ix.amt] || '').replace(/[^0-9.\-]/g, ''));
    const store = String(c[ix.store] || '').trim();
    if (!date || !store || !isFinite(amt) || amt < 0) return;
    const cv = String(c[ix.cat] || '').trim().toLowerCase();
    const cat = allCats().find((x) => x.name.toLowerCase() === cv || catLabel(x.name).toLowerCase() === cv)?.name || FALLBACK_CAT;
    const pv = String(c[ix.pay] || '').trim();
    let pay = null;
    if (pv) {
      pay = allPays().find((k) => k.toLowerCase() === pv.toLowerCase() || payLabel(k).toLowerCase() === pv.toLowerCase());
      if (!pay) { pay = pv; if (!newPays.includes(pv)) newPays.push(pv); }
    }
    out.push({
      user_id: currentUser.id, merchant_name: store.slice(0, 80), receipt_date: date, total_amount: amt, category: cat, payment_method: pay,
      type: /income|pendapatan/i.test(c[ix.type] || '') ? 'income' : 'expense', notes: String(c[ix.notes] || '').trim() || null, image_url: null, image_path: null,
    });
  });
  if (!out.length) return toast(t('import_none'));
  if (!(await confirmDialog(t('import_confirm', { n: out.length }), { danger: false }))) return;
  for (let i = 0; i < out.length; i += 100) {
    const { error } = await supabaseClient.from('receipts').insert(out.slice(i, i + 100));
    if (error) return toast(t('failed', { msg: error.message }));
  }
  if (newPays.length) { newPays.forEach((n) => customPays.push({ name: n, icon: 'tag' })); saveSetting('customPays', customPays); fillPaymentSelect($('f-payment').value); renderPaymentSettings(); }
  toast(t('import_done', { n: out.length }));
  await fetchReceipts();
}

async function deleteAllData() {
  if (!receipts.length) return toast(t('no_delete'));
  if (!(await confirmDialog(t('confirm_delete_all', { n: receipts.length })))) return;
  if (!(await confirmDialog(t('confirm_sure')))) return;
  try {
    const paths = receipts.map((r) => r.image_path).filter(Boolean);
    if (paths.length) await supabaseClient.storage.from(BUCKET).remove(paths);
    const { error } = await supabaseClient.from('receipts').delete().eq('user_id', currentUser.id);
    if (error) throw error;
    toast(t('all_deleted'));
    await fetchReceipts();
  } catch (err) { toast(t('delete_failed', { msg: err.message })); }
}

// ==========================================
// 7b. AKAUN (LOG MASUK E-MEL TANPA KATA LALUAN)
// ==========================================
const REDIRECT_URL = location.origin + location.pathname;
const isValidEmail = (e) => /^\S+@\S+\.\S+$/.test(e);

function renderAccount() {
  const box = $('account-box');
  if (!box) return;
  const typed = $('acc-email')?.value || '';
  if (!isLoggedIn()) {
    box.innerHTML = `
      <div class="setting-row"><span class="lead">${ico('user')}${esc(t('acc_status'))}</span><span class="muted">${esc(t('acc_guest'))}</span></div>
      <div class="acc-form">
        <input type="email" id="acc-email" placeholder="${esc(t('email_ph'))}" autocomplete="email" />
        <button class="btn btn-primary" onclick="loginWithEmail()">${esc(t('link_btn'))}</button>
      </div>
      <p class="acc-note">${esc(t('no_pwd_note'))}</p>`;
    if (typed) $('acc-email').value = typed;
  } else {
    box.innerHTML = `
      <div class="setting-row"><span class="lead">${ico('user')}${esc(t('signed_in_as'))}</span><span class="muted">${esc(currentUser.email || '')}</span></div>
      <div class="setting-row"><span class="lead">${ico('logout')}${esc(t('logout'))}</span><button class="btn btn-danger" onclick="signOutAccount()">${esc(t('logout'))}</button></div>`;
  }
}
async function loginWithEmail() {
  const email = $('acc-email').value.trim();
  if (!isValidEmail(email)) return toast(t('invalid_email'));
  const { error } = await supabaseClient.auth.signInWithOtp({ email, options: { emailRedirectTo: REDIRECT_URL, shouldCreateUser: true } });
  if (error) {
    // Trigger auth.users tolak → mesej biasanya "Database error saving new user"
    // atau mengandungi "EMAIL_NOT_ALLOWED" / "not allowed"
    const msg = error.message || '';
    if (/EMAIL_NOT_ALLOWED|not.?allowed|database error saving new user/i.test(msg)) {
      return toast(t('not_allowed'), { ms: 6000 });
    }
    return toast(t('failed', { msg }));
  }
  toast(t('login_sent'));
}
async function signOutAccount() {
  if (!(await confirmDialog(t('confirm_logout'), { danger: false }))) return;
  if (currentUser) await idb.set('receipts:' + currentUser.id, []);
  await supabaseClient.auth.signOut();
  location.reload();
}

supabaseClient.auth.onAuthStateChange((event, session) => {
  setTimeout(async () => {
    if (!session?.user || session.user.is_anonymous) {
      if (event === 'SIGNED_OUT') {
        currentUser = null; receipts = []; readyUid = null; recurringRan = false;
        renderAccount(); renderUserInfo(); renderHistory(); renderDashboard();
      }
      return;
    }
    const changed = currentUser?.id !== session.user.id;
    currentUser = session.user;
    renderAccount(); renderUserInfo();
    if (changed) {
      await onLoggedIn();
      if (event !== 'INITIAL_SESSION') toast(t('login_ok'));
    }
  }, 0);
});

// ==========================================
// 8. ONBOARDING, TARIK-UNTUK-MUAT-SEMULA, SUSUN SERET
// ==========================================
const ONB = [{ i: 'camera', k: 1 }, { i: 'scan', k: 2 }, { i: 'chart', k: 3 }];
let onbStep = 0, onbRelease = null;
function renderOnb() {
  const s = ONB[onbStep];
  $('onb-icon').innerHTML = ico(s.i, 'ic-xl');
  $('onb-title').textContent = t(`onb${s.k}_t`);
  $('onb-text').textContent = t(`onb${s.k}_d`);
  $('onb-dots').innerHTML = ONB.map((_, i) => `<span class="${i === onbStep ? 'on' : ''}"></span>`).join('');
  $('onb-next').textContent = onbStep === ONB.length - 1 ? t('onb_start') : t('onb_next');
}
function closeOnb() {
  $('onb-modal').classList.remove('open');
  localStorage.setItem('onboarded', '1');
  if (onbRelease) { onbRelease(); onbRelease = null; }
}
function openOnb() {
  onbStep = 0; renderOnb();
  $('onb-modal').classList.add('open');
  onbRelease = trapFocus($('onb-modal'), closeOnb);
  $('onb-next').focus();
}

(function initPullToRefresh() {
  const sc = $('app-content'), el = $('ptr');
  let y0 = null, dy = 0;
  sc.addEventListener('touchstart', (e) => {
    const v = document.querySelector('.view.active');
    y0 = sc.scrollTop <= 0 && isLoggedIn() && v && v.id !== 'view-settings' && !$('sheet').classList.contains('open') ? e.touches[0].clientY : null;
  }, { passive: true });
  sc.addEventListener('touchmove', (e) => {
    if (y0 === null) return;
    dy = Math.max(0, Math.min(90, (e.touches[0].clientY - y0) * 0.5));
    el.style.transform = `translateY(${dy - 50}px)`;
    el.style.opacity = Math.min(1, dy / 45);
    el.textContent = dy >= 45 ? t('pull_release') : t('pull_hint');
  }, { passive: true });
  sc.addEventListener('touchend', async () => {
    if (y0 === null) return;
    const go = dy >= 45;
    y0 = null; dy = 0;
    el.style.transform = ''; el.style.opacity = 0;
    if (go) { buzz(15); await fetchReceipts(); }
  });
})();

function makeSortable(container, onReorder) {
  if (!container) return;
  container.addEventListener('contextmenu', (e) => { if (e.target.closest('.drag-handle')) e.preventDefault(); });
  container.addEventListener('touchstart', (e) => { if (e.target.closest('.drag-handle')) e.preventDefault(); }, { passive: false });
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
    const h = rects[from].height, startY = e.clientY;
    let to = from;
    row.classList.add('dragging');
    const stopScroll = (ev) => ev.preventDefault();
    const onMove = (ev) => {
      if (ev.pointerId !== pid) return;
      const minDy = rects[0].top - rects[from].top, maxDy = rects[rects.length - 1].top - rects[from].top;
      const dy = Math.min(maxDy, Math.max(minDy, ev.clientY - startY));
      row.style.transform = `translateY(${dy}px)`;
      const center = rects[from].top + dy + h / 2;
      to = rects.reduce((n, r, i) => n + (i !== from && r.top + r.height / 2 < center ? 1 : 0), 0);
      rows.forEach((r, i) => {
        if (i === from) return;
        let shift = 0;
        if (from < to && i > from && i <= to) shift = -h; else if (from > to && i >= to && i < from) shift = h;
        r.style.transform = shift ? `translateY(${shift}px)` : '';
      });
    };
    const onEnd = (ev) => {
      if (ev.pointerId !== pid) return;
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerup', onEnd);
      document.removeEventListener('pointercancel', onEnd);
      document.removeEventListener('touchmove', stopScroll);
      rows.forEach((r) => { r.style.transform = ''; r.classList.remove('dragging'); });
      if (ev.type === 'pointerup' && to !== from) {
        const keys = rows.map((r) => r.dataset.key);
        keys.splice(to, 0, keys.splice(from, 1)[0]);
        onReorder(keys);
        buzz(10);
      }
    };
    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', onEnd);
    document.addEventListener('pointercancel', onEnd);
    document.addEventListener('touchmove', stopScroll, { passive: false });
  });
}

// ==========================================
// PANEL ADMIN (allowlist)
// ==========================================
async function adminCall(action, payload = {}) {
  const { data, error } = await supabaseClient.functions.invoke('admin-allowlist', {
    body: { action, ...payload },
  });
  if (error) {
    let msg = error.message;
    try { const b = await error.context?.json?.(); if (b?.error) msg = b.error; } catch {}
    throw new Error(msg);
  }
  if (data?.error) throw new Error(data.error);
  return data;
}

async function renderAdminPanel() {
  const section = $('admin-section');
  const box = $('admin-body');
  if (!section || !box) return;
  if (!currentUser?.isAdmin) { section.style.display = 'none'; return; }
  section.style.display = '';
  box.innerHTML = `<p class="muted">${esc(t('admin_loading'))}</p>`;
  try {
    const data = await adminCall('list');
    const allowed = data.allowed || [];
    const attempts = data.attempts || [];
    const pending = attempts.filter(
      (a) => !allowed.some((x) => String(x.email).toLowerCase() === String(a.email).toLowerCase())
    );
    box.innerHTML = `
      <h4 class="admin-h">${esc(t('admin_pending'))} (${pending.length})</h4>
      ${pending.length
        ? pending.map((a) => `
          <div class="admin-row">
            <span class="admin-email">${esc(a.email)}</span>
            <span class="muted">${esc(new Date(a.attempted_at).toLocaleString(locale()))}</span>
            <span class="admin-actions">
              <button type="button" class="btn btn-primary btn-sm" onclick="adminApprove('${esc(a.email)}')">${esc(t('admin_approve'))}</button>
              <button type="button" class="btn btn-danger btn-sm" onclick="adminRejectAttempt('${esc(a.email)}')">${esc(t('admin_reject'))}</button>
            </span>
          </div>`).join('')
        : `<p class="muted">${esc(t('admin_no_pending'))}</p>`}

      <h4 class="admin-h">${esc(t('admin_allowed'))} (${allowed.length})</h4>
      ${allowed.map((a) => {
        const isSelf = (currentUser.email || '').toLowerCase() === String(a.email).toLowerCase();
        return `
          <div class="admin-row">
            <span class="admin-email">${esc(a.email)}${a.note ? ` <span class="muted">— ${esc(a.note)}</span>` : ''}</span>
            <span class="admin-actions">
              <button type="button" class="btn btn-danger btn-sm" onclick="adminRemove('${esc(a.email)}')" ${isSelf ? 'disabled title="—"' : ''}>${esc(t('admin_remove'))}</button>
            </span>
          </div>`;
      }).join('')}

      <div class="admin-add">
        <input id="admin-new-email" class="input" type="email" placeholder="${esc(t('admin_add_ph'))}" />
        <button type="button" class="btn btn-primary" onclick="adminAddManual()">${esc(t('admin_add'))}</button>
      </div>`;
  } catch (e) {
    box.innerHTML = `<p class="empty-msg">${esc(t('admin_error', { msg: e.message }))}</p>`;
  }
}

async function adminApprove(email) {
  try {
    await adminCall('approve', { email });
    toast(t('admin_approved', { email }));
    renderAdminPanel();
  } catch (e) { toast(t('failed', { msg: e.message })); }
}

async function adminRejectAttempt(email) {
  if (!(await confirmDialog(t('admin_confirm_reject', { email })))) return;
  try {
    await adminCall('reject_attempt', { email });
    toast(t('admin_rejected'));
    renderAdminPanel();
  } catch (e) { toast(t('failed', { msg: e.message })); }
}

async function adminRemove(email) {
  if (!(await confirmDialog(t('admin_confirm_remove', { email })))) return;
  try {
    await adminCall('remove', { email });
    toast(t('admin_removed', { email }));
    renderAdminPanel();
  } catch (e) { toast(t('failed', { msg: e.message })); }
}

async function adminAddManual() {
  const inp = $('admin-new-email');
  const email = (inp?.value || '').trim().toLowerCase();
  if (!email) return;
  try {
    await adminCall('approve', { email });
    toast(t('admin_approved', { email }));
    renderAdminPanel();
  } catch (e) { toast(t('failed', { msg: e.message })); }
}

// ==========================================
// 9. EVENT LISTENERS & MULA
// ==========================================
['file-camera', 'file-gallery', 'file-pdf'].forEach((id) => {
  $(id).addEventListener('change', (e) => { handleFile(e.target.files[0]); e.target.value = ''; });
});

$('receipt-list').addEventListener('click', (e) => {
  if (e.target.closest('#load-more')) { histLimit += 50; renderHistory(); return; }
  const item = e.target.closest('.receipt-item');
  if (!item || item.classList.contains('skel')) return;
  if (bulkMode) {
    const id = item.dataset.id;
    if (selected.has(id)) selected.delete(id); else selected.add(id);
    buzz(8); renderHistory();
  } else openSheet(item.dataset.id);
});
$('image-preview').addEventListener('click', (e) => { if (e.target.closest('img')) openViewer(); });
$('cat-settings-list').addEventListener('click', (e) => { const b = e.target.closest('.edit'); if (b) startEditCategory(b.closest('[data-key]').dataset.key); });
$('pay-settings-list').addEventListener('click', (e) => { const b = e.target.closest('.edit'); if (b) startEditPayment(b.closest('[data-key]').dataset.key); });
$('new-cat-picker').addEventListener('click', (e) => { const b = e.target.closest('.icon-opt'); if (b) { newCatIcon = b.dataset.icon; renderIconPicker(); } });
$('new-pay-picker').addEventListener('click', (e) => { const b = e.target.closest('.icon-opt'); if (b) { newPayIcon = b.dataset.icon; renderIconPicker(); } });

makeSortable($('cat-settings-list'), (keys) => {
  catOrder = keys; saveSetting('catOrder', keys);
  fillCategorySelects($('f-category').value); renderCategorySettings();
});
makeSortable($('pay-settings-list'), (keys) => {
  payOrder = keys; saveSetting('payOrder', keys);
  fillPaymentSelect($('f-payment').value); renderPaymentSettings();
});

// Tapis & carian (debounce 200ms)
$('search-input').addEventListener('input', debounce(resetHist, 200));
['filter-cat', 'f-type', 'f-sort'].forEach((id) => $(id).addEventListener('change', resetHist));
['f-min', 'f-max'].forEach((id) => $(id).addEventListener('input', debounce(resetHist, 300)));

// Tarikh & graf
$('date-from').addEventListener('change', onDateChange);
$('date-to').addEventListener('change', onDateChange);
['chart-type', 'cmp-on', 'cmp-from', 'cmp-to'].forEach((id) => $(id).addEventListener('change', () => safe(renderChart)));
$('preset-chips').addEventListener('click', (e) => { const c = e.target.closest('.chip'); if (c) setPreset(c.dataset.preset); });
$('heatmap').addEventListener('click', (e) => {
  const c = e.target.closest('.heat-cell');
  if (c) toast(`${formatDate(c.dataset.d)}: ${money(c.dataset.v)}`, { ms: 2000 });
});

$('currency-select').addEventListener('change', (e) => {
  currency = e.target.value;
  localStorage.setItem('currency', currency);
  renderHistory(); renderDashboard();
});
$('theme-select').addEventListener('change', (e) => setThemeMode(e.target.value));
$('import-file').addEventListener('change', (e) => { importCSV(e.target.files[0]); e.target.value = ''; });

// Borang: kategori dipelajari, serlahan "kurang pasti" hilang bila diedit
$('f-category').addEventListener('change', () => { catTouched = true; });
$('f-merchant').addEventListener('change', () => { if (!catTouched && !editingId) applyLearned(); });
['f-merchant', 'f-amount', 'f-date', 'f-category'].forEach((id) => {
  $(id).addEventListener('input', () => $(id).classList.remove('low-conf'));
  $(id).addEventListener('change', () => $(id).classList.remove('low-conf'));
});

// Onboarding
$('onb-next').addEventListener('click', () => { if (onbStep < ONB.length - 1) { onbStep++; renderOnb(); } else closeOnb(); });
$('onb-skip').addEventListener('click', closeOnb);

// Getaran halus pada butang utama
document.addEventListener('pointerdown', (e) => { if (e.target.closest('.btn-primary, .nav-item, .chip')) buzz(8); });

// ---------- Mula ----------
$('currency-select').value = currency;
const nowD = new Date();
$('cmp-from').value = ymd(new Date(nowD.getFullYear(), nowD.getMonth() - 1, 1));
$('cmp-to').value = ymd(new Date(nowD.getFullYear(), nowD.getMonth(), 0));
if (preset === 'custom') {
  $('date-from').value = localStorage.getItem('dateFrom') || '';
  $('date-to').value = localStorage.getItem('dateTo') || '';
} else {
  const [f, to] = presetRange(preset);
  $('date-from').value = f; $('date-to').value = to;
}
renderPresetChips();
applyTheme(effectiveTheme());
applyLang(currentLang);
switchView('history');
initAuth();
if (!localStorage.getItem('onboarded')) openOnb();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch((e) => console.warn('Service worker gagal:', e));
  });
}
