import MatrixService from './matrixService'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const matrix = new MatrixService({canvas, ctx})
window.addEventListener('resize', updateCanvas)

function updateCanvas() {
  matrix.getCanvasSize()
  matrix.setFont()
  matrix.setSymbolStartYPositions()
}

function initCanvas() {
  updateCanvas()
  matrix.drawSymbolsInterval()
};

initCanvas()