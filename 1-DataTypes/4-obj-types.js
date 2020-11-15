'use strict';

const array = ['text', 123, true, 4, new Object, 'hello', false, new Function, true, 'hi', new Object, 5, 12, -200, false, new Function, false, 5, 12, -200, new Object, false, false, 'word', new Function,];

let obj = {
    string: 0,
    number: 0,
    boolean: 0,
    function: 0,
    object: 0,
};

for(const value of array) {
    if(typeof value === 'string') {
        obj.string++;
    }
    else if(typeof value === 'number') {
        obj.number++;
    }
    else if(typeof value === 'function') {
        obj.function++;   
    }
    else if(typeof value === 'object') {
        obj.object++;
    }
    else obj.boolean++;
}

console.table({ obj });