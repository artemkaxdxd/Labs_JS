'use strict';

let iface = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
}

for (const key in iface) {
    let arrOfArr = [];
    let arr = [];
    arr.push(key);
    arrOfArr.push(arr);
    console.log(arrOfArr);
}