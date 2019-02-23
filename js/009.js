console.clear();

{ /* Computed Object Properties. */
  const key = window.prompt('Set Property name: ');
  const obj = {
    [key]: 1,
  };
  console.log({ obj });
};
