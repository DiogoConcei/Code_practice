class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindrome(head: ListNode | null): boolean {
  let current = head;
  const nums: number[] = [];

  while (current) {
    nums.push(current.val);
    current = current.next;
  }

  const reversed = [...nums].reverse();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== reversed[i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome(new ListNode(1, new ListNode(2))));

export { ListNode, isPalindrome };
