console.clear();

{ /* Debounce Function.*/
  const debounce = (fn, ms) => {
    let timeout;
    return function debounceCallback(event) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(event), ms);
    };
  };

  const onResize = (event) => {
    const { innerHeight, innerWidth } = window;
    console.log({ event, innerHeight, innerWidth });
  };
  window.addEventListener('resize', debounce(onResize, 500));
};
