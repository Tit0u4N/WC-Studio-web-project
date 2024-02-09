import './style/style.scss'
import Alpine from 'alpinejs'
import {AccountAlpineData} from "./SSR/pages/Account.js";
import {LoginAlpineData} from "./SSR/pages/Login.js";
import {UserData} from "./js/global/UserData.js";
import {store} from "alpinejs/src/store.js";

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


Alpine.store('user', {
    data: UserData.getExistingUserData(),
    update() {
        this.user = UserData.getExistingUserData();
    },
    isConnected() {
        this.update();
        return !this.user.isNewUserData();
    },
    getMoney() {
        this.update();
        return this.user.getMoney();
    }
});

Alpine.store('pages', {
    showing: getPageByURL(),
    isShowing(page) {
        return this.showing === page;
    },
    set(page) {
        Alpine.store('user').update();
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
        document.getElementById("pageLoader").classList.toggle("!hidden", true);
    }, 1000);
});

Alpine.start();

