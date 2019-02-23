console.clear();

/* Prevent Object Properties from being added or deleted (seal them). */

var person = {
  firstname: 'Harman',
  middlename: 'Singh',
  lastname: 'Manchanda',
  nickname: 'Harry',
  age: 26,
  email: 'harmanmanchanda182@gmail.com'
};

console.log('--------Solution--------');
Object.seal(person);
const personDescriptors = Object.getOwnPropertyDescriptors(person);
console.log({ personDescriptors });
for (const [key, value] of Object.entries(personDescriptors)) {
  console.log(`Configurable property of ${key} is set to ${value.configurable}`);
}

