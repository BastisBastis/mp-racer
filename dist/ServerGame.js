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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ServerGame.js":
/*!***************************!*\
  !*** ./src/ServerGame.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhaserGame; });\n/* harmony import */ var _utils_Geckos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Geckos */ \"./src/utils/Geckos.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_server_scenes_GameScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth_server/scenes/GameScene */ \"./src/auth_server/scenes/GameScene.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n/*\nconst config = {\n  type: Phaser.HEADLESS,\n  parent: 'phaser-example',\n  width: 800,\n  height: 600,\n  autoFocus: false,\n  physics: {\n    default: 'arcade',\n    arcade: {\n      debug: false,\n      gravity: { y: 0 }\n    }\n  },\n  scene: [\n    GameScene\n  ]\n};\n*/\n\nvar config = {\n  type: phaser__WEBPACK_IMPORTED_MODULE_1___default.a.HEADLESS,\n  parent: 'phaser-game',\n  width: 896,\n  height: 504,\n  banner: false,\n  audio: false,\n  scene: [_auth_server_scenes_GameScene__WEBPACK_IMPORTED_MODULE_2__[\"default\"]],\n  physics: {\n    \"default\": 'arcade',\n    arcade: {\n      gravity: {\n        y: 1200\n      }\n    }\n  }\n};\n\nvar PhaserGame = /*#__PURE__*/function (_Phaser$Game) {\n  _inherits(PhaserGame, _Phaser$Game);\n\n  var _super = _createSuper(PhaserGame);\n\n  function PhaserGame(server) {\n    var _this;\n\n    _classCallCheck(this, PhaserGame);\n\n    _this = _super.call(this, config);\n    _this.server = server;\n    return _this;\n  }\n\n  return PhaserGame;\n}(phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Game); //const serverGame = new Phaser.Game(config);\n\n\n\n\n//# sourceURL=webpack:///./src/ServerGame.js?");

/***/ }),

/***/ "./src/auth_server/scenes/GameScene.js":
/*!*********************************************!*\
  !*** ./src/auth_server/scenes/GameScene.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameScene; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_Geckos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Geckos */ \"./src/utils/Geckos.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar GameScene = /*#__PURE__*/function (_Phaser$Scene) {\n  _inherits(GameScene, _Phaser$Scene);\n\n  var _super = _createSuper(GameScene);\n\n  function GameScene() {\n    _classCallCheck(this, GameScene);\n\n    return _super.call(this, {\n      key: \"GameScene\"\n    });\n  }\n\n  _createClass(GameScene, [{\n    key: \"preload\",\n    value: function preload() {}\n  }, {\n    key: \"create\",\n    value: function create() {\n      console.log(\"Server game created\");\n    }\n  }]);\n\n  return GameScene;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene);\n\n\n\n//# sourceURL=webpack:///./src/auth_server/scenes/GameScene.js?");

/***/ }),

