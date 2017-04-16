var c = document.getElementById("c");
var ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

var matrix = [1,2,3,4,5,6,7,8,9,
              '漢','字','吧','爸',
              '八','百','北','不']
var font_size = 20;
var columns = (c.width / font_size) * 20;

var drops = [];
for (var x = 0; x < columns; x++) {
  drops[x] = 1;
}

function draw() {
  ctx.fillStyle = "rgba(0,0,0,.1)";
  ctx.fillRect(0, 0, c.width, c.height);

  function getRandomColor() {
    var letters = '9ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 7)];
    }
    return color;
  }
  ctx.fillStyle = getRandomColor();
  ctx.font = font_size + "px Courier New";

  for (var i = 0; i < drops.length; i++)
  {
    var text = matrix[Math.floor(Math.random() * matrix.length)];
    //console.log(text, font_size * i, drops[i] * font_size)
    ctx.fillText(text, font_size + 3 * i, drops[i] * font_size);

    if (drops[i] * font_size > c.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
    drops[i]+=1.1;
  }
}
setInterval(draw, 110);
