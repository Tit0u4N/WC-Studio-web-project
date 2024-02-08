import {GridView} from "./GridView.js";

export class MainMemoryView {

    constructor(MainModel, MainController) {
        this.MainModel = MainModel;
        this.MainController = MainController;

        this.parentDOM = document.getElementById("memoryGameContainer");

        this.gridView = new GridView(this.parentDOM, this.MainModel.getGridModel(), this.MainController.getGridController());

        this.MainController.setView(this);

        this.addEventLister();
    }

    getGridView() {
        return this.gridView;
    }

    addEventLister() {
        const select = this.parentDOM.querySelector('#memory-difficulty')
        select.addEventListener('change', (e) => {
            this.MainController.setGameMode(select.value);
        });

        const startButton = this.parentDOM.querySelector('#memory-start');
        startButton.addEventListener('click', (e) => {
            this.MainController.init();
        });
    }

    hideControlPanel() {
        this.parentDOM.querySelector('#memory-control-panel').classList.add('hidden');
    }

    showControlPanel() {
        this.parentDOM.querySelector('#memory-control-panel').classList.remove('hidden');
    }

}