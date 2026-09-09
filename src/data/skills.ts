import proj1 from "@/assets/proj-1.jpg";
import proj2 from "@/assets/proj-2.jpg";
import proj3 from "@/assets/proj-3.jpg";

export type Skill = {
  slug: string;
  code: string;
  name: string;
  tagline: string;
  intro: string;
  tools: [string, string][];
  awards: [string, string][];
  projects: { img: string; title: string; desc: string; tag: string }[];
};

export const skills: Skill[] = [
  {
    slug: "game-artist",
    code: "01",
    name: "Game Artist",
    tagline: "Visual, environment, dan art direction untuk dunia game.",
    intro:
      "Saya membangun bahasa visual sebuah game: dari konsep environment, penataan pencahayaan, hingga aset 3D yang siap dipakai di dalam engine tanpa mengorbankan performa.",
    tools: [
      ["Blender / 3D Modeling", "[Advanced]"],
      ["Substance Painter", "[Intermediate]"],
      ["Lighting & Post-Processing", "[Production]"],
      ["Pixel & Concept Art", "[Intermediate]"],
    ],
    awards: [
      ["Juara 1 — Game Jam Nasional", "2025 // kategori art direction"],
      ["Best Visual Design — Campus Showcase", "2024"],
    ],
    projects: [
      {
        img: proj1,
        tag: "ENVIRONMENT",
        title: "Nirvana_Render",
        desc: "Environment atmosferik dengan pencahayaan volumetrik kustom di Unity.",
      },
      {
        img: proj3,
        tag: "STYLEFRAME",
        title: "Auto_City",
        desc: "Eksplorasi styleframe kota malam bergaya neo-noir.",
      },
    ],
  },
  {
    slug: "game-programmer",
    code: "02",
    name: "Game Programmer",
    tagline: "Gameplay system, physics, dan optimasi engine.",
    intro:
      "Fokus saya adalah membuat sistem gameplay yang terasa responsif: kontrol karakter, AI sederhana, physics, serta profiling agar game tetap stabil di perangkat menengah.",
    tools: [
      ["Unity Engine / C#", "[Advanced]"],
      ["Unreal / C++", "[Intermediate]"],
      ["Compute Shaders", "[Research]"],
      ["Physics Optimization", "[Production]"],
    ],
    awards: [
      ["Juara 1 — Game Jam Nasional", "2025 // kategori tim indie"],
      ["Unity Certified Associate: Programmer", "2025"],
    ],
    projects: [
      {
        img: proj1,
        tag: "SIM_MODULE",
        title: "Nirvana_Render",
        desc: "Game eksplorasi dengan sistem pencahayaan dan streaming level kustom.",
      },
      {
        img: proj3,
        tag: "CORE_SYSTEM",
        title: "Auto_City",
        desc: "Generator kota prosedural yang digerakkan data kepadatan populasi.",
      },
    ],
  },
  {
    slug: "data-analyst",
    code: "03",
    name: "Data Analyst",
    tagline: "Analisis data, visualisasi, dan pemodelan prediktif.",
    intro:
      "Saya mengolah data mentah menjadi keputusan: membersihkan dan menyusun pipeline data, membangun dashboard, lalu melatih model untuk memprediksi pola perilaku pengguna.",
    tools: [
      ["Python / Pandas", "[Expert]"],
      ["SQL", "[Advanced]"],
      ["PyTorch / Scikit-learn", "[Advanced]"],
      ["Dashboard & Visualisasi", "[Production]"],
    ],
    awards: [
      ["Finalis — Data Science Hackathon", "2025 // top 20 nasional"],
      ["Google Data Analytics Professional", "2024"],
    ],
    projects: [
      {
        img: proj2,
        tag: "DATA_MODULE",
        title: "Predict_Node",
        desc: "Analisis sentimen pasar secara real-time dengan model deep learning.",
      },
      {
        img: proj3,
        tag: "URBAN_DATA",
        title: "Auto_City",
        desc: "Pemetaan kepadatan populasi urban menjadi model kota prosedural.",
      },
    ],
  },
];

export const getSkill = (slug: string) => skills.find((s) => s.slug === slug);
