console.clear();

/* Merge Multiple objects into one Object. */

const defaultUser = {
  name: '',
  email: '',
  subscribed: true,
};

const newUser = {
  name: 'Harry Manchanda',
  email: 'harmanmanchanda182@gmail.com',
};

const updatesForNewUser = {
  phone: '99999 99999',
};

console.log('--------Solution--------');
const mergedUser = { ...defaultUser, ...newUser, ...updatesForNewUser }; // or, Object.assign(a, b, c);
console.log({ mergedUser });
