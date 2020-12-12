'use strict';

function removeElement(array, item) {
    for(let i = 0; i < array.length; i++){ 
        if (array[i] === item) { 
            array.splice(i, 1);
        }
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array2, 'Lima');
removeElement(array2, 'Berlin');
console.log(array2); 
// Результат: ['Kiev', 'Beijing', 'Saratov']