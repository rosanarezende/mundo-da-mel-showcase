# Taxonomia de Decisões

Este guia padroniza como classificar decisões para facilitar busca, revisão e reuso em outros projetos.

## Campos mínimos

- `tipo`: negocio, produto, operacional, governanca
- `horizonte`: now, next, later
- `impacto`: alto, medio, baixo
- `confianca`: alta, media, baixa
- `ia_input`: sim, nao

## Definições rápidas

### tipo

- `negocio`: afeta proposta de valor, preço, posicionamento, receita
- `produto`: afeta experiência, estrutura de oferta, escopo funcional
- `operacional`: afeta execução diária, processos e eficiência
- `governanca`: afeta rastreabilidade, qualidade e segurança do fluxo

### horizonte

- `now`: execução atual (curto prazo)
- `next`: próximo ciclo
- `later`: backlog estratégico

### impacto

- `alto`: altera resultado do projeto, risco ou capacidade de forma relevante
- `medio`: melhora execução com efeito perceptível
- `baixo`: ajuste incremental sem mudança estrutural

### confianca

- `alta`: hipótese validada por evidência atual
- `media`: hipótese promissora com validação parcial
- `baixa`: hipótese exploratória

## Boas práticas

- escolher no máximo um valor por campo
- justificar `impacto` e `confianca` em 1 ou 2 linhas
- revisar classificação quando o impacto observado mudar
