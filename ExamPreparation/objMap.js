'use strict'

const objectMap = (obj, callback) => Object.fromEntries(
    Object.entries(obj).map(
        ([key, val], i) => [key, callback(val, key, i)]
    )
);

const myObject = { a: 1, b: 2, c: 3 };
const newObject = objectMap(myObject, v => v * v);

console.log(myObject);
console.log(newObject);