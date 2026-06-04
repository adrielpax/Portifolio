import BottomNav from "@/components/BottomNav";

/**
 * App shell do portfólio: conteúdo + bottom navigation fixa estilo app.
 * O /studio fica FORA deste grupo, então não recebe a barra inferior.
 */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh pb-20">
      {children}
      <BottomNav />
    </div>
  );
}
