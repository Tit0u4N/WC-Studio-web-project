export default class Food {
    constructor(canvas, snake, boxSize, ctx) {

        this.canvas=canvas;
        this.snake=snake;
        this.boxSize=boxSize;
        this.ctx=ctx
        this.color = "#644984";
        this.asset = '/assets/games/snake/food.png';
        this.image = new Image();
        this.image.src = this.asset;
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
        this.ctx.save();
        this.ctx.drawImage(this.image, this.position.x * this.boxSize, this.position.y * this.boxSize, this.boxSize, this.boxSize);
        this.ctx.restore();
    }
}
