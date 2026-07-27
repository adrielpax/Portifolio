import { defineField, defineType } from "sanity";

export const championProject = defineType({
  name: "championProject",
  title: "Projeto Campeão",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Imagem / ícone",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "protectionText",
      title: "Texto de proteção / direitos (opcional)",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "link",
      title: "Link 'Saiba mais'",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Ordem",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Ordem",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});
