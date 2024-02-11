export default class Snake {
    constructor(ctx, canvas, boxSize, skin = "default") {
        this.segments = [{x: 5, y: 5}, {x: 4, y: 5}, {x: 3, y: 5}];
        this.direction = "right";
        this.skin = skin;
        this.ctx = ctx;
        this.canvas = canvas;
        this.boxSize = boxSize;

        // Define default colors
        this.headAsset = '/assets/games/snake/default/head.png';
        this.headImage = new Image();

        this.bodyAsset = '/assets/games/snake/default/body.png';
        this.bodyImage = new Image();

        // Set source first
        this.headImage.src = this.headAsset;
        this.bodyImage.src = this.bodyAsset;

    }

    draw() {
        this.ctx.drawImage(this.headImage, this.segments[0].x * this.boxSize, this.segments[0].y * this.boxSize, this.boxSize, this.boxSize);
        this.segments.slice(1).forEach(segment => {
            this.ctx.drawImage(this.bodyImage, segment.x * this.boxSize, segment.y * this.boxSize, this.boxSize, this.boxSize);
        });
    }


    move() {
        let head = {x: this.segments[0].x, y: this.segments[0].y};
        switch (this.direction) {
            case "up":
                head.y--;
                break;
            case "down":
                head.y++;
                break;
            case "left":
                head.x--;
                break;
            case "right":
                head.x++;
                break;
        }
        this.segments.unshift(head);
    }

    checkCollisionWithSelf() {
        return this.segments.slice(1).some(segment => segment.x === this.segments[0].x && segment.y === this.segments[0].y);
    }

    checkCollisionWithWall(walls) {
        let head = this.segments[0];
        let collision = false;
        walls.forEach(wall => {
            if (head.x === wall.x && head.y === wall.y) {
                collision = true;
            }
        });
        return collision;
    }

    checkCollisionWithFood(food) {
        return this.segments[0].x === food.position.x && this.segments[0].y === food.position.y;
    }

    checkCollisionWithOutOfBounds(canvas) {
        return this.segments[0].x < 0 || this.segments[0].x >= canvas.width / this.boxSize || this.segments[0].y < 0 || this.segments[0].y >= canvas.height / this.boxSize;
    }

    checkCollision(walls, food, canvas) {
        return this.checkCollisionWithSelf() || this.checkCollisionWithWall(walls) || this.checkCollisionWithOutOfBounds(canvas);
    }
}
