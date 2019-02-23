console.clear();

{ /* Get only unique values in an array.*/
  const names = ['John', 'Mary', 'Joe', 'Jane', 'John', 'Jane'];

  console.log('--------Solution with Filter Method--------');
  const uniqueNames = names.filter((name, index, arr) => arr.indexOf(name) === index ? name : '');
  console.log({ uniqueNames });

  console.log('--------Solution with Sets--------');
  const uniqueNamesWithSets = [...new Set(names)];
  console.log({ uniqueNamesWithSets });
};
