module.exports = (function() {
  'use strict';

  var $ = require('jquery');
  var button1 =  {};
  require("./button1.scss");
  // require style here: button1.scss

  button1.initialize = function() {
    $('body').append('<button id="button1" class="btn btn-primary">Button 1</button>');
    $('#button1').click(function() {
      alert('button 1');
    });
  };

  return button1; 
})();
