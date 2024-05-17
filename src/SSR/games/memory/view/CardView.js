import {UserData} from "../../../../js/global/UserData.js";

export class CardView {
    static flippedClass = ['flip-right', 'flip-left', 'flip-up', 'flip-down', 'flip-diagonal-right', 'flip-diagonal-left', 'flip-inverted-diagonal-right', 'flip-inverted-diagonal-left']
    static flippedAnimDuration = 500;
    static THEME = CardView.getTheme();
    constructor(cardModel, gridController) {
        this.cardModel = cardModel;
        this.type = cardModel.type;
        this.gridController = gridController;
        const tempDOM = this.createCard();
        this.cardDOM = tempDOM.div;
        this.frontCardDOM = tempDOM.frontCard;
        this.backCardDOM = tempDOM.backCard;
        this.cardImgURL = this.getImgURL();
        this.isFlipped = false;

        this.addEventListeners();
    }

    createCard() {
        const div = document.createElement('div');
        div.classList.add('memory--card');
        div.classList.add(this.getFlippedClass());
        const frontCard = document.createElement('div');
        frontCard.classList.add('front');
        const backCard = document.createElement('div');
        backCard.classList.add('back');
        div.appendChild(frontCard);
        div.appendChild(backCard);
        return {div, frontCard, backCard};
    }

    addEventListeners() {
        this.cardDOM.addEventListener('click', () => {
            this.gridController.selectCard(this);
        });
    }

    getImgURL() {
        return `/assets/games/memory/themes/${CardView.THEME}/card-${this.type}.webp`
    }
    static getTheme() {
        const user = UserData.getExistingUserData();
        const skins = user.getItems().games.memory.skins;
        let theme = "default";
        Object.keys(skins).forEach(skin => {
            if (skins[skin].Selected) {
                theme = skin;
            }
        });
        return theme;
    }

    toggleShowImg(show) {
        if (show) {
            this.frontCardDOM.style.setProperty('--img-front-card', `url(${this.cardImgURL})`);
        } else {
            this.frontCardDOM.style.setProperty('--img-front-card', null);
        }
    }

    getFlippedClass() {
        return CardView.flippedClass[Math.floor(Math.random() * CardView.flippedClass.length)];
    }


    renderFlip(isFlipped) {
        if (isFlipped && !this.isFlipped) {
            this.toggleShowImg(true);
            this.cardDOM.classList.add('selected');
        } else if (!isFlipped){
            this.cardDOM.classList.remove('selected');
            setTimeout(() => {
                this.toggleShowImg(false);
            }, CardView.flippedAnimDuration);
        }
        return CardView.flippedAnimDuration;
    }

    renderFound() {
        this.cardDOM.classList.add('found');
    }


}