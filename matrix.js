'use strict'
const CHARS = '$,\xA5,\u2665'.split(',')
const FONTSIZE = 30

var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var columns = ((canvas.width / FONTSIZE) * FONTSIZE)
var drawInterval

var drops = [];
for (var x = 0; x < columns; x++) {
    drops[x] = 1;
}

window.addEventListener('resize', resizeWindow, false)

function resizeWindow () {
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



// console.log('3', canvas)
function draw() {
  // console.log('x', canvas)
  // updateCanvasSize()
// console.log('2',canvas)
    // window.setInterval(updateCanvasSize, 510);



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
init()
