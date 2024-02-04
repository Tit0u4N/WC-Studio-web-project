const dataKey = 'rankBoard';

const playerRow = (index) => {
    return `
        <div class="flex ">
            <div class=" border-r-2 border-t-2 px-4 py-2 w-2/12">
                <span x-text="getPlayerData(${index}).position" class="text-center "></span>
            </div>
            <div class="border-r-2 border-t-2 px-4 py-2 w-6/12">
                <span x-text="getPlayerData(${index}).name" class="  text-center  "></span>
            </div>
            <div class="border-r-2 border-t-2 px-4 py-2 w-4/12">
                <span x-text="getPlayerData(${index}).score" class=" text-center"></span>
            </div>
            <div class=" border-t-2 px-4 py-2 w-4/12">
                <span x-text="getPlayerData(${index}).success" class=" text-center"></span>
            </div>
        </div>
    `;
};


const renderFilter = () => {
return `
    <div class="flex flex-col [80%]: flex-row">
        <div x-on:click="keepGame('all')" :class="{ 'bg-purple-200': selectedGame === 'all' }" class="cursor-pointer text-white p-2 w-full md:w-auto md:hover:bg-gray-300 md:rounded-md mb-2 md:mb-0">All</div>

        <template x-for="(game, index) in getGames()" :key="game">
            <div x-on:click="keepGame(game)" :class="{ 'bg-purple-200': selectedGame === game }" class="cursor-pointer text-white p-2 w-full md:w-auto md:hover:bg-purple-300 transition duration-300 ease-in-out rounded-md mb-2 md:mb-0" x-text="game"></div>
        </template>

        <button x-on:click="showMoreGames" class="cursor-pointer text-black p-2 bg-purple-100 hover:bg-purple-300 transition duration-300 ease-in-out rounded-md w-full md:w-auto">More</button>
    </div>
`;

};


const renderHeaderTable = () => {
    return `
       <div class="flex text-white">
    <div class="border-t-2 px-4 py-2  w-2/12">#</div>
    <div class="border-t-2 px-4 py-2 w-6/12">Name</div>
    <div class="border-t-2 px-4 py-2 w-4/12 hover:bg-purple-300 transition duration-300 ease-in-out " x-on:click="sortByPoints()" x-bind:class="{'bg-purple-200 rounded-md ': pointSelected }">Points</div>
    <div class="border-t-2 px-4 py-2 w-4/12 hover:bg-purple-300 transition duration-300 ease-in-out " x-on:click="sortBySuccess()" x-bind:class="{ 'bg-purple-200 rounded-md ': !pointSelected}">Success</div>
</div>
    `;

};

const renderPlayerPagesNavigation = () => {
    return `
            <div class="flex items-center space-x-2 justify-center">
    <button x-on:click="showPastPlayersPage" class="cursor-pointer text-white p-2  hover:bg-purple-300 transition duration-300 ease-in-out rounded-md">
        &larr; <!-- Flèche vers la gauche -->
    </button>
    
    <template x-for="index in getNumberPlayerPages()" :key="index">
        <button
            x-on:click="getToPlayerPages(index)"
            :class="{ 'bg-purple-200': currentPlayersPages === index-1 }"
            class="cursor-pointer text-white p-2 hover:bg-purple-300 transition duration-300 ease-in-out rounded-md"
            x-text="index"
        ></button>
    </template>

    <button x-on:click="showNextPlayersPage" class="cursor-pointer text-white p-2  hover:bg-purple-300 transition duration-300 ease-in-out rounded-md">
        &rarr; <!-- Flèche vers la droite -->
    </button>
</div>
 
`;

}




let playersData = []; // Store player data for sorting

const sortByPoints = () => {
    playersData.sort((a, b) => b.points - a.points);
    renderPlayerTable(playersData);
};

const sortBySuccess = () => {
    playersData.sort((a, b) => b.success - a.success);
    renderPlayerTable(playersData);
};

const renderPlayerTable = () => {
    let rows = '';
    for (let i = 0; i < 10; i++) {
        rows += playerRow(i);
    }
    return rows;
};