/***/ "./src/utils/FakeXMLHttpRequest.js":
/*!*****************************************!*\
  !*** ./src/utils/FakeXMLHttpRequest.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar status = 200;\n\nvar FakeXMLHttpRequest = /*#__PURE__*/function () {\n  function FakeXMLHttpRequest() {\n    _classCallCheck(this, FakeXMLHttpRequest);\n  }\n\n  _createClass(FakeXMLHttpRequest, [{\n    key: \"open\",\n    value: //static status = 200\n    function open(_type, url) {\n      this.url = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, url);\n    }\n  }, {\n    key: \"send\",\n    value: function send() {\n      var _this = this;\n\n      // use base64 for images and utf8 for json files\n      var encoding = /\\.json$/gm.test(this.url) ? 'utf8' : 'base64';\n      console.log(\"hopp\");\n      window.readFile(this.url, {\n        encoding: encoding\n      }, function (err, data) {\n        if (err) throw err;\n        _this.response = data;\n        _this.responseText = data;\n        var event = {\n          target: {\n            status: _this.status\n          }\n        };\n\n        _this.onload(_this, event);\n      });\n    }\n  }, {\n    key: \"onload\",\n    value: function onload(xhr, event) {}\n  }, {\n    key: \"onerror\",\n    value: function onerror(err) {}\n  }, {\n    key: \"onprogress\",\n    value: function onprogress() {}\n  }]);\n\n  return FakeXMLHttpRequest;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FakeXMLHttpRequest);\n\n//# sourceURL=webpack:///./src/utils/FakeXMLHttpRequest.js?");

/***/ }),

/***/ "./src/utils/Geckos.js":
/*!*****************************!*\
  !*** ./src/utils/Geckos.js ***!
  \*****************************/
/*! exports provided: animationFrame, requestAnimationFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animationFrame\", function() { return animationFrame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestAnimationFrame\", function() { return requestAnimationFrame; });\n/* harmony import */ var jsdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsdom */ \"jsdom\");\n/* harmony import */ var jsdom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsdom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _FakeXMLHttpRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FakeXMLHttpRequest */ \"./src/utils/FakeXMLHttpRequest.js\");\n/* harmony import */ var _MockImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MockImage */ \"./src/utils/MockImage.js\");\n/* harmony import */ var canvas_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! canvas-mock */ \"canvas-mock\");\n/* harmony import */ var canvas_mock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(canvas_mock__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar JSDOM = jsdom__WEBPACK_IMPORTED_MODULE_0___default.a.JSDOM;\nvar dom = new JSDOM(\"<!DOCTYPE html><body></body>\");\nvar document = dom.window.document;\nvar window = dom.window;\n\nwindow.focus = function () {};\n\nvar Canvas = window.document.createElement('canvas');\ncanvas_mock__WEBPACK_IMPORTED_MODULE_3___default()(Canvas);\n\nwindow.HTMLCanvasElement.prototype.getContext = function () {\n  return Canvas.getContext();\n};\n\nglobal.document = document;\nglobal.window = window;\nglobal.window.Element = undefined;\nglobal.navigator = {\n  userAgent: 'node'\n};\nglobal.Image = _MockImage__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nglobal.XMLHttpRequest = _FakeXMLHttpRequest__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nglobal.HTMLCanvasElement = window.HTMLCanvasElement;\nglobal.HTMLVideoElement = window.HTMLVideoElement; // @ts-ignore\n\nglobal.URL = function () {};\n\nglobal.URL.createObjectURL = function (base64) {\n  return \"data:image/png;base64,\".concat(base64);\n};\n\nglobal.URL.revokeObjectURL = function () {}; // phaser on node variables\n\n\nglobal.phaserOnNodeFPS = 60;\n\nvar animationFrame = function animationFrame(cb) {\n  if (typeof cb !== 'function') return 0; // this line saves a lot of cpu\n\n  window.setTimeout(function () {\n    return cb(0);\n  }, 1000 / global.phaserOnNodeFPS);\n  return 0;\n};\n\n\n\nwindow.requestAnimationFrame = function (cb) {\n  return animationFrame(cb);\n};\n\nvar requestAnimationFrame = window.requestAnimationFrame;\n\n\n//# sourceURL=webpack:///./src/utils/Geckos.js?");

/***/ }),

/***/ "./src/utils/MockImage.js":
/*!********************************!*\
  !*** ./src/utils/MockImage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Image; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Image = function Image(args) {\n  _classCallCheck(this, Image);\n\n  console.log(\"img constructor\");\n  console.log(JSON.stringify(args));\n};\n\n\n\n//# sourceURL=webpack:///./src/utils/MockImage.js?");

/***/ }),

/***/ 0:
/*!*************************************************************************************************!*\
  !*** multi webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000 ./src/ServerGame.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000 */\"webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000\");\nmodule.exports = __webpack_require__(/*! ./src/ServerGame.js */\"./src/ServerGame.js\");\n\n\n//# sourceURL=webpack:///multi_webpack-hot-middleware/client?");

/***/ }),

/***/ "canvas-mock":
/*!******************************!*\
  !*** external "canvas-mock" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"canvas-mock\");\n\n//# sourceURL=webpack:///external_%22canvas-mock%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "jsdom":
/*!************************!*\
  !*** external "jsdom" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsdom\");\n\n//# sourceURL=webpack:///external_%22jsdom%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "phaser":
/*!*************************!*\
  !*** external "phaser" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"phaser\");\n\n//# sourceURL=webpack:///external_%22phaser%22?");

/***/ }),

/***/ "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000":
/*!**********************************************************************************!*\
  !*** external "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000" ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware/client?");

/***/ })

/******/ });