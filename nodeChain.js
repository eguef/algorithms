const Node = require('./SingleNode');

let first = new Node(3);
let middle = new Node(5);
let last = new Node(7);

first.next = middle;
middle.next = last;