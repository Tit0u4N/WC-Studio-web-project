import {CardModel} from "./CardModel.js";
import _ from "../../../../js/libs/lodash.js";

export class GridModel {

    constructor() {

    }

    generateCards(numberOfPairs) {
        this.cards = [];
        for (let i = 0; i < numberOfPairs; i++) {
            this.cards.push(new CardModel(i));
            this.cards.push(new CardModel(i));
        }

        this.shuffleCards();
    }

    shuffleCards() {
        this.cards = _.shuffle(this.cards);
    }
}