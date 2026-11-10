export interface Project {
  id: 'proofing' | 'pipeline' | 'luminaraw';
  title: string;
  badge: string;
  statusType: 'production' | 'active' | 'rnd';
  description: string;
  longDesc: string;
  stack: string[];
  highlights: string[];
  repoUrl?: string;
  footerMeta: string;
}

export interface VisualShowcaseItem {
  id: number;
  category: string;
  badgeRatio: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  notes: string;
  lens: string;
  shutter: string;
  iso: string;
  profile: string;
  formatTag: string;
}

export interface SkillCluster {
  category: string;
  countLabel: string;
  iconName: 'code' | 'film' | 'cpu';
  skills: string[];
}

export interface TimelineEntry {
  title: string;
  roleType: string;
  period: string;
  organization: string;
  description: string;
  isCurrent?: boolean;
}

export const PROFILE_DATA = {
  name: 'Efrem Albert Alvin',
  headline: 'Creative Technologist & Commercial Visual Producer',
  status: 'Available for dev & visual projects',
  location: 'Bandar Lampung, Indonesia',
  locationShort: 'Bandar Lampung, ID',
  educationAffiliation: 'Pendidikan Teknologi Informasi, Universitas Lampung (Angkatan 2023)',
  affiliationShort: "PTI Unila '23",
  avatarUrl: '/profile.jpg',
  bio: "Mahasiswa Pendidikan Teknologi Informasi Universitas Lampung yang menjembatani rekayasa perangkat lunak—meliputi otomasi Python, aplikasi web interaktif, dan pipeline pemrosesan media lokal—dengan eksekusi produksi visual komersial berstandar industri. Melalui FOTONIC (FremNett Project), saya merancang sistem alur kerja pascaproduksi yang presisi sekaligus menangani dokumentasi milestone akademik dan color grading video N-Log.",
  githubUsername: 'efremalvin',
  githubUrl: 'https://github.com/efremalvin',
  email: 'efremalvin@gmail.com',
  whatsappNumber: '6281234567890',
  whatsappUrl: 'https://wa.me/6281234567890?text=Halo%20Efrem%2C%20saya%20melihat%20portofolio%20Anda%20dan%20ingin%20berdiskusi%20mengenai%20proyek.',
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proofing',
    title: 'Fotonic Client Proofing Web',
    badge: 'Production Web App',
    statusType: 'production',
    description: 'Web app seleksi foto klien dengan sistem proxy thumbnail ringan, quota locking otomatis, dan antarmuka ramah ponsel.',
    longDesc: 'Platform seleksi foto mandiri untuk klien dokumentasi wisuda dan akademik FOTONIC. Mengeliminasi proses rekap kode file manual melalui sinkronisasi langsung dengan repositori Google Drive.',
    stack: ['Python', 'Streamlit', 'Google Drive API', 'GitHub'],
    highlights: [
      'Sistem generasi proxy thumbnail ringan agar pemuatan ratusan foto tetap instan di jaringan seluler.',
      'Mekanisme Quota Locking otomatis sesuai paket layanan klien untuk mencegah kelebihan kuota edit.',
      'Antarmuka mobile-first responsif dengan ekspor daftar kode RAW siap olah.'
    ],
    repoUrl: 'https://github.com/efremalvin',
    footerMeta: 'Production Web App'
  },
  {
    id: 'pipeline',
    title: 'Fotonic Suite Master / Local Media Pipeline',
    badge: 'Active CLI Suite',
    statusType: 'active',
    description: 'Batch script otomatisasi pencocokan RAW+JPEG dan stabilisasi video dengan akselerasi GPU lokal.',
    longDesc: 'Rangkaian skrip otomatisasi baris perintah untuk mempercepat proses sortir pascapemotretan dan transkoding video produksi di workstation lokal.',
    stack: ['PowerShell', 'FFmpeg NVENC', 'Python'],
    highlights: [
      'Pencocokan instan berkas RAW (.NEF) berdasarkan daftar seleksi JPEG klien secara presisi.',
      'Stabilisasi dan kompresi batch video menggunakan FFmpeg dengan akselerasi perangkat keras NVIDIA NVENC.',
      'Verifikasi integritas checksum dan penataan struktur direktori arsip otomatis.'
    ],
    footerMeta: 'GPU NVENC'
  },
  {
    id: 'luminaraw',
    title: 'LuminaRAW Architecture (R&D)',
    badge: 'R&D Lab',
    statusType: 'rnd',
    description: 'Modul eksplorasi pascaproduksi berkinerja tinggi untuk harmonisasi eksposur dan konversi format linear.',
    longDesc: 'Proyek riset dan eksplorasi arsitektur pemrosesan citra mentah (RAW) berkecepatan tinggi untuk konsistensi eksposur lintas frame.',
    stack: ['Python', 'Rust/PyO3 exploration', 'Libvips'],
    highlights: [
      'Eksplorasi jembatan komputasi Python dan Rust (PyO3) untuk operasi matriks gambar berkinerja tinggi.',
      'Pemanfaatan pustaka Libvips untuk pipeline pemrosesan berbasis streaming hemat memori.',
      'Normalisasi ruang warna linear 16-bit untuk menjaga detail highlight pada foto bertempo cepat.'
    ],
    footerMeta: '16-Bit Linear'
  }
];

