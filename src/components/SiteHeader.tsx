import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/skills";

const navItems = [
  { label: "[01] Tentang", hash: "tentang" },
  { label: "[02] Pendidikan", hash: "pendidikan" },
  { label: "[03] Pengalaman", hash: "pengalaman" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="bg-background/80 border-border sticky top-0 z-50 border-b backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="font-display terminal-glow text-xl font-bold tracking-tighter">
          STEVANUS&nbsp;R.W
        </Link>

        <div className="hidden items-center gap-1 font-mono text-[10px] tracking-[0.2em] uppercase md:flex">
          {navItems.map((item) => (
            <Link
              key={item.hash}
              to="/"
              hash={item.hash}
              className="text-muted-foreground hover:text-primary px-3 py-1 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <div className="relative flex items-center" ref={ref}>
            <Link
              to="/"
              hash="keahlian"
              className="text-muted-foreground hover:text-primary py-1 pl-3 transition-colors"
            >
              [04] Keahlian
            </Link>
            <button
              type="button"
              aria-label="Buka daftar keahlian"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="text-muted-foreground hover:text-primary px-2 py-1 transition-colors"
            >
              {open ? "▲" : "▼"}
            </button>
            {open ? (
              <div className="border-border bg-background absolute top-full right-0 mt-2 w-56 border shadow-xl">
                {skills.map((s) => (
                  <Link
                    key={s.slug}
                    to="/keahlian/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="text-muted-foreground hover:text-primary hover:bg-primary/5 border-border/50 flex items-center justify-between border-b px-4 py-3 last:border-b-0 transition-colors"
                  >
                    <span>{s.name}</span>
                    <span className="text-primary">{s.code}</span>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="bg-primary size-2 animate-pulse rounded-full" />
          <Link
            to="/"
            hash="kontak"
            className="border-primary/40 text-primary hover:bg-primary/10 rounded-sm border px-4 py-2 font-mono text-[10px] transition-all"
          >
            KONTAK
          </Link>
        </div>
      </nav>
    </header>
  );
}
