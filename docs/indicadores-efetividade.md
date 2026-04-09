# Indicadores de Efetividade do Sistema de Decisão

Este documento mede se o showcase está ajudando de fato a decidir melhor e reduzir retrabalho.

## Indicadores mínimos

| Indicador          | Definição                                        | Como medir                            | Meta inicial   |
| ------------------ | ------------------------------------------------ | ------------------------------------- | -------------- |
| Tempo de contexto  | Tempo para entender uma iniciativa do zero       | média de minutos em revisão quinzenal | <= 10 min      |
| Reuso de decisão   | Quantas decisões viraram padrão em outro projeto | contagem por ciclo                    | >= 1 por ciclo |
| Retrabalho evitado | Casos em que uma lição evitou repetir erro       | contagem com evidência                | >= 1 por ciclo |

## Método de coleta

- coletar dados no ritual quinzenal
- registrar valores na seção "Painel de efetividade" em `decisions/decision-impact-index.md`
- manter histórico por ciclo para comparação

```mermaid
flowchart LR
  M[Medir] --> A[Analisar]
  A --> R[Revisar processo]
  R --> U[Atualizar padrões]
  U --> M
```

## Regras de interpretação

- piora em um ciclo isolado não implica regressão estrutural
- três ciclos consecutivos sem melhora exigem ajuste de processo
- toda mudança de meta deve ser registrada com justificativa
