"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Newspaper, MessageCircle } from "lucide-react";

const CONTATO_URL = "https://typebot.co/my-typebot-75c4uvl";

const tabs = [
  { href: "/", label: "Perfil", icon: User, match: (p: string) => p === "/" },
  // {
  //   href: "/lp",
  //   label: "LP",
  //   icon: StickerIcon,
  //   match: (p: string) => p === "/lp",
  // },
  {
    href: "/blog",
    label: "Blog",
    icon: Newspaper,
    match: (p: string) => p.startsWith("/blog"),
  },
] as const;

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegação principal"
      className="fixed bottom-0 inset-x-0 z-40 border-t border-zinc-200/70
      bg-white/80 backdrop-blur-xl
      pb-[env(safe-area-inset-bottom)]"
    >
      <div className="mx-auto flex max-w-150 items-stretch justify-around px-2">
        {tabs.map(({ href, label, icon: Icon, match }) => {
          const active = match(pathname);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className="group relative flex flex-1 flex-col items-center gap-0.5 py-2.5
              text-[10px] font-medium transition-colors"
            >
              <span
                className={`flex h-9 w-14 items-center justify-center rounded-xl transition-all duration-300 ${
                  active
                    ? "bg-zinc-900 text-white shadow-sm"
                    : "text-zinc-500 group-hover:text-zinc-900"
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={active ? 2.4 : 2} />
              </span>
              <span className={active ? "text-zinc-900" : "text-zinc-500"}>
                {label}
              </span>
            </Link>
          );
        })}

        {/* Contato — ação externa (Typebot) */}
        <a
          href={CONTATO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-1 flex-col items-center gap-0.5 py-2.5
          text-[10px] font-medium"
        >
          <span
            className="flex h-9 w-14 items-center justify-center rounded-xl
            bg-gradient-to-tr from-green-500 to-green-500 text-white shadow-sm
            transition-transform duration-300 group-hover:scale-105 group-active:scale-95"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="text-black">Contato</span>
        </a>
      </div>
    </nav>
  );
}
