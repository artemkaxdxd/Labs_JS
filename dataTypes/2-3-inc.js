'use strict';

const a = 5;

function inc1(a) {
    return 1 + a;
}

function inc2(obj2) {
    return obj2 + 6;
}

const obj = {
    n: 5,
    m: 10,
}

console.log( inc1(5) );
console.dir({'Increment(obj.n) ':  inc2(obj.n)}); 
console.dir({'Increment(obj.m) ':  inc2(obj.m)}); 