import { Service, PortfolioItem, Testimonial, PricingPackage, FAQItem, TimelineStep, TechItem, EstimatorOption, QuizMajor, QuizInterest, QuizStack, TopicRecommendation, AdvantageItem } from './types';

import siInventarisImg from './assets/images/si_inventaris_1784401595185.jpg';
import siPerpusImg from './assets/images/si_perpus_1784401606812.jpg';
import siReservasiImg from './assets/images/si_reservasi_1784401618950.jpg';
import webKosImg from './assets/images/web_kos_1784401630484.jpg';
import siPosImg from './assets/images/si_pos_1784401640440.jpg';
import siDesaImg from './assets/images/si_desa_1784401650883.jpg';

export const SERVICES_DATA: Service[] = [
  {
    id: 'crud-website',
    title: 'Pengembangan Website & CRUD',
    description: 'Pembuatan website berbasis database (Create, Read, Update, Delete) menggunakan PHP Native & MySQL dengan Bootstrap. Dirancang responsif, bersih, dan mudah dipahami.',
    iconName: 'Database',
    tags: ['PHP Native', 'MySQL', 'Bootstrap 5', 'CRUD']
  },
  {
    id: 'sistem-informasi',
    title: 'Pengembangan Sistem Informasi',
    description: 'Pembangunan sistem informasi fungsional kompleks (E-Commerce, POS, SIAKAD, SPK, Manajemen Inventaris) dengan struktur PHP Native MVC atau Prosedural yang rapi dan terorganisir.',
    iconName: 'LayoutGrid',
    tags: ['PHP Native', 'MySQL', 'Bootstrap 5', 'Multi-role']
  },
  {
    id: 'ui-ux-design',
    title: 'Konsultasi Coding & UI/UX',
    description: 'Perancangan mockup Figma interaktif dan implementasi frontend modern menggunakan Tailwind CSS atau Bootstrap dengan standar visual industri.',
    iconName: 'Figma',
    tags: ['Figma', 'UI/UX', 'Tailwind', 'Responsive']
  },
  {
    id: 'database-design',
    title: 'Integrasi Database & API',
    description: 'Rancangan arsitektur ERD, normalisasi data, kueri SQL kompleks, migrasi database, serta pengembangan API (Application Programming Interface) yang aman.',
    iconName: 'Server',
    tags: ['MySQL', 'ERD', 'Normalisasi', 'Optimasi Query']
  },
  {
    id: 'debug-error',
    title: 'Debugging & Revisi Project',
    description: 'Analisis error mendalam, refactoring code, integrasi pustaka pihak ketiga, perbaikan celah keamanan, dan penyesuaian fitur yang bermasalah.',
    iconName: 'BugPlay',
    tags: ['Debugging', 'Clean Code', 'API', 'Security']
  },
  {
    id: 'hosting-deploy',
    title: 'Deploy & Hosting Server',
    description: 'Konfigurasi server, cloud hosting (VPS, cPanel, Vercel, Netlify, Cloud Run), pembelian domain, SSL, dan deployment aplikasi hingga online sepenuhnya.',
    iconName: 'Globe',
    tags: ['VPS', 'cPanel', 'Vercel', 'Domain']
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'si-inventaris',
    title: 'Sistem Manajemen Inventaris Gudang',
    description: 'Aplikasi untuk mengelola data stok barang masuk dan keluar, laporan stok, serta pencatatan inventaris gudang yang rapi.',
    category: 'sistem-informasi',
    image: siInventarisImg,
    technologies: ['PHP Native', 'MySQL', 'Bootstrap 5', 'Chart.js', 'FPDF'],
    features: ['Pencatatan Barang Masuk & Keluar', 'Kelola Kategori Barang', 'Laporan Stok Sederhana', 'Dashboard Grafik Ringkas'],
    duration: '10 Hari'
  },
  {
    id: 'si-perpus',
    title: 'Sistem Informasi Perpustakaan',
    description: 'Aplikasi perpustakaan sederhana untuk mendata buku, sirkulasi peminjaman, pencatatan pengembalian, dan perhitungan denda.',
    category: 'sistem-informasi',
    image: siPerpusImg,
    technologies: ['PHP Native', 'MySQL', 'Bootstrap 5', 'FPDF'],
    features: ['Pencatatan Pinjam & Kembali', 'Kalkulasi Denda Otomatis', 'Kelola Data Buku & Anggota', 'Laporan Riwayat Transaksi'],
    duration: '7 Hari'
  },
  {
    id: 'si-reservasi',
    title: 'Sistem Reservasi Jasa & Janji Temu',
    description: 'Aplikasi pemesanan slot konsultasi atau janji temu klien secara online dengan konfirmasi admin dan kalender jadwal.',
    category: 'crud',
    image: siReservasiImg,
    technologies: ['PHP Native', 'MySQL', 'Bootstrap 5', 'FPDF'],
    features: ['Form Pemesanan Jadwal', 'Kalender Ketersediaan Sederhana', 'Cetak Bukti Booking PDF', 'Dashboard Admin Konfirmasi'],
    duration: '5 Hari'
  },
  {
    id: 'web-kos',
    title: 'Aplikasi Sewa Kamar Kos',
    description: 'Sistem pencarian kos sederhana dengan filter harga, detail fasilitas kamar, dan form pengajuan sewa kamar.',
    category: 'web',
    image: webKosImg,
    technologies: ['PHP Native', 'MySQL', 'Bootstrap 5', 'FPDF'],
    features: ['Filter Cari Kamar Kos', 'Form Pemesanan Kamar', 'Invoice Bukti Sewa PDF', 'Kelola Kamar & Pemilik'],
    duration: '14 Hari'
  },
  {
    id: 'si-pos',
    title: 'Aplikasi Kasir Sederhana (POS)',
    description: 'Sistem kasir Point of Sales untuk mencatat transaksi penjualan harian, manajemen stok barang dagang, dan laporan laba-rugi sederhana.',
    category: 'crud',
    image: siPosImg,
    technologies: ['PHP Native', 'MySQL', 'Bootstrap 5', 'Chart.js', 'FPDF'],
    features: ['Transaksi Kasir Responsif', 'Manajemen Stok & Harga', 'Cetak Struk Transaksi', 'Grafik Laporan Penjualan'],
    duration: '12 Hari'
  },
  {
    id: 'si-desa',
    title: 'Portal Layanan Surat Desa',
    description: 'Platform digital untuk membantu pengajuan administrasi surat-menyurat warga secara mandiri and pelacakan berkas oleh admin.',
    category: 'web',
    image: siDesaImg,
    technologies: ['PHP Native', 'MySQL', 'Bootstrap 5'],
    features: ['Pengajuan Surat Online', 'Status Pelacakan Berkas', 'Arsip Digital Sederhana', 'Dashboard Kelola Warga'],
    duration: '8 Hari'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Andika Wijaya',
    role: 'Alumni S1 Teknik Informatika',
    university: 'Universitas Brawijaya',
    rating: 5,
    content: 'Mentoringnya luar biasa! Coding dijelaskan baris demi baris via Zoom, membuat saya sangat percaya diri menjawab semua pertanyaan dosen penguji saat sidang.',
    projectType: 'Sistem Informasi Inventaris'
  },
  {
    id: 'testi-2',
    name: 'Siti Rahmawati',
    role: 'Alumni S1 Sistem Informasi',
    university: 'Universitas Indonesia',
    rating: 5,
    content: 'Database dirapikan sesuai kaidah normalisasi dan aplikasinya selesai 3 hari lebih cepat. Bimbingannya ramah dan sangat komunikatif.',
    projectType: 'Aplikasi Sewa Kos'
  },
  {
    id: 'testi-3',
    name: 'Rian Hidayat',
    role: 'Alumni S1 Ilmu Komputer',
    university: 'Universitas Sebelas Maret',
    rating: 5,
    content: 'Source code sangat rapi dan responsive. Saya diajarkan cara deploy ke hosting cPanel sehingga website siap didemokan langsung.',
    projectType: 'Aplikasi Reservasi Jadwal'
  },
  {
    id: 'testi-4',
    name: 'Farida Putri',
    role: 'Alumni S1 Rekayasa Perangkat Lunak',
    university: 'Telkom University',
    rating: 5,
    content: 'Bimbingannya profesional. Tidak sekadar dibuatkan program, tetapi juga diajarkan logika alurnya secara mendalam. Sangat membantu!',
    projectType: 'Aplikasi POS Kasir'
  }
];

