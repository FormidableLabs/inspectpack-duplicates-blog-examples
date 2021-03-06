/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************!*\
  !*** ./new-npm-flattened/index.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	const { get } = __webpack_require__(/*! lodash */ 1); // lodash@^4.1.0
	const { getOne } = __webpack_require__(/*! one */ 2);
	const { getTwo } = __webpack_require__(/*! two */ 3);

	const OBJ = { one: { two: "hi" } };

	console.log("Get from lodash", get("one.two", OBJ)); // => `"hi"`
	console.log("Get from one", getOne(OBJ)); // => `{ two: "hi" }`
	console.log("Get from two", getTwo(OBJ)); // => `undefined`


/***/ }),
/* 1 */
/*!*********************************************!*\
  !*** ./new-npm-flattened/~/lodash/index.js ***!
  \*********************************************/
/***/ (function(module, exports) {

	module.exports = {
	  // A very, very rough and naive object getter with reduce.
	  get: (path, obj) => path.split(".").reduce((memo, key) => {
	    return memo === undefined ? memo : memo[key];
	  }, obj)
	};


/***/ }),
/* 2 */
/*!******************************************!*\
  !*** ./new-npm-flattened/~/one/index.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	const { get } = __webpack_require__(/*! lodash */ 1);

	module.exports = {
	  getOne: (obj) => get("one", obj)
	};


/***/ }),
/* 3 */
/*!******************************************!*\
  !*** ./new-npm-flattened/~/two/index.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	const { get } = __webpack_require__(/*! lodash */ 4);

	module.exports = {
	  getTwo: (obj) => get("two", obj)
	};


/***/ }),
/* 4 */
/*!***************************************************!*\
  !*** ./new-npm-flattened/~/two/~/lodash/index.js ***!
  \***************************************************/
/***/ (function(module, exports) {

	module.exports = {
	  // A very, very rough and naive object getter with forEach.
	  get: (path, obj) => {
	    let memo = obj;
	    path.split(".").forEach((key) => {
	      memo = memo === undefined ? memo : memo[key];
	    });

	    return memo;
	  }
	};


/***/ })
/******/ ]);