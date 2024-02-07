import {GridModel} from "./GridModel.js";

export class MainMemoryModel {

    constructor() {
        this.gridModel = new GridModel();
    }

    getGridModel() {
        return this.gridModel;
    }
}