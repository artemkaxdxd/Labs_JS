'use strict';
 
function address (IPv4) {
    return IPv4.split('.').map((el, index) => parseInt(el) << 8 * (3 - index)).reduce((a, b) => a + b);
}

console.log(address('127.0.0.1'));
console.log(address('10.0.0.1'));
console.log(address('192.168.1.10'));
console.log(address('165.225.133.150'));
console.log(address('0.0.0.0'));
console.log(address('8.8.8.8'));