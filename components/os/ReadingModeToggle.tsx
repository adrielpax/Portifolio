"use client";

import { useEffect, useState } from "react";
import { BookOpen, MonitorCog } from "lucide-react";

/**
 * Alterna o Modo Leitura (tema claro). O estado vive na classe
 * `modo-leitura` do <html> (aplicada antes da hidratação pelo script do
 * layout), persiste em localStorage e fica fixo na URL como ?modo=leitura —
 * o token viaja junto quando o link é compartilhado.
 */
export default function ReadingModeToggle() {
  const [on, setOn] = useState(false);

  // Sincroniza com a classe que o script inline já aplicou antes do React.
  useEffect(() => {
    setOn(document.documentElement.classList.contains("modo-leitura"));
  }, []);

  const toggle = () => {
    const next = !on;
    setOn(next);
    document.documentElement.classList.toggle("modo-leitura", next);
    try {
      localStorage.setItem("modo-leitura", next ? "1" : "0");
    } catch {}
    const url = new URL(window.location.href);
    if (next) url.searchParams.set("modo", "leitura");
    else url.searchParams.delete("modo");
    window.history.replaceState(null, "", url);
  };

  return (
    <button
      onClick={toggle}
      aria-pressed={on}
      title={on ? "Voltar ao modo sistema" : "Modo leitura (tema claro)"}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-hud-line text-hud-muted
      transition-colors hover:bg-white/[0.06] hover:text-hud-text"
    >
      {on ? <MonitorCog className="h-4 w-4" /> : <BookOpen className="h-4 w-4" />}
    </button>
  );
}
