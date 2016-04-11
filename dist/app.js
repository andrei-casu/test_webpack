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

	  // require('../../../node_modules/bootstrap/dist/css/bootstrap.css');

	  var button1 = __webpack_require__(2);
	  var button2 = __webpack_require__(8);

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

	/* WEBPACK VAR INJECTION */(function($) {module.exports = (function() {
	  'use strict';

	  var button1 =  {};
	  __webpack_require__(4);

	  button1.initialize = function() {
	    $('body').prepend('<button id="button1" class="btn btn-primary">Button 1</button>');
	    $('#button1').addClass('fat');
	    $('#button1').click(function() {
	      alert('button 1');
	    });
	  };

	  return button1; 
	})();

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {module.exports = (function() {
	  'use strict';

	  var button2 =  {};
	  __webpack_require__(9);

	  button2.initialize = function() {
	    $('body').prepend('<button id="button2" class="btn btn-danger">Button 2</button>');
	    $('#button2').click(function() {
	      alert('Button 2');
	    });
	  };

	  return button2; 
	})();

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);