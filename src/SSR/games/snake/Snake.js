import {LayoutPage} from "../../layouts/LayoutPage.js";

export const Snake = LayoutPage('game-snake', `
<div id="gameContainer" class="flex justify-center items-center flex-col w-[70%] mx-auto">
     <div class="container-style flex justify-center items-center w-1/2 h-[100px] px-4 m-5">
            <div><h3 class="mb-1">Score</h3><p class="text-center" id="currentScore">0</p></div>
    </div>
    <canvas id="snakeCanvas" class="border-4 size-[600px]" width="600" height="600"></canvas>
</div>
`)