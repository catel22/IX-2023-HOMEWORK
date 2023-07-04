// Node
// piece of data - val
// reference to next node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// let first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');
// console.log(first);

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add Node to end of list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // traverse() {
  //   let current = this.head;
  //   while (current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }

  // Remove Node from end of list
  pop() {
    if (!this.head) {
      return undefined;
    } else {
      let current = this.head;
      let newTail = current;
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }

  // Removes Node from beginning of list
  shift() {
    if (!this.head) {
      return undefined;
    }
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  // Add Node to beginning of list
  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  // Get Node at index
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // Set Node at index
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // Insert Node at index
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    let newNode = new Node(val);
    let previousNode = this.get(index - 1);
    let temp = previousNode.next;
    previousNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // Removes Node at index
  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  // Reverse the list in place
  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let previous = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = currentNode.next;
      currentNode.next = previous;
      previous = currentNode;
      currentNode = next;
    }
    return this;
  }

  // Prints the linked list as an array
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push('First');
list.push('Second');
list.push('Third');
list.push('Fourth');
list.push('Fifth');
console.log(list);

// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);

// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);

// console.log(list.unshift('NewHead'));

// console.log(list.get(1));
// console.log(list.get(-2));
// console.log(list.get(10));

// console.log(list.set(1, 'Test'));
// console.log(list);

// console.log(list.insert(2, 'Hello'));
// console.log(list);
// console.log(list.get(2));

// console.log(list.remove(1));
// console.log(list);

// list.print();
// list.reverse();
list.print();
list.reverse();
list.print();
