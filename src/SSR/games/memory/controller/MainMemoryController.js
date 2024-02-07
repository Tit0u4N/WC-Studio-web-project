import {GridController} from "./GridController.js";

export class MainMemoryController {

    constructor(MainModel) {
        this.MainModel = MainModel;
        this.MainView = null;

        this.gridController = new GridController(this.MainModel.getGridModel());
    }

    setView(MainView) {
        this.MainView = MainView;
        this.gridController.setView(MainView.getGridView());
    }

    getGridController() {
        return this.gridController;
    }

    init() {
        this.gridController.init();
    }

}