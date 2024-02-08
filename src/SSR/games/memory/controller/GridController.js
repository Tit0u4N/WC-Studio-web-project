export class GridController {

    constructor(gridModel, athController) {
        this.gridModel = gridModel;
        this.athController = athController;
        this.gridView = null;

        this.selectedCard = null;
        this.canSelect = true;
    }

    init(nbPairs = 8) {
        this.gridModel.generateCards(nbPairs);
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
            // Prevent selecting a card if the game is not ready
            return;
        }

        this.athController.addMove();

        if (this.selectedCard === card) {
            // Prevent selecting a card if the card is already found
            this.selectedCard.renderFlip(false);
            card.renderFlip(false);
            this.selectedCard = null
            return;
        }
        this.canSelect = false;
        if (this.selectedCard === null) {
            // Select the first card
            await this.wait(card.renderFlip(true));
            this.selectedCard = card
        } else if (this.selectedCard.cardModel.isSameType(card.cardModel)) {
            // Select the second good card
            await this.wait(card.renderFlip(true) + 1000);
            this.selectedCard.renderFound();
            card.renderFound();
            this.selectedCard.cardModel.found();
            card.cardModel.found();
            this.selectedCard = null;
            this.athController.addPair();
        } else {
            // Select the second bad card
            await this.wait(card.renderFlip(true) + 1000);
            this.selectedCard.renderFlip(false);
            card.renderFlip(false);
            this.selectedCard = null;
        }
        this.canSelect = true;
    }

}