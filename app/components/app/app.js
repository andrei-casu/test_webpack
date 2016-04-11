module.exports = (function() {
  'use strict';

  var button1 = require('./../button1/button1.js');
  var button2 = require('./../button2/button2.js');
  // import bootstrap here
  require('../../../node_modules/bootstrap/dist/js/bootstrap.min.js');
  require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css');

  var app = {};

  app.initialize = function() {
    button1.initialize();
    button2.initialize();
  };

  return app;
})();
