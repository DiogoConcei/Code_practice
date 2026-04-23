/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  // Lista vazia
  let new_list = null;
  // Aponta para o início da lista original
  let current = head;

  while (current) {
    // Cria um novo nó com o valor do nó atual
    const new_node = new ListNode(current.val);
    // Aponta o null do novo nó para a nova lista (o novo nó sempre começa vazio)
    new_node.next = new_list;
    // Aponta a nova lista para o novo nó, o novo nó se torna o início da nova lista
    new_list = new_node;
    // Move o ponteiro para o próximo nó da lista original
    current = current.next;
  }

  return new_list;
}

export { ListNode, reverseList };
