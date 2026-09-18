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

### Fase 1: Fase 1: Setup e Configuração do Projeto (3 dias)

#### Tarefas

- [ ] Criar projeto Next.js 14 com TypeScript via create-next-app
- [ ] Configurar Tailwind CSS, shadcn/ui e dependências base
- [ ] Instalar e configurar next-intl com estrutura de pastas PT/EN
- [ ] Criar arquivos de tradução iniciais (pt.json, en.json) com estrutura completa
- [ ] Configurar ESLint, Prettier e Husky para qualidade de código
- [ ] Criar repositório GitHub e configurar deploy automático na Vercel
- [ ] Usar o agente CurriculumParser para processar o currículo do cliente e popular os JSONs de i18n

#### Entregáveis

- Projeto Next.js rodando localmente com i18n configurado
- Arquivos pt.json e en.json preenchidos com conteúdo real do currículo
- Deploy inicial (página em branco) funcionando na Vercel com domínio customizado

---

### Fase 2: Fase 2: Desenvolvimento dos Componentes de Layout e Navegação (4 dias)

#### Tarefas

- [ ] Desenvolver componente Header/Navbar com logo, links de navegação e language switcher (bandeiras PT/EN)
- [ ] Implementar lógica de troca de idioma com next-intl e persistência no localStorage
- [ ] Desenvolver componente Footer com links de redes sociais
- [ ] Implementar smooth scroll para âncoras das seções
- [ ] Configurar dark/light mode com next-themes
- [ ] Criar layout responsivo base (mobile-first) para todas as seções
- [ ] Implementar componente de SEO dinâmico com meta tags por idioma

#### Entregáveis

- Header responsivo com troca de idioma funcional PT/EN
- Footer completo com links sociais
- Sistema de temas dark/light funcionando
- SEO configurado para ambos os idiomas

---

### Fase 3: Fase 3: Seções de Conteúdo Principal (6 dias)

#### Tarefas

- [ ] Desenvolver seção Hero com animação de texto (typewriter effect) e CTAs
- [ ] Desenvolver seção Sobre Mim com foto, bio e links
- [ ] Desenvolver seção de Projetos com cards e integração à GitHub API
- [ ] Criar API Route /api/github para buscar repositórios com cache ISR
- [ ] Usar agente ProjectDescriptionWriter para gerar descrições dos projetos
- [ ] Desenvolver seção de Habilidades com grid de ícones de tecnologias (Devicons)
- [ ] Desenvolver seção de Experiência em timeline vertical animada
- [ ] Desenvolver seção de Educação
- [ ] Garantir que todo conteúdo respeita os arquivos de tradução i18n

#### Entregáveis

- Todas as seções de conteúdo renderizadas corretamente em PT e EN
- Integração com GitHub API funcionando e projetos exibidos dinamicamente
- Skills grid com ícones de todas as tecnologias do currículo
- Timeline de experiências animada

---

### Fase 4: Fase 4: Animações, Formulário de Contato e Polimento Visual (4 dias)

#### Tarefas

- [ ] Implementar animações de entrada de seções com Framer Motion (scroll-triggered)
- [ ] Adicionar hover effects nos cards de projetos e skill badges
- [ ] Implementar transição suave na troca de idioma
- [ ] Desenvolver seção/modal de formulário de contato com validação (React Hook Form + Zod)
- [ ] Configurar Resend para envio de e-mails via API Route /api/contact
- [ ] Adicionar botão de download do currículo PDF (PT e EN)
- [ ] Ajustes de responsividade mobile, tablet e desktop
- [ ] Otimização de imagens com next/image

#### Entregáveis

- Animações Framer Motion em todas as seções
- Formulário de contato funcional enviando e-mail real
- Download de currículo PDF em ambos os idiomas
- Site 100% responsivo e pixel-perfect nas referências

---

### Fase 5: Fase 5: Testes, Otimização e Entrega (3 dias)

#### Tarefas

- [ ] Testes de responsividade em múltiplos dispositivos e browsers (Chrome, Firefox, Safari)
- [ ] Auditoria Lighthouse para Performance, Acessibilidade, SEO e Best Practices (meta: 90+ em todos)
- [ ] Otimização de Core Web Vitals (LCP, CLS, FID)
- [ ] Configurar domínio customizado na Vercel
- [ ] Testar formulário de contato em produção
- [ ] Testar troca de idioma e persistência em produção
- [ ] Revisão final de conteúdo PT e EN com o cliente
- [ ] Configurar Vercel Analytics

#### Entregáveis

- Relatório Lighthouse com scores 90+ em todas as categorias
- Site em produção com domínio customizado configurado
- Vercel Analytics ativo monitorando visitantes
- Documento de handoff com instruções para atualizar conteúdo futuro

---

## Premissas

- O cliente fornece o currículo em formato PDF ou DOCX dentro de 2 dias do início do projeto
- O cliente fornece foto profissional de alta resolução para a seção Sobre Mim
- O cliente tem conta no GitHub com repositórios públicos para integração
- O cliente já possui domínio registrado ou aceita usar o subdomínio gratuito da Vercel (xxx.vercel.app)
- Feedbacks e aprovações do cliente ocorrem em até 24 horas para não bloquear o desenvolvimento
- O conteúdo final (bio, descrições de projetos) é aprovado pelo cliente antes da Fase 4
- O cliente não exige painel de administração — atualizações de conteúdo futuras são feitas via código
