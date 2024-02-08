import {GridController} from "./GridController.js";
import {ATHController} from "./ATHController.js";

export class MainMemoryController {

    constructor(MainModel) {
        this.MainModel = MainModel;
        this.MainView = null;

        this.athController = new ATHController(this.MainModel.getATHModel());
        this.gridController = new GridController(this.MainModel.getGridModel(), this.athController);

        this.gameMode = GameMode.EASY;
    }

    setView(MainView) {
        this.MainView = MainView;
        this.gridController.setView(MainView.getGridView());
        this.athController.setView(MainView.getATHView());
    }

    getGridController() {
        return this.gridController;
    }

    getATHController() {
        return this.athController;
    }

    init() {
        this.MainView.toggleShowControlPanel(false);
        this.gridController.init(GameMode[this.gameMode]);
        this.athController.init();
    }

    setGameMode(mode) {
        if (mode in GameMode) {
            this.gameMode = mode;
        }
    }

}

const GameMode = {
    EASY: 6,
    MEDIUM: 8,
    HARD: 10,
    VERYHARD: 12
}