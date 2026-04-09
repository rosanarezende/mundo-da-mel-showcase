# Diretrizes Editoriais

## Objetivo

Transformar trabalho real do projeto privado em vitrine pública de excelência, com clareza, segurança e consistência.

## Princípios

- mostrar o porquê antes do como
- privilegiar clareza executiva
- manter linguagem concreta e verificável
- expor trade-offs reais, não narrativas perfeitas
- preservar segurança e contexto competitivo do negócio

## Fonte única por iniciativa

- cada iniciativa deve ter um único documento canônico em `initiatives/<slug>/summary.md`
- `decisions/` e `timeline/` devem funcionar como visões, não como cópia integral
- qualquer texto de contexto extenso deve apontar para o canônico via link interno

## Camada visual obrigatória

Para facilitar leitura humana, cada case publicado deve incluir pelo menos:

- 1 diagrama Mermaid de decisão -> ação -> resultado no `summary.md`
- 1 quadro de trade-offs (tabela simples) no artefato de decisão
- 1 visão visual de marco/status no artefato de timeline

## IA Input (quando aplicável)

Quando a IA influenciar uma decisão relevante, registrar:

- objetivo do uso da IA
- agente/modelo utilizado
- síntese do input
- validação humana
- nível de confiança

## Impacto observado

- registrar evidência com data
- separar claramente expectativa inicial de resultado observado
- atualizar conforme novos aprendizados do ciclo

## Checklist editorial

- o problema está claro?
- a prioridade está explicada?
- as alternativas aparecem?
- o trade-off principal está explícito?
- o impacto esperado é legível para alguém de fora?
- o documento canônico está claro e sem duplicidade nas visões?
- o bloco visual obrigatório está presente?
- quando aplicável, a seção IA Input foi preenchida?
- o impacto observado contém evidência e data?
- não há conteúdo sensível?

## Não publicar

- URLs operacionais
- nomes de secrets ou env vars
- identificadores internos sensíveis
- detalhes táticos que comprometam a operação do negócio
