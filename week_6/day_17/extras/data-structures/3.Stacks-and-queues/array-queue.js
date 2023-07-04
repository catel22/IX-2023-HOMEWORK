let queue = [];

queue.push('First');
queue.push('Second');
queue.push('Third');

console.log(queue);

queue.shift();
console.log(queue);

let queue2 = [];

queue2.unshift('First');
queue2.unshift('Second');
queue2.unshift('Third');

console.log(queue2);

queue2.pop();
console.log(queue2);
