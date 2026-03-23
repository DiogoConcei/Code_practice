# 557. Reverse Words in a String III

## Description

Given a string `s`, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

### Example 1:
**Input:** `s = "Let's take LeetCode contest"`  
**Output:** `"s'teL ekat edoCteeL tsetnoc"`

### Example 2:
**Input:** `s = "Mr Ding"`  
**Output:** `"rM gniD"`

### Constraints:
- `1 <= s.length <= 5 * 10^4`
- `s` contém caracteres ASCII imprimíveis.
- `s` não contém espaços à esquerda ou à direita.
- Há pelo menos uma palavra em `s`.
- Todas as palavras em `s` são separadas por um único espaço.

## Solução

A solução utiliza a abordagem de **Dois Ponteiros** para inverter cada palavra individualmente dentro da string, mantendo a ordem original das palavras e os espaços entre elas.

1.  **Transformação em Array**: Como strings em TypeScript são imutáveis, primeiro convertemos a string em um array de caracteres (`ans = s.split('')`).
2.  **Identificação de Palavras**: Percorremos o array com dois ponteiros, `l` (início da palavra) e `r` (fim da palavra). O ponteiro `r` avança até encontrar um espaço ou o final da string.
3.  **Inversão da Palavra**: Assim que uma palavra é identificada, utilizamos um loop interno para inverter os caracteres entre `l` e `r - 1`, trocando os caracteres nas extremidades e movendo-se para o centro.
4.  **Atualização dos Ponteiros**: Após inverter uma palavra, movemos ambos os ponteiros para o início da próxima palavra.

### Complexidade:

- **Complexidade de Tempo**: `O(n)`, onde `n` é o comprimento da string. Cada caractere é visitado e trocado no máximo uma vez.
- **Complexidade de Espaço**: `O(n)` para armazenar o array de caracteres que representa a string.
