'use strict';

const obj = {
    food: 'chip',
    drink: 'bepsi',
    person: { me: 'Shrek' },
    kek: () => 2,
    test: { test: () => 3, },
    symb: Symbol('4'),
};

let objCloneJSON = JSON.parse(JSON.stringify(obj)); // cannot clone symbols and functions

function clone(obj) {
    if (null === obj || "object" !== typeof obj) return obj;
    let copy = obj.constructor();
    for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

console.log('Initial object:\n', obj, '\n');
console.log('Cloning through JSON:\n', objCloneJSON, '\n');
console.log('Cloning through function:\n', clone(obj), '\n');