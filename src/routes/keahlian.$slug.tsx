import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { getSkill, skills } from "@/data/skills";

export const Route = createFileRoute("/keahlian/$slug")({
  loader: ({ params }) => {
    const skill = getSkill(params.slug);
    if (!skill) throw notFound();
    return { skill };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Keahlian tidak ditemukan" }, { name: "robots", content: "noindex" }] };
    }
    const { skill } = loaderData;
    const title = `${skill.name} — Stevanus Ryo Wijaya`;
    return {
      meta: [
        { title },
        { name: "description", content: skill.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: skill.tagline },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: SkillPage,
});

function SkillPage() {
  const { skill } = Route.useLoaderData();
  const others = skills.filter((s) => s.slug !== skill.slug);

  return (
    <div className="blueprint text-foreground bg-background relative min-h-screen overflow-x-hidden">
      <div className="scanline animate-[scan_8s_linear_infinite]" />
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <Link
          to="/"
          hash="keahlian"
          className="text-muted-foreground hover:text-primary font-mono text-[10px] tracking-widest transition-colors"
        >
          ← KEMBALI_KE_INDEX
        </Link>
        <div className="border-primary/30 mt-8 border-l-2 pl-8 md:pl-12">
          <p className="text-primary mb-6 font-mono text-[11px] tracking-[0.3em] uppercase">MODULE_{skill.code}</p>
          <h1 className="font-display text-6xl leading-[0.9] font-bold tracking-tighter md:text-7xl">
            {skill.name.toUpperCase()}
          </h1>
          <p className="text-muted-foreground mt-8 max-w-[60ch] text-lg leading-relaxed">{skill.intro}</p>
        </div>
      </section>

      <section className="border-border mx-auto max-w-6xl border-t px-6 py-20">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-primary mb-8 font-mono text-xs tracking-[0.4em] uppercase">SKILL_STACK</h2>
            <div className="space-y-4 font-mono text-[12px]">
              {skill.tools.map(([name, level]) => (
                <div key={name} className="border-border/40 flex justify-between border-b pb-3">
                  <span>{name}</span>
                  <span className="text-primary">{level}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-primary mb-8 font-mono text-xs tracking-[0.4em] uppercase">AWARD_STACK</h2>
            <div className="space-y-8">
              {skill.awards.map(([title, meta]) => (
                <div key={title}>
                  <h3 className="font-display text-xl font-bold tracking-wide uppercase">{title}</h3>
                  <p className="text-muted-foreground mt-1 font-mono text-[10px]">{meta}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-border mx-auto max-w-6xl border-t px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-display text-4xl font-bold tracking-tighter">PORTOFOLIO</h2>
          <p className="text-muted-foreground font-mono text-[10px]">ITEMS [{skill.projects.length}]</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {skill.projects.map((p) => (
            <div key={p.title} className="group">
              <div className="border-border group-hover:border-primary/50 relative aspect-[4/3] overflow-hidden border transition-colors">
                <img
                  src={p.img}
                  alt={`Pratinjau proyek ${p.title}`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="size-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                />
              </div>
              <p className="text-primary mt-6 font-mono text-[10px]">{p.tag}</p>
              <h3 className="font-display mt-1 text-lg font-bold tracking-wide uppercase">{p.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-border mx-auto max-w-6xl border-t px-6 py-20">
        <h2 className="text-primary mb-8 font-mono text-xs tracking-[0.4em] uppercase">KEAHLIAN_LAIN</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {others.map((s) => (
            <Link
              key={s.slug}
              to="/keahlian/$slug"
              params={{ slug: s.slug }}
              className="border-border hover:border-primary/60 hover:bg-primary/5 border p-6 transition-all"
            >
              <p className="text-primary font-mono text-[10px]">MODULE_{s.code}</p>
              <h3 className="font-display mt-2 text-xl font-bold uppercase">{s.name}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{s.tagline}</p>
            </Link>
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
