'use strict';

const array = ['text', 123, true, 4, new Object, 'hello', false, new Function, true, 'hi', new Object, 5, 12, -200, false, new Function, false, 5, 12, -200, new Object, false, false, 'word', new Function,];

function countTypes(array) {
    let obj = { string: 0, number: 0, boolean: 0, function: 0, object: 0, };
    for(const value of array) {
        obj[typeof value]++
    };
    console.table({ obj });
};

countTypes(array);

function countTypes2(array) {
    let obj = {};
    for(const value of array) {
        if(obj[typeof value]) {
            obj[typeof value]++;
        } else {
            obj[typeof value] = 1;
        };
    };
    console.table({ obj });
};

countTypes2(array);