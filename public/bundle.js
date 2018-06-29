/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/keys.js":
/*!************************!*\
  !*** ./config/keys.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    soundcloudKey: 'e9a719bdc5f31a321c113282cb48387d',\n    soundcloudClientSecretKey: 'c9c905a4930d5c1341ed5c51675ccadb'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcva2V5cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jb25maWcva2V5cy5qcz85NjlmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHNvdW5kY2xvdWRLZXk6ICdlOWE3MTliZGM1ZjMxYTMyMWMxMTMyODJjYjQ4Mzg3ZCcsXHJcblx0c291bmRjbG91ZENsaWVudFNlY3JldEtleTogJ2M5YzkwNWE0OTMwZDVjMTM0MWVkNWM1MTY3NWNjYWRiJyxcclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFGQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/keys.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./sass/index.scss */ \"./src/sass/index.scss\");\n\n__webpack_require__(/*! ./js/index.js */ \"./src/js/index.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzEyZDUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJztcclxuXHJcbi8vIGpzXHJcbmltcG9ydCAnLi9qcy9pbmRleC5qcyc7XHJcblxyXG4iXSwibWFwcGluZ3MiOiI7O0FBRUE7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _getPromise = __webpack_require__(/*! ./utils/getPromise */ \"./src/js/utils/getPromise.js\");\n\nvar _getPromise2 = _interopRequireDefault(_getPromise);\n\nvar _keys = __webpack_require__(/*! ../../config/keys */ \"./config/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Utils\n(0, _getPromise2.default)('http://localhost:8000/api/genre/hip-hop').then(function (res) {\n\tbuildBoxes(res);\n}).catch(function (error) {\n\tconsole.log(error);\n});\n\n// keys\n\n\nSC.initialize({\n\tclient_id: _keys2.default.soundcloudKey\n});\n\nvar buildBoxes = function buildBoxes(res) {\n\tconsole.log(res);\n\n\tvar tracks = JSON.parse(res);\n\n\tvar boxes = '';\n\ttracks.forEach(function (track, index) {\n\t\tboxes += '<div id=\"' + index + '\" data-stream-url=\"' + track.stream_url + '\" class=\"box\">' + index + '</div>';\n\t});\n\n\tvar container = document.createElement('div');\n\tcontainer.id = 'container';\n\n\tcontainer.innerHTML = boxes;\n\n\twindow.document.body.appendChild(container);\n\n\tvar boxesEvents = function boxesEvents() {\n\t\tcontainer.addEventListener('click', function (event) {\n\t\t\tif (event.target && event.target.tagName === \"DIV\") {\n\n\t\t\t\tvar parsedURL = document.createElement('a');\n\t\t\t\tparsedURL.href = event.target.dataset.streamUrl;\n\n\t\t\t\tconsole.log(parsedURL.pathname);\n\t\t\t\tvar pathname = parsedURL.pathname;\n\t\t\t\tvar trackURL = pathname.substring(pathname.length, 7);\n\t\t\t\tvar testing = trackURL.substring(0, 7);\n\n\t\t\t\tconsole.log('/tracks' + testing);\n\t\t\t\t// stream track id 293\n\t\t\t\tSC.stream('/tracks' + testing).then(function (player) {\n\t\t\t\t\tconsole.log(player);\n\t\t\t\t\tplayer.play().then(function () {\n\t\t\t\t\t\tconsole.log('Playback started!');\n\t\t\t\t\t}).catch(function (e) {\n\t\t\t\t\t\tconsole.error('Playback rejected. Try calling play() from a user interaction.', e);\n\t\t\t\t\t});\n\t\t\t\t});\n\t\t\t}\n\t\t}, false);\n\t};\n\n\tboxesEvents();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2luZGV4LmpzPzAyN2QiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIFV0aWxzXHJcbmltcG9ydCBnZXRQcm9taXNlIGZyb20gJy4vdXRpbHMvZ2V0UHJvbWlzZSc7XHJcblxyXG4vLyBrZXlzXHJcbmltcG9ydCBrZXlzIGZyb20gJy4uLy4uL2NvbmZpZy9rZXlzJztcclxuXHJcbmdldFByb21pc2UoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvZ2VucmUvaGlwLWhvcCcpXHJcbi50aGVuKChyZXMpID0+IHtcclxuXHRidWlsZEJveGVzKHJlcyk7XHJcbn0pXHJcbi5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRjb25zb2xlLmxvZyhlcnJvcik7XHJcbn0pO1xyXG5cclxuU0MuaW5pdGlhbGl6ZSh7XHJcblx0Y2xpZW50X2lkOiBrZXlzLnNvdW5kY2xvdWRLZXksXHJcbn0pO1xyXG5cclxuY29uc3QgYnVpbGRCb3hlcyA9IChyZXMpID0+IHtcclxuXHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cclxuXHRjb25zdCB0cmFja3MgPSBKU09OLnBhcnNlKHJlcyk7XHJcblxyXG5cdGxldCBib3hlcyA9ICcnO1xyXG5cdHRyYWNrcy5mb3JFYWNoKCh0cmFjaywgaW5kZXgpID0+IHtcclxuXHRcdGJveGVzICs9IGA8ZGl2IGlkPVwiJHtpbmRleH1cIiBkYXRhLXN0cmVhbS11cmw9XCIke3RyYWNrLnN0cmVhbV91cmx9XCIgY2xhc3M9XCJib3hcIj4ke2luZGV4fTwvZGl2PmA7XHJcblx0fSk7XHJcblxyXG5cdGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRjb250YWluZXIuaWQgPSAnY29udGFpbmVyJztcclxuXHJcblx0Y29udGFpbmVyLmlubmVySFRNTCA9IGJveGVzO1xyXG5cclxuXHR3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuXHJcblx0Y29uc3QgYm94ZXNFdmVudHMgPSAoKSA9PiB7XHJcblx0XHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0aWYgKGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQudGFnTmFtZSA9PT0gXCJESVZcIikge1xyXG5cclxuXHRcdFx0XHRjb25zdCBwYXJzZWRVUkwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblx0XHRcdFx0cGFyc2VkVVJMLmhyZWYgPSBldmVudC50YXJnZXQuZGF0YXNldC5zdHJlYW1Vcmw7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHBhcnNlZFVSTC5wYXRobmFtZSk7XHJcblx0XHRcdFx0bGV0IHBhdGhuYW1lID0gcGFyc2VkVVJMLnBhdGhuYW1lO1xyXG5cdFx0XHRcdGxldCB0cmFja1VSTCA9IHBhdGhuYW1lLnN1YnN0cmluZyhwYXRobmFtZS5sZW5ndGgsIDcpO1xyXG5cdFx0XHRcdGxldCB0ZXN0aW5nID0gdHJhY2tVUkwuc3Vic3RyaW5nKDAsIDcpO1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhgL3RyYWNrcyR7dGVzdGluZ31gKTtcclxuXHRcdFx0XHQvLyBzdHJlYW0gdHJhY2sgaWQgMjkzXHJcblx0XHRcdFx0U0Muc3RyZWFtKGAvdHJhY2tzJHt0ZXN0aW5nfWApLnRoZW4oZnVuY3Rpb24ocGxheWVyKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhwbGF5ZXIpO1xyXG5cdFx0XHRcdFx0cGxheWVyLnBsYXkoKS50aGVuKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnUGxheWJhY2sgc3RhcnRlZCEnKTtcclxuXHRcdFx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignUGxheWJhY2sgcmVqZWN0ZWQuIFRyeSBjYWxsaW5nIHBsYXkoKSBmcm9tIGEgdXNlciBpbnRlcmFjdGlvbi4nLCBlKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9LCBmYWxzZSk7XHJcblx0fTtcclxuXHJcblx0Ym94ZXNFdmVudHMoKTtcclxuXHJcblxyXG5cclxufTtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7QUFFQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUxBO0FBTUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBVkE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/js/utils/getPromise.js":
