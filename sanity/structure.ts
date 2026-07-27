import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Conteúdo")
    .items([
      S.listItem()
        .title("📝 Blog")
        .child(S.documentTypeList("post").title("Posts do Blog")),
      S.divider(),
      S.listItem()
        .title("📸 Galeria de Projetos")
        .child(S.documentTypeList("project").title("Projetos")),
      S.listItem()
        .title("🏆 Projetos Campeões")
        .child(S.documentTypeList("championProject").title("Projetos Campeões")),
      S.listItem()
        .title("🛡️ Certificações")
        .child(S.documentTypeList("certification").title("Certificações")),
      S.listItem()
        .title("💬 Depoimentos")
        .child(S.documentTypeList("testimonial").title("Depoimentos")),
    ]);
