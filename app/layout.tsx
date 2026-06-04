import type { Metadata } from "next";
import { Heebo, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip"

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const heeboSans = Heebo({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="pt-br" className={cn("font-sans", inter.variable)}>
      <body
        className={`${heeboSans.variable} ${geistMono.variable} antialiased`}
      >
        <TooltipProvider>
        
        {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
