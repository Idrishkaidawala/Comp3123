// resolvedPromise: resolves after 500ms
const resolvedPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'delayed success!' });
    }, 500);
  });
};

// rejectedPromise: rejects after 500ms
const rejectedPromise = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject({ error: 'delayed exception!' });
    }, 500);
  });
};

// Call resolvedPromise
resolvedPromise()
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Call rejectedPromise
rejectedPromise()
  .then(result => console.log(result))
  .catch(error => console.error(error));