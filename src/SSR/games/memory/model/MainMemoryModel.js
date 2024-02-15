import {GridModel} from "./GridModel.js";
import {ATHModel} from "./ATHModel.js";

export class MainMemoryModel {

    constructor() {
        this.gridModel = new GridModel();
        this.athModel = new ATHModel();
    }

    getGridModel() {
        return this.gridModel;
    }

    getATHModel() {
        return this.athModel;
    }
}