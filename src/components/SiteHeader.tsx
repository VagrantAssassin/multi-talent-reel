import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sun, Moon } from "lucide-react";

export function SiteHeader() {
  const { lang, toggleLang, data } = useLanguage();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const ref = useRef<HTMLDivElement>(null);

  // Nav labels change with language
  const navItems = [
    { label: lang === "en" ? "About" : "Tentang", hash: "tentang" },
    { label: lang === "en" ? "Education" : "Pendidikan", hash: "pendidikan" },
    { label: lang === "en" ? "Experience" : "Pengalaman", hash: "pengalaman" },
  ];

  useEffect(() => {
    // Sinkronisasi tema dari localStorage atau default ke dark
    const saved = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    const initialTheme = saved === "light" ? "light" : "dark";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("light", initialTheme === "light");
    document.documentElement.classList.toggle("dark", initialTheme === "dark");

    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("portfolio-theme", next);
    document.documentElement.classList.toggle("light", next === "light");
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    // Navbar sticky: mengikuti scroll ke bawah
    <header className="bg-background/95 border-border sticky top-0 z-50 border-b backdrop-blur-md transition-colors">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        {/* Link Home */}
        <Link to="/" className="font-display text-heading hover:text-primary text-xl font-bold tracking-tight transition-colors">
          Home
        </Link>

        {/* Menu Navigasi */}
        <div className="hidden items-center gap-2 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.hash}
              to="/"
              hash={item.hash}
              className="text-muted-foreground hover:text-foreground inline-flex justify-center px-3 py-1.5 transition-colors"
              style={{ minWidth: item.hash === "pendidikan" ? "90px" : item.hash === "pengalaman" ? "90px" : "70px" }}
            >
              {item.label}
            </Link>
          ))}

          {/* Dropdown Keahlian — left-aligned, expands right */}
          <div className="relative flex items-center" ref={ref}>
            <Link
              to="/"
              hash="keahlian"
              className="text-muted-foreground hover:text-foreground inline-flex justify-center py-1.5 pl-3 transition-colors"
              style={{ minWidth: "60px" }}
            >
              {lang === "en" ? "Skills" : "Keahlian"}
            </Link>
            <button
              type="button"
              aria-label="Toggle skills dropdown"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="text-muted-foreground hover:text-foreground px-2 py-1.5 text-xs transition-colors"
            >
              {open ? "▲" : "▼"}
            </button>
            {open && (
              <div className="border-border bg-background absolute top-full left-0 mt-2 min-w-max rounded-md border p-1 shadow-xl">
                {data.skillCategories.map((s) => (
                  <Link
                    key={s.slug}
                    to="/skills/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="text-muted-foreground hover:text-foreground hover:bg-muted/50 block rounded px-3 py-2.5 text-xs font-medium transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons: Language + Theme + Contact */}
        <div className="flex items-center gap-2">
          {/* Tombol Ganti Bahasa */}
          <button
            type="button"
            onClick={toggleLang}
            aria-label={lang === "en" ? "Switch to Indonesian" : "Switch to English"}
            title={lang === "en" ? "Bahasa Indonesia" : "English"}
            className="border-border hover:bg-muted/60 text-muted-foreground hover:text-foreground inline-flex items-center justify-center rounded-md border px-2.5 py-1.5 text-xs font-semibold tracking-wider transition-all"
          >
            {lang === "en" ? "ID" : "EN"}
          </button>

          {/* Tombol Ganti Mode Terang / Gelap */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light Mode" : "Dark Mode"}
            className="border-border hover:bg-muted/60 text-muted-foreground hover:text-foreground inline-flex items-center justify-center rounded-md border p-2 text-sm transition-all"
          >
            {theme === "dark" ? (
              <Sun className="size-4 text-amber-400" />
            ) : (
              <Moon className="size-4 text-indigo-900" />
            )}
          </button>

          <Link
            to="/"
            hash="kontak"
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex min-w-[80px] items-center justify-center rounded-md px-4 py-2 text-xs font-semibold tracking-wide transition-all"
          >
            {lang === "en" ? "Contact" : "Kontak"}
          </Link>
        </div>
      </nav>
    </header>
  );
}
