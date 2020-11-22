'use strict';

function sum(...args) {
    return args.reduce((previous, current) => {
        return previous + current;
      }, 0);
}

const a = sum(1, 2, 3);
const b = sum(0);
const c = sum();
const d = sum(1, -1, 1);
const e = sum(10, -1, -1, -1);

console.log(a, b, c, d, e);