'use strict';

let obj = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
}

let arrOfArr = [];

for (const key in obj) {
    let arr = [];
    arr.push(key, obj[key].length);
    arrOfArr.push(arr);
    
}

console.log(arrOfArr);