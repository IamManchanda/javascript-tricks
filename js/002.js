console.clear();

{/* Iterating over an object (Accessing both keys and values) */
  const person = {
    firstname: 'Harman',
    middlename: 'Singh',
    lastname: 'Manchanda',
    nickname: 'Harry',
    age: 26,
  };

  console.log('--------First Solution with `forin`--------');
  for (const key in person) {
    if (person.hasOwnProperty(key)) {
      const value = person[key];
      console.log(`User's ${key} is ${value}`);
    }
  }

  console.log('--------Second Solution with `forof`--------');
  for (const [key, value] of Object.entries(person)) {
    console.log(`User's ${key} is ${value}`);
  }

  console.log('--------Third Solution with `forEach`--------');
  Object.entries(person).forEach(([key, value]) => {
    console.log(`User's ${key} is ${value}`);
  });
};
