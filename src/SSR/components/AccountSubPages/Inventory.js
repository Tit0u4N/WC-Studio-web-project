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
                                         :class="{ 'scale-110 bg-purple-400': isGameSkinSelected(game, skin) }"
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


export const SkinsGames = {
            "snake": ["default", "purple"],
            "memory": ["default"],
        }


export const GamesInventoryAlpineData = {
    dataKey,
    data: () => ({
        games: SkinsGames,
        selectedGames: {},
        init(){
            for (let game in this.games){
                this.selectedGames[game] = this.games[game][0];
            }
        },
        selectGameSkin(gameKey, skinKey) {
            this.selectedGames[gameKey] = skinKey;
        },
        isGameSkinSelected(gameKey, skinKey) {
            return this.selectedGames[gameKey] === skinKey;
        },
        getGames() {
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

