class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  let headOne = list1;
  let headTwo = list2;
  let mergedHead: ListNode | null = null;
  let mergedTail: ListNode | null = null;

  if (!headOne && headTwo) {
    return headTwo;
  } else if (headOne && !headTwo) {
    return headOne;
  }

  while (headOne && headTwo) {
    let smallerNode: ListNode;

    if (headOne.val < headTwo.val) {
      smallerNode = headOne;
      headOne = headOne.next;
    } else {
      smallerNode = headTwo;
      headTwo = headTwo.next;
    }

    if (!mergedHead) {
      mergedHead = smallerNode;
      mergedTail = smallerNode;
    } else {
      mergedTail.next = smallerNode;
      mergedTail = smallerNode;
    }
  }

  mergedTail.next = headOne ?? headTwo;
  return mergedHead;
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));

console.log(mergeTwoLists(list1, list2));

export { ListNode, mergeTwoLists };
