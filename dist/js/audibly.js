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
	
	__webpack_require__(1);
	
	var _AudiblyContext = __webpack_require__(2);
	
	var _AudiblyContext2 = _interopRequireDefault(_AudiblyContext);
	
	var _Downloader = __webpack_require__(4);
	
	var _Downloader2 = _interopRequireDefault(_Downloader);
	
	var _AudiblyNode = __webpack_require__(5);
	
	var _AudiblyNode2 = _interopRequireDefault(_AudiblyNode);
	
	var _AudiblyAudioBufferSourceNode = __webpack_require__(6);
	
	var _AudiblyAudioBufferSourceNode2 = _interopRequireDefault(_AudiblyAudioBufferSourceNode);
	
	var _AudiblyOscillatorNode = __webpack_require__(7);
	
	var _AudiblyOscillatorNode2 = _interopRequireDefault(_AudiblyOscillatorNode);
	
	var _AudiblyBiquadFilterNode = __webpack_require__(8);
	
	var _AudiblyBiquadFilterNode2 = _interopRequireDefault(_AudiblyBiquadFilterNode);
	
	var _AudiblyConvolverNode = __webpack_require__(9);
	
	var _AudiblyConvolverNode2 = _interopRequireDefault(_AudiblyConvolverNode);
	
	var _AudiblyDelayNode = __webpack_require__(10);
	
	var _AudiblyDelayNode2 = _interopRequireDefault(_AudiblyDelayNode);
	
	var _AudiblyDynamicsCompressorNode = __webpack_require__(11);
	
	var _AudiblyDynamicsCompressorNode2 = _interopRequireDefault(_AudiblyDynamicsCompressorNode);
	
	var _AudiblyGainNode = __webpack_require__(12);
	
	var _AudiblyGainNode2 = _interopRequireDefault(_AudiblyGainNode);
	
	var _AudiblyStereoPannerNode = __webpack_require__(13);
	
	var _AudiblyStereoPannerNode2 = _interopRequireDefault(_AudiblyStereoPannerNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	window.Audibly = {
		Context: new _AudiblyContext2.default(),
		Node: _AudiblyNode2.default,
		BufferSource: _AudiblyAudioBufferSourceNode2.default,
		Oscillator: _AudiblyOscillatorNode2.default,
		Filter: _AudiblyBiquadFilterNode2.default,
		Reverb: _AudiblyConvolverNode2.default,
		Delay: _AudiblyDelayNode2.default,
		Compressor: _AudiblyDynamicsCompressorNode2.default,
		Gain: _AudiblyGainNode2.default,
		Panner: _AudiblyStereoPannerNode2.default
	};
	
	window.Audibly.Base = function () {
	
		/**
	   * Create a audibly instance.
	   * @param {array} audio - array of audio objects ({id: 1, url: 'http://audio.com/2.wav'}).
	   */
		function Audibly() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.Audibly.Context;
	
			_classCallCheck(this, Audibly);
	
			// Setup variables
			this.options = options;
			this.context = context;
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
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	/* http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+clike+javascript */
	var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
	    Prism = function () {
	  var e = /\blang(?:uage)?-(\w+)\b/i,
	      t = 0,
	      n = _self.Prism = { manual: _self.Prism && _self.Prism.manual, util: { encode: function encode(e) {
	        return e instanceof a ? new a(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
	      }, type: function type(e) {
	        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
	      }, objId: function objId(e) {
	        return e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id;
	      }, clone: function clone(e) {
	        var t = n.util.type(e);switch (t) {case "Object":
	            var a = {};for (var r in e) {
	              e.hasOwnProperty(r) && (a[r] = n.util.clone(e[r]));
	            }return a;case "Array":
	            return e.map && e.map(function (e) {
	              return n.util.clone(e);
	            });}return e;
	      } }, languages: { extend: function extend(e, t) {
	        var a = n.util.clone(n.languages[e]);for (var r in t) {
	          a[r] = t[r];
	        }return a;
	      }, insertBefore: function insertBefore(e, t, a, r) {
	        r = r || n.languages;var l = r[e];if (2 == arguments.length) {
	          a = arguments[1];for (var i in a) {
	            a.hasOwnProperty(i) && (l[i] = a[i]);
	          }return l;
	        }var o = {};for (var s in l) {
	          if (l.hasOwnProperty(s)) {
	            if (s == t) for (var i in a) {
	              a.hasOwnProperty(i) && (o[i] = a[i]);
	            }o[s] = l[s];
	          }
	        }return n.languages.DFS(n.languages, function (t, n) {
	          n === r[e] && t != e && (this[t] = o);
	        }), r[e] = o;
	      }, DFS: function DFS(e, t, a, r) {
	        r = r || {};for (var l in e) {
	          e.hasOwnProperty(l) && (t.call(e, l, e[l], a || l), "Object" !== n.util.type(e[l]) || r[n.util.objId(e[l])] ? "Array" !== n.util.type(e[l]) || r[n.util.objId(e[l])] || (r[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, l, r)) : (r[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, null, r)));
	        }
	      } }, plugins: {}, highlightAll: function highlightAll(e, t) {
	      var a = { callback: t, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };n.hooks.run("before-highlightall", a);for (var r, l = a.elements || document.querySelectorAll(a.selector), i = 0; r = l[i++];) {
	        n.highlightElement(r, e === !0, a.callback);
	      }
	    }, highlightElement: function highlightElement(t, a, r) {
	      for (var l, i, o = t; o && !e.test(o.className);) {
	        o = o.parentNode;
	      }o && (l = (o.className.match(e) || [, ""])[1].toLowerCase(), i = n.languages[l]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l, o = t.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l);var s = t.textContent,
	          u = { element: t, language: l, grammar: i, code: s };if (n.hooks.run("before-sanity-check", u), !u.code || !u.grammar) return u.code && (u.element.textContent = u.code), n.hooks.run("complete", u), void 0;if (n.hooks.run("before-highlight", u), a && _self.Worker) {
	        var g = new Worker(n.filename);g.onmessage = function (e) {
	          u.highlightedCode = e.data, n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, r && r.call(u.element), n.hooks.run("after-highlight", u), n.hooks.run("complete", u);
	        }, g.postMessage(JSON.stringify({ language: u.language, code: u.code, immediateClose: !0 }));
	      } else u.highlightedCode = n.highlight(u.code, u.grammar, u.language), n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, r && r.call(t), n.hooks.run("after-highlight", u), n.hooks.run("complete", u);
	    }, highlight: function highlight(e, t, r) {
	      var l = n.tokenize(e, t);return a.stringify(n.util.encode(l), r);
	    }, tokenize: function tokenize(e, t) {
	      var a = n.Token,
	          r = [e],
	          l = t.rest;if (l) {
	        for (var i in l) {
	          t[i] = l[i];
	        }delete t.rest;
	      }e: for (var i in t) {
	        if (t.hasOwnProperty(i) && t[i]) {
	          var o = t[i];o = "Array" === n.util.type(o) ? o : [o];for (var s = 0; s < o.length; ++s) {
	            var u = o[s],
	                g = u.inside,
	                c = !!u.lookbehind,
	                h = !!u.greedy,
	                f = 0,
	                d = u.alias;if (h && !u.pattern.global) {
	              var p = u.pattern.toString().match(/[imuy]*$/)[0];u.pattern = RegExp(u.pattern.source, p + "g");
	            }u = u.pattern || u;for (var m = 0, y = 0; m < r.length; y += r[m].length, ++m) {
	              var v = r[m];if (r.length > e.length) break e;if (!(v instanceof a)) {
	                u.lastIndex = 0;var b = u.exec(v),
	                    k = 1;if (!b && h && m != r.length - 1) {
	                  if (u.lastIndex = y, b = u.exec(e), !b) break;for (var w = b.index + (c ? b[1].length : 0), _ = b.index + b[0].length, P = m, A = y, j = r.length; j > P && _ > A; ++P) {
	                    A += r[P].length, w >= A && (++m, y = A);
	                  }if (r[m] instanceof a || r[P - 1].greedy) continue;k = P - m, v = e.slice(y, A), b.index -= y;
	                }if (b) {
	                  c && (f = b[1].length);var w = b.index + f,
	                      b = b[0].slice(f),
	                      _ = w + b.length,
	                      x = v.slice(0, w),
	                      O = v.slice(_),
	                      S = [m, k];x && S.push(x);var N = new a(i, g ? n.tokenize(b, g) : b, d, b, h);S.push(N), O && S.push(O), Array.prototype.splice.apply(r, S);
	                }
	              }
	            }
	          }
	        }
	      }return r;
	    }, hooks: { all: {}, add: function add(e, t) {
	        var a = n.hooks.all;a[e] = a[e] || [], a[e].push(t);
	      }, run: function run(e, t) {
	        var a = n.hooks.all[e];if (a && a.length) for (var r, l = 0; r = a[l++];) {
	          r(t);
	        }
	      } } },
	      a = n.Token = function (e, t, n, a, r) {
	    this.type = e, this.content = t, this.alias = n, this.length = 0 | (a || "").length, this.greedy = !!r;
	  };if (a.stringify = function (e, t, r) {
	    if ("string" == typeof e) return e;if ("Array" === n.util.type(e)) return e.map(function (n) {
	      return a.stringify(n, t, e);
	    }).join("");var l = { type: e.type, content: a.stringify(e.content, t, r), tag: "span", classes: ["token", e.type], attributes: {}, language: t, parent: r };if ("comment" == l.type && (l.attributes.spellcheck = "true"), e.alias) {
	      var i = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];Array.prototype.push.apply(l.classes, i);
	    }n.hooks.run("wrap", l);var o = Object.keys(l.attributes).map(function (e) {
	      return e + '="' + (l.attributes[e] || "").replace(/"/g, "&quot;") + '"';
	    }).join(" ");return "<" + l.tag + ' class="' + l.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + l.content + "</" + l.tag + ">";
	  }, !_self.document) return _self.addEventListener ? (_self.addEventListener("message", function (e) {
	    var t = JSON.parse(e.data),
	        a = t.language,
	        r = t.code,
	        l = t.immediateClose;_self.postMessage(n.highlight(r, n.languages[a], a)), l && _self.close();
	  }, !1), _self.Prism) : _self.Prism;var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();return r && (n.filename = r.src, !document.addEventListener || n.manual || r.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), _self.Prism;
	}();"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
	Prism.languages.markup = { comment: /<!--[\w\W]*?-->/, prolog: /<\?[\w\W]+?\?>/, doctype: /<!DOCTYPE[\w\W]+?>/i, cdata: /<!\[CDATA\[[\w\W]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i, inside: { punctuation: /[=>"']/ } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, Prism.hooks.add("wrap", function (a) {
	  "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
	}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
	Prism.languages.css = { comment: /\/\*[\w\W]*?\*\//, atrule: { pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } }, url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i, selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/, string: { pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, property: /(\b|\B)[\w-]+(?=\s*:)/i, important: /\B!important\b/i, "function": /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:]/ }, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", { style: { pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i, lookbehind: !0, inside: Prism.languages.css, alias: "language-css" } }), Prism.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|').*?\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: Prism.languages.css } }, alias: "language-css" } }, Prism.languages.markup.tag));
	Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\w\W]*?\*\//, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 }], string: { pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i, lookbehind: !0, inside: { punctuation: /(\.|\\)/ } }, keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, "boolean": /\b(true|false)\b/, "function": /[a-z0-9_]+(?=\()/i, number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
	Prism.languages.javascript = Prism.languages.extend("clike", { keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/, number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/, "function": /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/ }), Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/, lookbehind: !0, greedy: !0 } }), Prism.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\\\|\\?[^\\])*?`/, greedy: !0, inside: { interpolation: { pattern: /\$\{[^}]+\}/, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", { script: { pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i, lookbehind: !0, inside: Prism.languages.javascript, alias: "language-javascript" } }), Prism.languages.js = Prism.languages.javascript;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Exception = __webpack_require__(3);
	
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
	
	module.exports = AudiblyContext;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
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
	
	module.exports = Exception;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Class representing a Downloader
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Download raw audio files
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Craig Harvie <craig@craigharvie.me>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _Exception = __webpack_require__(3);
	
	var _Exception2 = _interopRequireDefault(_Exception);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Downloader = function () {
	
		/**
	   * Create a Downloader.
	   */
		function Downloader(audibly, completeCB, context) {
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
					context.decodeAudioData(request.response, _this.success.bind(_this, _this.audibly.options.audio[i].id), _this.error);
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
	
	module.exports = Downloader;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
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
	
	var _Exception = __webpack_require__(3);
	
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
				var destination = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.Audibly.Context.destination;
	
				try {
					this.node.connect(destination);
					return this;
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
	
	module.exports = AudiblyNode;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AudiblyNode2 = __webpack_require__(5);
	
	var _AudiblyNode3 = _interopRequireDefault(_AudiblyNode2);
	
	var _Exception = __webpack_require__(3);
	
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
			var _ret2;
	
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
			_classCallCheck(this, AudiblyAudioBufferSourceNode);
	
			var node = window.Audibly.Context.createBufferSource();
	
			var _this = _possibleConstructorReturn(this, (AudiblyAudioBufferSourceNode.__proto__ || Object.getPrototypeOf(AudiblyAudioBufferSourceNode)).call(this, options, node));
	
			if (!options.url) {
				var _ret;
	
				return _ret = _this, _possibleConstructorReturn(_this, _ret);
			}
	
			// We'll return a promise from the constructor
			var promise = new Promise(function (resolve, reject) {
	
				// Make http request to parse audio file
				var request = new XMLHttpRequest();
				request.open('GET', options.url, true);
				request.responseType = 'arraybuffer';
	
				request.onload = function () {
	
					window.Audibly.Context.decodeAudioData(request.response).then(function (decodedData) {
	
						_this.node.buffer = decodedData;
	
						// Set options if provided
						if (options.playbackRate) {
							if (options.playbackRate < node.playbackRate.minValue || options.playbackRate > node.playbackRate.maxValue) {
								throw new _Exception2.default('AudiblyAudioBufferSourceNode', 'Invalid \'playbackRate\' option passed in. This value must be between ' + node.playbackRate.minValue + ' and ' + node.playbackRate.maxValue + '.');
							}
							_this.node.playbackRate.value = options.playbackRate;
						}
	
						if (options.loop) {
							_this.node.loop = options.loop;
						}
	
						// All good, resolve
						resolve(_this);
					});
				};
	
				request.onerror = function (e) {
					reject({ error: e });
				};
	
				request.send();
			});
	
			return _ret2 = promise, _possibleConstructorReturn(_this, _ret2);
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
	
	module.exports = AudiblyAudioBufferSourceNode;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AudiblyNode2 = __webpack_require__(5);
	
	var _AudiblyNode3 = _interopRequireDefault(_AudiblyNode2);
	
	var _Exception = __webpack_require__(3);
	
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
			var node = window.Audibly.Context.createOscillator();
	
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
	
	module.exports = AudiblyOscillatorNode;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _AudiblyNode2 = __webpack_require__(5);
	
	var _AudiblyNode3 = _interopRequireDefault(_AudiblyNode2);
	
	var _Exception = __webpack_require__(3);
	
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
			var node = window.Audibly.Context.createBiquadFilter();
	
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
	
	module.exports = AudiblyBiquadFilterNode;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _AudiblyNode2 = __webpack_require__(5);
	
	var _AudiblyNode3 = _interopRequireDefault(_AudiblyNode2);
	
	var _Exception = __webpack_require__(3);
	
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
			var node = window.Audibly.Context.createConvolver();
	
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
	
	module.exports = AudiblyConvolverNode;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AudiblyNode2 = __webpack_require__(5);
	
	var _AudiblyNode3 = _interopRequireDefault(_AudiblyNode2);
	
	var _Exception = __webpack_require__(3);
	
	var _Exception2 = _interopRequireDefault(_Exception);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Class representing an AudiblyDelayNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Wrapper for DelayNode - https://developer.mozilla.org/en-US/docs/Web/API/DelayNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Craig Harvie <craig@craigharvie.me>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The DelayNode interface represents a delay-line; an AudioNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * audio-processing module that causes a delay between the arrival
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of an input data and its propagation to the output.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var AudiblyDelayNode = function (_AudiblyNode) {
		_inherits(AudiblyDelayNode, _AudiblyNode);
	
		/**
	   * Create an AudiblyDelayNode instance.
	   * @param {object} options
	   */
		function AudiblyDelayNode() {
			var _ret;
	
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
			_classCallCheck(this, AudiblyDelayNode);
	
			var node = void 0;
	
			// Check options
			if (options.maxDelayTime) {
				try {
					// Delay node
					node = window.Audibly.Context.createDelay(options.maxDelayTime);
				} catch (e) {
					throw new _Exception2.default('AudiblyDelayNode', 'Invalid \'maxDelayTime\' option passed in.', e);
				}
			} else {
				node = window.Audibly.Context.createDelay();
			}
	
			if (options.delayTime) {
				if (options.delayTime < node.delayTime.minValue || options.delayTime > node.delayTime.maxValue) {
					throw new _Exception2.default('AudiblyDelayNode', 'Invalid \'delayTime\' option passed in. This value must be between ' + node.delayTime.minValue + ' and ' + node.delayTime.maxValue + '.');
				}
				node.delayTime.value = options.delayTime;
			}
	
			var _this = _possibleConstructorReturn(this, (AudiblyDelayNode.__proto__ || Object.getPrototypeOf(AudiblyDelayNode)).call(this, options, node));
	
			return _ret = _this, _possibleConstructorReturn(_this, _ret);
		}
	
		/**
	   * Updates the delay time of the node
	   * @param {number} value
	   */
	
	
		_createClass(AudiblyDelayNode, [{
			key: 'setDelayTime',
			value: function setDelayTime() {
				var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	
				if (value < this.node.delayTime.minValue || value > this.node.delayTime.maxValue) {
					throw new _Exception2.default('AudiblyDelayNode', 'Invalid \'delayTime\' option passed in. This value must be between ' + this.node.delayTime.minValue + ' and ' + this.node.delayTime.maxValue + '.');
				}
	
				this.node.delayTime.value = value;
			}
		}]);
	
		return AudiblyDelayNode;
	}(_AudiblyNode3.default);
	
	module.exports = AudiblyDelayNode;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AudiblyNode2 = __webpack_require__(5);
	
	var _AudiblyNode3 = _interopRequireDefault(_AudiblyNode2);
	
	var _Exception = __webpack_require__(3);
	
	var _Exception2 = _interopRequireDefault(_Exception);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Class representing an AudiblyDynamicsCompressorNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Wrapper for DynamicsCompressorNode - https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Craig Harvie <craig@craigharvie.me>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The DynamicsCompressorNode interface provides a compression effect, which
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * lowers the volume of the loudest parts of the signal in order to help prevent
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * clipping and distortion that can occur when multiple sounds are played and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * multiplexed together at once.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var AudiblyDynamicsCompressorNode = function (_AudiblyNode) {
		_inherits(AudiblyDynamicsCompressorNode, _AudiblyNode);
	
		/**
	   * Create an AudiblyDynamicsCompressorNode instance.
	   * @param {object} options
	   */
		function AudiblyDynamicsCompressorNode() {
			var _ret;
	
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
			_classCallCheck(this, AudiblyDynamicsCompressorNode);
	
			// DynamicsCompresso node
			var node = window.Audibly.Context.createDynamicsCompressor();
	
			// Check options
			if (options.threshold) {
				if (options.threshold < node.threshold.minValue || options.threshold > node.threshold.maxValue) {
					throw new _Exception2.default('AudiblyDynamicsCompressorNode', 'Invalid \'threshold\' option passed in. This value must be between ' + node.threshold.minValue + ' and ' + node.threshold.maxValue + '.');
				}
				node.threshold.value = options.threshold;
			}
	
			if (options.knee) {
				if (options.knee < node.knee.minValue || options.knee > node.knee.maxValue) {
					throw new _Exception2.default('AudiblyDynamicsCompressorNode', 'Invalid \'knee\' option passed in. This value must be between ' + node.knee.minValue + ' and ' + node.knee.maxValue + '.');
				}
				node.knee.value = options.knee;
			}
	
			if (options.ratio) {
				if (options.ratio < node.ratio.minValue || options.ratio > node.ratio.maxValue) {
					throw new _Exception2.default('AudiblyDynamicsCompressorNode', 'Invalid \'ratio\' option passed in. This value must be between ' + node.ratio.minValue + ' and ' + node.ratio.maxValue + '.');
				}
				node.ratio.value = options.ratio;
			}
	
			if (options.attack) {
				if (options.attack < node.attack.minValue || options.attack > node.attack.maxValue) {
					throw new _Exception2.default('AudiblyDynamicsCompressorNode', 'Invalid \'attack\' option passed in. This value must be between ' + node.attack.minValue + ' and ' + node.attack.maxValue + '.');
				}
				node.attack.value = options.attack;
			}
	
			if (options.release) {
				if (options.release < node.release.minValue || options.release > node.release.maxValue) {
					throw new _Exception2.default('AudiblyDynamicsCompressorNode', 'Invalid \'release\' option passed in. This value must be between ' + node.release.minValue + ' and ' + node.release.maxValue + '.');
				}
				node.release.value = options.release;
			}
	
			var _this = _possibleConstructorReturn(this, (AudiblyDynamicsCompressorNode.__proto__ || Object.getPrototypeOf(AudiblyDynamicsCompressorNode)).call(this, options, node));
	
			return _ret = _this, _possibleConstructorReturn(_this, _ret);
		}
	
		/**
	   * Updates the threshold of the node
	   * @param {number} value
	   */
	
	
		_createClass(AudiblyDynamicsCompressorNode, [{
			key: 'setThreshold',
			value: function setThreshold() {
				var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -24;
	
	
				if (value < this.node.threshold.minValue || value > this.node.threshold.maxValue) {
					throw new _Exception2.default('AudiblyDynamicsCompressorNode', 'Invalid \'threshold\' option passed in. This value must be between ' + this.node.threshold.minValue + ' and ' + this.node.threshold.maxValue + '.');
				}
	
				this.node.threshold.value = value;
			}
	
			/**
	    * Updates the knee of the node
	    * @param {number} value
	    */
	
		}, {
			key: 'setKnee',
			value: function setKnee() {
				var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
	
	
				if (value < this.node.knee.minValue || value > this.node.knee.maxValue) {
					throw new _Exception2.default('AudiblyDynamicsCompressorNode', 'Invalid \'knee\' option passed in. This value must be between ' + this.node.knee.minValue + ' and ' + this.node.knee.maxValue + '.');
				}
	
				this.node.knee.value = value;
			}
	
			/**
	    * Updates the ratio of the node
	    * @param {number} value
	    */
	
		}, {
			key: 'setRatio',
			value: function setRatio() {
				var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
	
	
				if (value < this.node.ratio.minValue || value > this.node.ratio.maxValue) {
					throw new _Exception2.default('AudiblyDynamicsCompressorNode', 'Invalid \'ratio\' option passed in. This value must be between ' + this.node.ratio.minValue + ' and ' + this.node.ratio.maxValue + '.');
				}
	
				this.node.ratio.value = value;
			}
	
			/**
	    * Updates the attack of the node
	    * @param {number} value
	    */
	
		}, {
			key: 'setAttack',
			value: function setAttack() {
				var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.003;
	
	
				if (value < this.node.attack.minValue || value > this.node.attack.maxValue) {
					throw new _Exception2.default('AudiblyDynamicsCompressorNode', 'Invalid \'attack\' option passed in. This value must be between ' + this.node.attack.minValue + ' and ' + this.node.attack.maxValue + '.');
				}
	
				this.node.attack.value = value;
			}
	
			/**
	    * Updates the release of the node
	    * @param {number} value
	    */
	
		}, {
			key: 'setRelease',
			value: function setRelease() {
				var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -24;
	
	
				if (value < this.node.release.minValue || value > this.node.release.maxValue) {
					throw new _Exception2.default('AudiblyDynamicsCompressorNode', 'Invalid \'release\' option passed in. This value must be between ' + this.node.release.minValue + ' and ' + this.node.release.maxValue + '.');
				}
	
				this.node.release.value = value;
			}
		}]);
	
		return AudiblyDynamicsCompressorNode;
	}(_AudiblyNode3.default);
	
	module.exports = AudiblyDynamicsCompressorNode;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AudiblyNode2 = __webpack_require__(5);
	
	var _AudiblyNode3 = _interopRequireDefault(_AudiblyNode2);
	
	var _Exception = __webpack_require__(3);
	
	var _Exception2 = _interopRequireDefault(_Exception);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Class representing an AudiblyGainNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Wrapper for GainNode - https://developer.mozilla.org/en-US/docs/Web/API/GainNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Craig Harvie <craig@craigharvie.me>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The GainNode interface represents a change in volume. It is an AudioNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * audio-processing module that causes a given gain to be applied to the input
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * data before its propagation to the output.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var AudiblyGainNode = function (_AudiblyNode) {
		_inherits(AudiblyGainNode, _AudiblyNode);
	
		/**
	   * Create an AudiblyGainNode instance.
	   * @param {object} options
	   */
		function AudiblyGainNode() {
			var _ret;
	
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
			_classCallCheck(this, AudiblyGainNode);
	
			// Gain node
			var node = window.Audibly.Context.createGain();
	
			// Check options
			if (options.gain) {
				if (options.gain < node.gain.minValue || options.gain > node.gain.maxValue) {
					throw new _Exception2.default('AudiblyGainNode', 'Invalid \'gain\' option passed in. This value must be between ' + node.gain.minValue + ' and ' + node.gain.maxValue + '.');
				}
				node.gain.value = options.gain;
			}
	
			var _this = _possibleConstructorReturn(this, (AudiblyGainNode.__proto__ || Object.getPrototypeOf(AudiblyGainNode)).call(this, options, node));
	
			return _ret = _this, _possibleConstructorReturn(_this, _ret);
		}
	
		/**
	   * Updates the gain of the node
	   * @param {number} value
	   */
	
	
		_createClass(AudiblyGainNode, [{
			key: 'setGain',
			value: function setGain() {
				var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	
	
				if (value < this.node.gain.minValue || value > this.node.gain.maxValue) {
					throw new _Exception2.default('AudiblyGainNode', 'Invalid \'gain\' option passed in. This value must be between ' + this.node.gain.minValue + ' and ' + this.node.gain.maxValue + '.');
				}
	
				this.node.gain.value = value;
			}
		}]);
	
		return AudiblyGainNode;
	}(_AudiblyNode3.default);
	
	module.exports = AudiblyGainNode;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AudiblyNode2 = __webpack_require__(5);
	
	var _AudiblyNode3 = _interopRequireDefault(_AudiblyNode2);
	
	var _Exception = __webpack_require__(3);
	
	var _Exception2 = _interopRequireDefault(_Exception);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Class representing an AudiblyStereoPannerNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Wrapper for StereoPannerNode - https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Craig Harvie <craig@craigharvie.me>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The StereoPannerNode interface represents a simple stereo panner node
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * that can be used to pan an audio stream left or right.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var AudiblyStereoPannerNode = function (_AudiblyNode) {
		_inherits(AudiblyStereoPannerNode, _AudiblyNode);
	
		/**
	   * Create an AudiblyStereoPannerNode instance.
	   * @param {object} options
	   */
		function AudiblyStereoPannerNode() {
			var _ret;
	
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
			_classCallCheck(this, AudiblyStereoPannerNode);
	
			// Stereo Panner node
			var node = window.Audibly.Context.createStereoPanner();
	
			// Check options
			if (options.pan) {
				if (options.pan < node.pan.minValue || options.pan > node.pan.maxValue) {
					throw new _Exception2.default('AudiblyStereoPannerNode', 'Invalid \'pan\' option passed in. This value must be between ' + node.pan.minValue + ' and ' + node.pan.maxValue + '.');
				}
				node.pan.value = options.pan;
			}
	
			var _this = _possibleConstructorReturn(this, (AudiblyStereoPannerNode.__proto__ || Object.getPrototypeOf(AudiblyStereoPannerNode)).call(this, options, node));
	
			return _ret = _this, _possibleConstructorReturn(_this, _ret);
		}
	
		/**
	   * Updates the pan of the node
	   * @param {number} value
	   */
	
	
		_createClass(AudiblyStereoPannerNode, [{
			key: 'setPan',
			value: function setPan() {
				var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	
	
				if (value < this.node.pan.minValue || value > this.node.pan.maxValue) {
					throw new _Exception2.default('AudiblyStereoPannerNode', 'Invalid \'pan\' option passed in. This value must be between ' + this.node.pan.minValue + ' and ' + this.node.pan.maxValue + '.');
				}
	
				this.node.pan.value = value;
			}
		}]);
	
		return AudiblyStereoPannerNode;
	}(_AudiblyNode3.default);
	
	module.exports = AudiblyStereoPannerNode;

/***/ }
/******/ ]);
//# sourceMappingURL=audibly.js.map