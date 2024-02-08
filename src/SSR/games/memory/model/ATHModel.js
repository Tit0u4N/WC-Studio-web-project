export class ATHModel {

    constructor() {
        this.timer = 0;
        this.moves = 0;
        this.pairs = 0;
    }

    getTimer() {
        return this.timer;
    }

    getMoves() {
        return this.moves;
    }

    getPairs() {
        return this.pairs;
    }

    reset() {
        this.timer = 0;
        this.moves = 0;
        this.pairs = 0;
    }

}