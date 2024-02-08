export class ATHController {

    constructor(ATHModel) {
        this.ATHModel = ATHModel;
        this.ATHView = null;
    }

    setView(ATHView) {
        this.ATHView = ATHView;
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.ATHModel.timer++;
            this.ATHView.updateTimer();
        }, 100);
    }

    init() {
        this.ATHView.toggleShow(true);
        this.ATHView.updateTimer();
        this.ATHView.updateMoves();
        this.ATHView.updatePairs();
        this.startTimer();
    }

    reset() {
        clearInterval(this.timer);
        this.ATHModel.return()
    }

    addMove() {
        this.ATHModel.moves++;
        this.ATHView.updateMoves();
    }

    addPair() {
        this.ATHModel.pairs++;
        this.ATHView.updatePairs();
    }

}