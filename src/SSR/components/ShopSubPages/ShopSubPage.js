const dataKey = "GamesShop";

// Structure de données pour stocker les prix des skins
export const SkinsGames = {
    "snake": ["default", "purple"],
    "memory": ["default"],
};

// Structure de données pour stocker les prix des skins
export const SkinPrices = {
    "snake": {
        "default": 10, // Prix du skin "default" du jeu "snake"
        "purple": 15, // Prix du skin "purple" du jeu "snake"
    },
    "memory": {
        "default": 8, // Prix du skin "default" du jeu "memory"
    },
};

export const ShopSubPage = (id = "shop-base") => {
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
                                         :class="{ 'scale-110 bg-purple-400': isGameSkinSelected(game, skin), 'grayscale': isSkinPurchased(game, skin) }"
                                         class="game-skin-image cursor-pointer">
                                    <div class="text-sm" x-text="getSkinPrice(game, skin)" :class="{ 'hidden': isSkinPurchased(game, skin) }"></div>
                                </div>
                            </template>
                        </div>

                    </div>
                </template>
            </div>
        </div>
    `;
};

// Fonctionnalités pour la gestion des achats de skins
export const ShopAlpineData = {
    dataKey,
    data: () => ({
        games: SkinsGames,
        selectedGames: {},
        purchasedSkins: {}, // Tableau pour stocker les skins achetés
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
        isSkinPurchased(gameKey, skinKey) {
            return this.purchasedSkins[gameKey] && this.purchasedSkins[gameKey].includes(skinKey);
        },
        getGames() {
            return Object.keys(this.games);
        },
        getSkins(game) {
            return this.games[game];
        },
        // Récupérer le prix du skin
        getSkinPrice(gameKey, skinKey) {
            return this.isSkinPurchased(gameKey, skinKey) ? '' : `$${SkinPrices[gameKey][skinKey]}`;
        },
    }),
    mounted() {
        this.init();
    }
};





