let promise = new Promise((resolve, reject) => {
  console.log('start');

  setTimeout(() => {
    resolve("result");
  }, 5000);

});

promise
  .then(
    result => {
      console.log('done');
    },
  );