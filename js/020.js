console.clear();

{ /* Debounce Function.*/
  console.log('--------Solution--------');
  const debounce = (fn, ms) => {
    let timeout;
    return function debounceFn(event) {
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
