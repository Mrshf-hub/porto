export type ProjectCategory =
  | 'ALL'
  | 'VIDEO & MUSIC'
  | 'IT OSIS & DESIGN'
  | 'E-SPORT & TECH';

export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  role: string;
  category: Exclude<ProjectCategory, 'ALL'>;
  metric: string;
  spanClass: string;
  image: string;
  summary: string;
  highlights: string[];
  tools: string[];
  linkLabel: string;
  linkUrl: string;
}

export interface SoftwareSkill {
  id: string;
  code: string;
  name: string;
  description: string;
  gradientClass: string;
}

export interface TimelineEntry {
  period: string;
  title: string;
  description: string;
}

export interface ContactLink {
  id: string;
  label: string;
  handle: string;
  href: string;
  external: boolean;
  copyValue?: string;
}

export interface MilestoneCardData {
  badge: string;
  title: string;
  description: string;
}

export const HERO_PORTRAIT_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBuyShHAMggdUhMr_tl4jy7hXrSLiOzGvJ5p_Znm_D7E0b3UedQ0b8w41J_HDpewBMLXnVy30gr2V0ozhPuL90xY2tHgAIYc4oaTVX5Ik5Px_k9XVUvRuRqeqWmLLuci-TlzbAyxt1mM5cAPB0kKxyuQ0CgLo8RsgR3x5IxogZ6c-4W9bVllns1M8wCuw1yFD-phE9esg4Wp6lfdKiDnbPjZgMq2MNcEreOkabkRyAShICXSwWXhXQj';

export const PROFILE_CUTOUT_URL =
  'https://lh3.googleusercontent.com/aida/ALJJyrCejXvMDsssDiaIibaWUiX6s6RWMhvlVbhLgyl7JfKgovym2W1RV1n2QwlOwLefSctgXLcXvehS2ifG8va3blhCvqLjy3mAr4znt2IxLjOmcplwpzFY1CBDMC_k2R6XsOcH_5HWEpMiii0aweANRUZPJ78rSWnUdnQ1AXVwnGYJHkw5h5v2rf94gbDy-giR6_KhaYyvHOHqD1vrG9GJfC3tehkcrK6jj4zA9CxghxwZ';

export const STUDIO_AVATAR_URL =
  'https://lh3.googleusercontent.com/aida/ALJJyrDEh9ghuIQBaFLjBA5nSfxJUPJFpSbAElgx_LS9PBnBLucN16DspS-z9hRmi0Qlq-vC_qv6bg0WlYMY7txAS2Lb1uCiPo79WCjNVMEVnu9phCsrgdfTgLrXRl-vijtAC3x5jDXzWf5OvZ2FnCTd5I_MiknGgM_6Bs3iHPhqg4iSQeAtTld81_OG3vriLbwkann5ApIcevf9p9GRFu5dF5YbsHo01VCX3KGoXW2_zX0';

export const PROFILE_BIO =
  'Mahasiswa Teknik Informatika di Institut Teknologi PLN (2026–sekarang) dan lulusan Jurusan IPA SMAS Katolik Bintang Laut Nias Selatan dengan nilai akhir 90.43. Berpengalaman memimpin Bidang Informasi & Teknologi OSIS sejak tahun pertama, memproduksi video kelulusan dan perpisahan dengan total 18.000+ views, mengelola operasional turnamen E-Sport Mobile Legends, serta melakukan perawatan perangkat keras laptop.';

export const SOFTWARE_SKILLS: SoftwareSkill[] = [
  {
    id: 'capcut',
    code: 'CC',
    name: 'CapCut',
    description: 'Short-form & music beat sync untuk video angkatan dan promosi sekolah.',
    gradientClass: 'bg-gradient-to-br from-[#111827] to-[#1F2937] border-[#38BDF8]/40 text-[#38BDF8]',
  },
  {
    id: 'alight-motion',
    code: 'AM',
    name: 'Alight Motion',
    description: 'Keyframe animation, transisi dinamis, dan visual motion graphics.',
    gradientClass: 'bg-gradient-to-br from-[#0284C7] to-[#0369A1] border-white/20 text-white',
  },
  {
    id: 'canva',
    code: 'Cv',
    name: 'Canva',
    description: 'Desain 30+ feed resmi OSIS, poster turnamen, dan materi publikasi sekolah.',
    gradientClass: 'bg-gradient-to-br from-[#00C4CC] to-[#0891B2] border-white/20 text-white',
  },
  {
    id: 'ibis-paint',
    code: 'ib',
    name: 'Ibis Paint X',
    description: 'Ilustrasi digital, custom lettering, dan elemen grafis poster.',
    gradientClass: 'bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] border-white/20 text-white',
  },
  {
    id: 'picsart',
    code: 'Ps',
    name: 'Picsart',
    description: 'Manipulasi foto, retouch dokumentasi acara, dan komposisi thumbnail.',
    gradientClass: 'bg-gradient-to-br from-[#C026D3] to-[#9333EA] border-white/20 text-white',
  },
  {
    id: 'obs-studio',
    code: 'OBS',
    name: 'OBS Studio',
    description: 'Pengaturan scene siaran dan broadcast turnamen E-Sport Mobile Legends.',
    gradientClass: 'bg-gradient-to-br from-[#1E293B] to-[#0F172A] border-[#F87171]/40 text-[#F87171]',
  },
  {
    id: 'ms-office',
    code: 'Off',
    name: 'Microsoft Office',
    description: 'Administrasi bidang IT OSIS, proposal kegiatan, dan laporan dokumentasi.',
    gradientClass: 'bg-gradient-to-br from-[#EA580C] to-[#C2410C] border-white/20 text-white',
  },
];

