'use strict'
const SYMBOLS = '$,\xA5,\u2665'.split(',')
const FONTSIZE = 30
var drops = []

const CANVAS = document.getElementById("canvas")
const CTX = CANVAS.getContext("2d")
const DRAWSPEED = 115
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
  CANVAS.height = window.innerHeight
  CANVAS.width = window.innerWidth
}

function setFont() {
  CTX.font = FONTSIZE + "px Courier New"
}

function setDrawInterval () {
  drawInterval = setInterval(drawSymbols, DRAWSPEED)
}

function getRandomChar () {
  return SYMBOLS[randomNumber(SYMBOLS.length)]
}

function numOfColumns () {
  return Math.round(CANVAS.width / FONTSIZE)
}

function randomNumber(max) {
  /*
   * Returns random number between 0
   * and max.
  */
  return Math.floor(Math.random() * max)
}

function setSymbolPositions() {
  for (var i = 0; i < numOfColumns(); i++) {
    drops[i] = randomNumber(FONTSIZE)
  }
  // console.log('(((',drops)
  console.log('(((',drops)
  console.log(numOfColumns())
  console.log(CANVAS.width)
}

function getRandomHexCode() {
    var chars = '9ABCDEF'
    var hexCode = '#'
    for (var i = 0; i < chars.length; i++) {
        hexCode += chars[randomNumber(chars.length)]
    }
    return color
}

function drawSymbols() {
  // CTX.fillStyle = getRandomColor();
  CTX.fillStyle = '#999999'
  for (var i = 0; i < drops.length; i++)  {
    var symbol = SYMBOLS[randomNumber(SYMBOLS.length)]
    CTX.fillText(symbol, FONTSIZE * i, drops[i] * FONTSIZE)

    if (drops[i] * FONTSIZE > CANVAS.height && Math.random() > 0.95) {
      // console.log(drops[i] * FONTSIZE)
      drops[i] = 0;
    }
    drops[i] += 1
  }
  CTX.fillStyle = "rgba(0,0,0,.1)"
  CTX.fillRect(0, 0, CANVAS.width, CANVAS.height)
}
