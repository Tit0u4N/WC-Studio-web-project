import {Home} from "./SSR/pages/Home.js";
import {Login} from "./SSR/pages/Login.js";
import {Account} from "./SSR/pages/Account.js";
import {Shop} from "./SSR/pages/Shop.js";
import {Header} from "./SSR/components/Header.js";
import {Head} from "./SSR/Head.js";
import {Loader} from "./SSR/components/Loader.js";
import {Memory} from "./SSR/games/memory/Memory.js";
import {LayoutGamePage} from "./SSR/layouts/LayoutGamePage.js";
import {Audios} from "./SSR/components/Audios.js";
import {Snake} from "./SSR/games/snake/Snake.js";
import {Gow} from "./SSR/games/gow/Gow.js";

export function render(props) {
    console.log("render", props)
    const pages = [Home, Login, Account, Shop]
    let html = Loader("pageLoader") + Header
    pages.forEach(page => {
        html += page
    })
    html += Audios
    return { head : Head(), html }
}

export function renderGame(game) {
    let html = Loader("pageLoader")
    let head = Head(game)
    switch (game.toLowerCase()) {
        case "memory": {
            html += Memory
            break
        }
        case "snake": {
            html += Snake
            break
        }
        case "gow": {
            html += Gow
            break
        }
        default :
            return render()
    }
    html = LayoutGamePage(game, html) + Audios
    return { head, html }
}