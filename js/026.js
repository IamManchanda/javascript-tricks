console.clear();

{ /* Shortcircuiting with Logical 'And'.*/
  const heading1 = document.getElementById('heading1');
  const loggedIn = true;
  loggedIn && (heading1.style.display = 'block');
};
