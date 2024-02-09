export class Wall {
    constructor(canvas, boxSize, ctx,x,y) {
        this.canvas = canvas;
        this.boxSize = boxSize;
        this.ctx = ctx;
        this.color = "#000";
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("dans la fonction draw du mur")
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x * this.boxSize, this.y * this.boxSize, this.boxSize, this.boxSize);
    }
}

export default class WallGenerator {
    constructor(canvas, boxSize, snake, food, ctx,walls) {
        this.canvas = canvas;
        this.boxSize = boxSize;
        this.snake = snake;
        this.food = food;
        this.ctx = ctx;
        this.walls = walls
    }

    canBeThere(x, y) {
        return !(this.snake.segments.some(segment => segment.x === x && segment.y === y) ||
            x === this.food.position.x && y === this.food.position.y ||
            this.walls.some(wall => wall.x === x && wall.y === y) ||
            x <= 0 ||
            x + 1 >= this.canvas.width / this.boxSize ||
            y <= 0 ||
            y + 1 >= this.canvas.height / this.boxSize)
    }

    getGoodCoord() {
        let x = Math.floor(Math.random() * (this.canvas.width / this.boxSize));
        let y = Math.floor(Math.random() * (this.canvas.height / this.boxSize));

        while (!this.canBeThere(x, y)) {
            x = Math.floor(Math.random() * (this.canvas.width / this.boxSize));
            y = Math.floor(Math.random() * (this.canvas.height / this.boxSize));
        }
        return {x, y};
    }

    addWall(x, y) {
        // Add wall only if coordinates are valid
        if (this.canBeThere(x, y)) {
            this.walls.push(new Wall(this.canvas, this.boxSize, this.ctx, x, y));
        }
    }

    generateWallWithSize(size) {
        // We can create either a square, a line, or a cross with the specified size (number of walls)
        let shapes = ["squares", "lines", "cross"];
        let shape = shapes[Math.floor(Math.random() * shapes.length)];

        switch (shape) {
            case "squares":
                this.generateSquareWall(size);
                break;
            case "lines":
                this.generateLineWall(size);
                break;
            case "cross":
                this.generateCrossWall(size);
                break;
            default:
                console.error("Invalid shape specified");
        }
    }

    generateSquareWall(size) {
        let coord = this.getGoodCoord();
        let x = coord.x;
        let y = coord.y;

        // Add walls to form a square
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                this.addWall(x + i, y + j);
            }
        }
    }

    generateLineWall(size) {
        let coord = this.getGoodCoord();
        let x = coord.x;
        let y = coord.y;

        // Add walls to form a horizontal line
        for (let i = 0; i < size; i++) {
            this.addWall(x + i, y);
        }
    }

    generateCrossWall(size) {
        let coord = this.getGoodCoord();
        let x = coord.x;
        let y = coord.y;

        // Add the central wall to form a cross
        this.addWall(x, y);

        // Add horizontal walls
        for (let i = 1; i <= size / 2; i++) {
            this.addWall(x + i, y);
            this.addWall(x - i, y);
        }

        // Add vertical walls
        for (let i = 1; i <= size / 2; i++) {
            this.addWall(x, y + i);
            this.addWall(x, y - i);
        }
    }
}
