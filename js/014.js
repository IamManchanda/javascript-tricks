console.clear();

{ /* Filter out un-necessary Data and then hide data with fill.*/
  const phoneNumber = '999-999-9999';

  console.log('--------Solution--------');
  const filterItem = (arr, fn, hideBeforeIndex) => arr.split('').filter(fn).fill('*', 0, hideBeforeIndex).join('');
  const filteredPhoneNumber = filterItem(phoneNumber, num => num !== '-', 3);
  console.log({ filteredPhoneNumber });
};
