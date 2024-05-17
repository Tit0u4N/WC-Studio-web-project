import {Home} from "./SSR/pages/Home.js";
import {Login} from "./SSR/pages/Login.js";
import {Account} from "./SSR/pages/Account.js";
import {Shop} from "./SSR/pages/Shop.js";
import {Header} from "./SSR/components/Header.js";
import {Loader} from "./SSR/components/Loader.js";
import {Memory} from "./SSR/games/memory/Memory.js";
import {Audios} from "./SSR/components/Audios.js";
import {Snake} from "./SSR/games/snake/Snake.js";
import {Gow} from "./SSR/games/gow/Gow.js";
import {P404} from "./SSR/pages/p404.js";

export function render(props) {
    console.log("render", props)
    const pages = [Home, Login, Account, Shop, P404, Memory, Snake, Gow]
    let html = Loader("pageLoader") + Header
    pages.forEach(page => {
        html += page
    })
    html += Audios
    return { head : '', html }
}