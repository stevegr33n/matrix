export default class MatrixService {
	constructor({canvas, ctx}) {
		this.canvas = canvas
		this.ctx = ctx
		this.drawInterval = 115
		this.fontSize = 40
		this.symbols = ['$', '\xA5', '\u2665']
	}

	getCanvasSize () {
		this.canvas.height = window.innerHeight
		this.canvas.width = window.innerWidth
	}
	
	drawSymbolsInterval () {
			setInterval (() => this.drawSymbols(), this.drawInterval);
	}
	
	getNumOfColumns () {
		return Math.round(this.canvas.width / this.fontSize)
	}

	setFont() {
		this.ctx.font = `${this.fontSize}px Courier New`
	}
	
	getRandomChar () {
		return this.symbols[randomInt(this.symbols.length)]
	}
	
	randomInt(max) {
		return Math.floor(Math.random() * max)
	}
	
	randomBool() {
		return Math.random() > 0.95 ? true : false
	}
	
	isYPosGreaterThanCanvasHeight(yPos) {
		return yPos * this.fontSize > this.canvas.height
	}
	
	fillText({ randomSymbol, xPos, yPos }) {
		this.ctx.fillText(randomSymbol, xPos, yPos);
	}

	setSymbolStartYPositions() {
		this.yPositions = []
		for (let i = 0; i < this.getNumOfColumns(); i++) {
			this.yPositions[i] = this.randomInt(this.fontSize)
		}
	}

	getRandomHexCode() {
		const chars = ["9", "9", "3", "3", "5", "9"]
		return chars.reduce((res, _) => res + chars[this.randomInt(chars.length)], '#')
	}

	drawSymbols() {
		this.ctx.fillStyle = this.getRandomHexCode();
		this.yPositions.forEach((yPos, index, yPositions) => {
			this.fillText({
				randomSymbol: this.symbols[this.randomInt(this.symbols.length)],
				xPos: this.fontSize * index,
				yPos: yPos * this.fontSize
			});
			this.isYPosGreaterThanCanvasHeight && this.randomBool() ?  yPositions[index] = 0 : yPositions[index] += 1;
		})
		if (!this.randomBool()) this.fadeOutSymbols()
	}

	fadeOutSymbols() {
		this.ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
	}
}