'use strict';

function array() {
    const a = [];
    const get = i => a[i];
    get.push = x => a.push(x);
    get.pop = () => a.pop();
    return get;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Output: first
console.log(arr(1)); // Output: second
console.log(arr(2)); // Output: third

console.log(arr.pop()); // Output: third
console.log(arr.pop()); // Output: second
console.log(arr.pop()); // Output: first

console.log(arr.pop()); // Output: undefined