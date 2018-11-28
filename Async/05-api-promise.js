function timeout(delayMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delayMs);
    }, delayMs);
  });
}

/*
timeout(1000)
  .then((delay1) => {
    console.log(delay1 + 'ms');
    return timeout(500);
  })
  .then((delay2) => {
    console.log(delay2 + 'ms');
  });
*/


(async () => {

  const delay1 = await timeout(1000);
  console.log(delay1 + 'ms');

  const delay2 = await timeout(500);
  console.log(delay2 + 'ms');


})();
