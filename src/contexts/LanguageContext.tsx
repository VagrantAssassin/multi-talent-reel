import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { portfolioDataEN, portfolioDataID } from "@/data/portfolioData";
import type { PortfolioData } from "@/data/portfolioData";

type Lang = "en" | "id";

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  data: PortfolioData;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-lang") as Lang | null;
    if (saved === "id") setLang("id");
  }, []);

  const toggleLang = () => {
    const next: Lang = lang === "en" ? "id" : "en";
    setLang(next);
    localStorage.setItem("portfolio-lang", next);
  };

  const data = lang === "id" ? portfolioDataID : portfolioDataEN;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, data }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
