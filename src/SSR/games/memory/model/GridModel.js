import {CardModel} from "./CardModel.js";
import _ from "../../../../js/libs/lodash.js";

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
        this.cards = _.shuffle(this.cards);
    }

    isAllCardsFound() {
        return this.countNotFoundCards() === 0;
    }

    countNotFoundCards() {
        return this.cards.filter(card => !card.isFind).length;
    }

}