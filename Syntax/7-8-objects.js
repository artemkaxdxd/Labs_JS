'use strict';

function fn() {
    const obj1 = {
        name: 'Artem',
    };
    let obj2 = {
        name: 'Artem',
    };
    obj1.name = 'Ivan';
    obj2.name = 'Ivan';

    obj1.internalObj1 = obj3 => {};
    obj2.internalObj2 = obj4 => {};
}

console.log(fn());