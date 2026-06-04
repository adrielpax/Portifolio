import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Projeto (Galeria estilo Instagram)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "username",
      title: "Username (aparece como @ no feed)",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Descrição (legenda do post)",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Imagem do projeto",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "link",
      title: "Link do projeto",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Ordem no feed (menor aparece primeiro)",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Ordem do feed",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "username", media: "image" },
  },
});
