'use strict';

function store1(x) {
    return function () {
        return x
    };
}

const store2 = x => () => x;

const read1 = store1(5);
const value1 = read1();
console.log(value1); // Output: 5

const read2 = store2(10234234);
const value2 = read2();
console.log(value2); // Output: 10234234