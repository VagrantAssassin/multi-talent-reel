import { createFileRoute } from "@tanstack/react-router";
import proj1 from "@/assets/proj-1.jpg";
import proj2 from "@/assets/proj-2.jpg";
import proj3 from "@/assets/proj-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stevanus Ryo Wijaya — Game Developer & Data Scientist" },
      {
        name: "description",
        content:
          "Portofolio Stevanus Ryo Wijaya: game development dan data science. Keahlian, riwayat pendidikan, sertifikasi, pencapaian, dan proyek pilihan.",
      },
      { property: "og:title", content: "Stevanus Ryo Wijaya — Game Developer & Data Scientist" },
      {
        property: "og:description",
        content:
          "Portofolio Stevanus Ryo Wijaya: game development dan data science, lengkap dengan pendidikan, sertifikasi, dan proyek pilihan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const gameSkills = [
  ["Unity_Engine / C#", "[Advanced]"],
  ["Unreal / C++", "[Intermediate]"],
  ["Compute_Shaders", "[Research]"],
  ["Physics_Optimization", "[Production]"],
];

const dataSkills = [
  ["Python / PyTorch", "[Expert]"],
  ["ETL_Pipelines", "[Scaled]"],
  ["Predictive_Modeling", "[0.91_Acc]"],
  ["SQL / Graph_Theory", "[Theory]"],
];

const education = [
  {
    ts: "TS_2023_2025",
    title: "S1 Teknik Informatika",
    desc: "Fokus pada rekayasa perangkat lunak, grafika komputer, dan kecerdasan buatan.",
    active: true,
  },
  {
    ts: "TS_2020_2023",
    title: "SMA — Jurusan IPA",
    desc: "Aktif di klub komputer dan kompetisi olimpiade sains bidang informatika.",
    active: false,
  },
];

const certifications = [
  ["Unity Certified Associate: Programmer", "2025"],
  ["TensorFlow Developer Certificate", "2025"],
  ["Google Data Analytics Professional", "2024"],
  ["Machine Learning Specialization", "2024"],
];

const awards = [
  ["Juara 1 — Game Jam Nasional", "2025 // kategori tim indie"],
  ["Finalis — Data Science Hackathon", "2025 // top 20 nasional"],
  ["Best Student Project", "2024 // showcase kampus"],
];

const projects = [
  {
    img: proj1,
    tag: "SIM_MODULE",
    file: "IMG_01.DAT",
    title: "Nirvana_Render",
    desc: "Game eksplorasi atmosferik dengan sistem pencahayaan volumetrik kustom di Unity.",
    active: true,
  },
  {
    img: proj2,
    tag: "DATA_MODULE",
    file: "IMG_02.DAT",
    title: "Predict_Node",
    desc: "Analisis sentimen pasar secara real-time menggunakan model deep learning.",
    active: false,
  },
  {
    img: proj3,
    tag: "CORE_SYSTEM",
    file: "IMG_03.DAT",
    title: "Auto_City",
    desc: "Generator kota prosedural yang digerakkan data kepadatan populasi urban.",
    active: false,
  },
];

