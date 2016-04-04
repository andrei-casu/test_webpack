module.exports = (function() {
  'use strict';

  var button1 = require('./../button1/button1.js');
  var button2 = require('./../button2/button2.js');
  // import bootstrap here

  var app = {};

  app.initialize = function() {
    button1.initialize();
    button2.initialize();
  };

  return app;
})();
