import Game from './object/Game.js';

const canvas = document.getElementById("snakeCanvas");
const ctx = canvas.getContext("2d");
const game = new Game(canvas, ctx);
game.init();
