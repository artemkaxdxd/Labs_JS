'use strict';

const obj = {
    a: 5,
    b: a + 1,
}

function inc(obj2) {
    return obj2 + 6;
}

const obj2 = {
    n: 5,
    m: 10,
}

console.log({ obj });
console.dir({'Increment(obj.n) ':  inc(obj2.n)}); 
console.dir({'Increment(obj.m) ':  inc(obj2.m)}); 