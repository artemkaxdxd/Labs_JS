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
    const keysSet = new Set([...keys, ...fields]);
    for (const key of keysSet) {
        const curDef = def[key];
        if (curDef === undefined) return false;
        if (curDef !== typeof obj[key] && !curDef.includes('?')) return false;
    }
    return true;
};

if (validate(def, obj)) {
    console.log('Returned true');
};

const validate2 = (def, obj) => {
    const keys = Object.keys(def);
    const objKeys = Object.keys(obj);
    for (const key of objKeys) {
        if (!keys.includes(key)) return false;
    }
    for (const key of keys) {
        let type = def[key];
        let optional = false;
        if (type.includes('?')) {
            optional = true;
            type = type.substring(0, type.length - 1);
        }
        const field = obj[key];
        if (field) {
            if(typeof field !== type) return false;
        } else if (!optional) {
            return false;
        }
    }
    return true;
};

if (validate2(def, obj)) {
    console.log('Returned true');
};