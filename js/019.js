console.clear();

{ /* Get Last Item / Everything Before in Array.*/
  const people = ['Bill', 'Fred', 'John'];
  
  console.log('--------Solution--------');
  const removeLastFn = (arr) => {
    const lastItem = arr[arr.length - 1];
    const otherItems = arr.slice(0, arr.length - 1);
    return { lastItem, otherItems }
  };
  const solution = removeLastFn(people);
  console.log({ solution });
};
