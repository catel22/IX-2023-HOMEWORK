let stack = [];

stack.push('google');
stack.push('instagram');
stack.push('youtube');

stack.pop();

console.log(stack);

let stack2 = [];

stack2.unshift('Uno');
stack2.unshift('Dos');
stack2.unshift('Dres');

stack2.shift();

console.log(stack2);

// Better to add to the end for efficiency so we don't have to reindex
