import {RankBoard} from "../components/RankBoard.js";
import {Success} from "../components/Success.js";

export const Home =
    `
    <div x-data x-show="$store.pages.isShowing('home')" id="homePageContainer" class="flex flex-col justify-evenly items-center">
        <!-- barre esthétique à ajouter ici --> 
        
        <!-- ajout de la height du header + son padding en y (170 + 16 = 186px) -->
        <div class="flex justify-around pt-[186px] w-full">
            <div>
            <!-- ajouter les 4 cards (grid 2x2 : chaque élément à 460px * 276px) -->
            </div>
            ${RankBoard}
        </div>
        ${Success()}
    </div> 

    `
