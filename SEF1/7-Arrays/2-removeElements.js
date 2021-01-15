'use strict';

function removeElements(array, ...items) {
    for(const item of items) {
        for(let i = 0; i < array.length; i++) { 
            if (array[i] === item) { 
                array.splice(i, 1);
            }
        }
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array); // Result: [2, 3, 4, 7]

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array2, 'Lima', 'Berlin', 'Kiev');
console.log(array2); // Result: ['Beijing', 'Saratov']