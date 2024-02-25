import './style/style.scss'
import Alpine from 'alpinejs'
import {AccountAlpineData} from "./SSR/pages/Account.js";
import {RankBoardAlpineData} from "./SSR/components/RankBoard.js";
import {LoginAlpineData} from "./SSR/pages/Login.js";
import {UserData} from "./js/global/UserData.js";
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
        if (this.showing === page) return;
        this.showing = page;
    },
});

Alpine.store('music', {
    player: null,
    isPlaying: null,
    init() {
        this.player = document.getElementById("backgroundMusic");
        this.setVolume(0.5);
        this.isPlaying = false;
        console.log("music is ready to play !");
    },
    start() {
        console.log("play !");
        this.player.play();
        this.isPlaying = true;
    },
    pause() {
        console.log("paused !");
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
Alpine.data(AlpineSuccessData.dataKey, AlpineSuccessData.data);

window.addEventListener('alpine:init', () => {
    if (UserData.getExistingUserData().isNewUserData()) {
        Alpine.store('pages').set('login');
    }

    Alpine.store('music').init()
    /*
    let musicLaunched = false;

    window.addEventListener('click', () => {
        if (!musicLaunched) {
            Alpine.store('music').start();
            musicLaunched = true;
        }
    });
    */

    setTimeout(() => {
        document.getElementById("pageLoader").classList.toggle("!hidden", true);
    }, 1000);
});

Alpine.start();

