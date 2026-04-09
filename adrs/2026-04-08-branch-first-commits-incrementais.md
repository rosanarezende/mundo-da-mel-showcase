# ADR — Branch-first e commits incrementais para IA

- tipo: operacional
- horizonte: now
- impacto: alto
- confianca: alta
- ia_input: sim

## Contexto

Mudanças feitas sem branch dedicada e sem divisão por unidade lógica dificultavam revisão, rollback e rastreabilidade.

## Decisão

Padronizar para qualquer IA:

1. confirmar branch atual antes de editar
2. se estiver em `main`, criar branch dedicada
3. commitar em unidades lógicas pequenas
4. abrir PR em Draft para validação

## Ação executada

Atualização das regras no repositório e adoção prática no ciclo atual com commits por fase.

## Resultado observado

PR ficou mais auditável, com histórico claro do que foi feito em cada etapa.

## Lição reutilizável

Commits incrementais não são só organização: são mecanismo de segurança para trabalho assistido por IA.

## Referências

- `AGENTS.md`
- `CONTRIBUTING.md`
- `docs/review-checklist.md`
