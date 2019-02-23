console.clear();

{ /* Filter out Property within an Object.*/
  const person = {
    firstname: 'Harman',
    middlename: 'Singh',
    lastname: 'Manchanda',
    nickname: 'Harry',
    age: 26,
  };
  
  console.log('--------Solution--------');
  const filterObject = (obj, prop) => {
    const result = {};
    Object.keys(obj)
      .filter((key) => key !== prop)
      .forEach((key) => result[key] = person[key]);
    return result;
  };
  const filteredObject = filterObject(person, 'nickname');
  console.log({ filteredObject });
};
