import './style/style.scss'
import Alpine from 'alpinejs'
import {AccountAlpineData} from "./SSR/pages/Account.js";
import {LoginAlpineData} from "./SSR/pages/Login.js";
import {UserData} from "./js/global/UserData.js";

const getPageByURL = () => {
    const path = window.location.pathname.replace('/', '');
    switch (path) {
        case 'login':
            return 'login';
        case 'account':
            return 'account';
        case 'shop':
            return 'shop';
        default:
            return 'home';
    }
};

Alpine.store('pages', {
    showing: getPageByURL(),
    isShowing(page) {
        return this.showing === page;
    },
    set(page) {
        if (UserData.getExistingUserData().isNewUserData() && (page === 'account' || page === 'shop')) {
            return this.showing = 'login';
        }
        if (this.showing === page) return;
        this.showing = page;
    },
});

Alpine.data(LoginAlpineData.dataKey, LoginAlpineData.data);
Alpine.data(AccountAlpineData.dataKey, AccountAlpineData.data);

window.addEventListener('alpine:init', () => {
    if (UserData.getExistingUserData().isNewUserData()) {
        Alpine.store('pages').set('login');
    }
    setTimeout(() => {
        document.getElementById("pageLoader").classList.add("!hidden")
    }, 1000);
});

Alpine.start();

