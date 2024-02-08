import {GridController} from "./GridController.js";

export class MainMemoryController {

    constructor(MainModel) {
        this.MainModel = MainModel;
        this.MainView = null;

        this.gridController = new GridController(this.MainModel.getGridModel());

        this.gameMode = GameMode.EASY;
    }

    setView(MainView) {
        this.MainView = MainView;
        this.gridController.setView(MainView.getGridView());
    }

    getGridController() {
        return this.gridController;
    }

    init() {
        this.gridController.init(GameMode[this.gameMode]);
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