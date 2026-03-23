# Exponential Search (Busca Exponencial)

## Descrição

A Busca Exponencial é um algoritmo de busca eficiente para arrays **ordenados** e ilimitados. Ela funciona em duas etapas:
1. Encontrar um intervalo onde o valor alvo pode estar.
2. Realizar uma **Busca Binária** dentro desse intervalo.

### Funcionamento:
1. Começa verificando o primeiro elemento (`arr[0]`).
2. Se não for o alvo, dobra o valor do índice (`bound *= 2`) até encontrar um elemento maior ou igual ao alvo ou atingir o fim do array.
3. Define um intervalo entre `bound / 2` e `min(bound, n-1)`.
4. Executa a Busca Binária nesse intervalo reduzido.

### Vantagens:
- É extremamente útil quando o tamanho do array é desconhecido.
- Em arrays muito grandes, ela pode encontrar o alvo mais rápido que a busca binária se o alvo estiver no início do array.

### Complexidade:
- **Complexidade de Tempo**: `O(log i)`, onde `i` é o índice do valor buscado.
- **Complexidade de Espaço**: `O(1)` (Iterativo)
