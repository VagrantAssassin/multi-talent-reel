import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioDataEN } from "@/data/portfolioData";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

// SVG ikon untuk platform yang tidak ada di lucide-react
const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
    <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
  </svg>
);
const IconGitHub = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
const IconItchio = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
    <path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.106 2.41 2.435 2.41h.024c1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.034 2.41 2.362 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.436 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.622-2.08-2.99-3.13-3.612C19.948 1 12.867 1 12 1c-.867 0-7.948 0-8.87.338zM8.99 9.97a3.27 3.27 0 01-.604-.057c-.634 1.628-1.155 3.355-1.293 5.537-.5.024-1.002.036-1.504.036-1.246 0-2.505-.076-3.735-.25C1.52 17.7 1.34 20.637 1.34 21c0 0 1.57 1.99 10.658 1.99 9.087 0 10.656-1.99 10.656-1.99 0-.363-.176-3.3-.51-5.764a22.375 22.375 0 01-3.73.25c-.502 0-1.003-.012-1.505-.036-.138-2.182-.66-3.909-1.294-5.537a3.274 3.274 0 01-.603.057c-.984 0-1.87-.44-2.46-1.135-.59.694-1.476 1.135-2.46 1.135zM9 14h6v1H9v-1zm-.5 2h7l-.5 4H9.5l-.5-4z" />
  </svg>
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${portfolioDataEN.profile.name} — Portofolio Game Dev & Data Science` },
      {
        name: "description",
        content: `${portfolioDataEN.profile.name}: Mahasiswa Teknik Informatika UNIKOM. Portofolio Game Development (2D & Technical Art) serta Data Science & Analytics.`,
      },
      {
        property: "og:title",
        content: `${portfolioDataEN.profile.name} — Portofolio Game Dev & Data Science`,
      },
      {
        property: "og:description",
        content: portfolioDataEN.profile.tagline,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { lang, data: portfolioData } = useLanguage();
  const { profile, education, experience, skillCategories, contact } = portfolioData;

  return (
    <>
      {/* Navbar di LUAR div overflow-x-hidden agar sticky berfungsi terhadap viewport */}
      <SiteHeader />

      <div className="blueprint text-foreground bg-background relative min-h-screen overflow-x-hidden">
        <div className="scanline animate-[scan_8s_linear_infinite]" />

      {/* 6.1 HERO SECTION */}
      <section className="relative mx-auto max-w-6xl px-6 pt-24 pb-20">
        <div className="grid items-center gap-10 md:grid-cols-[1.6fr_1fr]">
          <div className="border-primary/30 animate-[rise_800ms_var(--ease-fluid)_both] border-l-2 pl-6 sm:pl-8 md:pl-10">
            {/* FR-1.1: Nama Lengkap (Lebih besar dan 1 baris) */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase whitespace-nowrap">
              {profile.name}
            </h1>
            {/* FR-1.2: Tagline (Dinaikkan mendekati nama) */}
            <p className="text-primary mt-2.5 text-sm font-medium tracking-wide md:text-base">
              {profile.tagline}
            </p>
            {/* FR-1.4: Bio / Paragraf Deskripsi Diri (Justify dan lebar penuh) */}
            <p className="text-muted-foreground mt-5 text-base leading-relaxed opacity-90 text-justify">
              {profile.bio}
            </p>

            {/* Tombol Hubungi Saya */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#kontak"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-7 py-3 text-sm font-semibold tracking-wide transition-colors"
              >
                {lang === "en" ? "Contact Me" : "Hubungi Saya"}
              </a>
            </div>
          </div>

          {/* FR-1.3: Foto Profil (Dikecilkan proporsional agar nama lebih lega) */}
          <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[310px] md:max-w-[330px] md:ml-auto animate-[rise_800ms_var(--ease-fluid)_both] [animation-delay:150ms]">
            <div className="border-border/80 relative overflow-hidden rounded-lg border shadow-xl">
              <img
                src={profile.photoUrl}
                alt={`Foto profil ${profile.name}`}
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ABOUT */}
      <section id="tentang" className="border-border mx-auto max-w-6xl scroll-mt-24 border-t px-6 py-20">
        <div className="grid gap-8 md:grid-cols-[240px_1fr]">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight uppercase">
              {lang === "en" ? "ABOUT ME" : "TENTANG SAYA"}
            </h3>
          </div>
          <div className="space-y-4">
            <p className="text-foreground/90 text-base leading-relaxed text-justify">
              {lang === "en" ? (
                <>I am an Informatics Engineering student at <strong>Universitas Komputer Indonesia (UNIKOM)</strong> with a dual focus on <strong>Game Development (2D &amp; Technical Art)</strong> and{" "}<strong>Data Science &amp; Analytics</strong>.</>
              ) : (
                <>Saya adalah mahasiswa Teknik Informatika di <strong>Universitas Komputer Indonesia (UNIKOM)</strong> yang memiliki fokus ganda pada <strong>Game Development (2D &amp; Technical Art)</strong> serta{" "}<strong>Data Science &amp; Analytics</strong>.</>
              )}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed text-justify">
              {lang === "en" ? (
                <>In the Game Development sub-division of <strong>UNIKOM Codelabs</strong>, I produce 2D visual assets, integrate them into the Unity engine, and optimize the technical pipeline. At the same time, I leverage data modeling using Python, Pandas, and SQL to extract valuable insights and design scalable computational systems.</>
              ) : (
                <>Di sub-divisi Game Development <strong>UNIKOM Codelabs</strong>, saya memproduksi aset visual 2D, mengintegrasikan aset ke dalam engine Unity, dan mengoptimalkan pipeline teknis. Pada saat yang sama, saya juga memanfaatkan pemodelan data menggunakan Python, Pandas, dan SQL untuk mengekstraksi wawasan berharga dan merancang sistem komputasi yang terukur.</>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* 6.2 SECTION RIWAYAT PENDIDIKAN */}
      <section id="pendidikan" className="border-border mx-auto max-w-6xl scroll-mt-24 border-t px-6 py-20">
        <div className="grid gap-8 md:grid-cols-[260px_1fr]">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight uppercase">
              {lang === "en" ? "EDUCATION" : "RIWAYAT PENDIDIKAN"}
            </h3>
          </div>
          <div className="space-y-10">
            {education.map((item, idx) => (
              <ResumeCard
                key={item.institution}
                period={`${item.startDate} — ${item.endDate}`}
                subtitle={`${item.level} — ${item.institution}`}
                description={item.description}
                isLatest={idx === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6.3 SECTION PENGALAMAN */}
      <section id="pengalaman" className="border-border mx-auto max-w-6xl scroll-mt-24 border-t px-6 py-20">
        <div className="grid gap-8 md:grid-cols-[260px_1fr]">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight uppercase">
              {lang === "en" ? "EXPERIENCE" : "PENGALAMAN"}
            </h3>
          </div>
          <div className="space-y-10">
            {experience.map((item, idx) => (
              <ResumeCard
                key={item.title}
                period={`${item.startDate} — ${item.endDate}`}
                subtitle={item.title}
                description={item.description}
                isLatest={idx === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6.4 SECTION KEAHLIAN */}
      <section id="keahlian" className="border-border mx-auto max-w-6xl scroll-mt-24 border-t px-6 py-20">
        <div className="mb-10">
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight uppercase">
            {lang === "en" ? "SKILLS" : "BIDANG KEAHLIAN"}
          </h3>
        </div>

        {/* FR-4.1 & FR-4.2: Grid Button Bidang Keahlian */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <Link
              key={category.slug}
              to="/skills/$slug"
              params={{ slug: category.slug }}
              className="group border-border bg-card/40 hover:border-primary/70 hover:bg-primary/5 relative flex flex-col justify-between rounded-lg border p-8 transition-all duration-300"
            >
              <div>
                {/* Nama bidang */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-display group-hover:text-primary text-2xl font-bold tracking-tight uppercase transition-colors">
                    {category.name}
                  </h4>
                  {category.portfolio?.some((p) => p.gameEmbedUrl) && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-primary/15 text-primary border border-primary/30">
                      🎮 Playable Demo
                    </span>
                  )}
                </div>
                {/* Penjelasan singkat bidang — min-h agar card tidak bergoyang saat ganti bahasa */}
                <p className="text-muted-foreground mt-3 min-h-[72px] text-sm leading-relaxed text-justify">
                  {category.shortDescription}
                </p>
              </div>

              {/* Garis pembatas — lebar teks dikunci agar tidak shift */}
              <div className="border-border/80 text-primary mt-6 flex items-center justify-between border-t pt-5">
                <span className="inline-flex min-w-[140px] text-sm font-semibold tracking-wide">{lang === "en" ? "View Skill Details" : "Lihat Detail Keahlian"}</span>
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6.5 SECTION KONTAK */}
      <section id="kontak" className="border-border mx-auto max-w-6xl scroll-mt-24 border-t px-6 py-20">
        <div className="mb-10">
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight uppercase">
            {lang === "en" ? "CONTACT ME" : "HUBUNGI SAYA"}
          </h3>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            {lang === "en"
              ? "Open to collaboration in game development projects, data science research, or professional positions."
              : "Terbuka untuk kolaborasi proyek game development, riset data science, maupun posisi profesional."}
          </p>
        </div>

        {/* Grid 2 kolom untuk kontak */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Email */}
          <a
            href={`mailto:${contact.email}`}
            className="group border-border bg-card/40 hover:border-primary/60 hover:bg-primary/5 flex items-center gap-4 rounded-lg border p-5 transition-all duration-300"
          >
            <span className="text-primary bg-primary/10 flex size-10 shrink-0 items-center justify-center rounded-md">
              <Mail className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="text-muted-foreground text-xs font-medium">Email</p>
              <p className="text-foreground group-hover:text-primary truncate text-sm font-semibold transition-colors">{contact.email}</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6281947320913"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-border bg-card/40 hover:border-primary/60 hover:bg-primary/5 flex items-center gap-4 rounded-lg border p-5 transition-all duration-300"
          >
            <span className="text-primary bg-primary/10 flex size-10 shrink-0 items-center justify-center rounded-md">
              <Phone className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="text-muted-foreground text-xs font-medium">WhatsApp</p>
              <p className="text-foreground group-hover:text-primary truncate text-sm font-semibold transition-colors">{contact.phone}</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-border bg-card/40 hover:border-primary/60 hover:bg-primary/5 flex items-center gap-4 rounded-lg border p-5 transition-all duration-300"
          >
            <span className="text-primary bg-primary/10 flex size-10 shrink-0 items-center justify-center rounded-md">
              <IconLinkedIn />
            </span>
            <div className="min-w-0">
              <p className="text-muted-foreground text-xs font-medium">LinkedIn</p>
              <p className="text-foreground group-hover:text-primary truncate text-sm font-semibold transition-colors">stevanusryowijaya</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-border bg-card/40 hover:border-primary/60 hover:bg-primary/5 flex items-center gap-4 rounded-lg border p-5 transition-all duration-300"
          >
            <span className="text-primary bg-primary/10 flex size-10 shrink-0 items-center justify-center rounded-md">
              <IconGitHub />
            </span>
            <div className="min-w-0">
              <p className="text-muted-foreground text-xs font-medium">GitHub</p>
              <p className="text-foreground group-hover:text-primary truncate text-sm font-semibold transition-colors">VagrantAssassin</p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-border bg-card/40 hover:border-primary/60 hover:bg-primary/5 flex items-center gap-4 rounded-lg border p-5 transition-all duration-300"
          >
            <span className="text-primary bg-primary/10 flex size-10 shrink-0 items-center justify-center rounded-md">
              <IconInstagram />
            </span>
            <div className="min-w-0">
              <p className="text-muted-foreground text-xs font-medium">Instagram (Art)</p>
              <p className="text-foreground group-hover:text-primary truncate text-sm font-semibold transition-colors">schwarzer_art</p>
            </div>
          </a>

          {/* Itch.io */}
          <a
            href={contact.itchio}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-border bg-card/40 hover:border-primary/60 hover:bg-primary/5 flex items-center gap-4 rounded-lg border p-5 transition-all duration-300"
          >
            <span className="text-primary bg-primary/10 flex size-10 shrink-0 items-center justify-center rounded-md">
              <IconItchio />
            </span>
            <div className="min-w-0">
              <p className="text-muted-foreground text-xs font-medium">Itch.io (Games)</p>
              <p className="text-foreground group-hover:text-primary truncate text-sm font-semibold transition-colors">vagrant-assassin.itch.io</p>
            </div>
          </a>

          {/* Lokasi — span 2 kolom */}
          <div className="border-border bg-card/40 sm:col-span-2 flex items-center gap-4 rounded-lg border p-5">
            <span className="text-primary bg-primary/10 flex size-10 shrink-0 items-center justify-center rounded-md">
              <MapPin className="size-5" />
            </span>
            <div>
              <p className="text-muted-foreground text-xs font-medium">Domisili</p>
              <p className="text-foreground text-sm font-semibold">{contact.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Poin 5: Footer bersih tanpa teks sci-fi / CONNECTED_TO_NODE */}
      <footer className="border-border mx-auto flex max-w-6xl items-center justify-center border-t px-6 py-10 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
}

/**
 * Komponen Reusable ATS-Friendly untuk Riwayat Pendidikan & Pengalaman
 */
function ResumeCard({
  period,
  subtitle,
  description,
  isLatest,
}: {
  period: string;
  subtitle: string;
  description: string[];
  isLatest: boolean;
}) {
  return (
    <div className={`relative border-l pl-8 ${isLatest ? "border-primary/40" : "border-border"}`}>
      <div
        className={`absolute top-0 -left-1.5 size-3 rounded-full ${
          isLatest ? "bg-primary shadow-[0_0_10px_var(--color-primary)]" : "bg-muted-foreground/40"
        }`}
      />
      <p className={`text-xs font-semibold ${isLatest ? "text-primary" : "text-muted-foreground"}`}>
        {period}
      </p>
      <h4 className="font-display mt-1 text-xl font-bold tracking-tight uppercase md:text-2xl">
        {subtitle}
      </h4>
      {description && description.length > 0 && (
        <ul className="text-muted-foreground mt-3 space-y-1.5 text-sm leading-relaxed list-disc list-outside pl-4">
          {description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
