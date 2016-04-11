module.exports = (function() {
  'use strict';

<<<<<<< HEAD
  var button1 = require('./../button1/button1.js');
  var button2 = require('./../button2/button2.js');
  // import bootstrap here
  // require('../../../node_modules/bootstrap/dist/js/bootstrap.js');
  require("../../../node_modules/bootstrap/dist/css/bootstrap.css");
=======
  require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css');
>>>>>>> 23d6b0a89b201d86c4468f5abafaa99be2dc5c55

  var button1 = require('./../button1/button1');
  var button2 = require('./../button2/button2');

  var app = {};

  app.initialize = function() {
    button1.initialize();
    button2.initialize();
  };

  return app;
})();
