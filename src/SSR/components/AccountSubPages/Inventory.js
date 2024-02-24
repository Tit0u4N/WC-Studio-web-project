

const dataKey = "GamesInventory";

export const Inventory = (id = "Inventory") => {
    return `
        <div>
            <h1 class="text-2xl font-bold mb-4">${id}</h1>
            <div x-data="${dataKey}">
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
                                         x-on:click="selectGameSkin(game, skin)"
                                         :class="{ 'grayscale ': !isGameSkinSelected(game, skin) }"
                                         class="game-skin-image cursor-pointer">
                                </div>
                            </template>
                        </div>

                    </div>
                </template>
            </div>
        </div>


    `;
};



export const GamesInventoryAlpineData = {
    dataKey,
    data: () => ({
        games: {},
        selectedGames: {},

        init() {
            let stocks = this.$store.user.data.getItems();


            for (const key in stocks.skins) {
                if (stocks.skins[key].Own === 0) {
                    continue;
                }
                const [game, skin] = key.split("-");
                if (!this.games[game]) {
                    this.games[game] = [];
                }
                if (!(this.games[game].includes(skin))) {
                    this.games[game].push(skin);
                }

                if (stocks.skins[key].Selected === 1) {
                    this.selectedGames[game] = skin;
                }

            }
        },
        selectGameSkin(gameKey, skinKey) {
            let stocks = this.$store.user.data.getItems();
            stocks.skins[`${gameKey}-${skinKey}`].Selected = 1;
            for (const key in stocks.skins) {
                if (key.startsWith(gameKey) && key !== `${gameKey}-${skinKey}`) {
                    stocks.skins[key].Selected = 0;
                }
            }
            this.$store.user.data.setItems(stocks);
            this.init();



        },
        isGameSkinSelected(gameKey, skinKey) {
            return this.selectedGames[gameKey] === skinKey;
        },
        getGames() {
            this.init();
            return Object.keys(this.games);
        },
        getSkins(game) {
            return this.games[game];
        },

    }),
    mounted() {
        this.init();
    }
};

