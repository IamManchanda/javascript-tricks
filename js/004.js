console.clear();

{ /* Check if a property exists in object. */
  const person = {
    firstname: 'Harman',
    middlename: 'Singh',
    lastname: 'Manchanda',
    nickname: 'Harry',
    age: 26,
    address: {
      street: 'C-3 Block',
      territory: 'Delhi',
      country: 'India'
    },
  };

  console.log('--------Solution--------');
  const checkFirstnameInPerson = 'firstname' in person;
  const checkStreetInPerson = 'street' in person;
  const checkStreetInPersonsAddress = 'street' in person.address;
  console.log({ checkFirstnameInPerson, checkStreetInPerson, checkStreetInPersonsAddress });
};
