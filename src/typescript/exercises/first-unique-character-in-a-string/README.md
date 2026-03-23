# 387. First Unique Character in a String

## Description

Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return `-1`.

### Example 1:

**Input:** `s = "leetcode"`
**Output:** `0`

### Example 2:

**Input:** `s = "loveleetcode"`
**Output:** `2`

### Example 3:

**Input:** `s = "aabb"`
**Output:** `-1`

## Solução

A abordagem utiliza um **Map** para registrar a primeira ocorrência e a frequência de cada caractere na string.

1.  **Mapear Frequências**: Percorremos a string uma vez. Para cada caractere:
    *   Se for a primeira vez que o vemos, guardamos seu índice e definimos a contagem como 1.
    *   Se já o vimos antes, apenas incrementamos a contagem.
2.  **Identificar o Primeiro Único**: Percorremos as entradas do `Map`. Como o `Map` no TypeScript preserva a ordem de inserção, o primeiro caractere que encontrarmos com contagem igual a 1 será, obrigatoriamente, o primeiro caractere único da string original.
3.  **Retorno**: Retornamos o índice armazenado desse caractere ou `-1` se nenhum for único.

### Complexidade:

- **Complexidade de Tempo**: `O(n)`, onde `n` é o comprimento da string (percorremos a string uma vez para montar o mapa e o mapa tem no máximo 26 caracteres para percorrer depois).
- **Complexidade de Espaço**: `O(1)` (ou `O(k)` onde `k` é o tamanho do alfabeto). Como o problema geralmente lida com letras minúsculas do alfabeto inglês, o espaço é limitado a 26 entradas, sendo considerado constante.
