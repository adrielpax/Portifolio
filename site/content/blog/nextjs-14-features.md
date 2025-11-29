---
title: "Iniciando com Next.js 14"
excerpt: "Descubra as novas features do Next.js 14 e como elas podem acelerar seu desenvolvimento."
date: "2025-11-21"
order: 1
slug: "nextjs-14-features"
---

# Iniciando com Next.js 14

Next.js 14 trouxe mudanças significativas que melhoram a performance e a experiência do desenvolvedor.

## App Router Maduro

O App Router agora é totalmente estável e suporta:
- **Server Components**: renderize no servidor e reduza o bundle JavaScript
- **Streaming**: comece a enviar conteúdo antes do fim da renderização
- **Layouts aninhados**: compartilhe UI entre rotas

## Server Actions

Com Server Actions, você pode chamar funções do servidor diretamente do cliente:

```typescript
"use server"

export async function createContact(formData: FormData) {
  const name = formData.get('name');
  // salve no banco...
}
```

## Performance Improvements

- **Image Optimization**: melhor compressão automática
- **Bundle Size**: redução de ~30% no bundle padrão
- **Font Optimization**: integração seamless com Google Fonts

Quer saber mais? Acesse a [documentação oficial](https://nextjs.org).
