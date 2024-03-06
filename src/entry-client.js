import './style/style.scss'
import Alpine from 'alpinejs'
import {AccountAlpineData} from "./SSR/pages/Account.js";
import {RankBoardAlpineData} from "./SSR/components/RankBoard.js";
import {LoginAlpineData} from "./SSR/pages/Login.js";
import {UserData} from "./js/global/UserData.js";
import {AlpineSuccessData} from "./SSR/components/Success.js";
import {GamesInventoryAlpineData} from "./SSR/components/AccountSubPages/Inventory.js";
import {ShopAlpineData} from "./SSR/pages/Shop.js";
import {ShopBaseAlpineData} from "./SSR/components/ShopSubPages/ShopBase.js";

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
    pages: ['home', 'login', 'account', 'shop', 'game', "404"],
    games: ['memory', 'snake', 'gow'],
    showing: "",
    isShowing(page) {
        return this.showing === page;
    },
    getPageByURL() {
        const path = window.location.pathname.split('/')[1];
        if (this.pages.includes(path)) return path;
        if (window.location.pathname === '/' || window.location.pathname === '') return 'home';
        return '404';
    },
    isPage(page) {
        return this.pages.includes(page);
    },
    isGame(game) {
        return this.games.includes(game);
    },
    async set(path) {
        const page = path.split('/')[0]
        if (this.showing === page) return;
        if (this.isPage(page)) {
            if (page === 'game') {
                const game = path.split('/')[1];
                if (this.isGame(game)) {
                    await import(`./SSR/games/${game}/main.js`)
                    this.showing = "game-"+game;
                    return;
                }
            }
            if (page === 'account' && !Alpine.store('user').isConnected()){

            } else {
                this.showing = page;
            }
        } else {
            this.showing = "404";
        }
    },
});

Alpine.store('music', {
    player: null,
    isPlaying: null,
    init() {
        this.player = document.getElementById("backgroundMusic");
        this.setVolume(0.5);
        this.isPlaying = false;
    },
    start() {
        this.player.play();
        this.isPlaying = true;
    },
    pause() {
        this.player.pause();
        this.isPlaying = false;
    },
    setVolume(newVolume){
        this.player.volume = newVolume;
    }
});

Alpine.data(LoginAlpineData.dataKey, LoginAlpineData.data);
Alpine.data(AccountAlpineData.dataKey, AccountAlpineData.data);
Alpine.data(RankBoardAlpineData.dataKey, RankBoardAlpineData.data);
Alpine.data(GamesInventoryAlpineData.dataKey, GamesInventoryAlpineData.data);
Alpine.data(ShopAlpineData.dataKey, ShopAlpineData.data);
Alpine.data(AlpineSuccessData.dataKey, AlpineSuccessData.data);
Alpine.data(ShopBaseAlpineData.dataKey, ShopBaseAlpineData.data);

window.addEventListener('alpine:init', () => {
    if (UserData.getExistingUserData().isNewUserData()) {
        Alpine.store('pages').set('login');
    } else {
        Alpine.store('pages').set(Alpine.store('pages').getPageByURL());
    }

    Alpine.store('music').init()

    setTimeout(() => {
        document.getElementById("pageLoader").classList.toggle("!hidden", true);
    }, 1000);
});

Alpine.start();

