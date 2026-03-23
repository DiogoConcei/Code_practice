# Binary Search (Busca Binária)

## Descrição

A Busca Binária é um algoritmo de busca eficiente que funciona em arrays **ordenados**. Ela encontra a posição de um valor alvo dividindo repetidamente o intervalo de busca pela metade.

### Funcionamento:
1. Define dois ponteiros: `begin` (início) e `end` (fim).
2. Enquanto `begin <= end`:
   - Calcula o ponto médio `mid`.
   - Se o valor no `mid` for o alvo, retorna o índice.
   - Se o valor for maior que o alvo, ajusta o `end`.
   - Se o valor for menor que o alvo, ajusta o `begin`.
3. Se não encontrar nada, retorna `-1`.

### Complexidade:
- **Complexidade de Tempo**: `O(log n)`
- **Complexidade de Espaço**: `O(1)` (Iterativo)