export const PACKAGES_DATA: PricingPackage[] = [
  {
    id: 'basic',
    name: 'Paket Basic (CRUD & Landing Page)',
    price: 'Harga Privat',
    priceNum: 0,
    description: 'Cocok untuk kebutuhan personal, website portofolio, landing page, atau modul CRUD sederhana.',
    features: [
      'CRUD Dasar & 1 Level Akses',
      'Database MySQL (Maks. 5 Tabel)',
      '1x Sesi Bedah Logika Coding',
      'Garansi Bug & Desain Responsif'
    ],
    timeline: '7 - 10 Hari'
  },
  {
    id: 'standard',
    name: 'Paket Standard (Sistem Informasi)',
    price: 'Harga Privat',
    priceNum: 0,
    description: 'Pilihan terpopuler untuk sistem informasi manajemen, portal web bisnis, dan multi-role.',
    isPopular: true,
    features: [
      'Sistem Informasi & Multi-Role (3)',
      'Visual Grafik & Export Laporan',
      'Database Ternormalisasi (Maks. 12 Tabel)',
      '2x Sesi Bedah Code & Setup Laptop',
      'Garansi Bug 30 Hari'
    ],
    timeline: '14 - 21 Hari'
  },
  {
    id: 'premium',
    name: 'Paket Premium (Enterprise & Deploy)',
    price: 'Harga Privat',
    priceNum: 0,
    description: 'Layanan all-in-one terintegrasi. Termasuk integrasi API, domain & hosting, serta bimbingan intensif.',
    features: [
      'Sistem Kustom / Skala Besar',
      'Integrasi API, Maps, atau Gateway',
      'Gratis Domain & Hosting (1 Tahun)',
      '4x Sesi Bedah Code & Bimbingan Intensif',
      'Garansi Lengkap 60 Hari'
    ],
    timeline: '25 - 35 Hari'
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: 1,
    title: 'Konsultasi Kebutuhan',
    subtitle: 'Diskusi Awal',
    description: 'Diskusikan kebutuhan fungsional sistem, ide aplikasi, alur bisnis, serta spesifikasi teknis yang Anda inginkan secara langsung via WhatsApp.'
  },
  {
    step: 2,
    title: 'Analisis & Fitur',
    subtitle: 'Rancangan Fitur',
    description: 'Kami menganalisis kebutuhan database, flowchart, dan merumuskan kontrak pengerjaan serta target waktu yang disepakati bersama.'
  },
  {
    step: 3,
    title: 'Pengerjaan Program',
    subtitle: 'Tahap Coding',
    description: 'Pengembangan sistem secara intensif. Kami membangun kode yang bersih, efisien, terstruktur, dan mudah dipelihara.'
  },
  {
    step: 4,
    title: 'Review & Uji Coba',
    subtitle: 'Uji Kelayakan',
    description: 'Aplikasi kami deploy ke server staging agar Anda bisa mencoba langsung fiturnya. Di tahap ini, penyesuaian detail dilakukan agar program presisi.'
  },
  {
    step: 5,
    title: 'Walkthrough & Penjelasan',
    subtitle: 'Transfer Knowledge',
    description: 'Sesi penjelasan interaktif untuk membedah struktur folder, alur data, rancangan database, dan logika kode agar Anda memahaminya secara utuh.'
  },
  {
    step: 6,
    title: 'Deploy & Serah Terima',
    subtitle: 'Proyek Selesai!',
    description: 'Source code utuh, database (.sql), dan panduan instalasi diserahkan seutuhnya. Website dideploy ke production hosting agar siap digunakan.'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Apakah NGODEX melayani pengembangan website kustom?',
    answer: 'Tentu saja! Kami melayani pembuatan website interaktif, sistem informasi bisnis, aplikasi desktop, hingga API kustom yang sepenuhnya disesuaikan dengan kebutuhan Anda.'
  },
  {
    id: 'faq-2',
    question: 'Apakah source code dan database diberikan seutuhnya?',
    answer: 'Ya, 100% kepemilikan source code, database (.sql), aset desain, dan dokumentasi diberikan seutuhnya kepada Anda tanpa ada file yang dikunci atau dibatasi.'
  },
  {
    id: 'faq-3',
    question: 'Bagaimana jaminan garansi jika ada bug?',
    answer: 'Kami memberikan garansi perbaikan bug gratis pasca serah terima sesuai durasi paket pilihan Anda. Kami memastikan aplikasi berjalan lancar dan stabil sepenuhnya.'
  },
  {
    id: 'faq-4',
    question: 'Apakah saya diajarkan cara menjalankan aplikasinya?',
    answer: 'Ya, kami menyediakan panduan setup lokal dan transfer pengetahuan untuk membantu menginstalasi sistem hingga siap dijalankan di komputer Anda.'
  },
  {
    id: 'faq-5',
    question: 'Bagaimana alur kerja dan sistem pembayarannya?',
    answer: 'Kami mulai dengan konsultasi kebutuhan spesifikasi, penyusunan kontrak dan estimasi pengerjaan, DP (Down Payment) mulai 40% untuk memulai pengerjaan, pengerjaan, uji coba, pelunasan, lalu penyerahan file akhir.'
  }
];

