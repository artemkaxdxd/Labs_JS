'use strict'

const pipe = (...fns) => x =>  {
    for(const func of fns) {
        if(typeof func !== 'function') {
            throw new Error(`It's not a function`);
        }
    }
    return fns.reduce((a, func) => func(a), x);
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const funct1 = pipe(inc, twice, cube);
const x1 = funct1(5); // 1728

const funct2 = pipe(inc, inc);
const x2 = funct2(7); // 9

const f = pipe(inc, 7, cube); // err

console.log(x1);
console.log(x2);
console.log(f());