'use strict';

const expansions = require('npm-expansions');

module.exports = () => expansions[Math.floor(Math.random() * expansions.length)];
