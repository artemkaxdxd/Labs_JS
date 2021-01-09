'use strict';

const isPalidrome = str => {
    let strLen = str.length;
    let result = '';
    for(let i = 0; i < strLen; i++){
        if(str[i] === str[strLen - 1 - i]) {
            result = 'Yes';
        } else {
            result = 'No';
        }
    }
    return result;
};

let test1 = isPalidrome('abcdedcba');
let test2 = isPalidrome('abcded');

console.log(`Result of test1: ${test1}`);
console.log(`Result of test2: ${test2}`);