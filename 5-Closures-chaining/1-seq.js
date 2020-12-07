'use strict';

const seq = a => b => typeof b === 'number' ? a(b) : seq(x => a(b(x)));

const res1 = seq(x => x + 7)(x => x * 2)(5);
const res2 = seq(x => x * 2)(x => x + 7)(5);
const res3 = seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7);
console.log(res1); // 17
console.log(res2); // 24
console.log(res3); // 3