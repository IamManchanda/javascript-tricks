console.clear();

/* Get Length of an array & also object */

console.log('--------Array Solution--------');
const arr = [1, 2, 3];
const arrLength = arr.length;
console.log({ arrLength });

console.log('--------Object Solution--------');
const obj = { a: 1, b: 2, c: 3 };
const objLength = Object.keys(obj).length;
console.log({ objLength });
