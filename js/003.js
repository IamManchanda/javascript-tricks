console.clear();

/* Convert Object to a Matrix array */

var person = {
  firstname: 'Harman',
  middlename: 'Singh',
  lastname: 'Manchanda',
  nickname: 'Harry',
  age: 26,
};

console.log('--------Solution for Matrix Array--------');
const matrixArray = Object.keys(person).map(key => [key, person[key]]);
console.log({ matrixArray });
