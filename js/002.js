console.clear();

/* Iterating over an object (Accessing both keys and values) */

const name = {
  firstname: 'Harman',
  middlename: 'Singh',
  lastname: 'Manchanda',
  nickname: 'Harry',
};

console.log('--------First Solution with `forin`--------');
for (const key in name) {
  if (name.hasOwnProperty(key)) {
    const value = name[key];
    console.log(`User's ${key} is ${value}`);
  }
}

console.log('--------Second Solution with `forof`--------');
for (const [key, value] of Object.entries(name)) {
  console.log(`User's ${key} is ${value}`);
}

console.log('--------Third Solution with `forEach`--------');
Object.entries(name).forEach(([key, value]) => {
  console.log(`User's ${key} is ${value}`);
});