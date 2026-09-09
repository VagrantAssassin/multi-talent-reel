import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { skills } from "@/data/skills";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stevanus Ryo Wijaya — Game & Data Portfolio" },
      {
        name: "description",
        content:
          "Perkenalan Stevanus Ryo Wijaya: riwayat pendidikan, pengalaman, kontak, serta keahlian di game art, game programming, dan data analysis.",
      },
      { property: "og:title", content: "Stevanus Ryo Wijaya — Game & Data Portfolio" },
      {
        property: "og:description",
        content: "Perkenalan diri, riwayat pendidikan, pengalaman, kontak, dan halaman keahlian.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

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

const experience = [
  {
    ts: "2025 — SEKARANG",
    title: "Freelance Game Developer",
    desc: "Mengerjakan prototipe game indie: gameplay system, aset visual, dan optimasi performa.",
    active: true,
  },
  {
    ts: "2024 — 2025",
    title: "Data Analyst Intern",
    desc: "Membangun pipeline data dan dashboard untuk memantau perilaku pengguna produk digital.",
    active: false,
  },
  {
    ts: "2023 — 2024",
    title: "Asisten Laboratorium Komputer",
    desc: "Mendampingi praktikum pemrograman dasar dan struktur data untuk mahasiswa tingkat awal.",
    active: false,
  },
];

const contacts = [
  ["EMAIL", "stevanus.ryo@example.com", "mailto:stevanus.ryo@example.com"],
  ["LINKEDIN", "/in/stevanusryo", "https://linkedin.com"],
  ["GITHUB", "@stevanusryo", "https://github.com"],
  ["LOKASI", "Jakarta, Indonesia", ""],
];

function Index() {
  return (
    <div className="blueprint text-foreground bg-background relative min-h-screen overflow-x-hidden">
      <div className="scanline animate-[scan_8s_linear_infinite]" />
      <SiteHeader />

      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-6 pt-24 pb-20">
        <div className="grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
          <div className="border-primary/30 animate-[rise_800ms_var(--ease-fluid)_both] border-l-2 pl-8 md:pl-12">
            <p className="text-primary mb-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase">
              <span className="bg-primary/40 h-px w-8" /> INIT_CORE_PROCESS
            </p>
            <h1 className="font-display text-6xl leading-[0.85] font-bold tracking-tighter text-balance md:text-8xl">
              STEVANUS <br />
              RYO WIJAYA
            </h1>
            <p className="text-muted-foreground mt-8 max-w-[42ch] text-lg leading-relaxed font-light italic opacity-80 md:text-xl">
              Menjembatani dunia game interaktif dengan pemodelan data berdensitas tinggi.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#keahlian"
                className="bg-primary text-primary-foreground rounded-xs px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all hover:brightness-110"
              >
                Lihat Keahlian
              </a>
              <a
                href="#kontak"
                className="text-muted-foreground hover:text-foreground font-mono text-xs tracking-widest underline underline-offset-8 transition-colors"
              >
                Hubungi_Saya
              </a>
            </div>
          </div>

          <div className="relative animate-[rise_800ms_var(--ease-fluid)_both] [animation-delay:150ms]">
            <div className="border-border relative overflow-hidden border">
              <img
                src={portrait}
                alt="Foto diri Stevanus Ryo Wijaya"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="border-primary/30 text-primary absolute top-3 left-3 border px-2 py-1 font-mono text-[9px]">
                ID_PHOTO.JPG
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TENTANG */}
      <section id="tentang" className="border-border mx-auto max-w-6xl scroll-mt-24 border-t px-6 py-24">
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

      {/* PENDIDIKAN */}
      <section id="pendidikan" className="border-border mx-auto max-w-6xl scroll-mt-24 border-t px-6 py-24">
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
              <Timeline key={item.ts} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* PENGALAMAN */}
      <section id="pengalaman" className="border-border mx-auto max-w-6xl scroll-mt-24 border-t px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-primary mb-4 font-mono text-xs tracking-[0.4em] uppercase">RUNTIME_LOG</h2>
            <h3 className="font-display text-5xl font-bold tracking-tighter">
              PENGALAMAN
            </h3>
          </div>
          <div className="space-y-12">
            {experience.map((item) => (
              <Timeline key={item.ts} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* KEAHLIAN */}
      <section id="keahlian" className="border-border mx-auto max-w-6xl scroll-mt-24 border-t px-6 py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-primary mb-4 font-mono text-xs tracking-[0.4em] uppercase">SKILL_INDEX</h2>
            <h3 className="font-display text-5xl font-bold tracking-tighter">KEAHLIAN</h3>
          </div>
          <p className="text-muted-foreground max-w-[40ch] font-mono text-[10px] leading-relaxed">
            Pilih salah satu bidang untuk melihat detail keahlian, penghargaan, dan portofolio di halaman tersendiri.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((s) => (
            <Link
              key={s.slug}
              to="/keahlian/$slug"
              params={{ slug: s.slug }}
              className="group border-border hover:border-primary/60 hover:bg-primary/5 flex flex-col justify-between border p-8 transition-all"
            >
              <div>
                <p className="text-primary font-mono text-[10px]">MODULE_{s.code}</p>
                <h4 className="font-display mt-3 text-2xl font-bold tracking-tight uppercase">{s.name}</h4>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.tagline}</p>
              </div>
              <span className="text-primary mt-8 font-mono text-[10px] tracking-widest">
                OPEN_PAGE →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="border-border mx-auto max-w-6xl scroll-mt-24 border-t px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-primary mb-4 font-mono text-xs tracking-[0.4em] uppercase">OPEN_CHANNEL</h2>
            <h3 className="font-display text-5xl font-bold tracking-tighter">KONTAK</h3>
          </div>
          <div className="space-y-4 font-mono text-[12px]">
            {contacts.map(([label, value, href]) => (
              <div key={label} className="border-border/40 flex justify-between gap-6 border-b pb-3">
                <span className="text-muted-foreground">{label}</span>
                {href ? (
                  <a href={href} className="text-primary hover:underline">
                    {value}
                  </a>
                ) : (
                  <span>{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-border mx-auto flex max-w-6xl flex-col items-center justify-between border-t px-6 py-12 font-mono text-[10px] opacity-50 md:flex-row">
        <p>ESTABLISHED_2026 // STEVANUS RYO WIJAYA</p>
        <p className="mt-4 md:mt-0">CONNECTED_TO_NODE: JAKARTA_CORE_01</p>
      </footer>
    </div>
  );
}

function Timeline({ ts, title, desc, active }: { ts: string; title: string; desc: string; active: boolean }) {
  return (
    <div className={`relative border-l pl-8 ${active ? "border-primary/20" : "border-primary/10"}`}>
      <div
        className={
          active
            ? "bg-primary absolute top-0 -left-1.5 size-3 shadow-[0_0_10px_var(--color-primary)]"
            : "bg-border absolute top-0 -left-1 size-2"
        }
      />
      <p className={`mb-1 font-mono text-[10px] ${active ? "text-primary" : "text-muted-foreground"}`}>{ts}</p>
      <h4 className="font-display text-xl font-bold uppercase">{title}</h4>
      <p className="text-muted-foreground mt-2 max-w-[46ch] text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