export const PORTFOLIO_CATEGORIES_DATA = [
  { id: 'all', label: 'Semua Project' },
  { id: 'crud', label: 'CRUD Standar' },
  { id: 'sistem-informasi', label: 'Sistem Informasi (SIAKAD, POS, dll.)' },
  { id: 'web', label: 'Sistem Kustom / Web-App' },
];

export const TECH_STACK_DATA: TechItem[] = [
  { name: 'PHP Native', category: 'backend', color: 'text-indigo-400', badgeBg: 'bg-indigo-400/10', borderColor: 'group-hover:border-indigo-400/30' },
  { name: 'PHP OOP Class', category: 'backend', color: 'text-blue-500', badgeBg: 'bg-blue-500/10', borderColor: 'group-hover:border-blue-500/30' },
  { name: 'PHP MVC Architecture', category: 'backend', color: 'text-emerald-500', badgeBg: 'bg-emerald-500/10', borderColor: 'group-hover:border-emerald-500/30' },
  { name: 'MySQL Database', category: 'database', color: 'text-blue-400', badgeBg: 'bg-blue-400/10', borderColor: 'group-hover:border-blue-400/30' },
  { name: 'Bootstrap 5', category: 'frontend', color: 'text-purple-500', badgeBg: 'bg-purple-500/10', borderColor: 'group-hover:border-purple-500/30' },
  { name: 'Bootstrap 4', category: 'frontend', color: 'text-purple-400', badgeBg: 'bg-purple-400/10', borderColor: 'group-hover:border-purple-400/30' },
  { name: 'AdminLTE Dashboard', category: 'frontend', color: 'text-orange-500', badgeBg: 'bg-orange-500/10', borderColor: 'group-hover:border-orange-500/30' },
  { name: 'Vanilla JavaScript', category: 'frontend', color: 'text-yellow-500', badgeBg: 'bg-yellow-500/10', borderColor: 'group-hover:border-yellow-500/30' },
  { name: 'HTML5 & CSS3', category: 'frontend', color: 'text-orange-400', badgeBg: 'bg-orange-400/10', borderColor: 'group-hover:border-orange-400/30' },
  { name: 'FPDF & DomPDF', category: 'tool', color: 'text-pink-500', badgeBg: 'bg-pink-500/10', borderColor: 'group-hover:border-pink-500/30' },
  { name: 'Chart.js Visual', category: 'tool', color: 'text-cyan-400', badgeBg: 'bg-cyan-400/10', borderColor: 'group-hover:border-cyan-400/30' },
  { name: 'Figma Mockup', category: 'tool', color: 'text-pink-400', badgeBg: 'bg-pink-400/10', borderColor: 'group-hover:border-pink-400/30' },
  { name: 'Git & GitHub', category: 'tool', color: 'text-orange-600', badgeBg: 'bg-orange-600/10', borderColor: 'group-hover:border-orange-600/30' },
  { name: 'Hosting cPanel', category: 'tool', color: 'text-yellow-600', badgeBg: 'bg-yellow-600/10', borderColor: 'group-hover:border-yellow-600/30' },
];

