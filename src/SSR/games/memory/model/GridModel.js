import {CardModel} from "./CardModel.js";

export class GridModel {

    constructor() {

    }

    generateCards(numberOfPairs) {
        this.cards = [];
        for (let i = 1; i <= numberOfPairs; i++) {
            this.cards.push(new CardModel(i));
            this.cards.push(new CardModel(i));
        }

        this.shuffleCards();
    }

    shuffleCards() {
        this.cards.sort(() => Math.random() - 0.5);
    }

    isAllCardsFound() {
        return this.countNotFoundCards() === 0;
    }

    countNotFoundCards() {
        return this.cards.filter(card => !card.isFind).length;
    }

}