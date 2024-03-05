import {LayoutPage} from "../../layouts/LayoutPage.js";

export const Memory = LayoutPage("game-memory", `
<div id="memoryGameContainer" class="flex flex-col justify-center items-center">
    <div id="memory-control-panel" class="memory-control-panel container-style w-1/2 flex flex-col px-3 py-5 justify-center items-center mt-5 gap-2">
        <h1 class="text-center mb-3">Memory</h1>
        <div>
            <label for="memory-difficulty" class="memory-difficulty-label block mb-2 text-sm font-medium dark:text-white">Select a difficulty</label>
            <select id="memory-difficulty" class="memory-difficulty border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected value="EASY">Easy</option>
              <option value="MEDIUM">Medium</option>
              <option value="HARD">Hard</option>
              <option value="VERYHARD">Very-Hard</option>
            </select>
        </div>
   
        <button id="memory-start" class="button-hover mt-4">Start</button>
        
    </div>
    <div id="memory-ath" class="container-style flex justify-between items-center w-1/2 h-[100px] px-4 hidden m-5">
        <div><h3 class="mb-1">Moves</h3><p class="text-center" id="memory-moves">0</p></div>
        <div><h3 class="mb-1">Timer</h3><p class="text-center" id="memory-timer">0</p></div>
        <div><h3 class="mb-1">Pairs</h3><p class="text-center" id="memory-pairs">0</p></div>
    </div>
    
    <div id="memory-end-game" class="hidden h-1/3 flex flex-col justify-center items-center gap-3 mt-4">
        <h1 class="text-center">Victory</h1>
    
        <button id="memory-new-game" class="button-hover p-2 mt-4">New Game</button>
    </div>
    <div class="memory-grid hidden"></div>
</div>
`)