function Index() {
  return (
    <div className="blueprint text-foreground bg-background relative min-h-screen overflow-x-hidden">
      <div className="scanline animate-[scan_8s_linear_infinite]" />

      <header className="bg-background/80 border-border sticky top-0 z-50 border-b backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display terminal-glow text-xl font-bold tracking-tighter">
            STEVANUS&nbsp;R.W
          </a>
          <div className="hidden items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase md:flex">
            <a href="#tentang" className="text-muted-foreground hover:text-primary px-4 py-1 transition-colors">
              [01] About
            </a>
            <a href="#keahlian" className="text-muted-foreground hover:text-primary px-4 py-1 transition-colors">
              [02] Skills
            </a>
            <a href="#pendidikan" className="text-muted-foreground hover:text-primary px-4 py-1 transition-colors">
              [03] Logs
            </a>
            <a href="#portofolio" className="text-muted-foreground hover:text-primary px-4 py-1 transition-colors">
              [04] Data
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-primary size-2 animate-pulse rounded-full" />
            <a
              href="#portofolio"
              className="border-primary/40 text-primary hover:bg-primary/10 rounded-sm border px-4 py-2 font-mono text-[10px] transition-all"
            >
              SYSTEM_READY
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-6 pt-32 pb-20">
        <div className="border-primary/30 animate-[rise_800ms_var(--ease-fluid)_both] border-l-2 pl-8 md:pl-12">
          <p className="text-primary mb-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase">
            <span className="bg-primary/40 h-px w-8" /> INIT_CORE_PROCESS
          </p>
          <h1 className="font-display text-7xl leading-[0.85] font-bold tracking-tighter text-balance md:text-9xl">
            STEVANUS <br />
            RYO WIJAYA
          </h1>
          <p className="text-muted-foreground mt-10 max-w-[40ch] text-xl leading-relaxed font-light italic opacity-80 md:text-2xl">
            Menjembatani dunia game interaktif dengan pemodelan data berdensitas tinggi.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="#portofolio"
              className="bg-primary text-primary-foreground rounded-xs px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all hover:brightness-110"
            >
              Lihat Portofolio
            </a>
            <a
              href="#tentang"
              className="text-muted-foreground hover:text-foreground font-mono text-xs tracking-widest underline underline-offset-8 transition-colors"
            >
              Read_Documentation
            </a>
          </div>
        </div>

        <div className="bg-border border-border mt-20 grid animate-[rise_800ms_var(--ease-fluid)_both] grid-cols-2 gap-px border [animation-delay:200ms] md:grid-cols-4">
          {[
            ["Exp_Duration", "03+", " YRS"],
            ["Nodes_Built", "12", ""],
            ["Signal_Auth", "04", ""],
            ["Focus_Fields", "02", ""],
          ].map(([label, value, unit]) => (
            <div key={label} className="bg-background p-6">
              <p className="text-muted-foreground mb-2 font-mono text-[10px] tracking-widest uppercase">{label}</p>
              <p className="font-display text-3xl font-bold">
                {value}
                {unit ? <span className="text-primary font-mono text-sm tracking-tighter">{unit}</span> : null}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TENTANG */}
      <section id="tentang" className="border-border mx-auto max-w-6xl border-t px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-primary mb-4 font-mono text-xs tracking-[0.4em] uppercase">USER_PROFILE</h2>
            <h3 className="font-display text-5xl font-bold tracking-tighter">
              TENTANG
              <br />
              SAYA
            </h3>
          </div>
          <div className="space-y-6">
            <p className="text-muted-foreground max-w-[62ch] text-lg leading-relaxed">
              Saya seorang pengembang yang bergerak di dua bidang: membangun pengalaman bermain yang terasa hidup, dan
              membaca pola di balik data agar keputusan menjadi lebih tajam. Keduanya berangkat dari satu kebiasaan yang
              sama — membongkar sistem sampai paham cara kerjanya.
            </p>
            <p className="text-muted-foreground max-w-[62ch] leading-relaxed">
              Sehari-hari saya bekerja dengan Unity dan C# untuk prototipe game, lalu berpindah ke Python untuk
              menganalisis perilaku pemain dan melatih model prediktif. Saya menikmati proyek yang menuntut ketelitian
              teknis sekaligus rasa desain.
            </p>
          </div>
        </div>
      </section>

      {/* KEAHLIAN */}
      <section id="keahlian" className="border-border mx-auto max-w-6xl border-t px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          {[
            { no: "01", title: "Game Development", rows: gameSkills },
            { no: "02", title: "Data Science", rows: dataSkills },
          ].map((domain) => (
            <div key={domain.no} className="group">
              <div className="mb-8 flex items-center gap-4">
                <div className="border-primary/20 text-primary flex size-8 items-center justify-center border font-mono text-xs">
                  {domain.no}
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight uppercase">{domain.title}</h2>
              </div>
              <div className="space-y-4 font-mono text-[12px] opacity-70 transition-opacity group-hover:opacity-100">
                {domain.rows.map(([name, level], i) => (
                  <div
                    key={name}
                    className={`flex justify-between ${i < domain.rows.length - 1 ? "border-border/40 border-b pb-3" : ""}`}
                  >
                    <span>{name}</span>
                    <span className="text-primary">{level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PENDIDIKAN */}
      <section id="pendidikan" className="border-border mx-auto max-w-6xl border-t px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-primary mb-4 font-mono text-xs tracking-[0.4em] uppercase">SYS_HISTORY_LOG</h2>
            <h3 className="font-display text-5xl font-bold tracking-tighter">
              RIWAYAT
              <br />
              PENDIDIKAN
            </h3>
          </div>
          <div className="space-y-12">
            {education.map((item) => (
              <div
                key={item.ts}
                className={`relative border-l pl-8 ${item.active ? "border-primary/20" : "border-primary/10"}`}
              >
                <div
                  className={
                    item.active
                      ? "bg-primary absolute top-0 -left-1.5 size-3 shadow-[0_0_10px_var(--color-primary)]"
                      : "bg-border absolute top-0 -left-1 size-2"
                  }
                />
                <p className={`mb-1 font-mono text-[10px] ${item.active ? "text-primary" : "text-muted-foreground"}`}>
                  {item.ts}
                </p>
                <h4 className="font-display text-xl font-bold uppercase">{item.title}</h4>
                <p className="text-muted-foreground mt-2 max-w-[46ch] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERTIFIKASI + PENCAPAIAN */}
      <section className="border-border mx-auto max-w-6xl border-t px-6 py-24">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-primary mb-8 font-mono text-xs tracking-[0.4em] uppercase">CERT_REGISTRY</h2>
            <div className="space-y-4 font-mono text-[12px]">
              {certifications.map(([name, year]) => (
                <div key={name} className="border-border/40 flex justify-between border-b pb-3">
                  <span>{name}</span>
                  <span className="text-primary">{year}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-primary mb-8 font-mono text-xs tracking-[0.4em] uppercase">AWARD_STACK</h2>
            <div className="space-y-8">
              {awards.map(([title, meta]) => (
                <div key={title}>
                  <h4 className="font-display text-xl font-bold tracking-wide uppercase">{title}</h4>
                  <p className="text-muted-foreground mt-1 font-mono text-[10px]">{meta}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTOFOLIO */}
      <section id="portofolio" className="border-border mx-auto max-w-6xl border-t px-6 py-24">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-display text-5xl font-bold tracking-tighter">PROJECT_REPOSITORY</h2>
          <p className="text-muted-foreground text-right font-mono text-[10px]">BROWSE_ALL.EXE [{projects.length}]</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group relative">
              <div className="border-border group-hover:border-primary/50 relative aspect-[4/3] w-full overflow-hidden border transition-colors">
                <img
                  src={p.img}
                  alt={`Pratinjau proyek ${p.title}`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="size-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                />
                <div className="text-muted-foreground absolute bottom-2 left-2 font-mono text-[10px]">{p.file}</div>
                {p.active ? (
                  <div className="border-primary/20 text-primary absolute top-2 right-2 border px-1 font-mono text-[8px]">
                    ACTIVE
                  </div>
                ) : null}
              </div>
              <div className="mt-6">
                <p className="text-primary font-mono text-[10px]">{p.tag}</p>
                <h3 className="font-display mt-1 text-lg font-bold tracking-wide uppercase">{p.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-border mx-auto flex max-w-6xl flex-col items-center justify-between border-t px-6 py-12 font-mono text-[10px] opacity-50 md:flex-row">
        <p>ESTABLISHED_2026 // STEVANUS RYO WIJAYA</p>
        <p className="mt-4 md:mt-0">CONNECTED_TO_NODE: JAKARTA_CORE_01</p>
      </footer>
    </div>
  );
}
