# 917. Reverse Only Letters

## Description

Given a string `s`, reverse the string according to the following rules:

- All the characters that are not English letters remain in the same position.
- All the English letters should be reversed in their positions.

### Example 1:

**Input:** `s = "ab-cd"`
**Output:** `"dc-ba"`

### Example 2:

**Input:** `s = "a-bC-dEf-ghIj"`
**Output:** `"j-Ih-gfE-dCba"`

### Example 3:

**Input:** `s = "Test1ng-Leet=code-Q!"`
**Output:** `"Qedo1ct-eeLg=ntse-T!"`

## Solução

A solução utiliza a técnica de **Dois Ponteiros** (Two Pointers) para inverter apenas as letras, mantendo os outros caracteres em suas posições originais.

1.  **Converter para Array**: Convertemos a string em um array de caracteres para permitir a manipulação direta.
2.  **Inicializar Ponteiros**: Definimos um ponteiro no início (`left`) e outro no final (`right`).
3.  **Iterar e Trocar**:
    *   Se ambos os caracteres nos ponteiros forem letras, realizamos a troca (swap) e movemos ambos os ponteiros.
    *   Se o caractere da esquerda não for uma letra, avançamos o ponteiro `left`.
    *   Se o caractere da direita não for uma letra, recuamos o ponteiro `right`.
4.  **Finalização**: Após o encontro dos ponteiros, juntamos o array novamente em uma string.

### Complexidade:

- **Complexidade de Tempo**: `O(n)`, onde `n` é o comprimento da string, pois percorremos a string uma única vez com os dois ponteiros.
- **Complexidade de Espaço**: `O(n)`, para armazenar o array de caracteres gerado a partir da string original.
