'use strict';

function compose (...fns) {
    const handlers = [];
    function composed (x) {
        if(fns.length === 0) return x;
        const lastElem = fns.length - 1;
        let res = x;
        try {
            for(let i = lastElem; i >= 0; i--){
                res = fns[i](res);
            }
            return res;
        } catch(error) {
            for(const handler of handlers) {
                handler(error);
            }
        }
    };
    composed.on = (name, handler) => {
        if(name === 'error') handlers.push(handler);
    };
    return composed;
};