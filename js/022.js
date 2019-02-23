console.clear();

{ /* Measure time it takes to execute a function.*/
  const getUserData = async (username) => await fetch(`https://api.github.com/users/${username}`);
  const timeTakenWrapper = (fn, ...args) => {
    console.time('timeTakenWrapper');
    let result = fn(...args);
    console.timeEnd('timeTakenWrapper')
    return result;
  };
  
  const apiResult = timeTakenWrapper(getUserData, 'IamManchanda');
  console.log({ apiResult });
};
