import {GridController} from "./GridController.js";
import {ATHController} from "./ATHController.js";
import {UserData} from "../../../../js/global/UserData.js";


export class MainMemoryController {

    constructor(MainModel) {
        this.MainModel = MainModel;
        this.MainView = null;

        this.athController = new ATHController(this.MainModel.getATHModel());
        this.gridController = new GridController(this.MainModel.getGridModel(), this.athController, this);

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
        UserData.getExistingUserData().addSuccess(5);
    }

    endGame() {
        this.MainView.toggleShowEndGame(true);
        const model = this.athController.getATHModel()
        const timer = model.getTimer() / 10;
        const userData = UserData.getExistingUserData();
        switch (this.gameMode) {
            case GameMode.EASY:
                if (timer < 30) {
                    userData.addSuccess(4);
                }
                break;
            case GameMode.MEDIUM:
                if (timer < 60) {
                    userData.addSuccess(5);
                }
                break;
            case GameMode.HARD:
                if (timer < 90) {
                    userData.addSuccess(6);
                }
                break;
            case GameMode.VERYHARD:
                if (timer < 120) {
                    userData.addSuccess(7);
                }
                break;
        }
    }

}

const GameMode = {
    EASY: 6,
    MEDIUM: 8,
    HARD: 10,
    VERYHARD: 12
}