'use strict'
const SYMBOLS = '$,\xA5,\u2665'.split(',')
const FONTSIZE = 40
var yPositions = []

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
  setRandomSymbolStartYPositions()
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

function setRandomSymbolStartYPositions() {
  yPositions = [] // empty the previous positions whenever window resizes
  for (var i = 0; i < getNumOfColumns(); i++) {
    yPositions[i] = randomInt(FONTSIZE)
  }
}

function setDrawInterval () {
  drawInterval = setInterval(drawSymbols, DRAWSPEED)
}

function getNumOfColumns () {
  return Math.round(CANVAS.width / FONTSIZE)
}

function getRandomChar () {
  return SYMBOLS[randomInt(SYMBOLS.length)]
}

function randomInt(max) {
  return Math.floor(Math.random() * max)
}

function randomBool() {
  return Math.random() > 0.95 ? true : false
}
//
// function getRandomHexCode() {
//     var chars = 'AB999F'
//     var hexCode = '#'
//     for (var i = 0; i < chars.length; i++) {
//         hexCode += chars[randomInt(chars.length)]
//     }
//     console.log(hexCode)
//     return hexCode
// }
// function getRandomRedHexCode() {
//     var chars = '993359'
//     var hexCode = '#'
//     for (var i = 0; i < chars.length; i++) {
//         hexCode += chars[randomInt(chars.length)]
//     }
//     console.log(hexCode)
//     return hexCode
// }

function drawSymbols() {
  CTX.fillStyle = '#993359'
  // CTX.fillStyle = getRandomHexCode();
  var yPos
  var xPos
  var symbol
  for (var i = 0; i < yPositions.length; i++)  {
    yPos = yPositions[i] * FONTSIZE
    xPos = FONTSIZE * i
    symbol = SYMBOLS[randomInt(SYMBOLS.length)]
    CTX.fillText(symbol, xPos, yPos)

    if (yPositions[i] * FONTSIZE > CANVAS.height && randomBool()) {
      // If yPos is more than the canvas, and some random event is true
      yPositions[i] = 0;
    }
    yPositions[i] += 1
  }
  CTX.fillStyle = "rgba(0,0,0,.1)"
  CTX.fillRect(0, 0, CANVAS.width, CANVAS.height)
}
