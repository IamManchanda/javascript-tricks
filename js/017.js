console.clear();

{ /* Find Difference (non shared items) Between Two Arrays but not duplicates.*/
  const arr1 = ['fred', 'doug', 'amy', 'amy'];
  const arr2 = ['fred', 'doug', 'joe', 'joe'];

  const nonSharedItems = [
    ...[...new Set(arr1)].filter(el => !arr2.includes(el)),
    ...[...new Set(arr2)].filter(el => !arr1.includes(el)),
  ];
  console.log({ nonSharedItems });
};
