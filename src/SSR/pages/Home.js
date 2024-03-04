import {RankBoard} from "../components/RankBoard.js";
import {Success} from "../components/Success.js";

export const Home =
    `
    <div x-data x-show="$store.pages.isShowing('home')" id="homePageContainer" class="flex flex-col gap-7 items-center">
    
        <!-- barre esthétique à ajouter ici --> 
        
        <!-- div cards + rankboard -->
        <div class="flex items-start justify-evenly w-full">
            <!-- grid div --> 
            <div class="grid grid-cols-2 w-[60%] h-full gap-2">
                <!-- <div class="w-[460px] h-[276px] bg-[#3D225D] rounded-2xl"></div> -->
                <div class="bg-[#3D225D] rounded-3xl flex justify-center items-center text-white">Snake</div>
                <div class="bg-[#3D225D] rounded-3xl flex justify-center items-center text-white">Memory</div>
                <div class="bg-[#3D225D] rounded-3xl flex justify-center items-center text-white">Pong</div>
                <div class="bg-[#3D225D] rounded-3xl flex justify-center items-center text-white">GamesOnWeb</div>
            </div>
            
            <!-- rankboard div --> 
            <div>
                ${RankBoard}
            </div>
        </div>
        
        <div class="pt-12 pb-6">
            ${Success()}
        </div>
    </div> 

    `
