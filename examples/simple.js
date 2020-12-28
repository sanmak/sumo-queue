const Queue = require("../");

const queue = new Queue(2);
queue.enqueue(1);
console.log(queue.iterate());
console.log(queue.size);

queue.bulkEnqueue([2, 3]);
console.log(queue.iterate());
console.log(queue.size);

console.log(queue.first());
console.log(queue.first().currentPointerValue);
console.log(queue.last());

console.log(queue.isEmpty());

console.log(queue.isFull());
