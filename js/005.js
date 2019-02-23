console.clear();

/* Prevent `new` Object Properties from being added (not extensible). */

var person = {
  firstname: 'Harman',
  middlename: 'Singh',
  lastname: 'Manchanda',
  nickname: 'Harry',
  age: 26,
  email: 'harmanmanchanda182@gmail.com'
};

console.log('--------Solution--------');
Object.preventExtensions(person);
const isPersonExtensible = Object.isExtensible(person);
person.isBad = true;
console.log({ isPersonExtensible, person }); // No `isBad` property as the object is not extensible


