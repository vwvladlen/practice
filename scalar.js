let a = 5;
let b = a;
a--;
b++;
console.dir({ a, b });

const objectA = { field: 5 };
const objectB = objectA;
objectA.field = 6;
console.dir({ objectA, objectB });
