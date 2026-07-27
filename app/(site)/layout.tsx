import SystemShell from "@/components/os/SystemShell";
import { getProjects, getCertifications } from "@/lib/sanity/data";

/**
 * Shell do AdrielDev: sidebar colapsável + topbar (busca) + aside de
 * contexto, com scroll fluido. O /studio fica FORA deste grupo.
 *
 * As métricas do aside são derivadas do conteúdo real — nunca hardcoded.
 */
export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [projects, certs] = await Promise.all([
    getProjects(),
    getCertifications(),
  ]);

  const stats = {
    live: projects.filter((p) => Boolean(p.link)).length,
    total: projects.length,
    certs: certs.length,
  };

  return <SystemShell stats={stats}>{children}</SystemShell>;
}
