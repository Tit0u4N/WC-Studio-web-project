import {GridView} from "./GridView.js";
import {ATHView} from "./ATHView.js";

export class MainMemoryView {

    constructor(MainModel, MainController) {
        this.MainModel = MainModel;
        this.MainController = MainController;

        this.parentDOM = document.getElementById("memoryGameContainer");
        this.controlPanelDOM = this.parentDOM.querySelector('#memory-control-panel');
        this.endGameDOM = this.parentDOM.querySelector('#memory-end-game');

        this.ATHView = new ATHView(this.parentDOM, this.MainModel.getATHModel(), this.MainController.getATHController());
        this.gridView = new GridView(this.parentDOM, this.MainModel.getGridModel(), this.MainController.getGridController());

        this.MainController.setView(this);

        this.addEventLister();
    }

    getGridView() {
        return this.gridView;
    }

    getATHView() {
        return this.ATHView;
    }

    addEventLister() {
        const select = this.parentDOM.querySelector('#memory-difficulty')
        select.addEventListener('change', () => {
            this.MainController.setGameMode(select.value);
        });

        const startButton = this.parentDOM.querySelector('#memory-start');
        startButton.addEventListener('click', () => {
            this.MainController.init();
        });

        const newGameButton = this.parentDOM.querySelector('#memory-new-game');
        newGameButton.addEventListener('click', () => {
            this.toggleShowEndGame(false);
            this.toggleShowControlPanel(true);
        });
    }

    toggleShowControlPanel(show) {
        this.controlPanelDOM.classList.toggle('hidden', !show);
    }

    toggleShowEndGame(show) {
        this.endGameDOM.classList.toggle('hidden', !show);
    }
}