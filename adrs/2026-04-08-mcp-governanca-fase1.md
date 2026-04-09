# ADR — MCP como capacidade operacional com fallback explícito

- tipo: operacional
- horizonte: now
- impacto: medio
- confianca: media
- ia_input: sim

## Contexto

MCP acelera execução, mas a operação fica frágil quando depende de uma única integração sem plano de fallback.

## Decisão

Adotar MCP como camada de aceleração, mantendo fallback explícito por CLI/script e governança em issues/PR.

## Ação executada

Formalização do runbook operacional da fase 1 e inclusão da frente MCP no trilho de governança.

## Resultado observado

Maior clareza sobre quando usar MCP e como continuar operação em caso de falha de integração.

## Lição reutilizável

Ferramenta de IA deve ser tratada como capacidade com gestão de risco, não como dependência única.

## Referências

- `docs/referencia/guia-mcp-operacao.md` (repo privado)
- `decisions/decision-impact-index.md`
