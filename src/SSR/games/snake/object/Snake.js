export default class Snake {
    constructor(ctx,canvas, boxSize, skin = "default"){
        this.segments = [{x: 5, y: 5}, {x: 4, y: 5}, {x: 3, y: 5}];
        this.direction = "right";
        this.skin = skin;
        this.ctx = ctx;
        this.canvas = canvas;
        this.boxSize = boxSize;

        // Définir les couleurs par défaut
        this.headColor = "#2b2b2b";
        this.bodyColor = ["#000000"];

        // Charger les couleurs à partir du JSON
        this.loadColors();
    }

    async loadColors() {
        try {
            // Charger le JSON des couleurs depuis un fichier externe
            const response = await fetch(`assets/skin/snake.json`);
            console.log(response);
            const colorsJson = await response.json();
            console.log(colorsJson);

            // Vérifier si le skin spécifié existe dans le JSON, sinon utiliser le skin par défaut
            const selectedColors = colorsJson[this.skin] || colorsJson["default"];

            // Appliquer les couleurs
            this.headColor = selectedColors.headColor;
            this.bodyColor = selectedColors.bodyColor;

            // Si multicolor est activé, utilisez différentes couleurs pour le corps

        } catch (error) {
            console.error("Erreur lors du chargement des couleurs :", error);
        }
    }

    draw() {
        // Dessiner le serpent
        this.segments.forEach((segment, index) => {
            if (index === 0) {
                this.ctx.fillStyle = this.headColor;
            } else {
                this.ctx.fillStyle = this.bodyColor[index % this.bodyColor.length];
            }
            this.ctx.fillRect(segment.x * this.boxSize, segment.y * this.boxSize, this.boxSize, this.boxSize);
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
