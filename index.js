'use strict';

var expansions = require('npm-expansions');


module.exports = function () {
  return expansions[Math.floor(Math.random() * expansions.length)];
};
