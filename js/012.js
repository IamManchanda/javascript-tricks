console.clear();

{ /* Filter out Falsy Values from an array.*/
  const temps = [72, 68, 65, 'Harry', 26, undefined, 80, 0, NaN, '', null];

  console.log('--------Solution--------');
  const truthyTemps = temps.filter(temp => temp);
  console.log({ truthyTemps });
};
