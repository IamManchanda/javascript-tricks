console.clear();

{ /* Use 'break' with For Loops.*/
  const users = [
    { name: 'Trump', country: 'USA' },
    { name: 'Putin', country: 'Russia' },
    { name: 'Modi', country: 'India' },
    { name: 'Imran', country: 'Pakistan' },
  ];

  console.log('--------Solution--------');
  let indianUser;
  for (const user of users) {
    console.log({ user });
    if (user.country === 'India') {
      indianUser = user;
      break;
    } // Skipped Imran of Pakistan. My way to condemn Pulwama Attack.
  }
  console.log({ indianUser })
};
