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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhaserGame; });\n/* harmony import */ var _utils_Geckos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Geckos */ \"./src/utils/Geckos.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_server_scenes_GameScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth_server/scenes/GameScene */ \"./src/auth_server/scenes/GameScene.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar config = {\n  type: phaser__WEBPACK_IMPORTED_MODULE_1___default.a.HEADLESS,\n  parent: 'phaser-example',\n  width: 800,\n  height: 600,\n  autoFocus: false,\n  physics: {\n    \"default\": 'arcade',\n    arcade: {\n      debug: false,\n      gravity: {\n        y: 0\n      }\n    }\n  },\n  scene: [_auth_server_scenes_GameScene__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]\n};\n/*const config = {\n  type: Phaser.HEADLESS,\n  parent: 'phaser-game',\n  width: 896,\n  height: 504,\n  banner: false,\n  audio: false,\n  scene: [GameScene],\n  physics: {\n    default: 'arcade',\n    arcade: {\n      gravity: { y: 1200 }\n    }\n  }\n}\n*/\n\nvar bootScene = {\n  key: 'boot',\n  active: true,\n  init: function init() {\n    console.log('[BOOT] init');\n  },\n  preload: function preload() {\n    console.log('[BOOT] preload');\n  },\n  create: function create() {\n    console.log('[BOOT] create');\n  },\n  update: function update() {\n    console.log('[BOOT] update');\n  }\n}; //const serverGame = new Phaser.Game(config);\n\n/*\nconst config = {\n  type: Phaser.HEADLESS,\n  width: 1024,\n  height: 640,\n  physics: {\n    default: 'arcade',\n    arcade: {\n      gravity: {\n        y: 980\n      },\n      debug: true\n    }\n  },\n  // disable audio\n  audio: {\n    noAudio: true\n  },\n  scene: {\n    preload: () => {\n      console.log('server preload')\n    },\n    create: () => {\n      console.log('server create')\n    },\n    update: () => {\n      // console.log('server update')\n    }\n  },\n  title: 'Phaser server app',\n  backgroundColor: '#06C6F8',\n  transparent: true,\n  disableContextMenu: true\n}\n*/\n\nvar PhaserGame = /*#__PURE__*/function (_Phaser$Game) {\n  _inherits(PhaserGame, _Phaser$Game);\n\n  var _super = _createSuper(PhaserGame);\n\n  function PhaserGame(server) {\n    var _this;\n\n    _classCallCheck(this, PhaserGame);\n\n    console.log(\"game constructor\");\n    _this = _super.call(this, config);\n    _this.server = server; //console.log(this.scene)\n\n    _this.start();\n\n    return _this;\n  }\n\n  return PhaserGame;\n}(phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Game);\n\n\n\n//# sourceURL=webpack:///./src/ServerGame.js?");

/***/ }),

