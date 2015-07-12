'use strict';

var expansion = require('..');

var expansions = require('npm-expansions'),
    test = require('tape');


test(function (t) {
  t.notEqual(expansions.indexOf(expansion()), -1,
             'returns one of n-p-m expansions');
  t.end();
});
