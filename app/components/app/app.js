module.exports = (function() {
  'use strict';

  var button1 = require('./../button1/button1.js');
  var button2 = require('./../button2/button2.js');
  // require("./../../node_mudules/bootstrap/dist/css/bootstrap.min.css");
  // require("./../../node_mudules/bootstrap/dist/js/bootstrap.min.js");
  // import bootstrap here
  require("bootstrap-webpack");

  var app = {};

  app.initialize = function() {
    button1.initialize();
    button2.initialize();
  };

  return app;
})();
