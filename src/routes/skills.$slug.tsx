import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioDataEN } from "@/data/portfolioData";
import { ExternalLink, ArrowLeft, Gamepad2 } from "lucide-react";

export const Route = createFileRoute("/skills/$slug")({
  loader: ({ params }) => {
    // Loader runs at server/nav time — use EN data to find the category by slug.
    // Slug is language-agnostic (always English kebab-case).
    const category = portfolioDataEN.skillCategories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Skill Not Found" }, { name: "robots", content: "noindex" }] };
    }
    const category = portfolioDataEN.skillCategories.find((c) => c.slug === loaderData.slug);
    const title = `${category?.name ?? "Skills"} — ${portfolioDataEN.profile.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: category?.shortDescription ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: category?.shortDescription ?? "" },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: SkillCategoryPage,
});

function SkillCategoryPage() {
  const { slug } = Route.useLoaderData();
  const { lang, data } = useLanguage();

  // Find category from the active language data
  const category = data.skillCategories.find((c) => c.slug === slug);
  if (!category) return null;

  const hasCertificates = category.certificates && category.certificates.length > 0;
  const hasAchievements = category.achievements && category.achievements.length > 0;
  const hasPortfolio = category.portfolio && category.portfolio.length > 0;

  const t = {
    back: lang === "en" ? "Back to Home" : "Kembali ke Halaman Utama",
    skillList: lang === "en" ? "SKILL LIST" : "DAFTAR KEAHLIAN",
    skillSubtitle: lang === "en"
      ? "Mastery of tools, programming languages, and technical frameworks in this field."
      : "Penguasaan tools, bahasa pemrograman, dan framework teknis pada bidang ini.",
    certificates: lang === "en" ? "CERTIFICATIONS" : "SERTIFIKASI KOMPETENSI",
    viewCredential: lang === "en" ? "View Credential" : "Lihat Kredensial",
    achievements: lang === "en" ? "AWARDS & ACHIEVEMENTS" : "PENGHARGAAN & PENCAPAIAN",
    portfolio: lang === "en" ? "PROJECT PORTFOLIO" : "PORTOFOLIO PROYEK",
    playGame: lang === "en" ? "Play Game Demo" : "Mainkan Game Demo",
    openProject: lang === "en" ? "External Project" : "Proyek Eksternal",
  };

  return (
    <>
      {/* SiteHeader di luar overflow container agar sticky berfungsi */}
      <SiteHeader />

      <div className="blueprint text-foreground bg-background relative min-h-screen overflow-x-hidden">
        <div className="scanline animate-[scan_8s_linear_infinite]" />

        {/* HEADER & INTRO */}
        <section className="mx-auto max-w-6xl px-6 pt-24 pb-16">
          <Link
            to="/"
            hash="keahlian"
            className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-xs font-medium tracking-wide transition-colors"
          >
            <ArrowLeft className="size-3.5" /> {t.back}
          </Link>
          <div className="border-primary/30 mt-8 border-l-2 pl-8 md:pl-12">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase">
              {category.name}
            </h1>
            <p className="text-muted-foreground mt-6 text-base leading-relaxed md:text-lg text-justify">
              {category.intro}
            </p>
          </div>
        </section>

        {/* BLOK A: SKILL LIST (always shown) */}
        <section className="border-border mx-auto max-w-6xl border-t px-6 py-20">
          <div className="grid gap-8 md:grid-cols-[260px_1fr]">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight uppercase">
                {t.skillList}
              </h3>
              <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
                {t.skillSubtitle}
              </p>
            </div>
            <div className="space-y-4 text-xs">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="border-border/60 hover:border-primary/50 flex items-center justify-between border-b pb-3.5 transition-colors"
                >
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                  <span className="text-primary bg-primary/10 border-primary/20 rounded border px-2.5 py-1 text-xs font-semibold tracking-wide">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOK B: CERTIFICATES (conditional) */}
        {hasCertificates && (
          <section className="border-border mx-auto max-w-6xl border-t px-6 py-20">
            <div className="grid gap-8 md:grid-cols-[260px_1fr]">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight uppercase">
                  {t.certificates}
                </h3>
              </div>
              <div className="space-y-6">
                {category.certificates.map((cert) => (
                  <div key={cert.name} className="border-border/60 rounded-lg border p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h4 className="font-display text-lg font-bold">{cert.name}</h4>
                        <p className="text-muted-foreground text-xs mt-1">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 inline-flex items-center gap-1 text-xs underline"
                        >
                          {t.viewCredential} <ExternalLink className="size-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* BLOK C: ACHIEVEMENTS (conditional) */}
        {hasAchievements && (
          <section className="border-border mx-auto max-w-6xl border-t px-6 py-20">
            <div className="grid gap-8 md:grid-cols-[260px_1fr]">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight uppercase">
                  {t.achievements}
                </h3>
              </div>
              <div className="space-y-6">
                {category.achievements.map((ach) => (
                  <div
                    key={ach.name}
                    className="border-border/60 hover:border-primary/40 bg-card/40 rounded-lg border p-6 transition-all"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-primary text-xs font-semibold tracking-wide uppercase">
                        {ach.organizer}
                      </span>
                      <span className="text-muted-foreground text-xs">{ach.year}</span>
                    </div>
                    <h4 className="font-display mt-2 text-xl font-bold tracking-tight">{ach.name}</h4>
                    {ach.description && (
                      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{ach.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* BLOK D: PORTFOLIO (conditional) */}
        {hasPortfolio && (
          <section className="border-border mx-auto max-w-6xl border-t px-6 py-20">
            <div className="mb-10">
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight uppercase">
                {t.portfolio}
              </h3>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {category.portfolio.map((proj) => (
                <div
                  key={proj.title}
                  className="border-border bg-card/30 hover:border-primary/60 flex flex-col justify-between overflow-hidden rounded-lg border transition-all"
                >
                  <div>
                    <div className="border-border/60 relative aspect-[16/10] overflow-hidden border-b bg-muted/20">
                      <img
                        src={proj.imageUrl}
                        alt={`Project preview: ${proj.title}`}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {proj.tag && (
                        <span className="bg-background/90 text-primary border-primary/30 absolute top-3 left-3 rounded border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide">
                          {proj.tag}
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h4 className="font-display text-xl font-bold tracking-tight">{proj.title}</h4>
                      <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{proj.description}</p>
                    </div>
                  </div>

                  <div className="border-border/60 border-t p-6 pt-4 flex flex-col sm:flex-row gap-3">
                    {proj.gameEmbedUrl ? (
                      <>
                        <a
                          href={proj.gameEmbedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-3 text-xs font-semibold tracking-wide transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                        >
                          <Gamepad2 className="size-4" /> {t.playGame} <ExternalLink className="size-3.5 ml-0.5 opacity-80" />
                        </a>
                        {proj.projectUrl && (
                          <a
                            href={proj.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={t.openProject}
                            className="border-border/80 hover:border-primary/60 hover:bg-muted/30 text-foreground border bg-card/60 inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-xs font-semibold tracking-wide transition-colors"
                          >
                            <ExternalLink className="size-3.5" />
                          </a>
                        )}
                      </>
                    ) : (
                      <a
                        href={proj.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-xs font-semibold tracking-wide transition-colors"
                      >
                        {lang === "en" ? "Open External Project" : "Buka Proyek Eksternal"} <ExternalLink className="size-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FOOTER */}
        <footer className="border-border mx-auto flex max-w-6xl items-center justify-center border-t px-6 py-10 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {data.profile.name}. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
