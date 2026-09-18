# Stack Tecnológica — Portfólio Pessoal Bilíngue com Troca de Idioma PT/EN

| Camada         | Tecnologia Principal                       | Complementos                                                               |
| -------------- | ------------------------------------------ | -------------------------------------------------------------------------- |
| Frontend       | `Next.js 14 + TypeScript`                  | `Tailwind CSS`, `shadcn/ui`, `Framer Motion`, `next-intl (i18n)`           |
| Backend        | `Next.js API Routes (built-in)`            | `Resend (envio de e-mail)`, `GitHub REST API v3`                           |
| Banco de Dados | `Nenhum banco de dados necessário`         | `localStorage (preferência de idioma e tema)`                              |
| Autenticação   | `Não aplicável`                            | —                                                                          |
| Cache          | `Next.js Cache (ISR / fetch cache nativo)` | `Vercel Edge Cache`                                                        |
| Infraestrutura | `Vercel (deploy frontend + API Routes)`    | `GitHub Actions (CI/CD automático)`, `GitHub Pages como fallback opcional` |
| Monitoramento  | `Vercel Analytics (gratuito)`              | `Vercel Speed Insights`                                                    |

---

## Frontend

**Tecnologia Principal:** `Next.js 14 + TypeScript`

**Complementos:**

- `Tailwind CSS`
- `shadcn/ui`
- `Framer Motion`
- `next-intl (i18n)`
- `React Icons / Devicons`

**Justificativa:** Next.js 14 com App Router oferece SSG (Static Site Generation) perfeito para portfólios — build estático, SEO excelente, deploy na Vercel gratuito. TypeScript garante manutenibilidade. next-intl é a solução mais madura para i18n em Next.js, permitindo troca PT/EN sem reload. Framer Motion entrega as animações de alto nível vistas nas referências.

## Backend

**Tecnologia Principal:** `Next.js API Routes (built-in)`

**Complementos:**

- `Resend (envio de e-mail)`
- `GitHub REST API v3`

**Justificativa:** Por ser um portfólio estático com necessidades mínimas de servidor, as API Routes do próprio Next.js são suficientes para o formulário de contato e proxy da GitHub API. Não há necessidade de um backend separado, reduzindo complexidade e custo a zero.

## Banco de Dados

**Tecnologia Principal:** `Nenhum banco de dados necessário`

**Complementos:**

- `localStorage (preferência de idioma e tema)`

**Justificativa:** Portfólio é um site estático. Todo o conteúdo é hardcoded nos arquivos de tradução (JSON de i18n). Os projetos são puxados em tempo real da API do GitHub. Não há dados de usuário, autenticação ou persistência necessária.

## Autenticação & Autorização

**Tecnologia Principal:** `Não aplicável`

**Complementos:**
_Nenhum_

**Justificativa:** Portfólio público sem área administrativa ou login de usuário. Não há necessidade de autenticação neste projeto.

## Cache & Sessão

**Tecnologia Principal:** `Next.js Cache (ISR / fetch cache nativo)`

**Complementos:**

- `Vercel Edge Cache`

**Justificativa:** O Next.js 14 possui cache nativo nas API Routes. As chamadas para a GitHub API serão cacheadas com revalidação a cada 1 hora (ISR), evitando rate limiting e garantindo performance sem custo adicional.

## Infraestrutura & Deploy

**Tecnologia Principal:** `Vercel (deploy frontend + API Routes)`

**Complementos:**

- `GitHub Actions (CI/CD automático)`
- `GitHub Pages como fallback opcional`

**Justificativa:** Vercel é a plataforma ideal para Next.js — deploy automático a cada push, SSL gratuito, CDN global, plano Hobby suficiente para portfólio pessoal sem custo. GitHub Actions automatiza o pipeline de build e testes.

## Monitoramento & Observabilidade

**Tecnologia Principal:** `Vercel Analytics (gratuito)`

**Complementos:**

- `Vercel Speed Insights`

**Justificativa:** Vercel Analytics fornece métricas de visitantes, países de acesso e performance de Core Web Vitals gratuitamente, sendo suficiente para acompanhar o engajamento do portfólio.

## Comandos de Setup Rápido

```bash
npx create-next-app@latest . --typescript --tailwind --app
npx shadcn@latest init
npm install framer-motion react-hook-form zod
```
