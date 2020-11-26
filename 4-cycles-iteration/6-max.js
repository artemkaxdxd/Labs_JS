'use strict';

function max (matrix) {
    const max = (a, b) => (a > b ? a : b);
    const res = matrix.map(row => row.reduce(max))
    return console.log(Math.max(...res));
}

const m = max([
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9],
]);
