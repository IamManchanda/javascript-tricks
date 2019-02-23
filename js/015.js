console.clear();

{ /* Find indices of all elements with same name.*/
  const people = ['John', 'Mary', 'Joe', 'Jane', 'John', 'Jane'];

  console.log('--------Solution--------');
  const findIndexAll = (arr, value) => {
    let indices = [];
    arr.forEach((el, i) => (el === value) && indices.push(i));
    return indices;
  };
  
  const johnIndices = findIndexAll(people, 'John');
  const maryIndices = findIndexAll(people, 'Mary');
  const joeIndices = findIndexAll(people, 'Joe');
  const janeIndices = findIndexAll(people, 'Jane');
  console.log({ johnIndices, maryIndices, joeIndices, janeIndices });
};
