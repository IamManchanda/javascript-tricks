console.clear();

{ /* Get a random element from an array.*/
  const ages = [12, 32, 98, 45, 38, 76];

  console.log('--------Solution--------');
  const randomAge = ages[Math.floor(Math.random() * ages.length)];
  console.log({ randomAge });
};
