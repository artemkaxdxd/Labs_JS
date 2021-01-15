'use strict';

const obj = {
    food: 'chip',
    drink: 'bepsi',
    person: { me: 'Shrek' },
};

let objClone = JSON.parse(JSON.stringify(obj));

console.log(obj);
console.log(objClone);