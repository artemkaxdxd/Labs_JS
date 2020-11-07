'use strict';

const array = ['text', 123, true, 4, 'hello', false, true, 'hi', 5, 12, -200, false, false, 'word', 'orange', 1, 3213, 'hi', 5, 12, -200, false, false, 'word'];

let obj = {
    string: 0,
    number: 0,
    boolean: 0,
};

for(const value of array) {
    if(typeof value === 'string') {
        obj.string++;
    }
    else if(typeof value === 'number') {
        obj.number++;
    }
    else obj.boolean++;
}

console.table({ obj });