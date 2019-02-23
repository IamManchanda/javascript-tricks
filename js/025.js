console.clear();

{ /* Get Random Integer in Range .*/
  console.log('--------Solution--------');
  const randomFromRange = (start, stop) => {
    if (stop === undefined) [start, stop] = [0, start];
    return Math.round(Math.random() * (stop - start) + start);
  };
  const solution = randomFromRange(10);
  console.log({ solution });
};
