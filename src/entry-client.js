import './style/style.scss'
import Alpine from 'alpinejs'
import {AccountAlpineData} from "./SSR/pages/Account.js";
import {AlpineSuccessData} from "./SSR/components/Success.js";

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
        if (this.showing === page) return;
        this.showing = page;
    },
});

Alpine.data(AccountAlpineData.dataKey, AccountAlpineData.data);


Alpine.data(AlpineSuccessData.dataKey, AlpineSuccessData.data);
window.addEventListener('alpine:init', () => {
    setTimeout(() => {
        document.getElementById("pageLoader").classList.add("!hidden")
    }, 1000);
});

Alpine.start();

