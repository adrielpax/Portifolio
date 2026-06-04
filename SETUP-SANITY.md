# Conectar o Sanity (CMS grátis) ao portfólio

O site já funciona **sem** Sanity (usa dados de exemplo). Siga abaixo para
gerenciar todo o conteúdo pelo painel em `/studio`.

## 1. Criar o projeto (grátis)

1. Acesse https://www.sanity.io/manage e faça login (GitHub/Google).
2. Clique em **Create new project** → dê um nome (ex: `portfolio-adriel`).
3. Dataset: **production** (público).
4. Copie o **Project ID** que aparece no painel.

## 2. Preencher as variáveis de ambiente

1. Renomeie `.env.local.example` para `.env.local`.
2. Cole o Project ID:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=seuProjectIdAqui
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
NEXT_PUBLIC_SITE_URL=https://seudominio.com
```

## 3. Liberar acesso (CORS)

No painel do Sanity → **API → CORS origins → Add origin**, adicione:

- `http://localhost:3000`
- a URL do seu deploy (ex: `https://seudominio.vercel.app`)

Marque **Allow credentials**.

## 4. Rodar

```bash
pnpm dev
```

- Site: http://localhost:3000
- Painel de gestão: http://localhost:3000/studio

Na primeira vez, o Studio vai pedir para **registrar o studio** ou **adicionar
host de desenvolvimento** — escolha registrar para sincronizar os schemas.

## 5. O que você gerencia no /studio

- **📝 Blog** — artigos com capa, corpo rico, tags, SEO (para ranquear no Google)
- **📸 Galeria de Projetos** — o feed estilo Instagram
- **🏆 Projetos Campeões**
- **🛡️ Certificações**

Tudo que você publicar aparece no site automaticamente (revalida a cada 60s,
sem precisar de novo deploy).

## Deploy (Vercel)

Adicione as mesmas variáveis de ambiente em **Vercel → Settings → Environment
Variables**. O `/studio` vai junto no mesmo deploy — um único projeto, grátis.

## SEO já incluso

- `sitemap.xml` e `robots.txt` gerados automaticamente
- Metadata dinâmica + OpenGraph + Twitter Card por post
- JSON-LD (`BlogPosting`) em cada artigo para o Google entender o conteúdo
- `/studio` bloqueado nos robôs de busca
