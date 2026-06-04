import type { Post, Project, Certification, ChampionProject } from "./types";

/**
 * Dados de exemplo usados enquanto o Sanity não está configurado.
 * Espelham o conteúdo que já existia hardcoded no portfólio, para o site
 * nunca ficar vazio. Assim que você preencher o .env.local, estes somem.
 */

export const fallbackProjects: Project[] = [
  {
    _id: "fallback-precinho",
    title: "E-commerce Precinho Rei",
    username: "precinhorei",
    description:
      "Plataforma de e-commerce em Next.js inspirada em Amazon, Shopee e Mercado Pago — com UX intuitiva e expansão white-label planejada.",
    link: "https://precinhorei.vercel.app/",
    image: "/images/projects/precinho-rei.png",
  },
];

export const fallbackChampions: ChampionProject[] = [
  {
    _id: "fallback-barbeiro",
    title: "🏆​ Meu Barbeiro App 🏆​",
    image: "/images/trofeus/meu-barbeiro.png",
    description:
      "Fundador do meu barbeiro um web app que automatiza as trocas de mensagens dos barbeiros, otimizando tempo e agendamentos.",
    protectionText:
      "O projeto é pantentiado e tem seus direitos reservados de imagem e technologia intelectual. qualquer uso ou copia, serão tomadas medidas de acordo com as leis: Lei do Software (Lei nº 9.609/98), Direito Autoral (Lei nº 9.610/98), Registro no INPI (Instituto Nacional da Propriedade Industrial).",
    link: "https://barberboost.vercel.app/",
  },
];

export const fallbackCertifications: Certification[] = [];

export const fallbackPosts: Post[] = [
  {
    _id: "fallback-post-1",
    title: "Como construí um portfólio que parece um app nativo",
    slug: "portfolio-estilo-app",
    excerpt:
      "Um tour pela arquitetura do meu portfólio: Next.js 16, design estilo Instagram, bottom navigation e CMS headless com Sanity.",
    tags: ["Next.js", "Design", "Carreira"],
    publishedAt: "2026-06-01T12:00:00.000Z",
    featured: true,
    body: [
      {
        _type: "block",
        _key: "intro",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Este é um post de exemplo. Assim que você conectar o Sanity, ele será substituído pelos seus artigos reais — escritos e gerenciados pelo painel em /studio.",
            marks: [],
          },
        ],
      },
    ],
  },
];
