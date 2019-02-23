console.clear();

{ /* Filter out Difference (non shared items) Between Two Arrays but not duplicates.*/
  const group1 = ['fred', 'doug', 'amy', 'amy'];
  const group2 = ['fred', 'doug', 'joe', 'joe'];

  console.log('--------Solution--------');
  const filterDifference = (arr1, arr2) => ({
    [arr1.ref]: [...new Set(arr1.values)].filter(el => !arr2.values.includes(el)),
    [arr2.ref]: [...new Set(arr2.values)].filter(el => !arr1.values.includes(el)),
  });
  const nonSharedItems = filterDifference(
    { ref: 'group1', values: group1 }, 
    { ref: 'group2', values: group2 },
  );
  console.log({ nonSharedItems });
};
