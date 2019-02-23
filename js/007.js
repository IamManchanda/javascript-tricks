console.clear();

{ /* Prevent Object Properties from being changed at all(freeze it). */
  const person = {
    firstname: 'Harman',
    middlename: 'Singh',
    lastname: 'Manchanda',
    nickname: 'Harry',
    age: 26,
    email: 'harmanmanchanda182@gmail.com',
  };

  console.log('--------Solution--------');
  Object.freeze(person);
  const personDescriptors = Object.getOwnPropertyDescriptors(person);
  console.log({ personDescriptors });
  for (const [key, value] of Object.entries(personDescriptors)) {
    console.log(`Configurable & Writeable property of ${key} is set to ${value.configurable} & ${value.writable} respectively.`);
  }

  const isPersonFrozen = Object.isFrozen(person);
  console.log({ isPersonFrozen });
};
