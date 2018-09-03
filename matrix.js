import MatrixService from './matrixService'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const matrix = new MatrixService({canvas, ctx})
window.addEventListener('resize', updateCanvas, false)
window.addEventListener('mousemove', mouseMove, false);
window.addEventListener("keypress", spacebarHasBeenPressed, false);

function updateCanvas() {
  matrix.getCanvasSize()
  matrix.setFont()
  matrix.setSymbolStartYPositions()
}

function initCanvas() {
  updateCanvas()
  matrix.drawSymbolsInterval()
};

function mouseMove(event) {
  getMousePos({canvas, event}, matrix);
}

function getMousePos({canvas, event}, matrix) {
  const rect = canvas.getBoundingClientRect();
  matrix.mousePos = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function spacebarHasBeenPressed() {
  document.body.onkeyup = (e) => {
    if(e.keyCode === 32) {
      matrix.spacebarPressed = !matrix.spacebarPressed
      const backgroundFill = matrix.spacebarPressed ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)'
      matrix.ctx.fillStyle = backgroundFill
      matrix.ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
  }
}

initCanvas()