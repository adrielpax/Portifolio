/**
 * Estado de carregamento do sistema.
 * Discreto e no tema do sistema — sem flash entre navegações.
 */
export default function Loading() {
  return (
    <div className="hud fixed inset-0 z-40 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <span className="relative flex h-10 w-10">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hud-accent/25" />
          <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-hud-line border-t-hud-accent motion-safe:animate-spin" />
        </span>
        <p className="hud-label">Inicializando sistema…</p>
      </div>
    </div>
  );
}
