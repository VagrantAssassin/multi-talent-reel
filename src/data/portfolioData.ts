import portrait from "@/assets/portrait.png";
import proj1 from "@/assets/proj-1.jpg";
import proj2 from "@/assets/proj-2.jpg";
import proj3 from "@/assets/proj-3.jpg";

export interface EducationItem {
  startDate: string;
  endDate: string;
  level: string;
  institution: string;
  description: string[];
}

export interface ExperienceItem {
  startDate: string;
  endDate: string;
  title: string;
  description: string[];
}

export interface SkillItem {
  name: string;
  level: string;
}

export interface CertificateItem {
  name: string;
  issuer: string;
  year: number | string;
  url?: string;
}

export interface AchievementItem {
  name: string;
  organizer: string;
  year: number | string;
  description?: string;
}

export interface PortfolioProject {
  title: string;
  imageUrl: string;
  description: string;
  projectUrl: string;
  gameEmbedUrl?: string;
  tag?: string;
}

export interface SkillCategory {
  slug: string;
  code: string;
  name: string;
  shortDescription: string;
  intro: string;
  skills: SkillItem[];
  certificates: CertificateItem[];
  achievements: AchievementItem[];
  portfolio: PortfolioProject[];
}

export interface ProfileData {
  name: string;
  tagline: string;
  photoUrl: string;
  bio: string;
}

export interface ContactData {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  instagram: string;
  itchio: string;
  drivePortfolio: string;
}

export interface PortfolioData {
  profile: ProfileData;
  education: EducationItem[];
  experience: ExperienceItem[];
  skillCategories: SkillCategory[];
  contact: ContactData;
}

// ─── CONTACT (shared — not translatable) ────────────────────────────────────
const sharedContact: ContactData = {
  email: "stevanusryowijaya@gmail.com",
  phone: "+62 819 4732 0913",
  location: "Bandung, West Java, Indonesia",
  linkedin: "https://linkedin.com/in/stevanus-ryo-wijaya",
  github: "https://github.com/VagrantAssassin",
  instagram: "https://instagram.com/schwarzer_art",
  itchio: "https://vagrant-assassin.itch.io/",
  drivePortfolio: "https://drive.google.com/file/d/1c6_0yMgYuPee806Ct79SUGI6spjyArkm/view",
};

