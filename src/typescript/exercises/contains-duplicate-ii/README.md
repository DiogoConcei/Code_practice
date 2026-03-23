# 219. Contains Duplicate II

## Description

Given an integer array `nums` and an integer `k`, return `true` if there are two distinct indices `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.

### Example 1:

**Input:** `nums = [1,2,3,1], k = 3`
**Output:** `true`

### Example 2:

**Input:** `nums = [1,0,1,1], k = 1`
**Output:** `true`

### Example 3:

**Input:** `nums = [1,2,3,1,2,3], k = 2`
**Output:** `false`

## Solução

Utilizamos um **Hash Map** para armazenar o último índice visto de cada número, permitindo uma verificação rápida da distância.

1.  **Iterar pelo array**: Para cada número no índice `idx`:
    *   Buscamos no `Map` o último índice em que esse número apareceu (`lastIndex`).
    *   Se ele existir e a diferença `idx - lastIndex` for menor ou igual a `k`, retornamos `true`.
2.  **Atualizar o Map**: Sempre atualizamos o Map com o índice atual do número, pois para verificações futuras, o índice mais recente é o que tem mais chances de satisfazer a condição `abs(i - j) <= k`.
3.  **Fim do loop**: Se percorrermos todo o array sem encontrar essa condição, retornamos `false`.

### Complexidade:

- **Complexidade de Tempo**: `O(n)`, onde `n` é o tamanho do array.
- **Complexidade de Espaço**: `O(n)`, para o armazenamento no Map no pior caso.
