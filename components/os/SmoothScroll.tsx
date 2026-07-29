"use client";

import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";

/**
 * Scroll suave apenas onde ele ajuda.
 *
 * Em telas de toque o navegador já entrega um scroll nativo excelente — nesses
 * casos o Lenis só adiciona atraso entre o dedo e a tela. Também respeitamos
 * quem pede menos movimento no sistema.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const [suave, setSuave] = useState(false);

  useEffect(() => {
    const toque = window.matchMedia("(pointer: coarse)").matches;
    const menosMovimento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setSuave(!toque && !menosMovimento);
  }, []);

  if (!suave) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        // 0.09 deixava a rolagem "descolada" do mouse; 0.18 mantém o polimento
        // sem a sensação de travamento.
        lerp: 0.18,
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
