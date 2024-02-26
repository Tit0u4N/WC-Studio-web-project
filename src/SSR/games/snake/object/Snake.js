export default class Snake {
    constructor(ctx, canvas, boxSize, skin = "default") {
        this.segments = [{x: 5, y: 5}, {x: 4, y: 5}];
        this.direction = "right";
        this.skin = skin;
        this.ctx = ctx;
        this.canvas = canvas;
        this.boxSize = boxSize;

        // Define default colors
        this.headAsset = '/assets/games/snake/themes/'+this.skin+'/head.png';
        this.headImage = new Image();

        this.bodyAsset = '/assets/games/snake/themes/'+this.skin+'/body.png';
        this.bodyImage = new Image();

        this.tailAsset = '/assets/games/snake/themes/'+this.skin+'/tail.png';
        this.tailImage = new Image();

        // Set source first
        this.headImage.src = this.headAsset;
        this.bodyImage.src = this.bodyAsset;
        this.tailImage.src = this.tailAsset;

    }

    goodRotateImageSegment(Asset, segment) {
        this.ctx.save();
        this.ctx.translate(segment.x * this.boxSize + this.boxSize / 2, segment.y * this.boxSize + this.boxSize / 2);
        switch (this.direction) {
            case "left":
                this.ctx.rotate(0);
                break;
            case "up":
                this.ctx.rotate(90 * Math.PI / 180);
                break;
            case "right":
                this.ctx.rotate(180 * Math.PI / 180);
                break;
            case "down":
                this.ctx.rotate(270 * Math.PI / 180);
                break;
        }
        this.ctx.drawImage(Asset, -this.boxSize / 2, -this.boxSize / 2, this.boxSize, this.boxSize);
        this.ctx.restore();
    }




    draw() {
        this.goodRotateImageSegment(this.headImage, this.segments[0]);
        // this.ctx.drawImage(this.headImage, this.segments[0].x * this.boxSize, this.segments[0].y * this.boxSize, this.boxSize, this.boxSize);
        this.segments.slice(1).slice(0, -1).forEach(segment => {
            this.goodRotateImageSegment(this.bodyImage, segment);
            // this.ctx.drawImage(this.bodyImage, segment.x * this.boxSize, segment.y * this.boxSize, this.boxSize, this.boxSize);
        });
        if (this.segments.length > 1) {
            this.goodRotateImageSegment(this.tailImage, this.segments[this.segments.length - 1]);
            // this.ctx.drawImage(this.tailImage, this.segments[this.segments.length - 1].x * this.boxSize, this.segments[this.segments.length - 1].y * this.boxSize, this.boxSize, this.boxSize);
        }
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
