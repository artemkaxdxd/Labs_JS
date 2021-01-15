'use strict';

function unique(array) {
    let arr = [];
    for(let elem of array) {
        if(!arr.includes(elem)) {
            arr.push(elem);
        }
    }
    return arr;
};

const result1 = unique([2, 1, 1, 3, 2]);
console.log(result1); // Result: [2, 1, 3]

const result2 = unique(['top', 'bottom', 'top', 'left']);
console.log(result2); // Result: ['top', 'bottom', 'left']