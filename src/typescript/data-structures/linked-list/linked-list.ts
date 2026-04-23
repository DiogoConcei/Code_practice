class node {
  name: string;
  next: node | null;

  constructor(value: string) {
    this.name = value;
    this.next = null;
  }
}

class linkedList {
  head: node | null;

  constructor() {
    this.head = null;
  }

  add_front(value: string): void {
    const newNode = new node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  add_end(value: string): void {
    const newNode = new node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  remove_front(): void {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  remove_end(): void {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }
    current.next = null;
  }
}

const list = new linkedList();
list.add_front('Node 1');
list.add_front('Node 0');
list.add_end('Node 2');
list.remove_front();
list.remove_end();
console.log(list);

// remove-Front
// remove-End
