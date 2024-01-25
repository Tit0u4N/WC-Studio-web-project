
export const KEY_USERDATA_LOCALSTORAGE = "userData-WC-Studio"

const USERDATA_DEFAULT = {
    info: {
        name: null,
        email: null,
        password: null,
    },
    settings : {
        musicEnable: true,
        soundEnable: true,
    },
    ranking: [
    ],
    achievements: [
    ],
    items: [
    ]
}

export class UserData{

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
        this.achievements = this.userDataJson.achievements;
    }

    isNewUserData() {
        return this.newUserData;
    }

    // Info

    getName() {
        return this.info.name.clone();
    }

    getEmail() {
        return this.info.email.clone();
    }

    getPassword() {
        return this.info.password.clone();
    }

    setName(name) {
        this.info.name = name;
        this.save();
    }

    setEmail(email) {
        this.info.email = email;
        this.save();
    }

    setPassword(password) {
        this.info.password = password;
        this.save()
    }

    // Settings

    getMusicEnable() {
        this.settings.musicEnable.clone();
    }

    getSoundEnable() {
        this.settings.soundEnable.clone();
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
    //TODO Définir le format des données de ranking

    // Achievements
    //TODO Définir le format des données de achievements

    // Items
    //TODO Définir le format des données d'items

    save() {
        localStorage.setItem(KEY_USERDATA_LOCALSTORAGE, JSON.stringify(this.userDataJson));
    }
}