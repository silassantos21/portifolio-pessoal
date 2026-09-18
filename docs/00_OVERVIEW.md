# Portfólio Pessoal Bilíngue com Troca de Idioma PT/EN

> Portfólio pessoal moderno e responsivo com suporte a dois idiomas (Português e Inglês), apresentando projetos, habilidades, experiências e currículo do desenvolvedor. O site será gerado a partir do currículo existente do cliente e permitirá troca de idioma via bandeiras interativas. O design seguirá as referências fornecidas, com animações fluidas e visual impactante.

**Tipo de Projeto:** `landing_page`
**Gerado em:** 18/09/2026 20:17
**Estimativa Total:** 20 dias (2.9 semanas)
**Custo Mensal Estimado:** USD 1.25 / BRL 7.13

---

## Problema que Resolve

O desenvolvedor não possui uma presença digital profissional centralizada que apresente seus projetos do GitHub, habilidades técnicas e experiências de forma atraente e acessível para recrutadores e clientes em diferentes idiomas. Um currículo em PDF não é suficiente para demonstrar a qualidade do trabalho e a identidade visual profissional.

## Público-Alvo

Recrutadores técnicos nacionais e internacionais, empresas de tecnologia em busca de desenvolvedores, clientes freelance e a própria comunidade de desenvolvimento. O portfólio em inglês amplia o alcance para o mercado global.

## Funcionalidades Principais

- Troca de idioma PT/EN via bandeiras clicáveis (Brasil e Estados Unidos) com persistência da preferência no localStorage
- Seção Hero com animação de texto e chamada para ação (contato e download de currículo)
- Seção Sobre Mim com foto, bio curta e links para redes sociais
- Seção de Projetos com cards dinâmicos integrados à API pública do GitHub para exibir repositórios reais
- Seção de Habilidades com ícones de tecnologias organizados visualmente (skills grid)
- Seção de Experiência Profissional em timeline vertical
- Seção de Educação
- Formulário de contato funcional com envio de e-mail via Resend ou EmailJS
- Download do currículo em PDF (PT e EN)
- Design dark/light mode opcional
- Animações com Framer Motion (entrada de seções, hover nos cards, transições de idioma)

## Diferenciais

- Integração direta com a API do GitHub para exibir projetos reais e atualizados automaticamente sem manutenção manual
- Troca de idioma instantânea e fluida sem recarregar a página, com todas as seções traduzidas incluindo meta tags para SEO em ambos os idiomas
- Geração inicial do conteúdo (bio, skills, experiências) a partir do currículo importado pelo cliente, acelerando a personalização
- Animações e micro-interações profissionais inspiradas nas referências (Badr Jibali e Raul Gonçalves) que transmitem senso de qualidade técnica

## Escopo do MVP (Mínimo Produto Viável)

- [ ] Seção Hero com nome, título e CTA de contato
- [ ] Seção Sobre Mim com bio e foto
- [ ] Seção de Projetos integrada com GitHub API (mínimo 4-6 projetos exibidos)
- [ ] Seção de Habilidades com grid de tecnologias
- [ ] Seção de Experiência Profissional em timeline
- [ ] Troca de idioma PT/EN funcional com next-intl
- [ ] Formulário de contato com envio real de e-mail via Resend
- [ ] Download de currículo PDF em PT e EN
- [ ] Deploy na Vercel com domínio configurado
- [ ] Design responsivo mobile + desktop

## Funcionalidades Futuras (v2+)

- Blog integrado com MDX para publicar artigos técnicos em PT e EN, aumentando SEO orgânico
- Painel de administração simples (Notion API ou Contentlayer) para atualizar conteúdo sem mexer no código
- Seção de Depoimentos/Recomendações de clientes e colegas de trabalho
- Modo de acessibilidade aprimorado com suporte a leitores de tela e navegação por teclado
- Integração com LinkedIn API para sincronizar experiências automaticamente
- Animação de cursor customizado e efeitos parallax avançados para elevar ainda mais o visual
- Contador de visitantes e analytics público para mostrar transparência (como alguns devs fazem)
- PWA (Progressive Web App) para instalação no celular

## Riscos Identificados

- Risco de fidelidade visual: As referências (Badr Jibali e Raul Gonçalves) têm designs muito polidos que exigem atenção a microdetalhes de CSS e animações. Mitigação: dedicar tempo adequado na Fase 4, usar shadcn/ui como base sólida e validar o design com o cliente após cada seção antes de avançar.
- Risco de conteúdo incompleto: Se o cliente demorar para fornecer currículo, foto e lista de projetos, o prazo de 20 dias pode ser comprometido. Mitigação: definir prazo máximo de 48h para entrega de materiais no contrato e usar conteúdo placeholder durante o desenvolvimento.
- Risco de rate limiting na GitHub API: Sem token de autenticação, o limite é 60 requests/hora — facilmente atingido por crawlers. Mitigação: sempre usar token GitHub com escopo público readonly e implementar cache ISR de 1 hora nas API Routes.
- Risco de spam no formulário de contato: Formulários públicos são frequentemente alvo de bots. Mitigação: implementar Cloudflare Turnstile (gratuito) ou honeypot field simples para bloquear submissões automatizadas.
- Risco de conteúdo desatualizado: Sem painel de admin, o cliente dependerá do desenvolvedor para atualizações futuras. Mitigação: entregar documentação clara de como editar os arquivos JSON de tradução via GitHub diretamente, e oferecer integração com Contentlayer como feature v2.

## Resumo das Referências Analisadas

As duas referências fornecidas estabelecem um padrão visual claro para o projeto. O portfólio de Badr Jibali (badr-jibali.netlify.app) é o mais detalhado e serve como principal inspiração: apresenta estrutura de seções Hero → About → Works → Skills → Experience → Education, com identidade visual escura e moderna, cards de projetos com categoria (Landing Page, Dashboard), grid de skills com badges de tecnologia, e timeline de experiências numerada. O portfólio de Raul Gonçalves (raulgoncalves.dev) reforça o padrão de profissional Tech Lead com foco em React/frontend, confirmando o perfil de público-alvo (recrutadores tech). As influências diretas no design do projeto: 1) Estrutura de seções idêntica à do Badr; 2) Cards de projetos com tag de tipo e descrição curta, integrando GitHub; 3) Skills grid com ícones de tecnologias reconhecíveis; 4) Timeline de experiências com numeração e datas; 5) CTA no Hero para contato direto; 6) Botão de download de currículo em destaque. O diferencial do projeto do cliente em relação às referências é a troca de idioma PT/EN, feature não presente nas referências mas que amplia significativamente o alcance profissional.
