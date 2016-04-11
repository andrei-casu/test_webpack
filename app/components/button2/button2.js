module.exports = (function() {
  'use strict';

  var button2 =  {};
  require("./button2.scss");

  button2.initialize = function() {
    $('body').prepend('<button id="button2" class="btn btn-danger">Button 2</button>');
    $('#button2').click(function() {
      alert('Button 2');
    });
  };

  return button2; 
})();
