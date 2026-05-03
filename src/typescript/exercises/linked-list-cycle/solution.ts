function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

const newList = new ListNode(3, new ListNode(2, new ListNode(3, null)));

console.log(hasCycle(newList));
