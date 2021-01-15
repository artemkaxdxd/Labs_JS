'use strict';

function sum1(...args) { // for
    let sum = 0;
    for(let i = 0; i < args.length; i++){
        sum += args[i];
    }
    return sum;
}

function sum2(...args) { // for...of
    let sum = 0
    for(let item of args) {
        sum += item;
    }
    return sum;
}

function sum3(...args) { // while
    let i = 0; 
    let sum = 0;
    while(i < args.length) {
        sum += args[i];
        i++;
    }
    return sum;
}

function sum4(...args) { // do...while
    let i = 0;
    let sum = 0;
    do {
        sum += args[i];
        i++
    } while(i < args.length);
    return sum;
}

function sum5(...args) { // Array.prototype.reduce
    return args.reduce((previous, current) => {
        return previous + current;
    }, 0);
}

const a = sum1(1, 2, 3, 4)
const b = sum2(1, 2, 3, 4)
const c = sum3(1, 2, 3, 4)
const d = sum4(1, 2, 3, 4)
const e = sum5(1, 2, 3, 4)

console.log(a, b, c, d, e);