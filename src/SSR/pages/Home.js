import {RankBoard} from "../components/RankBoard.js";
import {Success} from "../components/Success.js";

export const Home =
    `
    <div x-data x-show="$store.pages.isShowing('home')" id="homePageContainer" class="flex flex-col justify-evenly items-center">
    
        <!-- barre esthétique à ajouter ici --> 
        
        <!-- div cards + rankboard -->
        <div class="flex items-cst justify-evenly w-full h-2/3">
            <!-- grid div --> 
            <div class="grid grid-cols-2 w-[60%] h-full gap-2">
                <!-- <div class="w-[460px] h-[276px] bg-[#3D225D] rounded-2xl"></div> -->
                <div class="bg-[#3D225D] rounded-3xl"></div>
                <div class="bg-[#3D225D] rounded-3xl"></div>
                <div class="bg-[#3D225D] rounded-3xl"></div>
                <div class="bg-[#3D225D] rounded-3xl"></div>
            </div>
            
            <!-- rankboard div --> 
            <div class="w-[30%]">
                ${RankBoard}
            </div>
        </div>

        <!-- ${RankBoard} -->
        ${Success()}
    </div> 

    `
