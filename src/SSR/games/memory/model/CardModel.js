export class CardModel {

    constructor(type) {
        this.type = type;
        this.isFind = false;
    }

    found() {
        this.isFind = true;
    }

    isSameType(card) {
        return this.type === card.type;
    }
}