'use strict';

const btnElt = document.querySelector('button');
const divElt = document.querySelector('div');

btnElt.addEventListener('click', () => {

  // Dynamic Import
  import('./change-background').then(({ changeBackground }) => {
    changeBackground(divElt);
    setInterval(() => {
      changeBackground(divElt);
    }, 1000);
  })

});
