# Arquitetura do Sistema — Portfólio Pessoal Bilíngue com Troca de Idioma PT/EN

## Visão Geral

O portfólio é uma aplicação Next.js 14 100% estática (SSG) hospedada na Vercel. O conteúdo textual em PT e EN é armazenado em arquivos JSON de tradução gerenciados pelo next-intl, permitindo troca de idioma no client-side sem navegação. Os projetos do GitHub são buscados via API Routes do Next.js que fazem proxy autenticado para a GitHub REST API, com cache de 1 hora para evitar rate limiting. O formulário de contato chama uma API Route que usa o Resend para enviar e-mails. Toda a lógica de UI (animações, troca de idioma, tema dark/light) reside no frontend com Framer Motion e Tailwind CSS. O CI/CD é feito automaticamente pelo Vercel ao detectar pushes na branch main do GitHub.

## Diagrama de Arquitetura

```
Usuário (browser) → Vercel CDN → Next.js App (SSG). Dentro do app: [1] Componente LanguageSwitcher → next-intl → JSON de traduções (pt.json / en.json) locais. [2] Componente Projects → fetch → Next.js API Route /api/github → GitHub REST API v3 (com cache ISR 1h). [3] Componente ContactForm → fetch → Next.js API Route /api/contact → Resend API → E-mail do dono do portfólio. [4] Vercel Analytics → coleta métricas de acesso passivamente. GitHub Actions → build e lint automatizados no PR antes do merge.
```

## Componentes Principais

| Camada         | Tecnologia Principal                       | Complementos                                                               |
| -------------- | ------------------------------------------ | -------------------------------------------------------------------------- |
| Frontend       | `Next.js 14 + TypeScript`                  | `Tailwind CSS`, `shadcn/ui`, `Framer Motion`, `next-intl (i18n)`           |
| Backend        | `Next.js API Routes (built-in)`            | `Resend (envio de e-mail)`, `GitHub REST API v3`                           |
| Banco de Dados | `Nenhum banco de dados necessário`         | `localStorage (preferência de idioma e tema)`                              |
| Autenticação   | `Não aplicável`                            | —                                                                          |
| Cache          | `Next.js Cache (ISR / fetch cache nativo)` | `Vercel Edge Cache`                                                        |
| Infraestrutura | `Vercel (deploy frontend + API Routes)`    | `GitHub Actions (CI/CD automático)`, `GitHub Pages como fallback opcional` |
| Monitoramento  | `Vercel Analytics (gratuito)`              | `Vercel Speed Insights`                                                    |

## Decisões Arquiteturais

As decisões foram baseadas no briefing do projeto e nas referências fornecidas.
Consulte [02_TECH_STACK.md](02_TECH_STACK.md) para justificativas detalhadas de cada escolha.

## Padrões de Projeto Recomendados

- **Frontend:** Component-driven development com Server Components (Next.js App Router)
- **Backend:** Clean Architecture (Domain → Application → Infrastructure)
- **API:** REST com versionamento (`/api/v1/`) ou tRPC para type-safety full-stack
- **Estado:** Zustand (client state) + React Query / TanStack Query (server state)
- **Testes:** Vitest (unit) + Playwright (E2E)
