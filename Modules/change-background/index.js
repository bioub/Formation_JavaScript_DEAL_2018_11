'use strict';

const changeBackground = require('./change-background');

const btnElt = document.querySelector('button');
const divElt = document.querySelector('div');

btnElt.addEventListener('click', () => {

  setInterval(() => {
    changeBackground(divElt);
  }, 1000);

});
