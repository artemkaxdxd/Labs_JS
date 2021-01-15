'use strict';

const inc1 = a => ++a;

const a = 5;
const b = inc1(a);

const inc2 = obj => ++obj;

const obj = { n: 5, m: 10, }

console.dir({ a, b });
console.dir({'Increment(obj.n) ':  inc2(obj.n)}); 
console.dir({'Increment(obj.m) ':  inc2(obj.m)}); 