export const ESTIMATOR_OPTIONS_DATA: EstimatorOption[] = [
  { id: 'crud', name: 'Fitur CRUD Dasar (Tambah, Edit, Hapus)', points: 4, days: 7, category: 'Fitur Utama' },
  { id: 'login-multirole', name: 'Sistem Login & Multi-role User (Admin/User/Dosen)', points: 3, days: 5, category: 'Keamanan' },
  { id: 'dashboard', name: 'Dashboard dengan Grafik Visual (Chart.js)', points: 4, days: 5, category: 'Visualisasi' },
  { id: 'export-report', name: 'Fitur Cetak Laporan PDF / Excel Otomatis', points: 2, days: 3, category: 'Fitur Utama' },
  { id: 'maps-integration', name: 'Integrasi Google Maps / Leaflet.js', points: 5, days: 8, category: 'Integrasi' },
  { id: 'deploy-hosting', name: 'Deployment Hosting cPanel & Domain (.com / .my.id)', points: 5, days: 4, category: 'Deployment' },
  { id: 'erd-database', name: 'Desain ERD & Normalisasi Database Lengkap', points: 3, days: 4, category: 'Database' },
  { id: 'code-guidance', name: 'Sesi Tambahan Penjelasan Alur (Bedah Kode)', points: 3, days: 2, category: 'Bimbingan' },
];

