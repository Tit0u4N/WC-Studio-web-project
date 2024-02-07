import './memory.scss'
import {MainMemoryModel} from "./model/MainMemoryModel.js";
import {MainMemoryController} from "./controller/MainMemoryController.js";
import {MainMemoryView} from "./view/MainMemoryView.js";

const MemoryModel = new MainMemoryModel();
const MemoryController = new MainMemoryController(MemoryModel);
const MemoryView = new MainMemoryView(MemoryModel, MemoryController);

MemoryController.init();