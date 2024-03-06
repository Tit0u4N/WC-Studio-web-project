export const KEY_USERDATA_LOCALSTORAGE = "userData-WC-Studio"

const USERDATA_DEFAULT = {
    info: {
        username: null,
        password: null,
        money: 0,
    },
    settings: {
        musicEnable: true,
        soundEnable: true,
    },
    ranking: [],
    success: [],
    items: {
        games: {
            snake: {
                skins: {
                    default: {
                        Own: 1,
                        Selected: 1,
                        price: 100

                    },
                    purple: {
                        Own: 0,
                        Selected: 0,
                        price: 100
                    },
                    red: {
                        Own: 0,
                        Selected: 0,
                        price: 100
                    }
                }
            },
            memory: {
                skins: {
                    default: {
                        Own: 1,
                        Selected: 1,
                        price: 100
                    }
                }
            }
        }
    }
}

export class UserData {

    static getExistingUserData() {
        if (localStorage.getItem(KEY_USERDATA_LOCALSTORAGE)) {
            return new UserData(JSON.parse(localStorage.getItem(KEY_USERDATA_LOCALSTORAGE)));
        }
        return new UserData();
    }

    constructor(userDataJson = null) {
        if (userDataJson) {
            this.userDataJson = userDataJson;
            this.newUserData = false;
        } else {
            this.userDataJson = USERDATA_DEFAULT;
            this.newUserData = true;
        }

        this.info = this.userDataJson.info;
        this.settings = this.userDataJson.settings;
        this.ranking = this.userDataJson.ranking;
        this.success = this.userDataJson.success;
    }

    isNewUserData() {
        return this.newUserData;
    }

    // Info

    getUsername() {
        return this.info.username;
    }

    getPassword() {
        return this.info.password;
    }

    getMoney() {
        return this.info.money;
    }

    setUsername(username) {
        this.info.username = username;
        this.save();
    }

    setPassword(password) {
        this.info.password = password;
        this.save()
    }

    setMoney(money) {
        this.info.money = money;
        this.save()
    }

    addMoney(money) {
        this.setMoney(this.info.money + money);
    }

    removeMoney(money) {
        if (this.info.money - money < 0) {
            this.setMoney(0);
        }
        this.setMoney(this.info.money - money);
    }

    // Settings

    getMusicEnable() {
        return this.settings.musicEnable;
    }

    getSoundEnable() {
        return this.settings.soundEnable;
    }

    setMusicEnable(musicEnable) {
        this.settings.musicEnable = musicEnable;
        this.save();
    }

    setSoundEnable(soundEnable) {
        this.settings.soundEnable = soundEnable;
        this.save();
    }

    // Ranking
    getRanking() {
        return this.ranking;
    }
    setRanking(ranking, game) {
        this.userDataJson.ranking[game] = ranking;
        this.save();
    }

    // Success
    getSuccess() {
        return this.success;
    }

    setSuccess(success) {
        this.userDataJson.success = success;
        this.save();
    }

    addSuccess(success) {
        this.userDataJson.success.push(success);
        this.save();
    }


    // Items
    getItems() {
        return this.userDataJson.items;
    }

    setItems(items) {
        this.userDataJson.items = items;
        this.save();
    }

    // Games
    getSkinSelected(game) {
        let gameSkins = this.userDataJson.items.games[game].skins;
        for (const skin in gameSkins) {
            if (gameSkins[skin].Selected) {
                return skin;
            }
        }
        return "default";

    }

    save() {
        localStorage.setItem(KEY_USERDATA_LOCALSTORAGE, JSON.stringify(this.userDataJson));
    }

    reset() {
        localStorage.removeItem(KEY_USERDATA_LOCALSTORAGE);
    }
}