# Portfólio Pessoal Bilíngue com Troca de Idioma PT/EN

Portfólio pessoal moderno e responsivo com suporte a dois idiomas (Português e Inglês), apresentando projetos, habilidades, experiências e currículo do desenvolvedor. Construído com Next.js 14 (App Router), i18n via next-intl, Tailwind CSS + shadcn/ui e animações com Framer Motion.

Repositório: [github.com/silassantos21/portifolio-pessoal](https://github.com/silassantos21/portifolio-pessoal)

## Pré-requisitos

- Node.js 20+
- npm

## Instalação

```bash
npm install
```

## Variáveis de Ambiente

```bash
cp .env.example .env.local
# Edite .env.local com suas chaves (GITHUB_USERNAME é obrigatório
# para a seção de Projetos funcionar em desenvolvimento)
```

## Desenvolvimento

```bash
npm run dev       # inicia o servidor de desenvolvimento em http://localhost:3000
npm run build     # build de produção
npm run start     # roda o build de produção localmente
npm run lint      # ESLint
npm run format    # Prettier (escreve as correções)
```

Um hook de pre-commit (Husky + lint-staged) roda ESLint e Prettier automaticamente nos arquivos staged a cada commit.

## Documentação

| Documento                                            | Descrição                                               |
| ---------------------------------------------------- | ------------------------------------------------------- |
| [docs/00_OVERVIEW.md](docs/00_OVERVIEW.md)           | Visão geral e escopo                                    |
| [docs/01_ARCHITECTURE.md](docs/01_ARCHITECTURE.md)   | Arquitetura técnica                                     |
| [docs/02_TECH_STACK.md](docs/02_TECH_STACK.md)       | Stack e justificativas                                  |
| [docs/03_AI_AGENTS.md](docs/03_AI_AGENTS.md)         | Agentes de IA para desenvolvimento                      |
| [docs/04_TIMELINE.md](docs/04_TIMELINE.md)           | Cronograma detalhado (com status atual)                 |
| [docs/05_COST_ANALYSIS.md](docs/05_COST_ANALYSIS.md) | Análise de custos operacionais                          |
| [docs/06_PRICING.md](docs/06_PRICING.md)             | Estimativa de investimento e precificação (uso interno) |

Veja o [CLAUDE.md](CLAUDE.md) para o status atual do projeto e decisões pendentes.
