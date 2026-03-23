# 349. Intersection of Two Arrays

## Description

Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

### Example 1:

**Input:** `nums1 = [1,2,2,1], nums2 = [2,2]`
**Output:** `[2]`

### Example 2:

**Input:** `nums1 = [4,9,5], nums2 = [9,4,9,8,4]`
**Output:** `[9,4]`
**Explanation:** `[4,9]` is also accepted.

## Solução

A abordagem utiliza **Hash Sets** para garantir a unicidade dos elementos na interseção.

1.  **Armazenar o primeiro array**: Inserimos todos os elementos de `nums1` em um `Set` (`set1`).
2.  **Verificar interseção**: Percorremos o array `nums2` e, para cada elemento, verificamos se ele existe em `set1`.
3.  **Garantir unicidade no resultado**: Se o elemento existir em `set1`, nós o adicionamos a um segundo `Set` (`seen`). Isso garante que não teremos duplicados no resultado final.
4.  **Retorno**: Convertemos o `Set` `seen` de volta para um array.

### Complexidade:

- **Complexidade de Tempo**: `O(n + m)`, onde `n` é o tamanho de `nums1` e `m` é o tamanho de `nums2`.
- **Complexidade de Espaço**: `O(n + k)`, onde `n` é o espaço para armazenar `nums1` no primeiro `Set` e `k` é o número de elementos únicos na interseção. No pior caso, `O(n + m)`.
