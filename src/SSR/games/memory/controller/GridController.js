export class GridController {

    constructor(gridModel) {
        this.gridModel = gridModel;
        this.gridView = null;

        this.selectedCard = null;
        this.canSelect = true;
    }

    init() {
        this.gridModel.generateCards(8);
        this.gridView.init();
    }

    setView(view) {
        this.gridView = view;
    }

    wait(time) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, time);
        });
    }

    async selectCard(card) {
        if (!this.canSelect) {
            return;
        }
        if (this.selectedCard === card) {
            this.selectedCard.renderFlip(false);
            card.renderFlip(false);
            this.selectedCard = null
            return;
        }
        this.canSelect = false;
        if (this.selectedCard === null) {
            await this.wait(card.renderFlip(true));
            this.selectedCard = card
        } else if (this.selectedCard.cardModel.isSameType(card.cardModel)) {
            await this.wait(card.renderFlip(true) + 1000);
            this.selectedCard.renderFound();
            card.renderFound();
            this.selectedCard.cardModel.found();
            card.cardModel.found();
            this.selectedCard = null;
        } else {
            await this.wait(card.renderFlip(true) + 1000);
            this.selectedCard.renderFlip(false);
            card.renderFlip(false);
            this.selectedCard = null;
        }
        this.canSelect = true;
    }

}