import {GridView} from "./GridView.js";

export class MainMemoryView {

    constructor(MainModel, MainController) {
        this.MainModel = MainModel;
        this.MainController = MainController;

        this.parentDOM = document.getElementById("memoryGameContainer");

        this.gridView = new GridView(this.parentDOM, this.MainModel.getGridModel(), this.MainController.getGridController());

        this.MainController.setView(this);
    }

    getGridView() {
        return this.gridView;
    }

}