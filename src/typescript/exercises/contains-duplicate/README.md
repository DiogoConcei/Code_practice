# 217. Contains Duplicate

## Description

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

### Example 1:

**Input:** `nums = [1,2,3,1]`
**Output:** `true`

### Example 2:

**Input:** `nums = [1,2,3,4]`
**Output:** `false`

### Example 3:

**Input:** `nums = [1,1,1,3,3,4,3,2,4,2]`
**Output:** `true`

## Solução

A abordagem escolhida utiliza um **Hash Set** para armazenar os elementos já encontrados durante a iteração pelo array.

1.  **Percorrer o array**: Para cada número, verificamos se ele já existe no `Set`.
2.  **Se existir**: Significa que encontramos um duplicado, então retornamos `true`.
3.  **Se não existir**: Adicionamos o número ao `Set` e continuamos a iteração.
4.  **Fim da iteração**: Se o loop terminar sem encontrar duplicados, retornamos `false`.

### Complexidade:

- **Complexidade de Tempo**: `O(n)`, onde `n` é o número de elementos no array (visitamos cada elemento uma única vez).
- **Complexidade de Espaço**: `O(n)`, no pior caso onde todos os elementos são distintos e armazenamos todos eles no `Set`.