export const QUIZ_MAJORS_DATA: QuizMajor[] = [
  { id: 'if', label: 'Teknik Informatika / Ilmu Komputer', desc: 'Fokus algoritma, coding PHP, & komputasi' },
  { id: 'si', label: 'Sistem Informasi', desc: 'Fokus analisis bisnis, database MySQL, & sistem web' },
  { id: 'tk', label: 'Teknik Komputer / Elektro', desc: 'Fokus integrasi hardware, IoT PHP monitoring, & mikrokontroler' },
];

export const QUIZ_INTERESTS_DATA: QuizInterest[] = [
  { id: 'web', label: 'Web Application / E-Commerce / Portal', desc: 'Sistem CRUD, multi-role, & report automation' },
  { id: 'spk', label: 'Sistem Pendukung Keputusan (SPK) / Expert', desc: 'Metode SAW, AHP, TOPSIS, Naive Bayes' },
  { id: 'iot', label: 'Internet of Things (IoT) / Smart System', desc: 'Integrasi sensor, ESP8266/Arduino, & monitoring PHP' },
  { id: 'ai', label: 'Artificial Intelligence / Machine Learning', desc: 'Klasifikasi data, prediksi, atau deteksi gambar dengan PHP' },
];

export const QUIZ_STACKS_DATA: QuizStack[] = [
  { id: 'native', label: 'PHP Native & Bootstrap', desc: 'Sederhana, murni tanpa framework, sangat mudah dipahami baris-demi-baris' },
  { id: 'oop', label: 'PHP OOP (Berorientasi Objek)', desc: 'Menggunakan pemrograman berorientasi objek yang rapi, terstruktur, dan modular' },
  { id: 'mvc', label: 'PHP Native MVC Architecture', desc: 'Terstruktur rapi memisahkan logika database, tampilan, dan kontroler secara mandiri' },
];

