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

| Iniciativa                         | Decisão                                         | Ação executada                                       | Evidência                                                                                                                                                                                                                                       | Resultado observado                                  | Lição reutilizável                                            |
| ---------------------------------- | ----------------------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------- |
| `showcase-public-repo-automation`  | Publicar vitrine sanitizada do fluxo            | Publicação por PR com curadoria e trilha de decisão  | [../initiatives/showcase-public-repo-automation/summary.md](../initiatives/showcase-public-repo-automation/summary.md) + [../timeline/2026-04-08-showcase-public-repo-automation.md](../timeline/2026-04-08-showcase-public-repo-automation.md) | Case público com rastreabilidade e reruns do fluxo   | Segurança e repetibilidade antes de profundidade técnica      |
| `governanca-ia-repos`              | Tornar branch-first e draft PR padrão para IA   | Regras formalizadas em `AGENTS.md` e `CONTRIBUTING`  | [../AGENTS.md](../AGENTS.md) + [../CONTRIBUTING.md](../CONTRIBUTING.md) + [PR #5](https://github.com/rosanarezende/mundo-da-mel-showcase/pull/5)                                                                                                | Fluxo de contribuição previsível e profissional      | Padronização reduz erro operacional e retrabalho              |
| `showcase-ai-workflow-standard-v2` | Exigir camada visual mínima (Mermaid + quadros) | Guidelines atualizados e case aplicado com diagramas | [../docs/editorial-guidelines.md](../docs/editorial-guidelines.md) + [../README.md](../README.md) + [../initiatives/showcase-public-repo-automation/summary.md](../initiatives/showcase-public-repo-automation/summary.md)                      | Leitura mais rápida para stakeholders e revisão ágil | Decisão de alto impacto de comunicação deve ter camada visual |

## Critério para novas entradas

Adicionar uma nova linha quando houver:

- decisão relevante com impacto observável
- ação executada com evidência verificável
- lição com potencial de reaplicação

## Painel de efetividade

Referência de medição: [../docs/indicadores-efetividade.md](../docs/indicadores-efetividade.md)

| Ciclo      | Tempo de contexto (min) | Reuso de decisão | Retrabalho evitado | Observação                           |
| ---------- | ----------------------: | ---------------: | -----------------: | ------------------------------------ |
| 2026-Q2-C1 |               em coleta |        em coleta |          em coleta | baseline do modelo canônico + visual |

Atualizar este painel no ritual quinzenal:

- [../docs/ritual-quinzenal-decisao.md](../docs/ritual-quinzenal-decisao.md)