// ─── ENGLISH (default) ───────────────────────────────────────────────────────
export const portfolioDataEN: PortfolioData = {
  profile: {
    name: "Stevanus Ryo Wijaya",
    tagline: "Informatics Engineering",
    photoUrl: portrait,
    bio: "Informatics Engineering student at UNIKOM with a deep enthusiasm for Game Development and Data Science & Analytics. Combining a strong software engineering foundation with graphical asset visualization and computational data analysis to create high-impact interactive digital solutions.",
  },
  education: [
    {
      startDate: "Sep 2022",
      endDate: "Present",
      level: "S1 Informatics Engineering",
      institution: "Universitas Komputer Indonesia",
      description: [
        "Active member of UNIKOM Codelabs, focusing on software engineering, game development practices, and data science.",
        "GPA: 3.75 / 4.00",
      ],
    },
    {
      startDate: "Jul 2019",
      endDate: "Jun 2022",
      level: "SMAN 2 Cirebon",
      institution: "MIPA",
      description: ["Developed strong proficiency and focus in mathematics."],
    },
  ],
  experience: [
    {
      startDate: "Jun 2023",
      endDate: "Present",
      title: "UNIKOM Codelabs — Bandung",
      description: [
        "Actively contributed to the Game Development sub-division in conceptualizing and producing industry-standard 2D art assets.",
        "Performed Technical Artist duties including asset integration into Unity Engine and visual workflow optimization.",
        "Collaborated with the team to ensure artistic consistency and game performance efficiency.",
      ],
    },
  ],
  skillCategories: [
    {
      slug: "game-development",
      code: "01",
      name: "Game Development",
      shortDescription:
        "Specializing in 2D Art, Technical Art, visual engine integration, and gameplay mechanic design with Unity & C#.",
      intro:
        "My focus is on creating immersive and responsive visual and mechanical game experiences: from conceptualizing 2D assets and sprite animation to technical integration into Unity Engine with high-performance optimization across multiple platforms.",
      skills: [
        { name: "Unity Engine", level: "Advanced" },
        { name: "2D Art & Sprite Animation (Aseprite, Ibis Paint)", level: "Advanced" },
        { name: "Technical Art & Engine Integration", level: "Advanced" },
        { name: "C# Programming & Gameplay Scripting", level: "Intermediate" },
        { name: "Vector & Graphic Design (CorelDRAW)", level: "Intermediate" },
      ],
      certificates: [],
      achievements: [
        {
          name: "Space Jam 2025 — Top 5 Finalist",
          organizer: "Competitive Game Jam Event",
          year: "2025",
          description: "Achieved Top 5 ranking as Lead 2D Artist in a national competitive game jam event.",
        },
        {
          name: "PKM-KC (Student Creativity Program) Belmawa — Funding Recipient",
          organizer: "Kemendikbudristek / Belmawa",
          year: "2025",
          description:
            "Received national grant funding for the innovative creation proposal 'Digitaka: Digitizing the Aji Saka Folklore'.",
        },
        {
          name: "Game Seed Student Competition — Top 60 Participant",
          organizer: "National Student Competition",
          year: "2025",
          description:
            "Selected as Top 60 students nationwide competing in a dual role as 2D Artist and Technical Artist.",
        },
      ],
      portfolio: [
        {
          title: "Tea'n Brew",
          imageUrl: proj2,
          tag: "Playable WebGL",
          description:
            "A Unity WebGL game featuring responsive control mechanics, immersive 2D art, and dynamic audio. Playable directly in your browser!",
          projectUrl: "https://vagrant-assassin.itch.io/",
          // Diisi URL GitHub Pages dari repository game Unity WebGL Anda yang terpisah:
          gameEmbedUrl: "https://vagrant-assassin.github.io/tean-brew/",
        },
        {
          title: "Digitaka: Digitizing the Aji Saka Folklore",
          imageUrl: proj1,
          tag: "PKM-KC",
          description:
            "An interactive game project based on cultural preservation of folklore, which successfully received national funding from Kemendikbudristek Belmawa 2025.",
          projectUrl: "https://drive.google.com/file/d/1c6_0yMgYuPee806Ct79SUGI6spjyArkm/view",
        },
        {
          title: "Space Jam 2025 Game Project",
          imageUrl: proj3,
          tag: "Finalist",
          description:
            "An interactive space-themed game with custom 2D assets, dynamic visual feedback, and an intensive gameplay loop — awarded Top 5 Finalist.",
          projectUrl: "https://vagrant-assassin.itch.io/",
        },
        {
          title: "Itch.io Indie Games & Prototypes",
          imageUrl: proj2,
          tag: "Indie Games",
          description:
            "A collection of game prototypes, control mechanic experiments, and interactive art showcases released publicly on the Itch.io account.",
          projectUrl: "https://vagrant-assassin.itch.io/",
        },
        {
          title: "Artwork & Games Google Drive Showcase",
          imageUrl: proj1,
          tag: "Portfolio Drive",
          description:
            "A comprehensive archive of 2D artworks, asset sheets, character concepts, and technical visual documentation.",
          projectUrl: "https://drive.google.com/file/d/1c6_0yMgYuPee806Ct79SUGI6spjyArkm/view",
        },
      ],
    },
    {
      slug: "data-science",
      code: "02",
      name: "Data Scientist",
      shortDescription:
        "Processing raw data, predictive modeling, analytical computing, and visual insight presentation based on Python & SQL.",
      intro:
        "Leveraging an analytical and mathematical approach to dissect large-scale data: from dataset cleaning and statistical pattern exploration to designing predictive models that support strategic decision-making.",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "Pandas & NumPy", level: "Advanced" },
        { name: "Microsoft Excel (Data Modeling & Analysis)", level: "Advanced" },
        { name: "SQL (Data Querying & Schema)", level: "Intermediate" },
        { name: "Exploratory Data Analysis (EDA)", level: "Intermediate" },
        { name: "Data Visualization & Dashboarding", level: "Intermediate" },
      ],
      certificates: [],
      achievements: [],
      portfolio: [

      ],
    },
  ],
  contact: sharedContact,
};

