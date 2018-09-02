import MatrixService from './matrixService'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const matrix = new MatrixService({canvas, ctx})
window.addEventListener('resize', updateCanvas, false)
window.addEventListener('mousemove', mouseMove, false);


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

initCanvas()