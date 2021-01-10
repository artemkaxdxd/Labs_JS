'use strict'

let myObject = { 'a': 1, 'b': 2, 'c': 3 };

const objMap = (object, callback) => {
    return Object.keys(object).reduce((result, key) => {
        result[key] = callback(object[key]);
        return result;
    }, {})
};

let newObject = objMap(myObject, value => value * 2);

console.log(myObject);
console.log(newObject);