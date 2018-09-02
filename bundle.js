(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _matrixService = require('./matrixService');

var _matrixService2 = _interopRequireDefault(_matrixService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var matrix = new _matrixService2.default({ canvas: canvas, ctx: ctx });
window.addEventListener('resize', updateCanvas, false);

function updateCanvas() {
  matrix.getCanvasSize();
  matrix.setFont();
  matrix.setRandomSymbolStartYPositions();
}

function initCanvas() {
  updateCanvas();
  matrix.drawSymbolsInterval();
};

initCanvas();

},{"./matrixService":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MatrixService = function () {
	function MatrixService(_ref) {
		var canvas = _ref.canvas,
		    ctx = _ref.ctx;

		_classCallCheck(this, MatrixService);

		this.canvas = canvas;
		this.ctx = ctx;
		this.drawInterval = 115;
		this.fontSize = 40;
		this.symbols = '$,\xA5,\u2665'.split(',');
		this.yPositions = [];
	}

	_createClass(MatrixService, [{
		key: 'getCanvasSize',
		value: function getCanvasSize() {
			this.canvas.height = window.innerHeight;
			this.canvas.width = window.innerWidth;
		}
	}, {
		key: 'drawSymbolsInterval',
		value: function drawSymbolsInterval() {
			var _this = this;

			setInterval(function () {
				return _this.drawSymbols();
			}, this.drawInterval);
		}
	}, {
		key: 'getNumOfColumns',
		value: function getNumOfColumns() {
			return Math.round(this.canvas.width / this.fontSize);
		}
	}, {
		key: 'setFont',
		value: function setFont() {
			this.ctx.font = this.fontSize + 'px Courier New';
		}
	}, {
		key: 'getRandomChar',
		value: function getRandomChar() {
			return this.symbols[randomInt(this.symbols.length)];
		}
	}, {
		key: 'randomInt',
		value: function randomInt(max) {
			return Math.floor(Math.random() * max);
		}
	}, {
		key: 'randomBool',
		value: function randomBool() {
			return Math.random() > 0.95 ? true : false;
		}
	}, {
		key: 'isYPosGreaterThanCanvasHeight',
		value: function isYPosGreaterThanCanvasHeight(yPos) {
			return yPos * this.fontSize > this.canvas.height;
		}
	}, {
		key: 'fillText',
		value: function fillText(_ref2) {
			var symbol = _ref2.symbol,
			    xPos = _ref2.xPos,
			    yPos = _ref2.yPos;

			this.ctx.fillText(symbol, xPos, yPos);
		}
	}, {
		key: 'setRandomSymbolStartYPositions',
		value: function setRandomSymbolStartYPositions() {
			this.yPositions = [];
			for (var i = 0; i < this.getNumOfColumns(); i++) {
				this.yPositions[i] = this.randomInt(this.fontSize);
			}
		}
	}, {
		key: 'getRandomHexCode',
		value: function getRandomHexCode() {
			var _this2 = this;

			var chars = ["9", "9", "3", "3", "5", "9"];
			return chars.reduce(function (res, _) {
				return res + chars[_this2.randomInt(chars.length)];
			}, '#');
		}
	}, {
		key: 'drawSymbols',
		value: function drawSymbols() {
			var _this3 = this;

			this.ctx.fillStyle = this.getRandomHexCode();
			this.yPositions.forEach(function (yPos, index, yPositions) {
				_this3.fillText({
					symbol: _this3.symbols[_this3.randomInt(_this3.symbols.length)],
					xPos: _this3.fontSize * index,
					yPos: yPos * _this3.fontSize
				});
				_this3.isYPosGreaterThanCanvasHeight && _this3.randomBool() ? yPositions[index] = 0 : yPositions[index] += 1;
			});
			this.ctx.fillStyle = 'rgba(0,0,0,0.2)';
			this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		}
	}]);

	return MatrixService;
}();

// function getRandomHexCode() {
//     let chars = 'AB999F'
//     let hexCode = '#'
//     for (let i = 0; i < chars.length; i++) {
//         hexCode += chars[randomInt(chars.length)]
//     }
//     console.log(hexCode)
//     return hexCode
// }


exports.default = MatrixService;

},{}]},{},[1]);
