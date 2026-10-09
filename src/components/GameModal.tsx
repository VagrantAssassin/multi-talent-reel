import React, { useEffect, useState, useRef } from "react";
import { X, Maximize2, Minimize2, Gamepad2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameTitle: string;
  gameUrl: string;
}

export function GameModal({ isOpen, onClose, gameTitle, gameUrl }: GameModalProps) {
  const { lang } = useLanguage();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Sync state with browser native Fullscreen API
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Close on Escape key (only when not in browser fullscreen)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (document.fullscreenElement) {
          // Browser will automatically exit fullscreen, do not close modal yet
          return;
        }
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Toggle fullscreen seamlessly without pausing Unity
  const toggleFullscreen = async () => {
    // 1. Try Unity's internal native SetFullscreen (keeps game running without pausing!)
    try {
      const iframeWin = iframeRef.current?.contentWindow as any;
      if (iframeWin) {
        if (iframeWin.unityInstance && typeof iframeWin.unityInstance.SetFullscreen === "function") {
          iframeWin.unityInstance.SetFullscreen(1);
          iframeWin.focus();
          return;
        } else {
          iframeWin.postMessage({ type: "UNITY_SET_FULLSCREEN", value: 1 }, "*");
        }
      }
    } catch (e) {
      console.warn("Direct unityInstance call not available:", e);
    }

    // 2. Fallback to container requestFullscreen
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }

      // Re-focus the iframe so Unity doesn't pause due to blur
      setTimeout(() => {
        try {
          iframeRef.current?.contentWindow?.focus();
        } catch {
          // ignore
        }
      }, 50);
    } catch (err) {
      console.error("Fullscreen error:", err);
    }
  };

  // Safe close handler that exits fullscreen first if active
  const handleClose = async () => {
    if (document.fullscreenElement) {
      try {
        await document.exitFullscreen();
      } catch {
        // ignore
      }
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={gameTitle}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md transition-opacity duration-300 ${
        isFullscreen ? "p-0" : "p-3 sm:p-6 md:p-8 lg:p-10"
      }`}
      onClick={(e) => {
        // Close if clicked directly on backdrop
        if (e.target === e.currentTarget && !isFullscreen) {
          handleClose();
        }
      }}
    >
      <div
        ref={containerRef}
        className={`relative flex flex-col bg-card border border-border shadow-2xl overflow-hidden transition-all duration-200 ${
          isFullscreen
            ? "w-screen h-screen rounded-none border-none"
            : "w-[min(calc(100vw-64px),calc((100vh-140px)*16/9))] max-w-[1600px] rounded-2xl"
        }`}
      >
        {/* MODAL HEADER (Only shown in windowed pop-up mode, completely hidden in fullscreen) */}
        {!isFullscreen && (
          <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 border-b border-border bg-card/95 backdrop-blur-sm select-none shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex items-center justify-center size-7 sm:size-8 rounded-lg bg-primary/10 text-primary border border-primary/20 shrink-0">
                <Gamepad2 className="size-4" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-bold text-xs sm:text-sm text-foreground truncate tracking-tight">
                  {gameTitle}
                </h3>
              </div>
            </div>

            {/* ACTIONS: True Fullscreen Button & Close Button */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={toggleFullscreen}
                title={lang === "en" ? "Enter Fullscreen" : "Layar Penuh"}
                className="flex items-center justify-center size-8 sm:size-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 border border-border/60 hover:border-primary/40 transition-colors cursor-pointer"
              >
                <Maximize2 className="size-4" />
              </button>

              <button
                type="button"
                onClick={handleClose}
                title={lang === "en" ? "Close game" : "Tutup game"}
                className="flex items-center justify-center size-8 sm:size-9 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive hover:text-destructive-foreground border border-destructive/20 transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
              >
                <X className="size-4.5" />
              </button>
            </div>
          </div>
        )}

        {/* FLOATING HOVER CONTROLS IN FULLSCREEN (Invisible by default, appears if cursor moves to top-right) */}
        {isFullscreen && (
          <div className="absolute top-4 right-4 z-50 flex items-center gap-2 opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={toggleFullscreen}
              title={lang === "en" ? "Exit Fullscreen (ESC)" : "Keluar Layar Penuh (ESC)"}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-white border border-white/20 backdrop-blur-md text-xs font-medium cursor-pointer shadow-2xl transition-all"
            >
              <Minimize2 className="size-3.5" />
              <span>{lang === "en" ? "Exit Fullscreen (ESC)" : "Keluar Layar Penuh (ESC)"}</span>
            </button>
            <button
              type="button"
              onClick={handleClose}
              title={lang === "en" ? "Close game" : "Tutup game"}
              className="flex items-center justify-center size-7 rounded-full bg-red-600/80 hover:bg-red-600 text-white border border-white/20 backdrop-blur-md cursor-pointer shadow-2xl transition-all"
            >
              <X className="size-3.5" />
            </button>
          </div>
        )}

        {/* 16:9 GAME CONTAINER — FULL OF GAME */}
        <div
          className={`relative w-full bg-black overflow-hidden flex items-center justify-center ${
            isFullscreen ? "flex-1 h-full" : "aspect-[16/9]"
          }`}
        >
          <iframe
            ref={iframeRef}
            src={gameUrl}
            title={gameTitle}
            className="w-full h-full border-0 block bg-black"
            allow="fullscreen; autoplay; gamepad; xr-spatial-tracking"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
