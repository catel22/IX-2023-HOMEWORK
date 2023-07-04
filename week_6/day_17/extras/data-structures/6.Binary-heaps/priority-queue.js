class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority <= parent.priority) {
        break;
      } else {
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
      }
    }
  }

  dequeue() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let index = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority > element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if ((swap === null && rightChild.priority > element.priority) || (swap !== null && rightChild.priority > leftChild.priority)) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) {
        break;
      }
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }

  print() {
    console.log(this.values);
  }
}

let ER = new PriorityQueue();

ER.enqueue('Common Cold', 1);
ER.enqueue('Gunshot Wound', 5);
ER.enqueue('High fever', 2);

ER.print();

console.log(ER.dequeue());
ER.print();
console.log(ER.dequeue());
ER.print();
console.log(ER.dequeue());
ER.print();
console.log(ER.dequeue());
ER.print();
