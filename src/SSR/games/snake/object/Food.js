export default class Food {
    constructor(canvas, snake, boxSize, ctx) {

        this.canvas=canvas;
        this.snake=snake;
        this.boxSize=boxSize;
        this.ctx=ctx
        this.color = "#644984";
        this.generateFood();
    }

    generateFood() {
        this.position = {
            x: Math.floor(Math.random() * (this.canvas.width / this.boxSize)),
            y: Math.floor(Math.random() * (this.canvas.height / this.boxSize))
        };
        // Si la nourriture est générée sur le serpent, générer une nouvelle position
        if (this.snake.segments.some(segment => segment.x === this.position.x && segment.y === this.position.y)) {
            this.generateFood();
        }
    }

    draw() {
        // Dessiner la nourriture
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.position.x * this.boxSize + this.boxSize / 2, this.position.y * this.boxSize + this.boxSize / 2, this.boxSize / 2, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}
