function fakeRequest(data) {
  const fakeDb = {
    user: {firstName: 'Romain'},
    company: {name: 'Google'},
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeDb[data]);
    }, Math.random() * 1001);
  });
}


/*
let count = 0;
let contact = {};

fakeRequest('company')
  .then((company) => {
    contact.company = company.name;
    if (++count === 2) {
      console.log(contact)
    }
  });

fakeRequest('user')
  .then((user) => {
    contact.username = user.firstName;
    if (++count === 2) {
      console.log(contact)
    }
  });
*/

/*
Promise.all([
  fakeRequest('company'),
  fakeRequest('user'),
]).then(([company, user]) => {
  console.log({company: company.name, username: user.firstName});
})
*/

(async () => {
  const [company, user] = await Promise.all([
    fakeRequest('company'),
    fakeRequest('user'),
  ]);

  console.log({company: company.name, username: user.firstName});
})();
