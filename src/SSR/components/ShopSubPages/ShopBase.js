const dataKey = "GamesShop";
export const ShopBase = (id = "shopbase") => {
    return `
        <div>
            <div x-data="${dataKey}">
            <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" x-on:change="toggleOwnedFilter" class="sr-only peer">
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-gray-700 dark:text-gray-300">Show only not owned skins</span>
            </label>
                <template x-for="(game, indexgame) in getGames()" :key="game">
                    <div class="mb-4 align-middle">
                    <div class="flex w-full items-center gap-2 mb-2">
                        <h2 class="text-lg font-semibold capitalize " x-text="game"></h2>
                        <div class="h-[2px] w-full bg-gradient-to-b from-pink-500 to-blue-500 shadow-md"></div>
                    </div>
                        <div class="flex flex-wrap">
                            <template x-for="(skin, skinKey) in getSkins(game)" :key="skin">
                                <div class="mr-4 mb-4"> <!-- Augmenté la marge à droite et en bas -->
                                    <img :src="'assets/games/' + game + '/themes/' + skin + '/preview.png'" 
                                         x-on:click="buySkin(game, skin)"
                                         :class="{ 'blur': !isOwned(game, skin) }"
                                         class="game-skin-image cursor-pointer">
                                        <span x-show="!isOwned(game, skin)" class="text-gray-500 text-sm" x-text="getSkinPrice(game, skin)"></span>
                                    </div>
                            </template>
                        </div>

                    </div>
                </template>
            </div>
        </div>


    `;
};


export const ShopBaseAlpineData = {
    dataKey,
    data: () => ({
        games: {},
        owneds: {},
        notowned: {},
        isFiltered: false,
        init() {
            function pushIntoObject(obj, key, value) {
                if (obj[key]) {
                    if (!obj[key].includes(value)) {
                        obj[key].push(value);
                    }
                } else {
                    obj[key] = [value];
                }
            }
            let stocks = this.$store.user.data.getItems();
            for (const key in stocks.games) {
                for (const skin in stocks.games[key].skins) {
                    if (stocks.games[key].skins[skin].Own) {
                        pushIntoObject(this.owneds, key, skin);
                    } else {
                        pushIntoObject(this.notowned, key, skin);
                    }

                }
            }

            this.getAllskins();
        },
        isOwned(gameKey, skinKey) {
            return this.owneds[gameKey].includes(skinKey);
        },
        getGames() {
            return Object.keys(this.games);
        },
        getSkins(game) {
            return this.games[game];
        },
        getSkinPrice(gameKey, skinKey) {
            let stocks = this.$store.user.data.getItems();
            return stocks.games[gameKey].skins[skinKey].price;
        },
        buySkin(game, skin) {
            if (this.owneds[game].includes(skin)) {
                return;
            }
            let stocks = this.$store.user.data.getItems();
            let price = stocks.games[game].skins[skin].price;
            let money = this.$store.user.getMoney();
            if (money >= price) {
                this.$store.user.data.removeMoney(price);
                stocks.games[game].skins[skin].Own = 1;
                this.$store.user.data.setItems(stocks);
                this.owneds[game].push(skin);
                this.notowned[game].splice(this.notowned[game].indexOf(skin), 1);

            } else {
                this.$store.user.data.addSuccess(13);
                alert('Not enough money')
            }
        },

        getAllskins() {
            this.games = {};

            for (const key in this.notowned) {
                this.games[key] = [];
                for (const skin in this.notowned[key]) {
                    this.games[key].push(this.notowned[key][skin]);
                }
            }
            for (const key in this.owneds) {
                if (!this.games[key]) {
                    this.games[key] = [];
                }
                for (const skin in this.owneds[key]) {
                    this.games[key].push(this.owneds[key][skin]);
                }
            }
        },

        toggleOwnedFilter() {
            this.isFiltered = !this.isFiltered;
            if (this.isFiltered) {
                this.games = this.notowned;
            } else {
                this.getAllskins();
            }
        },

    }),
    mounted() {
        this.init();
    }
};