/***/ "./src/auth_server/scenes/GameScene.js":
/*!*********************************************!*\
  !*** ./src/auth_server/scenes/GameScene.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _utils_Geckos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Geckos */ \"./src/utils/Geckos.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../objects/NPC'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../objects/Map'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../objects/Player'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar Game = /*#__PURE__*/function (_Phaser$Scene) {\n  _inherits(Game, _Phaser$Scene);\n\n  var _super = _createSuper(Game);\n\n  function Game() {\n    _classCallCheck(this, Game);\n\n    return _super.call(this, {\n      key: \"Game\"\n    });\n  }\n\n  _createClass(Game, [{\n    key: \"preload\",\n    value: function preload() {}\n  }, {\n    key: \"create\",\n    value: function create(data) {\n      try {\n        this.demo = data.demo;\n        var demo = true; //this.demo=true;\n        //World stuff\n\n        this.matter.world.disableGravity();\n        var mapIndex = data.mapIndex || 0;\n        this.mapIndex = mapIndex;\n        this.map = !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../objects/Map'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).mapWithIndex(this, mapIndex);\n        this.road = this.map.road;\n        var playerName = data.name || \"Red\";\n        this.player = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../objects/Player'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, 0xff0000, 100, 230, 0, playerName);\n\n        if (this.demo) {\n          this.player.shouldAutoDrive = true;\n        }\n\n        this.map.addCar(this.player);\n        this.opponents = [];\n        var opponentColors = [0xffff00, 0x00ff00, 0x0000ff, 0xff00ff, 0x00ffff];\n        var opponentNames = [\"Yellow\", \"Green\", \"Blue\", \"Purple\", \"Cyan\"];\n\n        for (var i = 0; i < 5; i++) {\n          var car = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../objects/NPC'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, opponentColors[i], 0, 0, i + 1, opponentNames[i]);\n          this.map.addCar(car);\n          this.player.addOpponent(car);\n          car.setOpponents([this.player].concat(_toConsumableArray(this.opponents)));\n\n          var _iterator = _createForOfIteratorHelper(this.opponents),\n              _step;\n\n          try {\n            for (_iterator.s(); !(_step = _iterator.n()).done;) {\n              var opp = _step.value;\n              opp.addOpponent(car);\n            }\n          } catch (err) {\n            _iterator.e(err);\n          } finally {\n            _iterator.f();\n          }\n\n          this.opponents.push(car);\n        }\n\n        this.startTime;\n        this.lapStartTime;\n        this.raceActive = false;\n        this.raceStarted = false;\n        this.countdown = 5;\n\n        if (this.demo) {\n          this.startRace();\n        } else {\n          this.proceedCountdown();\n        }\n      } catch (err) {\n        alert(err);\n      }\n    }\n  }, {\n    key: \"start3d\",\n    value: function start3d() {\n      var oppData = [];\n\n      var _iterator2 = _createForOfIteratorHelper(this.opponents),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var opp = _step2.value;\n          oppData.push({\n            id: opp.id,\n            color: opp.tintTopLeft\n          });\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n\n      try {\n        this.graphics = new Graphics3d({\n          roadData: this.map.road.roadData,\n          player: {\n            id: this.player.id,\n            color: this.player.tintTopLeft\n          },\n          opponents: oppData,\n          walls: this.map.walls,\n          finishLine: this.map.finishLine,\n          bounds: this.map.bounds\n        });\n      } catch (error) {\n        alert(error);\n      }\n    }\n  }, {\n    key: \"printText\",\n    value: function printText(text) {\n      if (this.testLabel) this.testLabel.text = text;else console.log(text);\n    }\n  }, {\n    key: \"proceedCountdown\",\n    value: function proceedCountdown() {\n      var _this = this;\n\n      this.countdown -= 1;\n      var colors = [0x999999, 0x00ff00, 0xffff00, 0xff0000, 0x123568];\n\n      if (this.countdown === 3) {\n        //this.countdownLight.fillAlpha=1.0\n        EventsCenter.emit(\"showCountdown\", true);\n      } else if (this.countdown === 1) {\n        this.startRace();\n      } //this.countdownLight.fillColor=colors[this.countdown];\n\n\n      EventsCenter.emit(\"setCountdownColor\", colors[this.countdown]);\n\n      if (this.countdown > 0) {\n        setTimeout(function () {\n          _this.proceedCountdown();\n        }, 1500);\n      } else {\n        //this.countdownLight.destroy()\n        EventsCenter.emit(\"showCountdown\", false);\n      }\n    }\n  }, {\n    key: \"startRace\",\n    value: function startRace() {\n      this.raceActive = true;\n      this.raceStarted = true;\n      this.startTime = this.time.now;\n      this.player.start(this.startTime);\n\n      var _iterator3 = _createForOfIteratorHelper(this.opponents),\n          _step3;\n\n      try {\n        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n          var opp = _step3.value;\n          opp.start(this.startTime);\n        }\n      } catch (err) {\n        _iterator3.e(err);\n      } finally {\n        _iterator3.f();\n      }\n    }\n  }, {\n    key: \"displayLapTime\",\n    value: function displayLapTime(time) {\n      EventsCenter.emit('setLapTimeLabel', this.msToString(time));\n    }\n  }, {\n    key: \"msToString\",\n    value: function msToString(time) {\n      var totalCents = Math.floor(time / 10);\n      var cents = totalCents % 100;\n\n      if (cents < 10) {\n        cents = \"0\" + \"\" + cents;\n      }\n\n      var totalSecs = Math.floor(totalCents / 100);\n      var secs = totalSecs % 60;\n\n      if (secs < 10) {\n        secs = \"\" + \"0\" + secs;\n      }\n\n      var mins = Math.floor(totalSecs / 60);\n      return mins + \":\" + secs + \":\" + cents;\n    }\n  }, {\n    key: \"finished\",\n    value: function finished() {\n      var _this2 = this;\n\n      if (!this.demo) {\n        if (this.raceActive) {\n          var sortedCars = [this.player].concat(_toConsumableArray(this.opponents)).sort(function (a, b) {\n            return a.finishTime - b.finishTime;\n          });\n          var results = [];\n\n          var _iterator4 = _createForOfIteratorHelper(sortedCars),\n              _step4;\n\n          try {\n            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n              var car = _step4.value;\n              results.push({\n                name: car.name,\n                lapTimes: car.lapTimes,\n                finishTime: car.finishTime,\n                player: car === this.player\n              });\n            }\n          } catch (err) {\n            _iterator4.e(err);\n          } finally {\n            _iterator4.f();\n          }\n\n          this.controller.cleanUp();\n          setTimeout(function () {\n            _this2.showRaceOver(results);\n          }, 1500);\n        }\n\n        this.raceActive = false;\n      }\n    }\n  }, {\n    key: \"showRaceOver\",\n    value: function showRaceOver(results) {\n      this.scene.stop(\"UI\");\n      this.scene.launch(\"RaceOver\", {\n        results: results,\n        mapIndex: this.mapIndex\n      });\n    }\n  }, {\n    key: \"setLapLabel\",\n    value: function setLapLabel(lap, total) {\n      //this.lapLabel.text = \"Lap: \"+lap+\"/\"+total;\n      EventsCenter.emit(\"setLapLabel\", \"Lap: \" + lap + \"/\" + total);\n    }\n  }, {\n    key: \"customZoom\",\n    value: function customZoom() {\n      this.cameras.main.setZoom(0.6);\n      this.cameras.main.scrollX = -300;\n      this.cameras.main.scrollY = 200;\n    }\n  }, {\n    key: \"update\",\n    value: function update(time, delta) {\n      //if (this.input.activePointer.x>0) this.finished()()\n      if (this.graphics) {\n        var oppData = [];\n\n        var _iterator5 = _createForOfIteratorHelper(this.opponents),\n            _step5;\n\n        try {\n          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {\n            var opp = _step5.value;\n            oppData.push({\n              id: opp.id,\n              x: opp.x,\n              y: opp.y,\n              rot: opp.rotation,\n              speed: opp.getSpeed(),\n              turnAmount: opp.body.angularVelocity\n            });\n          }\n        } catch (err) {\n          _iterator5.e(err);\n        } finally {\n          _iterator5.f();\n        }\n\n        this.graphics.update(oppData, {\n          x: this.player.x,\n          y: this.player.y,\n          rot: this.player.rotation,\n          dir: this.player.getMovementDirection(),\n          speed: this.player.getSpeed(),\n          turnAmount: this.player.body.angularVelocity\n        }, delta);\n      }\n\n      var raceOver = true;\n\n      for (var _i = 0, _arr = [this.player].concat(_toConsumableArray(this.opponents)); _i < _arr.length; _i++) {\n        var car = _arr[_i];\n\n        if (!car.finished) {\n          raceOver = false;\n        }\n      }\n\n      if (raceOver) {\n        this.finished();\n      }\n\n      if (this.raceStarted) {\n        if (this.controller && !this.player.finished) {\n          this.controller.update(delta);\n        }\n\n        this.player.update(time, delta);\n\n        var _iterator6 = _createForOfIteratorHelper(this.opponents),\n            _step6;\n\n        try {\n          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {\n            var _opp = _step6.value;\n\n            _opp.update(time, delta);\n          }\n        } catch (err) {\n          _iterator6.e(err);\n        } finally {\n          _iterator6.f();\n        }\n\n        this.map.update(time, delta);\n      }\n\n      if (this.raceActive) {\n        var totalElapsed = time - this.startTime; //this.totalTimeLabel.text=this.msToString(totalElapsed);\n\n        EventsCenter.emit(\"setElapsedTimeLabel\", this.msToString(totalElapsed)); //const lapElapsed = time-this.player.lapStartTime;\n        //this.lapTimeLabel.text = this.msToString(lapElapsed);\n      }\n    }\n  }]);\n\n  return Game;\n}(phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Scene);\n\n\n\n//# sourceURL=webpack:///./src/auth_server/scenes/GameScene.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animationFrame\", function() { return animationFrame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestAnimationFrame\", function() { return requestAnimationFrame; });\n/* harmony import */ var jsdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsdom */ \"jsdom\");\n/* harmony import */ var jsdom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsdom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _FakeXMLHttpRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FakeXMLHttpRequest */ \"./src/utils/FakeXMLHttpRequest.js\");\n/* harmony import */ var _MockImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MockImage */ \"./src/utils/MockImage.js\");\n/* harmony import */ var canvas_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! canvas-mock */ \"canvas-mock\");\n/* harmony import */ var canvas_mock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(canvas_mock__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var datauri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datauri */ \"datauri\");\n/* harmony import */ var datauri__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(datauri__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n //import {Image} from \"skia-canvas\"\n\ntry {\n  var JSDOM = jsdom__WEBPACK_IMPORTED_MODULE_0___default.a.JSDOM;\n  var dom = new JSDOM(\"<!DOCTYPE html><body></body>\");\n  var document = dom.window.document;\n  var _window = dom.window;\n\n  _window.focus = function () {};\n\n  var datauri = new datauri__WEBPACK_IMPORTED_MODULE_4___default.a();\n\n  _window.URL.createObjectURL = function (blob) {\n    console.log(\"hm\");\n\n    if (blob) {\n      return datauri.format(blob.type, blob[Object.getOwnPropertySymbols(blob)[0]]._buffer).content;\n    }\n  };\n\n  ;\n\n  _window.URL.revokeObjectURL = function (objectURL) {// Do nothing at the moment\n  };\n\n  var Canvas = _window.document.createElement('canvas');\n\n  canvas_mock__WEBPACK_IMPORTED_MODULE_3___default()(Canvas);\n\n  _window.HTMLCanvasElement.prototype.getContext = function () {\n    return Canvas.getContext();\n  };\n\n  global.document = document;\n  global.window = _window;\n  global.window.Element = undefined;\n  global.navigator = {\n    userAgent: 'node'\n  };\n  global.Image = _MockImage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; //document.createElement('img');\n\n  global.loadImage = function (arg) {\n    console.log(\"load image\");\n    console.log(JSON.stringify(arg));\n  };\n\n  global.XMLHttpRequest = _FakeXMLHttpRequest__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  global.HTMLCanvasElement = _window.HTMLCanvasElement;\n  global.HTMLVideoElement = _window.HTMLVideoElement; // @ts-ignore\n\n  global.URL = function () {}; //global.URL.createObjectURL = (base64) => `data:image/png;base64,${base64}`\n\n\n  global.URL.revokeObjectURL = function () {}; // phaser on node variables\n\n\n  global.phaserOnNodeFPS = 60;\n} catch (err) {\n  console.log(err);\n}\n\nvar animationFrame = function animationFrame(cb) {\n  //console.log(\"gah\")\n  if (typeof cb !== 'function') return 0; // this line saves a lot of cpu\n\n  window.setTimeout(function () {\n    return cb(0);\n  }, 1000 / global.phaserOnNodeFPS);\n  return 0;\n};\n\n\n\nwindow.requestAnimationFrame = function (cb) {\n  return animationFrame(cb);\n};\n\nvar requestAnimationFrame = window.requestAnimationFrame;\n\n\n//# sourceURL=webpack:///./src/utils/Geckos.js?");

/***/ }),

/***/ "./src/utils/MockImage.js":
/*!********************************!*\
  !*** ./src/utils/MockImage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Image; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Image = /*#__PURE__*/function () {\n  function Image(args) {\n    _classCallCheck(this, Image);\n\n    console.log(\"img constructor\");\n    console.log(JSON.stringify(args));\n  }\n\n  _createClass(Image, [{\n    key: \"getSource\",\n    value: function getSource() {\n      console.log(\"get source\");\n    }\n  }, {\n    key: \"setSource\",\n    value: function setSource(arg) {\n      console.log(\"set source\");\n      console.log(JSON.stringify(arg));\n    }\n  }]);\n\n  return Image;\n}();\n\n\n\n//# sourceURL=webpack:///./src/utils/MockImage.js?");

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

/***/ "datauri":
/*!**************************!*\
  !*** external "datauri" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"datauri\");\n\n//# sourceURL=webpack:///external_%22datauri%22?");

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