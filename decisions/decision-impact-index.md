# Índice de Decisões Rastreáveis

Este índice conecta decisão -> ação -> resultado para facilitar leitura humana, revisão de impacto e reuso em outros projetos.

```mermaid
flowchart LR
  D[Decisão] --> A[Ação executada]
  A --> E[Evidência]
  E --> R[Resultado observado]
  R --> L[Lição reutilizável]
```

## Casos mapeados

| Iniciativa | Decisão | Ação executada | Evidência | Resultado observado | Lição reutilizável |
|---|---|---|---|---|---|
| `showcase-public-repo-automation` | Publicar vitrine sanitizada (decisões + roadmap) em vez de abrir código sensível | Estruturação do fluxo de publicação por PR, com curadoria editorial e trilha de decisão | `initiatives/showcase-public-repo-automation/summary.md` + `timeline/2026-04-08-showcase-public-repo-automation.md` | Primeiro case público publicado com rastreabilidade e reruns do fluxo | Segurança e repetibilidade devem vir antes de profundidade técnica pública |
| `governanca-ia-repos` | Tornar branch-first, commits incrementais e draft PR padrão obrigatório para IA | Criação e adoção de regras em `AGENTS.md` e `CONTRIBUTING.md` | `AGENTS.md` + `CONTRIBUTING.md` + PR #5 | Fluxo de contribuição mais previsível e profissional | Padronizar regra de execução reduz erro operacional e retrabalho |
| `showcase-ai-workflow-standard-v2` | Tornar visualização humana obrigatória (Mermaid + quadros) | Atualização de guidelines e aplicação no case com diagramas | `docs/editorial-guidelines.md` + `README.md` + case atual | Leitura mais rápida para stakeholders e revisão mais objetiva | Decisão com alto impacto de comunicação deve ter representação visual mínima |

## Critério para novas entradas

Adicionar uma nova linha quando houver:

- decisão relevante com impacto observável
- ação executada com evidência verificável
- lição com potencial de reaplicação

## Painel de efetividade

Referência de medição: `../docs/indicadores-efetividade.md`

| Ciclo | Tempo de contexto (min) | Reuso de decisão | Retrabalho evitado | Observação |
|---|---:|---:|---:|---|
| 2026-Q2-C1 | em coleta | em coleta | em coleta | baseline do modelo canônico + visual |

Atualizar este painel no ritual quinzenal:

- `../docs/ritual-quinzenal-decisao.md`
