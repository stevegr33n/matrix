import MatrixService from './matrixService'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const matrix = new MatrixService({canvas, ctx})
window.addEventListener('resize', updateCanvas, false);

function updateCanvas() {
  matrix.getCanvasSize()
  matrix.setFont()
  matrix.setRandomSymbolStartYPositions()
}

function initCanvas() {
  updateCanvas()
  matrix.drawSymbolsInterval()
};

initCanvas()