export const ADVANTAGES_DATA: AdvantageItem[] = [
  {
    title: 'Source Code Bersih & Rapi',
    description: 'Struktur kode terstandarisasi, menggunakan design pattern modern (MVC/Clean Architecture) yang rapi, modular, dan bebas duplikasi.',
    iconName: 'Code2'
  },
  {
    title: 'Desain Responsif & Estetik',
    description: 'Aplikasi dioptimalkan dengan Tailwind CSS agar beroperasi responsif, cepat, dan tampil menawan di semua jenis gawai.',
    iconName: 'LayoutTemplate'
  },
  {
    title: 'Garansi Bebas Bug & Revisi',
    description: 'Jaminan perbaikan penuh jika terdapat alur program yang dirasa kurang pas atau ada masukan kustomisasi dari klien.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Dokumentasi & Panduan Lengkap',
    description: 'Dilengkapi panduan setup lokal (import database, env) serta ulasan diagram alur fitur utama sistem.',
    iconName: 'Cpu'
  },
  {
    title: 'Kolaborasi Online Fleksibel',
    description: 'Diskusi progres, demo sistem, dan konsultasi interaktif secara real-time via WhatsApp.',
    iconName: 'Users2'
  },
  {
    title: 'Penjelasan Alur Transparan',
    description: 'Keunggulan utama kami! Kami ajarkan dan jelaskan logika kode baris-demi-baris agar Anda memahami penuh fungsionalitas sistem.',
    iconName: 'GraduationCap'
  }
];

