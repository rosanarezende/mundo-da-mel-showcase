# Case Study Framework

Este repositório funciona melhor quando cada iniciativa pública consegue ser lida como um mini case study.

## Modelo de publicação

- canônico: `initiatives/<slug>/summary.md`
- visão de decisão: `decisions/<slug>.md`
- visão temporal: `timeline/<data>-<slug>.md`

Regra:

- o conteúdo principal vive no canônico
- decision e timeline não duplicam o texto inteiro; sintetizam e apontam para a fonte

## Estrutura recomendada

1. Problema
2. Por que agora
3. Decisão
4. Alternativas consideradas
5. Trade-offs
6. Impacto esperado
7. Impacto observado
8. IA Input (quando aplicável)

## Estrutura visual mínima

Cada case deve incluir ao menos:

1. diagrama Mermaid de decisão -> ação -> resultado no canônico
2. quadro de trade-offs no documento de decisão
3. visão de marco/status no documento de timeline

## Sinais de um case forte

- o problema é específico e plausível
- a decisão parece consequência do contexto, não narrativa inventada depois
- os trade-offs mostram maturidade, não perfeição
- o impacto esperado é legível para alguém que não conhece o projeto
- o impacto observado distingue aprendizado real de expectativa inicial
- há legibilidade visual para leitura rápida por humanos

## Uso prático

Antes de publicar novos cases, revisar:

- `README.md`
- `docs/editorial-guidelines.md`
- `docs/review-checklist.md`

Objetivo:

fazer com que cada nova iniciativa publicada aumente a credibilidade da vitrine, e não apenas o volume de conteúdo.
