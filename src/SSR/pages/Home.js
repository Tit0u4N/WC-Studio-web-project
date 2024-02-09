import {RankBoard} from "../components/RankBoard.js";

export const Home =
    `<div x-data x-show="$store.pages.isShowing('home')">
        <h1>HOME</h1>
        ${RankBoard}
        
    </div>`
