import type { Metadata } from "next";
import { Geist_Mono, Inter, Chakra_Petch } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Display/HUD — angular, "tático", identidade de console
const chakra = Chakra_Petch({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adriel.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Adriel | Analista e Desenvolvedor de Soluções em Tecnologia",
    template: "%s | Adriel Silva",
  },
  description:
    "Desenvolvimento, análise e administração de sistemas para soluções em tecnologia e automação. Portfólio, projetos e blog.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Adriel Silva",
    url: siteUrl,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={cn(inter.variable, chakra.variable, geistMono.variable)}
    >
      <body className="font-sans antialiased">
        <TooltipProvider>
        
        {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
