'use strict';

function range(start, end) {
    let array = [];
    for(start; start <= end; start++) {
        array.push(start);
    }
    console.dir({ range: array });
}

range(15, 30);

function rangeOdd(start, end) {
    let array = [];
    for(start; start <= end; start++) {
        array.push(start);
    }
    console.dir({ rangeOdd: array.filter(x => (x % 2)) });
}

rangeOdd(15, 30);