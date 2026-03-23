# 1. Two Sum

## Description

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

### Example 1:

**Input:** `nums = [2,7,11,15], target = 9`
**Output:** `[0,1]`
**Explanation:** Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.

### Example 2:

**Input:** `nums = [3,2,4], target = 6`
**Output:** `[1,2]`

### Example 3:

**Input:** `nums = [3,3], target = 6`
**Output:** `[0,1]`

## Solução

A abordagem mais eficiente utiliza um **Hash Map** para armazenar o valor já visto e seu respectivo índice.

1.  **Iterar pelo array**: Para cada número `n` no índice `i`:
    *   Calculamos o complemento necessário: `need = target - n`.
    *   Verificamos se esse `need` já existe nas chaves do nosso Map.
2.  **Se existir**: Significa que encontramos o par, então retornamos `[índice_do_need, i]`.
3.  **Se não existir**: Armazenamos o valor atual no Map (`n` como chave e `i` como valor) e continuamos a busca.

### Complexidade:

- **Complexidade de Tempo**: `O(n)`, onde `n` é o número de elementos no array (fazemos apenas uma passagem).
- **Complexidade de Espaço**: `O(n)`, no pior caso para armazenar os elementos no Map.
