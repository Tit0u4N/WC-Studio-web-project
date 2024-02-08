export class ATHView {

    constructor(parentDOM, ATHModel, ATHController) {
        this.ATHModel = ATHModel;
        this.ATHController = ATHController;
        this.ATHContainerDOM = parentDOM.querySelector('#memory-ath');

        this.timerDOM = this.ATHContainerDOM.querySelector('#memory-timer');
        this.movesDOM = this.ATHContainerDOM.querySelector('#memory-moves');
        this.pairsDOM = this.ATHContainerDOM.querySelector('#memory-pairs');
    }

    toggleShow(show) {
        this.ATHContainerDOM.classList.toggle('hidden', !show);
    }

    updateTimer() {
        let ds = this.ATHModel.getTimer();
        let s = Math.floor(ds / 10);
        let m = Math.floor(s / 60);
        s = s % 60;
        ds = ds % 10;
        this.timerDOM.innerText = `${m}:${s}.${ds}`;
    }

    updateMoves() {
        this.movesDOM.innerText = this.ATHModel.getMoves();
    }

    updatePairs() {
        this.pairsDOM.innerText = this.ATHModel.getPairs();
    }
}