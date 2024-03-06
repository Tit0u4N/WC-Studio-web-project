import {LayoutPage} from "../../layouts/LayoutPage.js";

export const Snake = LayoutPage('game-snake', `
<div id="gameContainer">
    <canvas id="snakeCanvas"  class="border-4" width="600" height="600"></canvas>
</div>
<div id="score">Score: <span id="currentScore">0</span></div>
`)