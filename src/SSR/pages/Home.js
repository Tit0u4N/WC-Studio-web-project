import {Success} from "../components/Success.js";

export const Home =
    `
    <!-- main homepage div -->
    <!-- style="display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; height:70vh; --> 
    <div id="homePageContainer" class="flex flex-col justify-evenly items-center">
    
        <!-- homepage's content header (games preview) + other components  -->
        <div x-data x-show="$store.pages.isShowing('home')">
            <h1>HOME</h1>
        </div> 
        
        <!-- success component --> 
        <!-- <div class="flex flex-col justify-center items-center"> -->
            <!-- <h2> SUCCESS </h2> -->
        <div> ${Success("success name", "game name", "69%", "miage")}</div>
        <!-- </div> -->
        
    </div>
    `
