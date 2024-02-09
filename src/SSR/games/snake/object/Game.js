import Snake from './Snake.js';
import Food from './Food.js';
import WallGenerator from './Wall.js';
import Wall from './Wall.js';

export default class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.boxSize = this.canvas.width / 30;
        this.score = 0;
        this.gameMode = "";
        this.walls = [];
        this.snake = new Snake(this.ctx,this.canvas,this.boxSize);

        this.food = new Food(this.canvas, this.snake, this.boxSize, ctx);
        this.changingDirection = false;
        this.etatJeu = "menuPrincipal";
        this.gameInterval = null;
        this.wallGenerator = new WallGenerator(this.canvas, this.boxSize, this.snake, this.food, this.ctx, this.walls);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.snake.draw(this.ctx, this.boxSize);
        this.food.draw(this.ctx, this.boxSize);

        this.walls.forEach(wall => {
            wall.draw();
        });
    }

    updateScore() {
        document.getElementById("currentScore").innerText = this.score;
        if (this.gameMode === "walls") {
            if (this.score % 5 === 0) {
                let n = this.score / 5;
                this.wallGenerator.generateWallWithSize(n);
            }

        }
    }



    update() {
        this.snake.move();
        if (this.snake.checkCollision(this.walls, this.food, this.canvas, this.boxSize)) {
            this.GameOver();
            return;
        }
        if (this.snake.checkCollisionWithFood(this.food)) {
            this.food.generateFood();
            this.score++;
            this.updateScore();
            this.gestionOpacity(true);
        } else {
            this.gestionOpacity(false);
            this.snake.segments.pop();
        }
        this.draw();
        this.changingDirection = false;
    }

    resetGame() {


        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.score = 0;
        this.updateScore();
        this.ctx.globalAlpha = 1;
        this.snake = new Snake(this.ctx, this.canvas, this.boxSize);
        this.food = new Food(this.canvas, this.snake, this.boxSize, this.ctx);
        this.walls = [];
        this.wallGenerator = new WallGenerator(this.canvas, this.boxSize, this.snake, this.food, this.ctx, this.walls);

        document.getElementById("snakeCanvas").style.opacity = 1;
        this.draw();
    }

    keyDownHandler(event) {
        if (!this.changingDirection) {
            switch (event.key) {
                case "ArrowUp":
                    if (this.snake.direction !== "down") {
                        this.snake.direction = "up";
                    }
                    break;
                case "ArrowDown":
                    if (this.snake.direction !== "up") {
                        this.snake.direction = "down";
                    }
                    break;
                case "ArrowLeft":
                    if (this.snake.direction !== "right") {
                        this.snake.direction = "left";
                    }
                    break;
                case "ArrowRight":
                    if (this.snake.direction !== "left") {
                        this.snake.direction = "right";
                    }
                    break;
                case "r":
                    this.resetGame();
                    break;

                default:
                    console.log(event.key);
            }
            this.changingDirection = true;
        }
    }

    changeGameMode(mode) {
        this.gameMode = mode;
        this.etatJeu = "jeuEnCours";
        this.startGame();
    }

    GameOver() {
        alert("Game Over!");
        clearInterval(this.gameInterval);
        this.score = 0;
        this.updateScore();
        this.resetGame();
        this.gameMode = "";
        this.etatJeu = "menuPrincipal";
        this.gameInterval = setInterval(this.startGame.bind(this), 100);
    }

    gestionOpacity(eatFruit) {
        if (this.gameMode !== "shadow") return;

        if (eatFruit) {
            this.ctx.globalAlpha = 1;
        }
        this.decreaseOpacity()
    }

    decreaseOpacity() {

        this.ctx.globalAlpha -= 0.01;
        if (this.ctx.globalAlpha < 0) {
            this.GameOver();
        }
    }

    gameModeSelection() {
        let modes = ["classic", "walls", "shadow"];
        let modes_positions = [];

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "black";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Choisissez un mode de jeu", this.canvas.width / 2, this.canvas.height / 2 - 50);

        let buttonWidth = 150;
        let buttonHeight = 75;

        modes.forEach((mode, index) => {
            this.ctx.fillStyle = "white";
            this.ctx.fillRect(this.canvas.width / 2 - buttonWidth / 2, this.canvas.height / 2 + index * 100, buttonWidth, buttonHeight);
            this.ctx.fillStyle = "black";
            this.ctx.fillText(mode, this.canvas.width / 2, this.canvas.height / 2 + index * 100 + 50);
            this.ctx.strokeRect(this.canvas.width / 2 - buttonWidth / 2 + 1, this.canvas.height / 2 + index * 100 + 1, buttonWidth, buttonHeight);
            modes_positions.push({
                x: this.canvas.width / 2 - buttonWidth / 2,
                y: this.canvas.height / 2 + index * 100,
                width: buttonWidth,
                height: buttonHeight
            });

        });

        this.canvas.addEventListener("click", (event) => {
            let x = event.clientX - this.canvas.getBoundingClientRect().left;
            let y = event.clientY - this.canvas.getBoundingClientRect().top;
            modes_positions.forEach((mode, index) => {
                if (x > mode.x && x < mode.x + mode.width && y > mode.y && y < mode.y + mode.height) {
                    this.changeGameMode(modes[index]);
                }
            });
        });
    }

    drawMenu() {
        this.gameModeSelection();
    }

    startGame() {

        switch (this.etatJeu) {
            case "menuPrincipal":
                this.drawMenu();
                break;
            case "jeuEnCours":
                clearInterval(this.gameInterval);

                this.gameInterval = setInterval(this.update.bind(this), 100);
                break;
        }
    }

    init() {

        this.startGame();
        document.addEventListener("keydown", this.keyDownHandler.bind(this));
    }
}