// ─── INDONESIAN ───────────────────────────────────────────────────────────────
export const portfolioDataID: PortfolioData = {
  profile: {
    name: "Stevanus Ryo Wijaya",
    tagline: "Informatics Engineering",
    photoUrl: portrait,
    bio: "Mahasiswa Teknik Informatika di UNIKOM dengan antusiasme mendalam pada Game Development serta Data Science & Analytics. Memadukan fondasi rekayasa perangkat lunak yang kuat dengan kemampuan visualisasi aset grafis dan analisis data komputasional untuk menciptakan solusi digital interaktif yang berdampak tinggi.",
  },
  education: [
    {
      startDate: "Sep 2022",
      endDate: "Sekarang",
      level: "S1 Teknik Informatika",
      institution: "Universitas Komputer Indonesia",
      description: [
        "Anggota aktif UNIKOM Codelabs, berfokus pada software engineering, praktik game development, dan data science.",
        "IPK: 3.75 / 4.00",
      ],
    },
    {
      startDate: "Jul 2019",
      endDate: "Jun 2022",
      level: "SMAN 2 Cirebon",
      institution: "MIPA",
      description: ["Cukup mahir dan berfokus di bidang matematika."],
    },
  ],
  experience: [
    {
      startDate: "Jun 2023",
      endDate: "Sekarang",
      title: "UNIKOM Codelabs — Bandung",
      description: [
        "Berkontribusi aktif di sub-divisi Game Development dalam mengonsep dan memproduksi aset seni 2D berstandar industri.",
        "Melakukan tugas Technical Artist mencakup integrasi aset ke dalam Unity Engine dan optimasi visual workflow.",
        "Berkolaborasi dengan tim untuk memastikan konsistensi artistik dan efisiensi performa game.",
      ],
    },
  ],
  skillCategories: [
    {
      slug: "game-development",
      code: "01",
      name: "Game Development",
      shortDescription:
        "Spesialisasi 2D Art, Technical Art, integrasi visual engine, dan perancangan mekanik gameplay dengan Unity & C#.",
      intro:
        "Fokus saya adalah menciptakan pengalaman visual dan mekanik game yang imersif dan responsif: dari konseptualisasi aset 2D, animasi sprite, hingga integrasi teknis ke dalam Unity Engine dengan optimasi performa tinggi untuk berbagai platform.",
      skills: [
        { name: "Unity Engine", level: "Advanced" },
        { name: "2D Art & Sprite Animation (Aseprite, Ibis Paint)", level: "Advanced" },
        { name: "Technical Art & Engine Integration", level: "Advanced" },
        { name: "C# Programming & Gameplay Scripting", level: "Intermediate" },
        { name: "Vector & Graphic Design (CorelDRAW)", level: "Intermediate" },
      ],
      certificates: [],
      achievements: [
        {
          name: "Space Jam 2025 — Top 5 Finalist",
          organizer: "Competitive Game Jam Event",
          year: "2025",
          description: "Meraih peringkat Top 5 sebagai Lead 2D Artist dalam ajang game jam kompetitif nasional.",
        },
        {
          name: "PKM-KC (Program Kreativitas Mahasiswa) Belmawa — Funding Recipient",
          organizer: "Kemendikbudristek / Belmawa",
          year: "2025",
          description:
            "Meraih pendanaan hibah nasional untuk proposal karya cipta inovatif 'Digitaka: Digitalisasi Cerita Rakyat Aji Saka'.",
        },
        {
          name: "Game Seed Student Competition — Top 60 Participant",
          organizer: "Kompetisi Mahasiswa Tingkat Nasional",
          year: "2025",
          description:
            "Terpilih sebagai Top 60 mahasiswa se-Indonesia yang berkompetisi ganda sebagai 2D Artist dan Technical Artist.",
        },
      ],
      portfolio: [
        {
          title: "Tea'n Brew",
          imageUrl: proj2,
          tag: "Playable WebGL",
          description:
            "Game WebGL berbasis Unity dengan mekanik interaktif, visual 2D yang memikat, dan gameplay yang seru. Dapat dimainkan langsung di browser!",
          projectUrl: "https://vagrant-assassin.itch.io/",
          // Diisi URL GitHub Pages dari repository game Unity WebGL Anda yang terpisah:
          gameEmbedUrl: "https://vagrant-assassin.github.io/tean-brew/",
        },
        {
          title: "Digitaka: Digitalisasi Cerita Rakyat Aji Saka",
          imageUrl: proj1,
          tag: "PKM-KC",
          description:
            "Proyek game interaktif berbasis pelestarian budaya cerita rakyat yang berhasil meraih pendanaan nasional Kemendikbudristek Belmawa 2025.",
          projectUrl: "https://drive.google.com/file/d/1c6_0yMgYuPee806Ct79SUGI6spjyArkm/view",
        },
        {
          title: "Space Jam 2025 Game Project",
          imageUrl: proj3,
          tag: "Finalist",
          description:
            "Game interaktif bertema luar angkasa dengan aset 2D kustom, visual feedback dinamis, dan gameplay loop intensif yang dinobatkan sebagai Top 5 Finalist.",
          projectUrl: "https://vagrant-assassin.itch.io/",
        },
        {
          title: "Itch.io Indie Games & Prototypes",
          imageUrl: proj2,
          tag: "Indie Games",
          description:
            "Koleksi prototipe game, eksperimen mekanik kontrol, dan showcase seni interaktif yang dirilis secara publik pada akun Itch.io.",
          projectUrl: "https://vagrant-assassin.itch.io/",
        },
        {
          title: "Artwork & Games Google Drive Showcase",
          imageUrl: proj1,
          tag: "Portfolio Drive",
          description:
            "Arsip komprehensif karya 2D art, asset sheet, konsep karakter, dan dokumentasi visual teknis.",
          projectUrl: "https://drive.google.com/file/d/1c6_0yMgYuPee806Ct79SUGI6spjyArkm/view",
        },
      ],
    },
    {
      slug: "data-science",
      code: "02",
      name: "Data Scientist",
      shortDescription:
        "Pengolahan data mentah, pemodelan prediktif, komputasi analitis, dan penyajian visual insight berbasis Python & SQL.",
      intro:
        "Memanfaatkan pendekatan analitis dan matematis untuk membedah data berukuran besar: mulai dari pembersihan dataset, eksplorasi pola statistik, hingga perancangan model prediktif yang dapat menunjang pengambilan keputusan strategis.",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "Pandas & NumPy", level: "Advanced" },
        { name: "Microsoft Excel (Data Modeling & Analysis)", level: "Advanced" },
        { name: "SQL (Data Querying & Schema)", level: "Intermediate" },
        { name: "Exploratory Data Analysis (EDA)", level: "Intermediate" },
        { name: "Data Visualization & Dashboarding", level: "Intermediate" },
      ],
      certificates: [],
      achievements: [],
      portfolio: [

      ],
    },
  ],
  contact: {
    ...sharedContact,
    location: "Bandung, Jawa Barat, Indonesia",
  },
};

// ─── LEGACY EXPORT (backwards compat jika ada file lain yang masih import ini) ─
export const portfolioData = portfolioDataEN;

export const getSkillCategory = (slug: string) =>
  portfolioData.skillCategories.find((c) => c.slug === slug);
