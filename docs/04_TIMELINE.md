# Cronograma do Projeto — Portfólio Pessoal Bilíngue com Troca de Idioma PT/EN

## Resumo

| #   | Fase                                                          | Duração                   |
| --- | ------------------------------------------------------------- | ------------------------- |
| 1   | Fase 1: Setup e Configuração do Projeto                       | 3 dias                    |
| 2   | Fase 2: Desenvolvimento dos Componentes de Layout e Navegação | 4 dias                    |
| 3   | Fase 3: Seções de Conteúdo Principal                          | 6 dias                    |
| 4   | Fase 4: Animações, Formulário de Contato e Polimento Visual   | 4 dias                    |
| 5   | Fase 5: Testes, Otimização e Entrega                          | 3 dias                    |
|     | **Total**                                                     | **20 dias (2.9 semanas)** |

---

## Detalhamento das Fases

### Fase 1: Fase 1: Setup e Configuração do Projeto (3 dias) — ✅ Concluída (exceto deploy Vercel)

#### Tarefas

- [x] Criar projeto Next.js 14 com TypeScript via create-next-app
- [x] Configurar Tailwind CSS, shadcn/ui e dependências base
- [x] Instalar e configurar next-intl com estrutura de pastas PT/EN
- [x] Criar arquivos de tradução iniciais (pt.json, en.json) com estrutura completa
- [x] Configurar ESLint, Prettier e Husky para qualidade de código
- [x] Criar repositório GitHub ([silassantos21/portifolio-pessoal](https://github.com/silassantos21/portifolio-pessoal)) — deploy automático na Vercel ainda pendente
- [x] Usar o agente CurriculumParser para processar o currículo do cliente e popular os JSONs de i18n

#### Entregáveis

- Projeto Next.js rodando localmente com i18n configurado
- Arquivos pt.json e en.json preenchidos com conteúdo real do currículo
- Deploy inicial (página em branco) funcionando na Vercel com domínio customizado

---

### Fase 2: Fase 2: Desenvolvimento dos Componentes de Layout e Navegação (4 dias) — ✅ Concluída

#### Tarefas

- [x] Desenvolver componente Header/Navbar com logo, links de navegação e language switcher (bandeiras PT/EN)
- [x] Implementar lógica de troca de idioma com next-intl e persistência no localStorage
- [x] Desenvolver componente Footer com links de redes sociais
- [x] Implementar smooth scroll para âncoras das seções
- [x] Configurar dark/light mode com next-themes
- [x] Criar layout responsivo base (mobile-first) para todas as seções
- [x] Implementar componente de SEO dinâmico com meta tags por idioma

#### Entregáveis

- Header responsivo com troca de idioma funcional PT/EN
- Footer completo com links sociais
- Sistema de temas dark/light funcionando
- SEO configurado para ambos os idiomas

---

### Fase 3: Fase 3: Seções de Conteúdo Principal (6 dias) — ✅ Concluída (exceto agente ProjectDescriptionWriter)

#### Tarefas

- [x] Desenvolver seção Hero com animação de texto (typewriter effect) e CTAs
- [x] Desenvolver seção Sobre Mim com foto, bio e links
- [x] Desenvolver seção de Projetos com cards e integração à GitHub API
- [x] Criar API Route /api/github para buscar repositórios com cache ISR
- [ ] Usar agente ProjectDescriptionWriter para gerar descrições dos projetos (não usado — cards mostram descrição/topics direto do GitHub)
- [x] Desenvolver seção de Habilidades com grid de ícones de tecnologias (Devicons)
- [x] Desenvolver seção de Experiência em timeline vertical animada
- [x] Desenvolver seção de Educação
- [x] Garantir que todo conteúdo respeita os arquivos de tradução i18n

#### Entregáveis

- Todas as seções de conteúdo renderizadas corretamente em PT e EN
- Integração com GitHub API funcionando e projetos exibidos dinamicamente
- Skills grid com ícones de todas as tecnologias do currículo
- Timeline de experiências animada

---

### Fase 4: Fase 4: Animações, Formulário de Contato e Polimento Visual (4 dias) — ✅ Concluída (exceto Resend)

#### Tarefas

- [x] Implementar animações de entrada de seções com Framer Motion (scroll-triggered)
- [x] Adicionar hover effects nos cards de projetos e skill badges
- [x] Implementar transição suave na troca de idioma
- [x] Desenvolver seção/modal de formulário de contato com validação (React Hook Form + Zod)
- [x] Configurar Resend para envio de e-mails via API Route /api/contact (testado ponta a ponta: envio legítimo e honeypot)
- [x] Adicionar botão de download do currículo PDF (PT e EN)
- [x] Ajustes de responsividade mobile, tablet e desktop (testado em 320/375/768/1024/1280px via Playwright; corrigido bug de colisão no Header em tablet e wrap dos links do ProjectCard)
- [x] Otimização de imagens com next/image

#### Entregáveis

- Animações Framer Motion em todas as seções
- Formulário de contato funcional enviando e-mail real
- Download de currículo PDF em ambos os idiomas
- Site 100% responsivo e pixel-perfect nas referências

---

### Fase 5: Fase 5: Testes, Otimização e Entrega (3 dias) — 🔄 Em andamento

#### Tarefas

- [x] Testes de responsividade em múltiplos dispositivos e browsers (via Playwright/Chromium — ver Fase 4)
- [x] Auditoria Lighthouse para Performance, Acessibilidade, SEO e Best Practices (meta: 90+ em todos)
- [x] Otimização de Core Web Vitals (LCP, CLS, FID) — dentro do orçado pelo Lighthouse (ver resultados abaixo)
- [ ] Configurar domínio customizado na Vercel (adiado — sem deploy ainda)
- [ ] Testar formulário de contato em produção (Resend configurado e testado localmente; falta testar após deploy)
- [ ] Testar troca de idioma e persistência em produção (adiado — sem deploy ainda)
- [ ] Revisão final de conteúdo PT e EN com o cliente
- [ ] Configurar Vercel Analytics (adiado — sem deploy ainda)

#### Resultados da Auditoria Lighthouse (build de produção local, `npm run build` + `npm run start`)

| Página | Performance | Acessibilidade | Best Practices | SEO |
| ------ | ----------- | -------------- | -------------- | --- |
| `/pt`  | 94–95       | 100            | 100            | 100 |
| `/en`  | 94          | 100            | 100            | 100 |

Todas as categorias acima da meta de 90+. Único bug real encontrado e corrigido: os links `hreflang` usavam URLs relativas (`/pt`, `/en`), inválidas para SEO — adicionado `metadataBase` (via `NEXT_PUBLIC_SITE_URL`, com fallback para `localhost:3000` enquanto não há domínio) para gerar URLs absolutas. Os números de Performance refletem o preset mobile do Lighthouse (CPU 4x mais lenta, rede throttled simulando um Moto G Power) — em desktop real a experiência é sensivelmente mais rápida.

#### Entregáveis

- [x] Relatório Lighthouse com scores 90+ em todas as categorias
- [ ] Site em produção com domínio customizado configurado
- [ ] Vercel Analytics ativo monitorando visitantes
- [ ] Documento de handoff com instruções para atualizar conteúdo futuro

---

## Premissas

- O cliente fornece o currículo em formato PDF ou DOCX dentro de 2 dias do início do projeto
- O cliente fornece foto profissional de alta resolução para a seção Sobre Mim
- O cliente tem conta no GitHub com repositórios públicos para integração
- O cliente já possui domínio registrado ou aceita usar o subdomínio gratuito da Vercel (xxx.vercel.app)
- Feedbacks e aprovações do cliente ocorrem em até 24 horas para não bloquear o desenvolvimento
- O conteúdo final (bio, descrições de projetos) é aprovado pelo cliente antes da Fase 4
- O cliente não exige painel de administração — atualizações de conteúdo futuras são feitas via código
