console.clear();

{ /* Execute Once Function.*/
  const button = document.getElementById('button');
  
  console.log('--------Solution--------');
  const executeOnce = (fn) => {
    let called = false;
    return function executeOnceFn() {
      if (!called) {
        called = true;
        fn();
      }
    };
  };
  const handleClick = () => console.log('clicked');
  button.addEventListener('click', executeOnce(handleClick));
};