/*!************************************!*\
  !*** ./src/js/utils/getPromise.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\n\n/**\r\n * @author nomadmystics@gmail.com\r\n * @param {string} url\r\n */\n\nvar getPromise = function getPromise(url) {\n\n\treturn new Promise(function (resolve, reject) {\n\t\tvar req = new XMLHttpRequest();\n\n\t\treq.open('GET', url);\n\n\t\treq.onload = function () {\n\t\t\t// console.log(req);\n\t\t\tif (req.status === 200) {\n\t\t\t\tresolve(req.response);\n\t\t\t} else {\n\t\t\t\treject(Error(req.statusText));\n\t\t\t}\n\t\t};\n\n\t\treq.onerror = function () {\n\t\t\treject(Error(\"Network Error\"));\n\t\t};\n\n\t\treq.send();\n\t});\n};\n\nexports.default = getPromise;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMvZ2V0UHJvbWlzZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvdXRpbHMvZ2V0UHJvbWlzZS5qcz80ZTA1Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLyoqXHJcbiAqIEBhdXRob3Igbm9tYWRteXN0aWNzQGdtYWlsLmNvbVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAqL1xyXG5cclxuY29uc3QgZ2V0UHJvbWlzZSA9IGZ1bmN0aW9uKHVybCkge1xyXG5cclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0Y29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0cmVxLm9wZW4oJ0dFVCcsIHVybCk7XHJcblxyXG5cdFx0cmVxLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2cocmVxKTtcclxuXHRcdFx0aWYgKHJlcS5zdGF0dXMgPT09IDIwMCkge1xyXG5cdFx0XHRcdHJlc29sdmUocmVxLnJlc3BvbnNlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZWplY3QoRXJyb3IocmVxLnN0YXR1c1RleHQpKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXEub25lcnJvciA9ICgpID0+IHtcclxuXHRcdFx0cmVqZWN0KEVycm9yKFwiTmV0d29yayBFcnJvclwiKSk7XHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHRyZXEuc2VuZCgpO1xyXG5cdH0pO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFByb21pc2U7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/utils/getPromise.js\n");

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Fzcy9pbmRleC5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvaW5kZXguc2Nzcz9hNzc5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sass/index.scss\n");

/***/ })

/******/ });