"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import SmoothScroll from "./SmoothScroll";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import RightAside, { type AsideStats } from "./RightAside";

export default function SystemShell({
  children,
  stats,
}: {
  children: React.ReactNode;
  stats: AsideStats;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const pathname = usePathname();

  // Fecha o drawer ao navegar
  useEffect(() => setMobileNav(false), [pathname]);

  return (
    <SmoothScroll>
      <div className="hud hud-grid min-h-dvh">
        <div className="mx-auto flex min-h-dvh w-full max-w-[1600px]">
          <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((v) => !v)} />

          {/* Coluna central */}
          <div className="flex min-w-0 flex-1 flex-col">
            <Topbar onOpenMobileNav={() => setMobileNav(true)} />
            <main className="min-w-0 flex-1">{children}</main>
          </div>

          <RightAside stats={stats} />
        </div>

        {/* Drawer de navegação no mobile */}
        {mobileNav && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileNav(false)}
            />
            <div className="absolute inset-y-0 left-0 w-64">
              <button
                onClick={() => setMobileNav(false)}
                aria-label="Fechar menu"
                className="absolute right-3 top-4 z-10 grid h-9 w-9 place-items-center rounded-lg text-hud-muted hover:bg-black/[0.04]"
              >
                <X className="h-5 w-5" />
              </button>
              <Sidebar collapsed={false} onToggle={() => {}} variant="mobile" />
            </div>
          </div>
        )}
      </div>
    </SmoothScroll>
  );
}
