# ADR — Branch protection obrigatória na main

- tipo: governanca
- horizonte: now
- impacto: alto
- confianca: alta
- ia_input: sim

## Contexto

A execução com múltiplos agentes e automações aumentou risco de mudança direta em `main` e perda de controle sobre revisão.

## Decisão

Aplicar branch protection na `main` e tratar PR como único caminho de integração.

## Ação executada

Configuração de proteção da `main` nos repositórios, com revisão e resolução de conversa como critérios de merge.

## Resultado observado

Fluxo passou a ser previsível, com bloqueio de mudanças diretas na branch principal.

## Lição reutilizável

Quanto maior a automação por IA, mais cedo a proteção de branch deve ser tratada como requisito básico.

## Referências

- `AGENTS.md`
- `CONTRIBUTING.md`
- `docs/editorial-guidelines.md`
