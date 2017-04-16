'use strict'
const SYMBOLS = '$,\xA5,\u2665'.split(',')
const FONTSIZE = 30
const BUFFER = FONTSIZE/3
var y = FONTSIZE
var x = BUFFER

var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var drawInterval = 0

;(function init() {
  document.onload = updateCanvas()
  window.addEventListener('resize', updateCanvas, false)
})()

function updateCanvas () {
  setClearInterval()
  getCanvasSize()
  setFont()
  setDrawInterval()
}
function setClearInterval () {
  clearInterval(drawInterval)
}
function getCanvasSize () {
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth
}
function setFont() {
  ctx.font = FONTSIZE + "px Courier New"
}
function setDrawInterval () {
  drawInterval = setInterval(draw, 515)
}
function getRandomChar () {
  return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
}
function getRandomHexCode() {
    var chars = '9ABCDEF';
    var hexCode = '#';
    for (var i = 0; i < chars.length; i++) {
        hexCode += chars[Math.floor(Math.random() * chars.length)];
    }
    return color;
}

// var drops = [];
// for (var x = 0; x < canvas.width; x++) {
//     drops[x] = 1;
// }

function draw() {
    // ctx.fillStyle = getRandomColor();
    ctx.fillStyle = '#999999'
    while (x < (canvas.width - BUFFER)) {
      var char = getRandomChar()
      ctx.fillText(char, x, y)
      x += FONTSIZE
    }
    x = BUFFER
    if (y < (canvas.height - BUFFER)) {
      y += FONTSIZE
    } else {
      y = FONTSIZE
    }
    ctx.fillStyle = "rgba(0,0,0,.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}
