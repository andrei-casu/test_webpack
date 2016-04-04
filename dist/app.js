webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  'use strict';
	  

	  var app = __webpack_require__(1);

	  app.initialize();

	})();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (function() {
	  'use strict';

	  var button1 = __webpack_require__(2);
	  var button2 = __webpack_require__(5);
	  // import bootstrap here

	  var app = {};

	  app.initialize = function() {
	    button1.initialize();
	    button2.initialize();
	  };

	  return app;
	})();


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (function() {
	  'use strict';

	  var $ = __webpack_require__(3);
	  var button1 =  {};
	  __webpack_require__(4);
	  // require style here: button1.scss

	  button1.initialize = function() {
	    $('body').append('<button id="button1" class="btn btn-primary">Button 1</button>');
	    $('#button1').click(function() {
	      alert('button 1');
	    });
	  };

	  return button1; 
	})();


/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (function() {
	  'use strict';

	  var $ = __webpack_require__(3);
	  var button2 =  {};
	  __webpack_require__(6);
	  // require style here: button2.scss

	  button2.initialize = function() {
	    $('body').append('<button id="button2" class="btn btn-danger">Button 2</button>');
	    $('#button2').click(function() {
	      alert('Button 2');
	    });
	  };

	  return button2; 
	})();


/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);