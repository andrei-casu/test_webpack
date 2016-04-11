module.exports = (function() {
  'use strict';

  var button1 =  {};
  require("./button1.scss");

  button1.initialize = function() {
    $('body').prepend('<button id="button1" class="btn btn-primary">Button 1</button>');
    $('#button1').addClass('fat');
    $('#button1').click(function() {
      alert('button 1');
    });
  };

  return button1; 
})();
