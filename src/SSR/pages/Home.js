import {RankBoard} from "../components/RankBoard.js";
import {Success} from "../components/Success.js";
import {GameCard} from "../components/GameCard.js";

export const Home =
    `
    <div x-data x-show="$store.pages.isShowing('home')" class="flex flex-col gap-7 items-center h-screen pr-3">
    
        <!-- barre esthétique à ajouter ici --> 
         
        <!-- div cards + rankboard -->
        <div class="flex items-start justify-evenly w-full">
            <!-- grid div --> 
            <div class="grid grid-cols-2 w-full h-full gap-2 px-3">
                ${GameCard("Snake")}
                ${GameCard("Memory")}
                ${GameCard("Games On Web", "gow")}
                ${GameCard("Pong (soon)", "pong", false)}
            </div>
            
            <!-- rankboard div --> 
            <div>
                ${RankBoard}
            </div>
        </div>
        
        <div class="pt-12 pb-6 w-full">
            ${Success()}
        </div>
    </div> 
    `
