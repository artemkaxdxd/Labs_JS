'use strict';

// Array phone book
const phoneBook = [
    {name: 'Marcus Aurelius', phone: '+380445554433'},
    {name: 'Timur Shemsedinov', phone: '+380998887766'},
    {name: 'James Bond', phone: '+380070071234'},
    {name: 'Quentin Tarantino', phone: '+380123123123'},
    {name: 'Socrates', phone: '+380987654321'},
];

let findPhone = (name) => {
    return findPhone = phoneBook.find(findPhone => findPhone.name === name).phone;
}

console.log(`Socrates number: ${findPhone('Socrates')}`);


// Hash phone book
const hash = {
    'Marcus Aurelius':  '+380445554433',
    'Timur Shemsedinov':  '+380998887766',
    'James Bond':  '+380070071234',
    'Quentin Tarantino':  '+380123123123',
    'Socrates':  '+380987654321',
};

let findHashPhone = (name) => {
    return hash[name];
}

console.log(`James Bond's number: ${findHashPhone('James Bond')}`);