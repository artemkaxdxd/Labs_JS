'use strict';

const def = {
    field1: 'string',
    field2: 'object',
    field3: 'number',
    field4: 'string?',
}

const obj = {
    field1: 'abs',
    field2: { a:5 },
    field3: 10,
}

const validate = (def, obj) => {
    const keys = Object.keys(def);
    const fields = Object.keys(obj);
    for(const field of fields) {
        if (!keys.includes(field)) {
            keys.push(field);
        }
    }
    for (const key of keys) {
        const curDef = def[key];
        if (curDef === undefined) return false;
        if (curDef !== typeof obj[key] && !curDef.includes('?')) return false;
    }
    return true;
};

if (validate(def, obj)) {
    console.log('Returned true');
};