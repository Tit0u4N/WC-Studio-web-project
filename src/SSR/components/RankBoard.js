const dataKey = 'rankBoard';

const playerRow = (index) => {
    return `
        <div class="flex">
            <div class="border px-4 py-2 w-1/4">
                <span x-text="${index+1}" class="block text-center"></span>
            </div>
            <div class="border px-4 py-2 w-1/4">
                <span x-text="getPlayerData(${index}).name" class="block text-center"></span>
            </div>
            <div class="border px-4 py-2 w-1/4">
                <span x-text="getPlayerData(${index}).score" class="block text-center"></span>
            </div>
            <div class="border px-4 py-2 w-1/4">
                <span x-text="getPlayerData(${index}).success" class="block text-center"></span>
            </div>
        </div>
    `;
};

const renderHeaderTable = () => {
    return `
    <div class="flex items-center">
    <select class="border px-4 py-2 w-1/4" x-on:change="keepGame($event.target.value)">
    <option value="all">All</option>
    <template x-for="game in getGames()">
        <option x-text="game" x-bind:value="game"></option>
    </template>
    </select>
    
    </div>
        
        <div class="flex">
            <div class="border bg-gray-200 px-4 py-2 w-1/4">Rank</div>
            <div class="border bg-gray-200 px-4 py-2 w-1/4">Name</div>
            <div class="border bg-gray-200 px-4 py-2 w-1/4" x-on:click="sortByPoints()" x-bind:class="{ 'bg-purple-200': pointSelected }">Points</div>
            <div class="border bg-gray-200 px-4 py-2 w-1/4" x-on:click="sortBySuccess()" x-bind:class="{ 'bg-purple-200': !pointSelected}">Success</div>
        </div>
    `;

};




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
    <h1 class="text-4xl font-bold mb-6">Classement des Joueurs</h1>
    <div x-data="${dataKey}" x-init="initPlayersData()" class="w-2/4 mx-auto float-right">
            ${renderHeaderTable()}
            ${renderPlayerTable()}

    </div>
`;


export const RankBoardAlpineData = { dataKey, data : () => ({
        initPlayersData() {
            for (let i = 0; i < 10; i++) {

                this.playersData.push({
                    name: `Player${i}`,
                    score : 0,
                    success: 0,
                    game: {}
                });
                for (let j = 0; j < this.games.length; j++) {
                    this.playersData[i].game[this.games[j]] = {
                        score: Math.floor(Math.random() * 100),
                        success: Math.floor(Math.random() * 100)
                    }
                    this.playersData[i].score += this.playersData[i].game[this.games[j]].score;
                    this.playersData[i].success += this.playersData[i].game[this.games[j]].success;
                }

            }
            this.sortByPoints();
        },
        playersData: [],
        pointSelected: true,
        games : ["Chess", "Poker", "Memory", "Tetris"],

        getPlayerData(index) {
            return this.playersData[index];
        },
        getGames() {
            return this.games;
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
            console.log(game);
            if (game === 'all') {
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
                    this.playersData[i].score = this.playersData[i].game[game].score;
                    this.playersData[i].success = this.playersData[i].game[game].success;
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