export const EDUCATION_LIST: TimelineEntry[] = [
  {
    period: '2026 – Sekarang',
    title: 'Institut Teknologi PLN',
    description: 'S1 Teknik Informatika',
  },
  {
    period: '2023 – 2026',
    title: 'SMAS Katolik Bintang Laut · Nias Selatan',
    description: 'Jurusan Ilmu Pengetahuan Alam (Nilai 90.43)',
  },
];

export const EXPERIENCE_LIST: TimelineEntry[] = [
  {
    period: 'Feb 2025 – Jan 2026',
    title: 'Kepala Bidang IT OSIS SMASK BL',
    description:
      'Memegang akun resmi OSIS & sekolah (30+ postingan), tim dokumentasi, penyelenggara lomba E-Sport & poster.',
  },
  {
    period: 'Apr – Mei 2026',
    title: 'Produser & Editor Video Angkatan 23',
    description:
      'Video Perpisahan (10K+ TikTok views) & Pengumuman Kelulusan (8K+ IG views).',
  },
  {
    period: 'Des 2025 & Okt 2024',
    title: 'Wakil Koordinator & Operator MLBB',
    description:
      'Turnamen E-Sport Mobile Legends OSIS, operasional siaran OBS Studio & lobby.',
  },
  {
    period: 'Apr – Agu 2025',
    title: 'Editor Promosi Sekolah & PPG',
    description: '6 video promosi (3.000+ views tiap video) & dokumentasi Program PPG.',
  },
];

export const TECHNICAL_SKILLS: string[] = [
  'Video Editing',
  'Music Sync',
  'Photo Editing',
  'Dokumentasi',
  'OBS Studio',
  'Repasta Laptop',
  'Deep Cleaning Laptop',
];

