'use strict'
const SYMBOLS = '$,\xA5,\u2665'.split(',')
const FONTSIZE = 30
var drops = []

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
  setSymbolPositions()
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
  drawInterval = setInterval(draw, 115)
}
function getRandomChar () {
  return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
}
function numOfColumns () {
  return Math.round(canvas.width / FONTSIZE)
}
function setSymbolPositions() {
  for (var i = 0; i < numOfColumns(); i++) {
    drops[i] = 1
  }
  // console.log('(((',drops)
  console.log('(((',drops)
  console.log(numOfColumns())
  console.log(canvas.width)

}
function getRandomHexCode() {
    var chars = '9ABCDEF'
    var hexCode = '#'
    for (var i = 0; i < chars.length; i++) {
        hexCode += chars[Math.floor(Math.random() * chars.length)]
    }
    return color
}
function draw() {
  // ctx.fillStyle = getRandomColor();
  ctx.fillStyle = '#999999'
  for (var i = 0; i < drops.length; i++)  {
    var symbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]

    ctx.fillText(symbol, FONTSIZE * i, drops[i] * FONTSIZE)

    if (drops[i] * FONTSIZE > canvas.height && Math.random() > 0.95) {
      console.log(drops[i] * FONTSIZE)
      drops[i] = 0;
    }
    drops[i]+=1
}
ctx.fillStyle = "rgba(0,0,0,.1)"
ctx.fillRect(0, 0, canvas.width, canvas.height)
}
