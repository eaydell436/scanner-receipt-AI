// ==========================================
// 1. INITIALIZE SUPABASE
// ==========================================
const SUPABASE_URL = 'https://pbxyagcrbojmxtshdute.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_jfS8HxzHPYs1_S3UVCMqqw_7wuR9_uo';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentUser = null;

// Fungsi Log Masuk Tanpa Nama (Anonymous)
async function initAuth() {
  const { data, error } = await supabaseClient.auth.signInAnonymously();
  if (error) {
    console.error('Gagal log masuk:', error.message);
    alert('Ralat sambungan pangkalan data.');
  } else {
    currentUser = data.user;
    console.log('Log masuk berjaya sebagai:', currentUser.id);
    fetchReceipts(); // Tarik data resit dari Supabase
  }
}

// ==========================================
// 2. TEMA & NAVIGASI (Sama macam sebelum ini)
// ==========================================
const themeBtn = document.getElementById('theme-btn');
const htmlTag = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'dark';

htmlTag.setAttribute('data-theme', savedTheme);
updateThemeBtnText(savedTheme);

function toggleTheme() {
  const currentTheme = htmlTag.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  htmlTag.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeBtnText(newTheme);
}

function updateThemeBtnText(theme) {
  themeBtn.innerText = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
}

function switchView(viewName, navBtn = null) {
  document
    .querySelectorAll('.view')
    .forEach((view) => view.classList.remove('active'));
  document.getElementById(`view-${viewName}`).classList.add('active');

  if (navBtn) {
    document
      .querySelectorAll('.nav-item')
      .forEach((btn) => btn.classList.remove('active'));
    navBtn.classList.add('active');
  } else {
    document
      .querySelectorAll('.nav-item')
      .forEach((btn) => btn.classList.remove('active'));
    if (viewName === 'upload')
      document.querySelectorAll('.nav-item')[1].classList.add('active');
    if (viewName === 'history')
      document.querySelectorAll('.nav-item')[0].classList.add('active');
    if (viewName === 'dashboard')
      document.querySelectorAll('.nav-item')[2].classList.add('active');
  }

  const mainNav = document.getElementById('main-nav');
  mainNav.style.display = viewName === 'category' ? 'none' : 'flex';
}

function triggerScan(btn) {
  switchView('upload', btn);
  document.getElementById('file-input').click();
}

function selectCategory(clickedItem) {
  document
    .querySelectorAll('.cat-item')
    .forEach((item) => item.classList.remove('selected'));
  clickedItem.classList.add('selected');
}

// ==========================================
// 3. FUNGSI SCAN RESIT & SIMPAN KE SUPABASE
// ==========================================
const fileInput = document.getElementById('file-input');
const scanBtn = document.getElementById('scan-btn');

fileInput.addEventListener('change', async function (e) {
  const file = e.target.files[0];
  if (!file || !currentUser) return;

  const originalHTML = scanBtn.innerHTML;

  // Animasi Loading
  scanBtn.innerHTML = `
        <div class="upload-circle" style="animation: spin 2s linear infinite; background-color: transparent; border: 3px solid var(--primary);">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="3"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
        </div>
        <h2 style="color: var(--text-main);">Scanning...</h2>
        <p>Uploading & AI reading</p>
    `;

  try {
    // A. MUAT NAIK GAMBAR KE SUPABASE STORAGE
    const fileExt = file.name.split('.').pop();
    const fileName = `${currentUser.id}-${Date.now()}.${fileExt}`;

    const { data: uploadData, error: uploadError } =
      await supabaseClient.storage
        .from('receipt-images')
        .upload(fileName, file);

    if (uploadError) throw uploadError;

    // Dapatkan URL gambar
    const {
      data: { publicUrl },
    } = supabaseClient.storage.from('receipt-images').getPublicUrl(fileName);

    // B. SIMULASI AI (Di sini anda akan panggil Free.ai nanti)
    // Kita tunggu 2 saat sebagai simulasi AI sedang membaca gambar
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const mockAIData = {
      merchant_name: 'Restoran Nasi Kandar',
      receipt_date: new Date().toISOString().split('T')[0], // Tarikh hari ini
      total_amount: 24.5,
      image_url: publicUrl,
    };

    // C. SIMPAN DATA KE DALAM JADUAL 'receipts' SUPABASE
    const { error: dbError } = await supabaseClient.from('receipts').insert([
      {
        user_id: currentUser.id,
        merchant_name: mockAIData.merchant_name,
        receipt_date: mockAIData.receipt_date,
        total_amount: mockAIData.total_amount,
        image_url: mockAIData.image_url,
      },
    ]);

    if (dbError) throw dbError;

    // Berjaya!
    alert('Resit berjaya disimpan ke Database!');
    scanBtn.innerHTML = originalHTML;

    // Refresh kiraan dashboard & pergi ke History
    fetchReceipts();
    switchView('history', document.querySelectorAll('.nav-item')[0]);
  } catch (error) {
    console.error('Error:', error);
    alert('Gagal memproses resit: ' + error.message);
    scanBtn.innerHTML = originalHTML;
  } finally {
    fileInput.value = ''; // Reset input
  }
});

// ==========================================
// 4. TARIK DATA DARI SUPABASE (HISTORY & DASHBOARD)
// ==========================================
async function fetchReceipts() {
  if (!currentUser) return;

  // Ambil data dari Supabase
  const { data: receipts, error } = await supabaseClient
    .from('receipts')
    .select('*')
    .order('created_at', { ascending: false }); // Yang terbaru di atas

  if (error) {
    console.error('Gagal tarik data:', error);
    return;
  }

  renderHistory(receipts);
  renderDashboard(receipts);
}

// Fungsi Papar Skrin History
function renderHistory(receipts) {
  const listContainer = document.querySelector('.receipt-list');
  const headerCount = document.querySelector('.history-header p');

  listContainer.innerHTML = ''; // Clear data dummy HTML
  headerCount.innerText = `${receipts.length} receipt(s)`;

  if (receipts.length === 0) {
    listContainer.innerHTML = `<p style="text-align:center; color:var(--text-muted); margin-top:20px;">Tiada resit lagi. Sila scan.</p>`;
    return;
  }

  receipts.forEach((receipt) => {
    const item = document.createElement('div');
    item.className = 'receipt-item';
    // Format tarikh ke bentuk yang cantik
    const dateObj = new Date(receipt.receipt_date);
    const formattedDate = dateObj.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    item.innerHTML = `
            <div class="receipt-left">
                <div class="receipt-icon">🧾</div>
                <div class="receipt-info">
                    <h4>${receipt.merchant_name}</h4>
                    <p>${formattedDate}</p>
                </div>
            </div>
            <div class="receipt-amount">MYR ${parseFloat(
              receipt.total_amount
            ).toFixed(2)}</div>
        `;
    listContainer.appendChild(item);
  });
}

// Fungsi Papar Skrin Dashboard
function renderDashboard(receipts) {
  let totalExpense = 0;
  receipts.forEach((r) => (totalExpense += parseFloat(r.total_amount)));

  // Kemas kini UI Dashboard
  document.querySelector(
    '.balance-card h1'
  ).innerText = `-MYR ${totalExpense.toFixed(2)}`;
  document.querySelectorAll(
    '.detail-box h4'
  )[1].innerText = `MYR ${totalExpense.toFixed(2)}`;
}

// ==========================================
// 5. JALANKAN APLIKASI
// ==========================================
initAuth(); // Mula-mula, log masuk secara anon, kemudian tarik data