export function getQuizRecommendations(interest: string, stack: string): TopicRecommendation[] {
  const codeStyle = stack === 'mvc' ? 'PHP MVC Architecture' : stack === 'oop' ? 'PHP OOP (Berorientasi Objek)' : 'PHP Native (Struktural)';
  
  if (interest === 'spk') {
    return [
      {
        title: `Sistem Pendukung Keputusan Pemilihan Penerima Bantuan Sosial Menggunakan Metode AHP dan SAW Berbasis ${codeStyle}`,
        description: 'Sistem terpadu untuk Dinas Sosial dalam mengevaluasi kelayakan penerima bansos secara adil berdasarkan kriteria pendapatan, tanggungan keluarga, dan kondisi rumah secara otomatis.',
        stack: `PHP, ${codeStyle}, Bootstrap 5`,
        database: 'MySQL dengan Normalisasi 3NF',
        difficulty: 'Sedang',
        defenseAngle: 'Algoritma AHP menguji konsistensi bobot kriteria, sementara SAW melakukan perangkingan alternatif secara akurat dan efisien.'
      },
      {
        title: `Rancang Bangun Sistem Informasi Kelayakan Pemberian Kredit Pembiayaan UMKM Menggunakan Metode TOPSIS Berbasis ${codeStyle}`,
        description: 'Aplikasi internal perbankan atau koperasi untuk menyaring berkas pemohon kredit secara otomatis sehingga meminimalisir risiko terjadinya kredit macet bagi UMKM.',
        stack: `PHP, ${codeStyle}, Bootstrap 5, AdminLTE`,
        database: 'MySQL (Relasi Pemohon, Kriteria & Analis)',
        difficulty: 'Mudah',
        defenseAngle: 'Metode TOPSIS menggunakan konsep jarak geometris terdekat dari solusi ideal positif dan terjauh dari solusi ideal negatif untuk hasil keputusan yang presisi.'
      }
    ];
  } else if (interest === 'iot') {
    return [
      {
        title: `Sistem Monitoring Kelembaban Tanah dan Otomatisasi Irigasi Pertanian Menggunakan ESP32 Berbasis Web Dashboard ${codeStyle}`,
        description: 'Mengintegrasikan sensor kelembaban tanah dan curah hujan dengan ESP32 untuk optimalisasi pengairan lahan pertanian secara presisi melalui HTTP Web Request langsung ke server PHP.',
        stack: `ESP32 C++, Web Dashboard PHP, ${codeStyle}, Bootstrap 5`,
        database: 'MySQL Database',
        difficulty: 'Tantangan',
        defenseAngle: 'Kombinasi sensor real-time dengan visualisasi grafik interaktif Chart.js di dashboard PHP memberikan kontrol presisi dan efisiensi air.'
      },
      {
        title: `Aplikasi IoT Sistem Keamanan Rumah Pintar & Deteksi Kebakaran Berbasis ESP8266 Terintegrasi Notifikasi WhatsApp Gateway & ${codeStyle}`,
        description: 'Deteksi dini kebocoran gas, suhu ekstrem, dan asap pada bangunan rumah tinggal menggunakan sensor gas MQ-2, DHT11, dan push notification instan ke nomor WhatsApp pemilik.',
        stack: `Arduino IDE, ESP8266, PHP API Gateway, ${codeStyle}`,
        database: 'MySQL Database',
        difficulty: 'Tantangan',
        defenseAngle: 'Menggunakan API gateway PHP untuk push notification cepat serta arsitektur hardware-software yang andal untuk deteksi bahaya 24/7.'
      }
    ];
  } else if (interest === 'ai') {
    return [
      {
        title: `Aplikasi Prediksi Stok Barang & Tren Penjualan Menggunakan Metode Moving Average Berbasis ${codeStyle}`,
        description: 'Membantu pemilik toko memproyeksikan kebutuhan stok barang bulan berikutnya berdasarkan histori data transaksi penjualan barang secara otomatis.',
        stack: `PHP, ${codeStyle}, Bootstrap 5, Chart.js`,
        database: 'MySQL (Tabel Transaksi, Stok & Prediksi)',
        difficulty: 'Sedang',
        defenseAngle: 'Metode peramalan rata-rata bergerak (Moving Average) menyajikan prediksi tren permintaan pasar yang mudah dipahami dan sangat ringan dieksekusi di server PHP.'
      }
    ];
  } else {
    return [
      {
        title: `Rancang Bangun Sistem Informasi Inventarisasi dan Pelacakan Aset Logistik Perusahaan Berbasis ${codeStyle} dengan QR-Code`,
        description: 'Sistem pencatatan aset logistik industri terintegrasi yang memudahkan pengarsipan dan peminjaman barang menggunakan modul scan QR-Code kamera smartphone.',
        stack: `PHP, ${codeStyle}, HTML5 QR Scanner, Bootstrap 5`,
        database: 'MySQL dengan InnoDB Foreign Key',
        difficulty: 'Mudah',
        defenseAngle: 'Implementasi pemindaian QR-Code secara langsung di browser tanpa aplikasi tambahan, meningkatkan kecepatan entri data pergudangan.'
      },
      {
        title: `Sistem Informasi E-Marketplace Kost Mahasiswa Terintegrasi Midtrans Payment Gateway & Peta Interaktif Leaflet.js Berbasis ${codeStyle}`,
        description: 'Menghubungkan mahasiswa perantau dengan pemilik kost secara langsung lengkap dengan pemetaan geografis lokasi kost terdekat dan pembayaran uang muka (DP) otomatis.',
        stack: `PHP, ${codeStyle}, Midtrans PHP SDK, Leaflet.js, Bootstrap 5`,
        database: 'MySQL dengan Geolocation indexing',
        difficulty: 'Sedang',
        defenseAngle: 'Menawarkan alur transaksi otomatis yang aman menggunakan webhook Payment Gateway dan visualisasi persebaran lokasi berbasis koordinat presisi.'
      }
    ];
  }
}
