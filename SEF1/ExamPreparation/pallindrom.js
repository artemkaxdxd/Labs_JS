'use strict';

const isPalindrome = str => {
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

const palindrome = str => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');

let test1 = palindrome('abcdedcba');
let test2 = palindrome('abcded');
let test3 = palindrome('racecar');
let test4 = palindrome('Анна');

console.log(`Result of test1: ${test1}`);
console.log(`Result of test2: ${test2}`);
console.log(`Result of test3: ${test3}`);
console.log(`Result of test4: ${test4}`);