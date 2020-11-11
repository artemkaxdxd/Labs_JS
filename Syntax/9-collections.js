'use strict';

let phoneBook = [
    {name: 'Marcus Aurelius', phone: '+380445554433'},
    {name: 'Timur Shemsedinov', phone: '+380998887766'},
    {name: 'James Bond', phone: '+380070071234'},
    {name: 'Marcus Person', phone: '+380123123123'},
    {name: 'Socrates', phone: '+380987654321'},
];

function findPhoneByName(name) {
    for (name in phoneBook) {
        return `Phone of ${name}: + `;
    }
}

console.log(findPhoneByName('James Bond'));