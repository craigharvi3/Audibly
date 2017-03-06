/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * audibly.js
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Craig Harvie <craig@craigharvie.me>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Context = __webpack_require__(1);
	
	var _Context2 = _interopRequireDefault(_Context);
	
	var _Downloader = __webpack_require__(3);
	
	var _Downloader2 = _interopRequireDefault(_Downloader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	window.Audibly = function () {
	
		/**
	   * Create a audibly instance.
	   * @param {array} audio - array of audio objects ({id: 1, url: 'http://audio.com/2.wav'}).
	   */
		function Audibly() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
			_classCallCheck(this, Audibly);
	
			// Setup variables
			this.options = options;
			this.context = new _Context2.default();
			this.buffers = {};
			this.sources = {};
	
			// Process options
			this.options = Object.assign({
				audio: [],
				callback: function callback() {}
			}, options);
	
			// Download any audio we have
			if (this.options.audio.length) {
				new _Downloader2.default(this, this.options.callback.bind(this));
			}
	
			return this;
		}
	
		/**
	   * Gets a source node
	   * @param {string} id
	   */
	
	
		_createClass(Audibly, [{
			key: 'getSourceNode',
			value: function getSourceNode(id) {
				return this.sources[id];
			}
		}]);
	
		return Audibly;
	}();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Exception = __webpack_require__(2);
	
	var _Exception2 = _interopRequireDefault(_Exception);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Class representing an AudiblyContext
	                                                                                                                                                           * Wrapper for AudioContext - https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
	                                                                                                                                                           * @author Craig Harvie <craig@craigharvie.me>
	                                                                                                                                                           *
	                                                                                                                                                           * @description
	                                                                                                                                                           * The AudioContext interface represents an audio-processing graph built
	                                                                                                                                                           * from audio modules linked together, each represented by an AudioNode.
	                                                                                                                                                           * An audio context controls the creation of the nodes it contains and the
	                                                                                                                                                           * execution of the audio processing, or decoding.
	                                                                                                                                                           * You need to create an AudioContext before you do anything else,
	                                                                                                                                                           * as everything happens inside a context.
	                                                                                                                                                           */
	
	var AudiblyContext =
	
	/**
	  * Create an AudiblyContext.
	  */
	function AudiblyContext() {
	  _classCallCheck(this, AudiblyContext);
	
	  // Create AudioContext
	  var AudioContext = window.AudioContext || window.webkitAudioContext;
	  if (AudioContext) {
	    this.context = new AudioContext();
	  } else {
	    throw new _Exception2.default('AudiblyContextException', 'Unable to create Web Audio API AudioContext. This may be down to an out of date browser.');
	  }
	
	  return this.context;
	};
	
	exports.default = AudiblyContext;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Class representing an Exception
	 * @author Craig Harvie <craig@craigharvie.me>
	 */
	var Exception =
	
	/**
	  * Create an Exception.
	  */
	function Exception(type, message) {
		_classCallCheck(this, Exception);
	
		this.type = type;
		this.message = message;
		this.toString = function () {
			return this.type + ": " + this.message;
		};
	};
	
	exports.default = Exception;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Class representing a Downloader
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Download raw audio files
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Craig Harvie <craig@craigharvie.me>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Source = __webpack_require__(4);
	
	var _Source2 = _interopRequireDefault(_Source);
	
	var _Exception = __webpack_require__(2);
	
	var _Exception2 = _interopRequireDefault(_Exception);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Downloader = function () {
	
		/**
	   * Create a Downloader.
	   */
		function Downloader(audibly, completeCB) {
			var _this = this;
	
			_classCallCheck(this, Downloader);
	
			this.audibly = audibly;
			// Keep track of how many we have downloaded
			this.count = 0;
			this.complete = completeCB;
	
			// Loop through and download audio
	
			var _loop = function _loop(i) {
				request = new XMLHttpRequest();
	
	
				try {
					request.open('GET', _this.audibly.options.audio[i].url, true);
				} catch (e) {
					throw new _Exception2.default('AudiblyException', 'Please ensure you have provided a url for your audio');
				}
	
				// We want raw data
				request.responseType = 'arraybuffer';
	
				request.onload = function () {
					// Asynchronously decode the audio file data in request.response
					_this.audibly.context.decodeAudioData(request.response, _this.success.bind(_this, _this.audibly.options.audio[i].id), _this.error);
				};
	
				request.onerror = function () {
					throw new _Exception2.default('AudiblyException', 'Please ensure you have provided a url for your audio');
				};
	
				request.send();
			};
	
			for (var i = 0; i < this.audibly.options.audio.length; i++) {
				var request;
	
				_loop(i);
			}
		}
	
		/**
	   * Download of audio was successfull
	   */
	
	
		_createClass(Downloader, [{
			key: 'success',
			value: function success(id, buffer) {
				this.audibly.buffers[id] = buffer;
				this.audibly.sources[id] = new _Source2.default(this.audibly.context, buffer);
				if (++this.count === this.audibly.options.audio.length) {
					this.complete();
				}
			}
	
			/**
	    * Download of audio errored
	    */
	
		}, {
			key: 'error',
			value: function error() {
				throw new _Exception2.default('AudiblyException', 'Download of audio errored. Please check your audio configuration');
			}
		}]);
	
		return Downloader;
	}();
	
	exports.default = Downloader;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Class representing an AudiblySource
	 * Wrapper for AudioBufferSourceNode - https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode
	 * @author Craig Harvie <craig@craigharvie.me>
	 *
	 * @description
	 * The AudioBufferSourceNode interface represents an audio source consisting
	 * of in-memory audio data, stored in an AudioBuffer.
	 * It is an AudioNode that acts as an audio source.
	 */
	
	var AudiblySource = function AudiblySource(context, buffer) {
		_classCallCheck(this, AudiblySource);
	
		// Browser differences check
		if (!context.createGain) {
			context.createGain = context.createGainNode;
		}
	
		// Source node
		this.node = context.createBufferSource();
		this.node.playbackRate.value = 1;
		this.node.buffer = buffer;
	
		// Connect the context destination node to the gain node
		this.node.connect(context.destination);
	
		this.node.loop = true;
	
		return this;
	};
	
	exports.default = AudiblySource;

/***/ }
/******/ ]);
//# sourceMappingURL=audibly.js.map