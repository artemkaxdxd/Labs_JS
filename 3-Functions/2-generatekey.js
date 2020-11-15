'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateKey(length, characters) {
    let keyArr = [];
    for(let i = 0; i < length; i++) {
        let xuy = random(0, characters.length);
        keyArr.push(characters[xuy]);
    }
    return keyArr.join('');
}

const key = generateKey(16, characters);
console.log(key);