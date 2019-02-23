console.clear();

{ /* Slice Items from Left / Right Side of Array.*/
  const nums = [23, 987, 45, 89];
  
  console.log('--------Solution--------');
  const sliceFn = (arr, offset) => {
    const slicedFromLeft = arr.slice(0, offset);
    const slicedFromRight = arr.slice(arr.length - offset, arr.length);
    return { left: slicedFromLeft, right: slicedFromRight };
  };
  const slicedItems = sliceFn(nums, 2);
  console.log({ nums, slicedItems });
};
