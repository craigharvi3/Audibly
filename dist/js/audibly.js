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
	
	var _AudiblyContext = __webpack_require__(1);
	
	var _AudiblyContext2 = _interopRequireDefault(_AudiblyContext);
	
	var _Downloader = __webpack_require__(3);
	
	var _Downloader2 = _interopRequireDefault(_Downloader);
	
	var _AudiblyNode = __webpack_require__(4);
	
	var _AudiblyNode2 = _interopRequireDefault(_AudiblyNode);
	
	var _AudiblyAudioBufferSourceNode = __webpack_require__(5);
	
	var _AudiblyAudioBufferSourceNode2 = _interopRequireDefault(_AudiblyAudioBufferSourceNode);
	
	var _AudiblyOscillatorNode = __webpack_require__(6);
	
	var _AudiblyOscillatorNode2 = _interopRequireDefault(_AudiblyOscillatorNode);
	
	var _AudiblyBiquadFilterNode = __webpack_require__(7);
	
	var _AudiblyBiquadFilterNode2 = _interopRequireDefault(_AudiblyBiquadFilterNode);
	
	var _AudiblyConvolverNode = __webpack_require__(8);
	
	var _AudiblyConvolverNode2 = _interopRequireDefault(_AudiblyConvolverNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	window.AudiblyContext = new _AudiblyContext2.default();
	window.AudiblyNode = _AudiblyNode2.default;
	window.AudiblyAudioBufferSourceNode = _AudiblyAudioBufferSourceNode2.default;
	window.AudiblyOscillatorNode = _AudiblyOscillatorNode2.default;
	window.AudiblyBiquadFilterNode = _AudiblyBiquadFilterNode2.default;
	window.AudiblyConvolverNode = _AudiblyConvolverNode2.default;
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
			this.buffers = {};
	
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
			key: 'getBufferNode',
			value: function getBufferNode(id) {
				return this.buffers[id];
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
	function Exception(type, message, stack) {
		_classCallCheck(this, Exception);
	
		this.type = type;
		this.message = message;
		if (stack) {
			this.stack = stack;
		}
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
					window.AudiblyContext.decodeAudioData(request.response, _this.success.bind(_this, _this.audibly.options.audio[i].id), _this.error);
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
				// this.audibly.sources[ id ] = new AudiblyAudioBufferSourceNode( {
				// 	buffer: buffer
				// } );
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Class representing an AudiblyNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Wrapper for AudioNode - https://developer.mozilla.org/en-US/docs/Web/API/AudioNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Craig Harvie <craig@craigharvie.me>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The AudioNode interface represents an audio-processing module like an
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * audio source (e.g. an HTML <audio> or <video> element), audio destination,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * intermediate processing module (e.g. a filter like BiquadFilterNode,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * or volume control like GainNode).
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Exception = __webpack_require__(2);
	
	var _Exception2 = _interopRequireDefault(_Exception);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AudiblyNode = function () {
	
		/**
	   * Create an AudiblyNode instance.
	   * @param {object} options
	   */
		function AudiblyNode(options, node) {
			_classCallCheck(this, AudiblyNode);
	
			this.options = options;
			this.node = node;
			return this;
		}
	
		/**
	   * Connects to supplied destination node
	   * @param {object} options
	   */
	
	
		_createClass(AudiblyNode, [{
			key: 'connect',
			value: function connect() {
				var destination = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.AudiblyContext.destination;
	
				try {
					if (destination.node) {
						this.node.connect(destination.node);
						return;
					}
					this.node.connect(destination);
				} catch (e) {
					throw new _Exception2.default('AudiblyNodeException', 'Unable to connect this node to destination. Please recreate the node and try again.', e);
				}
			}
	
			/**
	    * Start playing node
	    * @param {number} time to start playing
	    */
	
		}, {
			key: 'start',
			value: function start() {
				var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
				try {
					this.node.start(time);
				} catch (e) {
					throw new _Exception2.default('AudiblyNodeException', 'start() can only be called on AudiblyNode instances exactly one time. You must recreate this node when playback is required again.');
				}
			}
	
			/**
	    * Stop playing node
	    */
	
		}, {
			key: 'stop',
			value: function stop() {
				try {
					this.node.stop();
				} catch (e) {
					throw new _Exception2.default('AudiblyNodeException', 'stop() can not be called on AudiblyNode instances without first calling start().');
				}
			}
		}]);
	
		return AudiblyNode;
	}();
	
	exports.default = AudiblyNode;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AudiblyNode2 = __webpack_require__(4);
	
	var _AudiblyNode3 = _interopRequireDefault(_AudiblyNode2);
	
	var _Exception = __webpack_require__(2);
	
	var _Exception2 = _interopRequireDefault(_Exception);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Class representing an AudiblyAudioBufferSourceNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Wrapper for AudioBufferSourceNode - https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Craig Harvie <craig@craigharvie.me>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The AudioBufferSourceNode interface represents an audio source
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * consisting of in-memory audio data, stored in an AudioBuffer.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * It is an AudioNode that acts as an audio source.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var AudiblyAudioBufferSourceNode = function (_AudiblyNode) {
		_inherits(AudiblyAudioBufferSourceNode, _AudiblyNode);
	
		/**
	   * Create an AudiblyAudioBufferSourceNode instance.
	   * @param {object} options
	   */
		function AudiblyAudioBufferSourceNode() {
			var _ret;
	
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
			_classCallCheck(this, AudiblyAudioBufferSourceNode);
	
			// Buffer source node
			var node = window.AudiblyContext.createBufferSource();
	
			// Check options
			if (options.playbackRate) {
				if (options.playbackRate < node.playbackRate.minValue || options.playbackRate > node.playbackRate.maxValue) {
					throw new _Exception2.default('AudiblyAudioBufferSourceNode', 'Invalid \'playbackRate\' option passed in. This value must be between ' + node.playbackRate.minValue + ' and ' + node.playbackRate.maxValue + '.');
				}
				node.playbackRate.value = options.playbackRate;
			}
	
			if (options.buffer) {
				node.buffer = options.buffer;
			}
	
			if (options.loop) {
				node.loop = options.loop;
			}
	
			var _this = _possibleConstructorReturn(this, (AudiblyAudioBufferSourceNode.__proto__ || Object.getPrototypeOf(AudiblyAudioBufferSourceNode)).call(this, options, node));
	
			return _ret = _this, _possibleConstructorReturn(_this, _ret);
		}
	
		/**
	   * Updates the playback rate of the node
	   * @param {number} value - range from 0 - 5
	   */
	
	
		_createClass(AudiblyAudioBufferSourceNode, [{
			key: 'setPlaybackRate',
			value: function setPlaybackRate() {
				var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	
	
				if (value < this.node.playbackRate.minValue || value > this.node.playbackRate.maxValue) {
					throw new _Exception2.default('AudiblyAudioBufferSourceNode', 'Invalid \'playbackRate\' option passed in. This value must be between ' + this.node.playbackRate.minValue + ' and ' + this.node.playbackRate.maxValue + '.');
				}
	
				this.node.playbackRate.value = value;
			}
		}]);
	
		return AudiblyAudioBufferSourceNode;
	}(_AudiblyNode3.default);
	
	exports.default = AudiblyAudioBufferSourceNode;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AudiblyNode2 = __webpack_require__(4);
	
	var _AudiblyNode3 = _interopRequireDefault(_AudiblyNode2);
	
	var _Exception = __webpack_require__(2);
	
	var _Exception2 = _interopRequireDefault(_Exception);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Class representing an AudiblyOscillatorNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Wrapper for OscillatorNode - https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Craig Harvie <craig@craigharvie.me>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The OscillatorNode interface represents a periodic waveform, such
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * as a sine or triangle wave. It is an AudioNode audio-processing
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * module that causes a given frequency of wave to be created.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	// Accepted options
	var TYPE_VALUES = ['sine', 'square', 'sawtooth', 'triangle'];
	
	var AudiblyOscillatorNode = function (_AudiblyNode) {
		_inherits(AudiblyOscillatorNode, _AudiblyNode);
	
		/**
	   * Create an AudiblyAudioBufferSourceNode instance.
	   * @param {object} options
	   */
		function AudiblyOscillatorNode() {
			var _ret;
	
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
			_classCallCheck(this, AudiblyOscillatorNode);
	
			// Oscillator node
			var node = window.AudiblyContext.createOscillator();
	
			// Check options
			if (options.frequency) {
				if (options.frequency < node.frequency.minValue || options.frequency > node.frequency.maxValue) {
					throw new _Exception2.default('AudiblyOscillatorNode', 'Invalid \'frequency\' option passed in. This value must be between ' + node.frequency.minValue + ' and ' + node.frequency.maxValue + '.');
				}
				node.frequency.value = options.frequency;
			}
	
			if (options.detune) {
				if (options.detune < node.detune.minValue || options.detune > node.detune.maxValue) {
					throw new _Exception2.default('AudiblyOscillatorNode', 'Invalid \'detune\' option passed in. This value must be between ' + node.detune.minValue + ' and ' + node.detune.maxValue + '.');
				}
				node.detune.value = options.detune;
			}
	
			if (options.type) {
				if (TYPE_VALUES.indexOf(options.type) === -1) {
					throw new _Exception2.default('AudiblyOscillatorNode', 'Invalid \'type\' option passed in. Accepted values are ' + TYPE_VALUES.join(', ') + '.');
				}
				node.type = options.type;
			}
	
			var _this = _possibleConstructorReturn(this, (AudiblyOscillatorNode.__proto__ || Object.getPrototypeOf(AudiblyOscillatorNode)).call(this, options, node));
	
			return _ret = _this, _possibleConstructorReturn(_this, _ret);
		}
	
		/**
	   * Updates the type of the node
	   * @param {string} type - range from 'sine', 'square', 'sawtooth', 'triangle'
	   */
	
	
		_createClass(AudiblyOscillatorNode, [{
			key: 'setType',
			value: function setType() {
				var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sine';
	
				if (TYPE_VALUES.indexOf(type) === -1) {
					throw new _Exception2.default('AudiblyOscillatorNode', 'Invalid \'type\' option passed in. Accepted values are ' + TYPE_VALUES.join(', ') + '.');
				}
				this.node.type = type;
			}
	
			/**
	    * Updates the frequency of the node
	    * @param {number} value - range from 0 to 6000
	    */
	
		}, {
			key: 'setFrequency',
			value: function setFrequency() {
				var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 440;
	
				if (value < this.node.frequency.minValue || value > this.node.frequency.maxValue) {
					throw new _Exception2.default('AudiblyOscillatorNode', 'Invalid \'frequency\' option passed in. This value must be between ' + this.node.frequency.minValue + ' and ' + this.node.frequency.maxValue + '.');
				}
				this.node.frequency.value = value;
			}
		}]);
	
		return AudiblyOscillatorNode;
	}(_AudiblyNode3.default);
	
	exports.default = AudiblyOscillatorNode;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _AudiblyNode2 = __webpack_require__(4);
	
	var _AudiblyNode3 = _interopRequireDefault(_AudiblyNode2);
	
	var _Exception = __webpack_require__(2);
	
	var _Exception2 = _interopRequireDefault(_Exception);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Class representing an AudiblyBiquadFilterNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Wrapper for BiquadFilterNode - https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Craig Harvie <craig@craigharvie.me>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The BiquadFilterNode interface represents a simple low-order filter.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * It is an AudioNode that can represent different kinds of filters, tone
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * control devices, or graphic equalizers. A BiquadFilterNode always has
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * exactly one input and one output.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	// Accepted options
	var TYPE_VALUES = ['lowpass', 'highpass', 'bandpass', 'lowshelf', 'highshelf', 'peaking', 'notch', 'allpass'];
	
	var AudiblyBiquadFilterNode = function (_AudiblyNode) {
		_inherits(AudiblyBiquadFilterNode, _AudiblyNode);
	
		/**
	   * Create an AudiblyBiquadFilterNode instance.
	   * @param {object} options
	   */
		function AudiblyBiquadFilterNode() {
			var _ret;
	
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
			_classCallCheck(this, AudiblyBiquadFilterNode);
	
			// BiquadFilter node
			var node = window.AudiblyContext.createBiquadFilter();
	
			// Check options
			if (options.frequency) {
				if (options.frequency < node.frequency.minValue || options.frequency > node.frequency.maxValue) {
					throw new _Exception2.default('AudiblyBiquadFilterNode', 'Invalid \'frequency\' option passed in. This value must be between ' + node.frequency.minValue + ' and ' + node.frequency.maxValue + '.');
				}
				node.frequency.value = options.frequency;
			}
	
			if (options.detune) {
				if (options.detune < node.detune.minValue || options.detune > node.detune.maxValue) {
					throw new _Exception2.default('AudiblyBiquadFilterNode', 'Invalid \'detune\' option passed in. This value must be between ' + node.detune.minValue + ' and ' + node.detune.maxValue + '.');
				}
				node.detune.value = options.detune;
			}
	
			if (options.type) {
				if (TYPE_VALUES.indexOf(options.type) === -1) {
					throw new _Exception2.default('AudiblyBiquadFilterNode', 'Invalid \'type\' option passed in. Accepted values are ' + TYPE_VALUES.join(', ') + '.');
				}
				node.type = options.type;
			}
	
			if (options.Q) {
				if (options.Q < node.Q.minValue || options.Q > node.Q.maxValue) {
					throw new _Exception2.default('AudiblyBiquadFilterNode', 'Invalid \'Q\' option passed in. This value must be between ' + node.Q.minValue + ' and ' + node.Q.maxValue + '.');
				}
				node.Q.value = options.Q;
			}
	
			if (options.gain) {
				if (options.gain < node.gain.minValue || options.gain > node.gain.maxValue) {
					throw new _Exception2.default('AudiblyBiquadFilterNode', 'Invalid \'gain\' option passed in. This value must be between ' + node.gain.minValue + ' and ' + node.gain.maxValue + '.');
				}
				node.gain.value = options.gain;
			}
	
			var _this = _possibleConstructorReturn(this, (AudiblyBiquadFilterNode.__proto__ || Object.getPrototypeOf(AudiblyBiquadFilterNode)).call(this, options, node));
	
			return _ret = _this, _possibleConstructorReturn(_this, _ret);
		}
	
		return AudiblyBiquadFilterNode;
	}(_AudiblyNode3.default);
	
	exports.default = AudiblyBiquadFilterNode;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _AudiblyNode2 = __webpack_require__(4);
	
	var _AudiblyNode3 = _interopRequireDefault(_AudiblyNode2);
	
	var _Exception = __webpack_require__(2);
	
	var _Exception2 = _interopRequireDefault(_Exception);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Class representing an AudiblyConvolverNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Wrapper for ConvolverNode - https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Craig Harvie <craig@craigharvie.me>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The ConvolverNode interface is an AudioNode that performs a Linear 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Convolution on a given AudioBuffer, often used to achieve a reverb effect. 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A ConvolverNode always has exactly one input and one output.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var AudiblyConvolverNode = function (_AudiblyNode) {
		_inherits(AudiblyConvolverNode, _AudiblyNode);
	
		/**
	   * Create an AudiblyConvolverNode instance.
	   * @param {object} options
	   */
		function AudiblyConvolverNode() {
			var _ret;
	
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
			_classCallCheck(this, AudiblyConvolverNode);
	
			// Convolver node
			var node = window.AudiblyContext.createConvolver();
	
			// Check options
			if (options.buffer) {
				try {
					node.buffer = options.buffer;
				} catch (e) {
					throw new _Exception2.default('AudiblyConvolverNode', 'Invalid \'buffer\' option passed in.', e);
				}
			}
	
			if (options.normalize) {
				node.normalize = options.normalize;
			}
	
			var _this = _possibleConstructorReturn(this, (AudiblyConvolverNode.__proto__ || Object.getPrototypeOf(AudiblyConvolverNode)).call(this, options, node));
	
			return _ret = _this, _possibleConstructorReturn(_this, _ret);
		}
	
		return AudiblyConvolverNode;
	}(_AudiblyNode3.default);
	
	exports.default = AudiblyConvolverNode;

/***/ }
/******/ ]);
//# sourceMappingURL=audibly.js.map