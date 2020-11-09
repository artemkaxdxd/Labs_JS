'use strict';

function calculate() {
    let array = [];
    for(let i = 0; i <= 9; i++) {
        let square = () => i * i;
        let cube = () => i * i * i;
        let average = () => (square() + cube()) / 2;
        array.push(average());
    }
    return array;
}


console.log(calculate());