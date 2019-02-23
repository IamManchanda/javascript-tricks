console.clear();

{ /* Remove and Add Items to an Array.*/
  console.log('--------Basic Solution--------');
  const nums = [48, 29, 30];
  const oldNums = [...nums];
  const addedNums = [3, 4, 5]
  const removedNums = nums.splice(1, 1, ...addedNums);
  console.log({ nums, oldNums, addedNums, removedNums });

  console.log('--------Higher Order Functions Solution--------');
  const ints = [4, 5, 6];
  const removeItems = (arr, fn) => arr.filter(fn).map(el => {
    arr.splice(arr.indexOf(el), 1);
    return el;
  });
  const filteredItems = removeItems(ints, num => num >= 5);
  console.log({ filteredItems, ints });
};
