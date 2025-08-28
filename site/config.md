# 🚀 Guia Completo - Portfólio Next.js + TypeScript

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta no Google (para Google Sheets + Apps Script)
- Conta no GitHub
- Editor de código (VS Code recomendado)

## 🛠️ Instalação

### 1. Criar o projeto Next.js

```bash
npx create-next-app@latest portfolio-nextjs --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd portfolio-nextjs
```

### 2. Instalar dependências adicionais

```bash
npm install react-icons axios
npm install -D @types/node
```

### 3. Estrutura de pastas

Crie a seguinte estrutura dentro de `src/`:

```
src/
├── components/
│   ├── common/
│   └── layout/
├── hooks/
├── lib/
├── types/
├── pages/
│   └── api/
└── styles/
```

## 🔧 Configuração

### 1. Configurar Google Apps Script

#### Passo 1: Criar planilha
1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie nova planilha: "Contatos Portfólio"
3. Copie o ID da URL: `docs.google.com/spreadsheets/d/[ESTE_É_O_ID]/edit`

#### Passo 2: Apps Script
1. Vá para [Google Apps Script](https://script.google.com)
2. Novo projeto → Cole o código fornecido
3. Substitua `SEU_SHEET_ID_AQUI` pelo ID da planilha
4. Salvar como "Portfolio Backend"

#### Passo 3: Publicar Web App
1. Implantar → Nova implantação
2. Tipo: "Aplicativo da web"
3. Executar como: "Eu"
4. Acesso: "Qualquer pessoa"
5. Copiar URL gerada

### 2. Variáveis de Ambiente

Crie `.env.local` na raiz:

```bash
NEXT_PUBLIC_GITHUB_USERNAME=seu_usuario_github
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/SEU_SCRIPT_ID/exec
```

### 3. Personalização

#### No `src/components/layout/MainCard.tsx`:
```typescript
// Linha 19: Alterar iniciais
<div className="...">AL</div> // Suas iniciais

// Linha 23-24: Seus dados
<h2>Seu Nome</h2>
<p>Seu Título</p>

// Linhas 32-52: Seus links sociais
```

#### No `src/hooks/useGitHub.ts`:
```typescript
// Linha 5: Substitua por seu usuário
const GITHUB_USERNAME = 'SEU_USUARIO_GITHUB';
```

#### No `src/components/layout/ContactSection.tsx`:
```typescript
// Linhas 28-30: Seus contatos
<p>📧 seu@email.com</p>
<p>📱 (11) 99999-9999</p>
<p>📍 Sua Cidade, Estado</p>
```

## 🚀 Executar o projeto

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build
npm start

# Verificar tipos TypeScript
npm run type-check
```

## ✨ Funcionalidades

### 🔥 Sistema de Boot
- Animação terminal style com efeitos de typing
- Barra de progresso animada
- Transição suave para conteúdo

### 🎨 Design Moderno
- **Glassmorphism**: Cards com efeito de vidro
- **Gradientes animados**: Background dinâmico
- **Hover effects**: Animações nos cards
- **Responsivo**: Mobile-first design
- **Font JetBrains Mono**: Tipografia de programador

### 🐙 GitHub Integration
- Busca automática dos repositórios
- Filtra projetos com descrição
- Mostra stars, forks, linguagem
- Links diretos para os repos
- Tratamento de erros e loading states

### 📧 Sistema de Contato
- Modal elegante com validação
- Integração completa com Google Sheets
- Estados de loading e sucesso
- Validação de email
- Sanitização de dados

### 🔐 Painel Admin
- Acesso secreto: digite "admin"
- Visualização de todos contatos
- Estatísticas em tempo real
- Atualização manual dos dados
- Interface administrativa limpa

### ⌨️ Recursos de Acessibilidade
- Navegação por teclado (Tab, Enter, Esc)
- Focus indicators visíveis
- ARIA labels apropriados
- Contraste adequado
- Screen reader friendly

## 🛡️ Segurança

### Frontend
- Validação de formulários
- Sanitização de inputs
- Rate limiting natural
- HTTPS enforced

### Backend
- Validação server-side
- CORS configurado
- Error handling robusto
- Logs de segurança

## 📱 Performance

### Otimizações
- **Next.js Image**: Otimização automática
- **Code splitting**: Carregamento sob demanda
- **Tree shaking**: Remoção de código não usado
- **Minificação**: CSS e JS comprimidos
- **Preload fonts**: Carregamento antecipado

### Métricas esperadas
- **FCP**: < 1.5s
- **LCP**: < 2.5s
- **CLS**: < 0.1
- **FID**: < 100ms

## 🔄 Deploy

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload da pasta .next para Netlify
```

### GitHub Pages
```bash
npm run build
npm run export
# Deploy da pasta out/
```

## 🐛 Troubleshooting

### Projetos não carregam
- ✅ Verificar `NEXT_PUBLIC_GITHUB_USERNAME`
- ✅ Repositórios devem ser públicos
- ✅ Ter descrição nos repos

### Contatos não enviam
- ✅ URL do Apps Script correta
- ✅ Web App publicado como "Qualquer pessoa"
- ✅ ID da planilha correto
- ✅ Permissões do Google Drive

### Admin não aparece
- ✅ Digite "admin" devagar
- ✅ Aguardar alguns segundos
- ✅ Recarregar página se necessário

### Erros de TypeScript
```bash
npm run type-check
# Corrigir erros mostrados
```

## 📊 Monitoramento

### Analytics (opcional)
```typescript
// pages/_app.tsx
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
```

### Error Tracking
```bash
npm install @sentry/nextjs
# Configurar Sentry para produção
```

## 🔮 Próximos Passos

### Funcionalidades Futuras
- [ ] **Blog integrado**: Sistema de posts
- [ ] **Modo claro/escuro**: Theme switcher
- [ ] **Múltiplos idiomas**: i18n support
- [ ] **Comments system**: Disqus integration
- [ ] **Analytics dashboard**: Métricas de visitação
- [ ] **Newsletter**: MailChimp integration
- [ ] **PWA**: Service workers
- [ ] **Chat bot**: Assistant integration

### Melhorias Técnicas
- [ ] **Unit tests**: Jest + Testing Library
- [ ] **E2E tests**: Playwright
- [ ] **Storybook**: Component documentation
- [ ] **Bundle analyzer**: Performance monitoring
- [ ] **Lighthouse CI**: Automated audits

---

## 🆘 Suporte

Se encontrar problemas:

1. **Check logs**: Console do browser + terminal
2. **Verify configs**: .env.local e URLs
3. **Test APIs**: Postman/Insomnia
4. **Community**: Next.js Discord, Stack Overflow

**🎉 Parabéns! Seu portfólio está pronto para impressionar! 🚀**

---

*Desenvolvido com ❤️ usando Next.js, TypeScript & Tailwind CSS*