export const FILTER_CATEGORIES: ProjectCategory[] = [
  'ALL',
  'VIDEO & MUSIC',
  'IT OSIS & DESIGN',
  'E-SPORT & TECH',
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'farewell-2026',
    title: 'VIDEO PERPISAHAN ANGKATAN 23',
    period: 'APRIL 2026',
    role: 'VIDEO & MUSIK EDITOR',
    category: 'VIDEO & MUSIC',
    metric: '10,000+ TIKTOK VIEWS',
    spanClass: 'lg:col-span-6',
    image: STUDIO_AVATAR_URL,
    summary:
      'Video perpisahan resmi Angkatan 23 SMAS Katolik Bintang Laut Teluk Dalam yang menembus 10.000+ penayangan di akun TikTok resmi sekolah.',
    highlights: [
      'Menyunting alur cerita visual dan sinkronisasi musik emosional untuk perpisahan Angkatan 23.',
      'Meraih 10.000+ views di akun TikTok resmi SMASK BL Teluk Dalam.',
      'Mengolah arsip dokumentasi sekolah menjadi kompilasi sinematik berdurasi padat.',
    ],
    tools: ['CapCut', 'Alight Motion', 'Dokumentasi'],
    linkLabel: 'Lihat Instagram @yoselinefau',
    linkUrl: 'https://www.instagram.com/yoselinefau',
  },
  {
    id: 'graduation-2026',
    title: 'PENGUMUMAN KELULUSAN ANGKATAN 23',
    period: 'MEI 2026',
    role: 'PRODUSER VIDEO, VIDEO & MUSIK EDITOR',
    category: 'VIDEO & MUSIC',
    metric: '8,000+ IG VIEWS',
    spanClass: 'lg:col-span-6',
    image: PROFILE_CUTOUT_URL,
    summary:
      'Bertindak sebagai Produser sekaligus Video & Musik Editor untuk pengumuman kelulusan SMA Angkatan 23 dengan 8.000+ views di Instagram.',
    highlights: [
      'Memimpin konsep produksi video hingga tahap final editing dan mixing musik.',
      'Mendapatkan 8.000+ views di akun Instagram Angkatan 23 SMASK BL.',
      'Bekerja sama dengan tim dokumentasi angkatan untuk pengambilan visual.',
    ],
    tools: ['CapCut', 'Alight Motion', 'Photo Editing'],
    linkLabel: 'Lihat Instagram @yoselinefau',
    linkUrl: 'https://www.instagram.com/yoselinefau',
  },
  {
    id: 'osis-it-head',
    title: 'KEPALA BIDANG IT OSIS SMASK BL',
    period: 'FEB 2025 – JAN 2026',
    role: 'KEPALA BIDANG INFORMASI & TEKNOLOGI',
    category: 'IT OSIS & DESIGN',
    metric: '30+ OFFICIAL POSTS',
    spanClass: 'lg:col-span-4',
    image: STUDIO_AVATAR_URL,
    summary:
      'Dipercaya menjadi Kepala Bidang IT di tahun pertama bergabung OSIS, mengelola akun resmi sekolah/OSIS serta mengadakan lomba E-Sport dan poster digital.',
    highlights: [
      'Memegang akun OSIS dan akun resmi sekolah dengan 30+ publikasi visual.',
      'Menjadi bagian inti tim dokumentasi pada berbagai agenda sekolah.',
      'Menyelenggarakan lomba E-Sport dan kompetisi poster digital tingkat sekolah.',
    ],
    tools: ['Canva', 'Ibis Paint X', 'Picsart', 'Microsoft Office'],
    linkLabel: 'Profil LinkedIn',
    linkUrl: 'https://www.linkedin.com/in/marshayoselinefau',
  },
  {
    id: 'promo-ppg-2025',
    title: 'VIDEO PROMOSI SEKOLAH & PPG',
    period: 'APRIL – AGUSTUS 2025',
    role: 'VIDEO EDITOR',
    category: 'VIDEO & MUSIC',
    metric: '6 VIDEO · 3,000+ VIEWS',
    spanClass: 'lg:col-span-4',
    image: PROFILE_CUTOUT_URL,
    summary:
      'Mengedit 6 video promosi sekolah dengan rata-rata 3.000+ views per video serta menangani editing video kegiatan PPG.',
    highlights: [
      'Memproduksi 6 video promosi sekolah dengan 3.000+ views tiap video di medsos sekolah.',
      'Menjadi Video Editor untuk dokumentasi Program Pendidikan Profesi Guru (PPG).',
    ],
    tools: ['CapCut', 'Canva', 'Dokumentasi'],
    linkLabel: 'Lihat Instagram @yoselinefau',
    linkUrl: 'https://www.instagram.com/yoselinefau',
  },
  {
    id: 'esport-mlbb-ops',
    title: 'TURNAMEN E-SPORT MOBILE LEGENDS',
    period: 'OKT 2024 & DES 2025',
    role: 'WAKIL KOORDINATOR & OPERATOR',
    category: 'E-SPORT & TECH',
    metric: '2x EVENT ORGANIZER',
    spanClass: 'lg:col-span-4',
    image: STUDIO_AVATAR_URL,
    summary:
      'Berkembang dari volunteer operator pertandingan (2024) menjadi Wakil Koordinator turnamen E-Sport Mobile Legends OSIS (2025).',
    highlights: [
      'Wakil Koordinator E-Sport Mobile Legends OSIS (Desember 2025).',
      'Volunteer Operator E-Sport Mobile Legends OSIS (Oktober 2024).',
      'Mengatur alur pertandingan, lobby, serta siaran layar dengan OBS Studio.',
    ],
    tools: ['OBS Studio', 'Event Coordination'],
    linkLabel: 'Hubungi untuk Kolaborasi',
    linkUrl: '#contact',
  },
  {
    id: 'laptop-maintenance',
    title: 'REPASTA & DEEP CLEANING LAPTOP',
    period: 'TECHNICAL SERVICE',
    role: 'HARDWARE MAINTENANCE',
    category: 'E-SPORT & TECH',
    metric: 'HARDWARE CARE',
    spanClass: 'lg:col-span-12',
    image: PROFILE_CUTOUT_URL,
    summary:
      'Layanan perawatan fisik internal laptop meliputi pembersihan debu menyeluruh (deep cleaning) dan penggantian pasta termal prosesor (repasta) untuk menjaga stabilitas suhu kerja sistem.',
    highlights: [
      'Membersihkan sistem pendingin dan kipas internal dari penumpukan debu pekat.',
      'Mengganti thermal paste lama untuk menurunkan suhu kerja dan menjaga performa gaming/editing tetap stabil.',
    ],
    tools: ['Repasta Laptop', 'Deep Cleaning Laptop'],
    linkLabel: 'Tanya Servis via Email',
    linkUrl:
      'mailto:yoselinefau2008@gmail.com?subject=Servis%20Repasta%20%26%20Deep%20Cleaning%20Laptop',
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@YOSELINEFAU',
    href: 'https://www.instagram.com/yoselinefau',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'MARSHAYOSELINEFAU',
    href: 'https://www.linkedin.com/in/marshayoselinefau',
    external: true,
  },
  {
    id: 'email',
    label: 'Email',
    handle: 'YOSELINEFAU2008@GMAIL.COM',
    href: 'mailto:yoselinefau2008@gmail.com',
    external: false,
    copyValue: 'yoselinefau2008@gmail.com',
  },
];

export const MILESTONES: MilestoneCardData[] = [
  {
    badge: '2024 – 2025',
    title: 'OSIS KABID IT & E-SPORT',
    description: '30+ Official Posts, Dokumentasi, & Turnamen MLBB Ops',
  },
  {
    badge: '2026',
    title: 'ANGKATAN 23 & IT-PLN',
    description: '18.000+ Total Video Views & Mahasiswa Teknik Informatika',
  },
];
