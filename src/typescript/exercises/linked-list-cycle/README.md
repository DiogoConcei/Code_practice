# 141. Linked List Cycle

## Description

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that `pos` is not passed as a parameter.**

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.

### Example 1:

**Input:** `head = [3,2,0,-4], pos = 1`
**Output:** `true`
**Explanation:** There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

### Example 2:

**Input:** `head = [1,2], pos = 0`
**Output:** `true`
**Explanation:** There is a cycle in the linked list, where the tail connects to the 0th node.

### Example 3:

**Input:** `head = [1], pos = -1`
**Output:** `false`
**Explanation:** There is no cycle in the linked list.

## Solução

A abordagem mais eficiente para detectar um ciclo em uma lista ligada é o **Algoritmo de Floyd (Tortoise and Hare)**.

1.  **Dois Ponteiros**: Utilizamos dois ponteiros, um "lento" (`slow`) e um "rápido" (`fast`).
2.  **Movimentação**:
    -   O ponteiro `slow` avança uma casa por vez.
    -   O ponteiro `fast` avança duas casas por vez.
3.  **Detecção**:
    -   Se houver um ciclo, o ponteiro `fast` eventualmente alcançará o `slow` (eles serão o mesmo nó).
    -   Se o ponteiro `fast` ou seu próximo nó (`fast.next`) atingir `null`, a lista não possui um ciclo.

### Complexidade:

- **Complexidade de Tempo**: `O(n)`, onde `n` é o número de nós na lista.
- **Complexidade de Espaço**: `O(1)`, pois utilizamos apenas dois ponteiros, independentemente do tamanho da lista.
