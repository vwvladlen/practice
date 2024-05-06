'use strict'; //new style since 2009ys

const i = 5; // The 'const' declaration declares block-scoped local variables.
const f = 10.3; // float
const s = 'Hello'; // string
const b = true; // bool

const person = {                // The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
  name: 'Marcus Aurelius',
  born: 121,
  city: 'Roma',
  position: 'emperor'
};

person.city = 'Odessa'; // replace 'Roma' to 'Odessa'

const cities = ['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga']; //arr

cities.push('Odessa');    //last
cities.unshift('New York');    //first

console.log('shift: ' + cities.shift());
console.log('pop: ' + cities.pop());

console.log({ i }, typeof i);
console.log({ s }, typeof s);
console.log({ b }, typeof b);
console.log({ f }, typeof f);

console.log({ person }, typeof person);
console.log({ isArray: Array.isArray(person) });

console.log({ cities }, typeof cities);
console.log({ isArray: Array.isArray(cities) });

console.log({ instanceofArray: cities instanceof Array });