export const RankBoard = `
    <div x-data="${dataKey}" x-init="initPlayersData()" class="rankBoard w-1/4 mx-auto float-right  rounded-3xl border-2 ">
            <h1 class="font-bold text-center">Rank</h1>
            ${renderFilter()}
            <div class="flex flex-col overflow-auto ">
                ${renderHeaderTable()}
                ${renderPlayerTable()}
            </div>
            ${renderPlayerPagesNavigation()}


    </div>
`;


export const RankBoardAlpineData = { dataKey, data : () => ({
        initPlayersData() {
            for (let i = 0; i < 100; i++) {
                this.playersData.push({
                    name: `Player${i}`,
                    score : 0,
                    success: 0,
                    game: {}
                });
                for (let j = 0; j < this.games.length; j++) {
                    this.playersData[i].game[this.games[j]] = {
                        score: Math.floor(Math.random() * 1000),
                        success: Math.floor(Math.random() * 10)
                    }
                    this.playersData[i].score += this.playersData[i].game[this.games[j]].score;
                    this.playersData[i].success += this.playersData[i].game[this.games[j]].success;
                }

            }
            this.sortByPoints();
        },
        playersData: [],
        pointSelected: true,
        games : ["Chess", "Poker", "Memory", "Tetris", "Sudoku", "Minesweeper"],
        numberOfGames: 0,
        selectedGame: 'all',
        numberOfGamesPerPage: 4,
        currentGamesPages: 0,
        numberOfPlayersPerPage: 10,
        currentPlayersPages: 0,
        maxPlayersPages: 3,


        getPlayerData(index) {
            let data = this.getPlayerPages();
            return data[index];
        },
        getGames() {
            let pages = Math.ceil(this.games.length / this.numberOfGamesPerPage);
            let start = this.currentGamesPages * this.numberOfGamesPerPage;
            let end = start + this.numberOfGamesPerPage;
            if (end > this.games.length) {
                let diff = end - this.games.length;

                return this.games.slice(start, this.games.length).concat(this.games.slice(0, diff));
            }
            return this.games.slice(start, end);
        },
        getNumberPlayerPages() {
            return this.maxPlayersPages;
        },
        getToPlayerPages(index) {
            return this.currentPlayersPages = index-1;
        },
        getPlayerPages() {
            let pages = Math.ceil(this.playersData.length / this.numberOfPlayersPerPage);
            let start = this.currentPlayersPages * this.numberOfPlayersPerPage;
            let end = start + this.numberOfPlayersPerPage;
            let output = this.playersData.slice(start, end);
            for (let i = 0; i < output.length; i++) {
                output[i].position = start + i + 1;
            }
            return output;
        },
        getNumberOfGames() {
            return this.games.length + 1;
        },
        showMoreGames() {
            this.currentGamesPages = (this.currentGamesPages + 1) % (Math.ceil(this.games.length / this.numberOfGamesPerPage));
            this.selectedGame = 'all';
        },
        showNextPlayersPage() {
            if (this.currentPlayersPages === Math.ceil(this.playersData.length / this.numberOfPlayersPerPage) - 1) {
                return;
            }
            this.currentPlayersPages++;
        },
        showPastPlayersPage() {
            if (this.currentPlayersPages === 0) {
                return;
            }
            this.currentPlayersPages--;
        },
        sortByPoints() {
            this.playersData.sort((a, b) => b.score - a.score);
            this.pointSelected = true;
        },
        sortBySuccess() {
            this.playersData.sort((a, b) => b.success - a.success);
            this.pointSelected = false;
        },
        keepGame(game) {
            this.selectedGame = game;
            if (this.selectedGame === 'all') {
                for (let i = 0; i < this.playersData.length; i++) {
                    this.playersData[i].score = 0;
                    this.playersData[i].success = 0;
                    for (let key in this.playersData[i].game) {
                        this.playersData[i].score += this.playersData[i].game[key].score;
                        this.playersData[i].success += this.playersData[i].game[key].success;
                    }
                }
            }
            else {
                for (let i = 0; i < this.playersData.length; i++) {
                    this.playersData[i].score = this.playersData[i].game[this.selectedGame].score;
                    this.playersData[i].success = this.playersData[i].game[this.selectedGame].success;
                }
            }
            if (this.pointSelected) {
                this.sortByPoints();
            }
            else {
                this.sortBySuccess();
            }

        }

}) };
