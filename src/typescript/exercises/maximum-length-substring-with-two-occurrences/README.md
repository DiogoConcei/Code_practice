# 3090. Maximum Length Substring With Two Occurrences

## Description

Given a string s, return the maximum length of a such that it contains at most two occurrences of each character.

### Example 1:

**Input:** `s = "bcbbbcba"`
**Output:** `4`

Explanation:
The following substring has a length of 4 and contains at most two occurrences of each character: "bcbbbcba".

### Example 2:

**Input:** `s = "aaaa"`
**Output:** `2`

### Constraints:

- `2 <= s.length <= 100`
- `s` consiste apenas de letras minúsculas do inglês.

## Solução

A estratégia utilizada foi o algoritmo de **Janela Deslizante (Sliding Window)**, que permite percorrer a string de forma eficiente mantendo uma janela válida que atende aos requisitos do problema.

1.  **Dois Ponteiros**: Utilizamos dois ponteiros (`l` para a esquerda e `r` para a direita) para representar a janela atual.
2.  **Frequência de Caracteres**: Um `Map` é usado para contar a frequência de cada caractere dentro da janela atual.
3.  **Expansão da Janela**: Movemos o ponteiro `r` para a direita, adicionando novos caracteres à janela e incrementando sua contagem no `Map`.
4.  **Contração da Janela**: Se a contagem de qualquer caractere na janela se tornar 3, movemos o ponteiro `l` para a direita e decrementamos as contagens até que a janela volte a ter no máximo duas ocorrências de cada caractere.
5.  **Cálculo do Máximo**: A cada passo válido, calculamos o tamanho da janela (`r - l + 1`) e atualizamos o valor máximo encontrado.

### Complexidade:

- **Complexidade de Tempo**: `O(n)`, onde `n` é o comprimento da string. Cada ponteiro percorre a string no máximo uma vez.
- **Complexidade de Espaço**: `O(k)`, onde `k` é o número de caracteres únicos na string (no máximo 26 para letras minúsculas).
