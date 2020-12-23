'use strict';

function iterate(object, callback) { 
    const keys = Object.keys(object);
    for(const key of keys) {
        const value = object[key];
        callback(key, value, object);
    }
}

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
    console.log({ key, value });
});

// Result:
// { key: 'a', value: 1 }
// { key: 'b', value: 2 }
// { key: 'c', value: 3 }