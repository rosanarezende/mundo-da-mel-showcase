# Contributing

Este repositório recebe dois tipos de contribuição:

## 1. Conteúdo derivado automaticamente

Vem do repositório privado do Mundo da Mel por meio do fluxo de showcase.

Exemplos:

- `initiatives/<slug>/summary.md`
- `decisions/<slug>.md`
- `timeline/<date>-<slug>.md`
- atualizações em `roadmap/now-next-later.md`

## 2. Curadoria editorial manual

Serve para melhorar legibilidade, contexto e consistência da vitrine pública.

Exemplos:

- melhorias no `README.md`
- guias em `docs/`
- ajustes de navegação e posicionamento editorial

## Regras

- não publicar conteúdo sensível
- não sobrescrever a lógica do fluxo automático com convenções paralelas
- manter foco em clareza para entrevistas, gestores e stakeholders
- preferir textos curtos, concretos e rastreáveis
- manter títulos e descrições em PT-BR

## Formatação (Prettier)

Este repositório usa Prettier para manter consistência de markdown e docs.

Comandos padrão:

- formatar: `bash scripts/format.sh`
- validar tudo (formatação + conteúdo): `bash scripts/check.sh`

Aplicar antes de abrir PR quando houver mudanças em docs.

## Guardrails no CI

Todo PR para `main` valida automaticamente:

- formatação com Prettier (`.github/workflows/prettier-check.yml`)
- regras de conteúdo do showcase (`.github/workflows/content-guardrails.yml`)
- consistência de links internos em markdown

Isso inclui PRs criados a partir do fluxo do repositório private.

## Workflow obrigatório para IA

- antes de qualquer edição, confirmar branch atual
- se estiver em `main`, criar branch dedicada e só depois editar
- fazer commits incrementais por unidade lógica
- não versionar artefatos operacionais locais (ex.: `bp-*.json`)
- criar arquivo temporário de continuidade em `.ai-runtime/active-plan.md` ao iniciar plano
- atualizar `.ai-runtime/active-plan.md` a cada checkpoint relevante
- remover `.ai-runtime/active-plan.md` ao finalizar o plano
- abrir PR sempre em modo Draft com descrição completa
- converter Draft para Ready somente após validação da Rosana

Antes de abrir PR, revise `docs/editorial-guidelines.md` e `docs/review-checklist.md`.
