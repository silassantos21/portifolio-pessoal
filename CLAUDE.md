# Portfólio Pessoal Bilíngue com Troca de Idioma PT/EN

## Contexto do Projeto

Portfólio pessoal moderno e responsivo com suporte a dois idiomas (Português e Inglês), apresentando projetos, habilidades, experiências e currículo do desenvolvedor. O site foi gerado a partir do currículo real do cliente e permite troca de idioma via bandeiras interativas. O design segue as referências fornecidas, com animações fluidas e visual impactante.

**Cliente:** Silas Ribeiro dos Santos — desenvolvedor de software full-stack (Vue.js, Angular, Java/Spring Boot, Python/Django). GitHub: [silassantos21](https://github.com/silassantos21).

**Problema:** O desenvolvedor não possui uma presença digital profissional centralizada que apresente seus projetos do GitHub, habilidades técnicas e experiências de forma atraente e acessível para recrutadores e clientes em diferentes idiomas. Um currículo em PDF não é suficiente para demonstrar a qualidade do trabalho e a identidade visual profissional.

**Público-alvo:** Recrutadores técnicos nacionais e internacionais, empresas de tecnologia em busca de desenvolvedores, clientes freelance e a própria comunidade de desenvolvimento. O portfólio em inglês amplia o alcance para o mercado global.

## Status Atual (ver histórico completo em `git log`)

- ✅ **Fase 1** — Setup Next.js 14 + TypeScript, Tailwind, shadcn/ui (estilo `new-york`, base Radix), next-intl, ESLint/Prettier/Husky
- ✅ **Fase 2** — Header/Footer, LanguageSwitcher (PT/EN), dark/light mode (`next-themes`), smooth scroll, SEO (hreflang)
- ✅ **Fase 3** — Todas as seções de conteúdo com dados reais do currículo, API Route `/api/github` integrada (testada contra `silassantos21`)
- ✅ **Fase 4** — Polimento visual, formulário de contato (React Hook Form + Zod + honeypot, `/api/contact` pronto) e responsividade (320–1280px, testado via Playwright) concluídos. **Envio real de e-mail via Resend funcionando** (testado ponta a ponta — envio legítimo e honeypot)
- 🔄 **Fase 5** — Auditoria Lighthouse concluída: `/pt` 94-95/100/100/100, `/en` 94/100/100/100 (meta 90+ atingida). Corrigido bug real de SEO (hreflang com URLs relativas — agora usa `metadataBase`/`NEXT_PUBLIC_SITE_URL`). Deploy/domínio/Vercel Analytics/revisão final de conteúdo ficam para depois

**Integrações configuradas:**

- **GitHub remoto**: [github.com/silassantos21/portifolio-pessoal](https://github.com/silassantos21/portifolio-pessoal) — branch `main`, histórico completo enviado.
- **Resend**: `RESEND_API_KEY` configurada em `.env.local` (não versionado). Envio real testado e funcionando — `CONTACT_EMAIL_TO` precisa ser o mesmo e-mail da conta Resend enquanto nenhum domínio for verificado (limitação do plano sem domínio).
- **Deploy na Vercel**: ainda não configurado — rodando local por enquanto.

## Stack Tecnológica

- **Frontend:** Next.js 14 + TypeScript
- **Backend:** Next.js API Routes (built-in)
- **Banco de Dados:** Nenhum banco de dados necessário
- **Infraestrutura:** Vercel (deploy frontend + API Routes)

Detalhes completos em [docs/02_TECH_STACK.md](docs/02_TECH_STACK.md).

## Estrutura do Projeto

```
portfolio-pessoal-bilingue/
├── docs/                     # Planejamento e documentação
│   ├── 00_OVERVIEW.md .. 06_PRICING.md
├── dados_portifolio/         # PDFs/foto pessoais (fonte do conteúdo, .gitignored)
├── messages/                 # Traduções next-intl (pt.json, en.json)
├── public/                   # resume-pt.pdf, resume-en.pdf, profile.jpg
├── src/
│   ├── app/
│   │   ├── [locale]/         # layout.tsx, page.tsx (rotas com i18n)
│   │   └── api/
│   │       ├── github/       # proxy autenticado para GitHub REST API (cache 1h)
│   │       └── contact/      # valida + envia via Resend (honeypot anti-spam)
│   ├── components/           # Header, Footer, seções da página, ui/ (shadcn)
│   ├── config/site.ts        # dados de contato reais (github, linkedin, e-mail, telefone)
│   ├── hooks/                # use-typewriter
│   ├── i18n/                 # routing, navigation, request (next-intl)
│   ├── lib/                  # utils.ts (cn), contact-schema.ts (Zod)
│   └── middleware.ts
└── CLAUDE.md                 # Este arquivo
```

## Funcionalidades Principais

- Troca de idioma PT/EN via bandeiras clicáveis (Brasil e Estados Unidos) com persistência da preferência no localStorage
- Dark/light mode (`next-themes`), com acento indigo consistente nos dois temas
- Seção Hero com efeito de digitação (typewriter) e chamadas para ação (contato, projetos, download de currículo)
- Seção Sobre Mim com foto real, bio e links para redes sociais
- Seção de Projetos com cards dinâmicos integrados à API pública do GitHub para exibir repositórios reais
- Seção de Habilidades com ícones de tecnologias organizados visualmente (skills grid)
- Seção de Experiência Profissional em timeline vertical numerada
- Seção de Educação
- Formulário de contato com validação PT/EN (React Hook Form + Zod) e honeypot anti-spam
- Download de currículo em PDF (PT e EN)

## Agentes de IA Disponíveis

- **CurriculumParser** — Extrator e estruturador de conteúdo do currículo
- **ProjectDescriptionWriter** — Redator de descrições de projetos para o portfólio

Prompts completos em [docs/03_AI_AGENTS.md](docs/03_AI_AGENTS.md).

## Estimativa

- **Total:** 20 dias (2.9 semanas) — 66.0h de desenvolvimento
- **Custo Mensal:** USD 1.25 / BRL 7.13
- **Preço Sugerido:** R$ 4752.00 – R$ 6072.00 (ver [docs/06_PRICING.md](docs/06_PRICING.md))

## Arquitetura

O portfólio é uma aplicação Next.js 14 100% estática (SSG) hospedada na Vercel. O conteúdo textual em PT e EN é armazenado em arquivos JSON de tradução gerenciados pelo next-intl, permitindo troca de idioma no client-side sem navegação. Os projetos do GitHub são buscados via API Routes do Next.js que fazem proxy autenticado para a GitHub REST API, com cache de 1 hora para evitar rate limiting. O formulário de contato chama uma API Route que usa o Resend para enviar e-mails. Toda a lógica de UI (animações, troca de idioma, tema dark/light) reside no frontend com Framer Motion e Tailwind CSS. O CI/CD é feito automaticamente pelo Vercel ao detectar pushes na branch main do GitHub.
