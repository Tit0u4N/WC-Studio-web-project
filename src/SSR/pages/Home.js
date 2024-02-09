import {Success} from "../components/Success.js";

export const Home =
    `
    <div x-data x-show="$store.pages.isShowing('home')" id="homePageContainer" class="flex flex-col justify-evenly items-center">
        <h1>HOME</h1>
        <!-- successes list -->
        <div>
            <div> ${Success("success name", "game name", "69%", "miage")}</div>
        </div>
    </div> 

    `
