import {CardView} from "./CardView.js";

export class GridView {
    constructor(parentNode, gridModel, gridController) {
        this.gridDOM = parentNode.querySelector('.memory-grid');
        this.gridModel = gridModel;
        this.gridController = gridController;
    }

    init() {
       this.createCards()
    }

    createCards() {
        const cardsDOM = [];
        this.gridModel.cards.forEach(card => {
            const cardDOM = new CardView(card, this.gridController);
            cardsDOM.push(cardDOM);
            this.gridDOM.appendChild(cardDOM.cardDOM);
        })

        return cardsDOM;
    }
}