export const VISUAL_DATA: VisualShowcaseItem[] = [
  {
    id: 0,
    category: 'Academic Milestone',
    badgeRatio: '4:5 PORTRAIT',
    title: 'Wisuda & Sidang Akademik',
    subtitle: 'FOTONIC — ACADEMIC MILESTONE SERIES',
    shortDesc: 'Isolasi subjek berkarakter dengan reproduksi skin-tone natural di area kampus Unila.',
    notes: 'Dokumentasi seremonial dan potret editorial mahasiswa Universitas Lampung (wisuda, sempro, semhas, komprehensif). Mengandalkan bukaan lebar f/1.8 pada lensa telefoto pendek untuk memisahkan subjek dari keramaian latar belakang dengan transisi bokeh yang lembut dan skin-tone akurat.',
    lens: '85mm f/1.8 Z',
    shutter: '1/1000s',
    iso: 'ISO 160',
    profile: 'RAW 14-Bit Lossless',
    formatTag: 'NEF 14-Bit'
  },
  {
    id: 1,
    category: 'Low-Light / Astro',
    badgeRatio: 'LONG EXPOSURE',
    title: 'Low-Light & Astrophotography',
    subtitle: 'FOTONIC — LOW-LIGHT & ASTRO SERIES',
    shortDesc: 'Eksplorasi dynamic range tinggi pada kondisi minim cahaya dengan kontrol chroma noise presisi.',
    notes: 'Pengujian batas performa sensor Nikon Z pada pencahayaan ekstrem. Memanfaatkan titik invariansi ISO (Dual-Gain) dan teknik eksposur panjang untuk menangkap struktur galaksi Bima Sakti serta lanskap pesisir Lampung dengan tingkat derau warna minimal.',
    lens: '20mm f/1.8 Z',
    shutter: '15.0s',
    iso: 'ISO 3200',
    profile: '14-Bit NEF Linear',
    formatTag: 'Dual-Gain ISO'
  },
  {
    id: 2,
    category: 'Graded Still',
    badgeRatio: '10-BIT N-LOG',
    title: 'Cinematic N-Log Color Suite',
    subtitle: 'FOTONIC — N-LOG COLOR GRADING PIPELINE',
    shortDesc: 'Transformasi ruang warna N-Log ke Rec.709 dengan tonal roll-off halus pada highlight dan separasi warna sinematik.',
    notes: 'Rekaman profil logaritmik 10-bit N-Log yang diproses melalui pipeline manajemen warna DaVinci Resolve (Color Space Transform ke DaVinci Wide Gamut / Intermediate), menghasilkan rentang dinamis luas, roll-off highlight sinematik, dan konsistensi warna kulit.',
    lens: '35mm f/1.8 Z',
    shutter: '1/50s (180°)',
    iso: 'ISO 800 (Base)',
    profile: 'N-Log 10-Bit 4:2:2',
    formatTag: 'DaVinci CST'
  }
];

export const SKILLS_DATA: SkillCluster[] = [
  {
    category: 'Code & Dev',
    countLabel: '06 TOOLS',
    iconName: 'code',
    skills: ['Python', 'HTML/CSS', 'JavaScript/React', 'Streamlit', 'Git/GitHub', 'Cloud APIs']
  },
  {
    category: 'Post-Processing',
    countLabel: '05 TOOLS',
    iconName: 'film',
    skills: ['DaVinci Resolve (N-Log)', 'Lightroom', 'Photoshop', 'Premiere Pro', 'CapCut']
  },
  {
    category: 'Core Foundation',
    countLabel: '03 CORES',
    iconName: 'cpu',
    skills: ['Linux/Windows CLI', 'FFmpeg', 'Image Processing Pipelines']
  }
];

export const TIMELINE_DATA: TimelineEntry[] = [
  {
    title: 'Biro KOMINFO – Mahasiswa FKIP Unila',
    roleType: 'Komunikasi & Informasi',
    period: '2025',
    organization: 'Fakultas Keguruan dan Ilmu Pendidikan, Universitas Lampung',
    description: 'Mengelola publikasi visual organisasi, dokumentasi kegiatan kemahasiswaan, serta standardisasi penyampaian informasi digital di lingkungan FKIP Universitas Lampung.'
  },
  {
    title: 'Founder & Lead Media – FOTONIC (FremNett Project)',
    roleType: 'Produksi Visual Komersial & Rekayasa Workflow Media',
    period: '2024 – Sekarang',
    organization: 'Bandar Lampung, Indonesia',
    description: 'Merintis layanan dokumentasi milestone akademik (wisuda, sempro, semhas, komprehensif) yang didukung ekosistem software internal (Client Proofing Web & Local Media Pipeline).',
    isCurrent: true
  },
  {
    title: 'S1 Pendidikan Teknologi Informasi – Universitas Lampung (Unila)',
    roleType: 'Pendidikan Sarjana',
    period: '2023 – Sekarang',
    organization: 'Angkatan 2023 • Bandar Lampung, Indonesia',
    description: 'Berfokus pada pengembangan perangkat lunak, pemrograman Python, rekayasa sistem berbasis web, dan integrasi teknologi pemrosesan multimedia dalam dunia pendidikan maupun industri kreatif.',
    isCurrent: true
  }
];
