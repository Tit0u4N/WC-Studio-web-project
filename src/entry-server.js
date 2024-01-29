import {Home} from "./SSR/pages/Home.js";
import {Login} from "./SSR/pages/Login.js";
import {Account} from "./SSR/pages/Account.js";
import {Shop} from "./SSR/pages/Shop.js";
import {NavBar} from "./SSR/components/NavBar.js";
import {Head} from "./SSR/Head.js";

export function render() {
    const pages = [Home, Login, Account, Shop]
    let html = NavBar()
    pages.forEach(page => {
        html += page
    })
    return { head : Head, html }
}

