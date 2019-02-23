console.clear();

{ /* Check Equality Epsilon.*/
  const num1 = 0.1 + 0.2;
  const num2 = 0.3;

  console.log('--------Solution--------');
  const checkEqualityEpsilon = (a, b) => (a - b) < Number.EPSILON;
  const solution = checkEqualityEpsilon(num1, num2);
  console.log({ solution });
};
