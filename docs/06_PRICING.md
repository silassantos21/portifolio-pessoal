# Estimativa de Investimento e Precificação — Portfólio Pessoal Bilíngue com Troca de Idioma PT/EN

> ⚠️ **Documento de uso interno** — apoia a decisão de quanto cobrar do cliente. Não confundir com [05_COST_ANALYSIS.md](05_COST_ANALYSIS.md), que trata do custo _operacional_ (infra/APIs) do projeto já pronto.

## Resumo

| Item                    | Valor                           |
| ----------------------- | ------------------------------- |
| Horas totais estimadas  | **66.0h**                       |
| Complexidade do projeto | **baixa** (multiplicador 1.00x) |
| Valor/hora aplicado     | R$ 80.00 (USD 14.04)            |
| **Preço sugerido**      | **R$ 4752.00 – R$ 6072.00**     |

**Justificativa da complexidade:** O projeto é um portfólio pessoal estático com complexidade técnica controlada. Não há banco de dados, autenticação, pagamentos ou lógica de negócio complexa. As únicas integrações externas são GitHub API (pública e bem documentada) e Resend (SDK simples). O i18n com next-intl adiciona uma camada de complexidade moderada, mas é uma solução madura com documentação excelente. Não há agentes de IA em runtime — apenas usados como ferramenta de produtividade no desenvolvimento. O maior risco técnico é a qualidade das animações e fidelidade ao design de referência, que depende de habilidade front-end, não de complexidade arquitetural. Estimativa de 66 horas é adequada para um dev com experiência em Next.js.

---

## Horas por Fase

| #   | Fase                                                          | Dias   | Horas     |
| --- | ------------------------------------------------------------- | ------ | --------- |
| 1   | Fase 1: Setup e Configuração do Projeto                       | 3      | 8.0h      |
| 2   | Fase 2: Desenvolvimento dos Componentes de Layout e Navegação | 4      | 14.0h     |
| 3   | Fase 3: Seções de Conteúdo Principal                          | 6      | 22.0h     |
| 4   | Fase 4: Animações, Formulário de Contato e Polimento Visual   | 4      | 14.0h     |
| 5   | Fase 5: Testes, Otimização e Entrega                          | 3      | 8.0h      |
|     | **Total**                                                     | **20** | **66.0h** |

---

## Detalhamento do Cálculo

| Etapa                                | Valor (BRL)             | Valor (USD)    |
| ------------------------------------ | ----------------------- | -------------- |
| Subtotal (66.0h × R$ 80.00/h)        | R$ 5280.00              | USD 926.32     |
| Buffer de complexidade/risco (1.00x) | R$ 0.00                 | USD 0.00       |
| **Preço recomendado**                | **R$ 5280.00**          | **USD 926.32** |
| Faixa sugerida (−10% / +15%)         | R$ 4752.00 – R$ 6072.00 | —              |

---

## Marcos de Pagamento Sugeridos

- 40% na assinatura (antes de iniciar Fase 1: Setup e Configuração do Projeto)
- 30% na entrega de Fase 3: Seções de Conteúdo Principal
- 30% na entrega final (Fase 5: Testes, Otimização e Entrega)

---

## Evoluções Futuras

Este projeto tem 8 funcionalidade(s) futura(s) mapeada(s) (ver `future_features`), não incluídas nesta estimativa. Cobre horas adicionais separadamente se o cliente solicitar.

---

## Como Ajustar Este Valor

Esta é uma estimativa de apoio, não um preço final. Para recalcular com outro valor/hora:

- **CLI:** `python main.py run --hourly-rate <valor>`
- **API:** envie o campo `hourly_rate_brl` na requisição `POST /projects`
- Padrão atual: R$ 80.00/hora (configurável em `.env` via `DEFAULT_HOURLY_RATE_BRL`)
