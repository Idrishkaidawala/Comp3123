const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

const lowerCaseWords = (arr) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject('Input must be an array');
    } else {
      const filtered = arr.filter(item => typeof item === 'string')
                          .map(str => str.toLowerCase());
      resolve(filtered);
    }
  });
};

lowerCaseWords(mixedArray)
  .then(result => console.log(result))  // ['pizza', 'wings']
  .catch(error => console.error(error));