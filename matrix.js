'use strict'
const CHARS = '$,\xA5,\u2665'.split(',')
const FONTSIZE = 30

var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var columns = ((canvas.width / FONTSIZE) * FONTSIZE)
var drawInterval = 0

document.onload = updateCanvas()
window.addEventListener('resize', updateCanvas, false)



function updateCanvas () {
  setClearInterval()
  updateCanvasSize()
  setDrawInterval()
}
function setClearInterval () {
  clearInterval(drawInterval)
}
function setDrawInterval () {
  drawInterval = setInterval(draw, 120)
}
function updateCanvasSize () {
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth
}

var drops = [];
for (var x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {

    // function getRandomColor() {
    //     var letters = '9ABCDEF';
    //     var color = '#';
    //     for (var i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 7)];
    //     }
    //     return color;
    // }
    // ctx.fillStyle = getRandomColor();
    ctx.fillStyle = '#999999';
    ctx.font = FONTSIZE + "px Courier New";

    for (var i = 0; i < drops.length; i++) {
        var text = CHARS[Math.floor(Math.random() * CHARS.length)];
        //console.log(text, FONTSIZE * i, drops[i] * FONTSIZE)
        ctx.fillText(text, FONTSIZE * i, drops[i] * FONTSIZE);

        if (drops[i] * FONTSIZE > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
        }
        drops[i] += 1.1;
    }
    ctx.fillStyle = "rgba(0,0,0,.1)";

    ctx.fillRect(0, 0, canvas.width, canvas.height);

}
