"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Menu } from "lucide-react";
import SystemClock from "./SystemClock";

export default function Topbar({
  onOpenMobileNav,
}: {
  onOpenMobileNav: () => void;
}) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [q, setQ] = useState("");

  // Atalho ⌘K / Ctrl+K para focar a busca
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const term = q.trim();
    router.push(term ? `/blog?q=${encodeURIComponent(term)}` : "/blog");
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-hud-line bg-hud-bg/80 px-3 backdrop-blur-xl md:px-5">
      <button
        onClick={onOpenMobileNav}
        aria-label="Abrir menu"
        className="grid h-9 w-9 place-items-center rounded-lg text-hud-muted hover:bg-black/[0.04] hover:text-hud-text md:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Busca global */}
      <form onSubmit={submit} className="relative flex-1 max-w-xl">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-hud-muted" />
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar no sistema…"
          aria-label="Buscar"
          className="h-10 w-full rounded-xl border border-hud-line bg-hud-surface/70 pl-9 pr-16
          font-mono text-sm text-hud-text placeholder:text-hud-muted/70
          outline-none transition-colors focus:border-hud-amber/50"
        />
        <kbd className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 rounded border border-hud-line px-1.5 py-0.5 font-mono text-[10px] text-hud-muted">
          ⌘K
        </kbd>
      </form>

      {/* Status ao vivo */}
      <div className="ml-auto hidden items-center gap-4 sm:flex">
        <SystemClock />
        <span className="flex items-center gap-1.5 rounded-full border border-hud-line px-2.5 py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="hud-label !text-emerald-400">online</span>
        </span>
      </div>
    </header>
  );
}
