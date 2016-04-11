module.exports = (function() {
  'use strict';

  require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css');

  var button1 = require('./../button1/button1');
  var button2 = require('./../button2/button2');

  var app = {};

  app.initialize = function() {
    button1.initialize();
    button2.initialize();
  };

  return app;
})();
