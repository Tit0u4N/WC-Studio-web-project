import {UserData} from "../../js/global/UserData.js";

export const success = [
    {
        id: 1,
        name: "Memory Starter",
        game: "memory",
        imgPath: "memorycover.png",
    },
    {
        id: 2,
        name: "Snake Starter",
        game: "snake",
        imgPath: "snakecover.png",
    },
    {
        id: 3,
        name: "Game Starter",
        game: "memory & snake",
        imgPath: "covergames.png",
    },
    {
        id: 4,
        name: "SpeedRun Easy",
        game: "memory",
        imgPath: "success-icon.png",
    },
    {
        id: 5,
        name: "SpeedRun Medium",
        game: "memory",
        imgPath: "success-icon.png",
    },
    {
        id: 6,
        name: "SpeedRun HARD",
        game: "memory",
        imgPath: "success-icon.png",
        acquired: false
    },
    {
        id: 7,
        name: "Speedy Gonzales",
        game: "memory",
        imgPath: "success-icon.png",
    },
    {
        id: 8,
        name: "Did you read the rules?",
        game: "snake",
        imgPath: "DidYouReadTheRules.png",
    },
    {
        id: 9,
        name: "You're not eatable",
        game: "snake",
        imgPath: "YouNotEatable.png",
    },
    {
        id: 10,
        name: "OUCH! That hurts!",
        game: "snake",
        imgPath: "ThatHurt.png",
    },
    {
        id: 11,
        name: "Why are you running?",
        game: "snake",
        imgPath: "ThatHurt.png",
    },
    {
        id: 12,
        name: "Where are a you",
        game: "snake",
        imgPath: "WhereAreYou.png",
    },
    {
        id: 13,
        name: "Not enough money",
        game: "Shop",
        imgPath: "Notenoughmoney.png"
    }

]

const alpinDataKey = 'success'

const SuccessItem = (id, name, game, imgPath) => {
    return `
    <div>
        <div x-data="${alpinDataKey}" class="success-background flex flex-col justify-center items-center overflow-visible rounded-lg">
            <div :class="isUnlocked(${id}) ? 'isUnlocked' : ''" class="success-image-container h-full w-2/3 rounded-full border-4">
                <img src="/assets/succes/${imgPath}" alt="succes-icon" class="mx-auto p-2">
            </div>
            <div  class="flex flex-col justify-evenly items-center h-2/3">
                <p class="success-name-text font-light text-slate-50 text-center">${name}</p>
                <p class="success-game-name-text font-thin">${game}</p>
            </div>
        </div>
    </div>
    `
}

export const Success = () => {
    return `
        <div class="flex flex-col items-center gap-1">
            <h1>SUCCESS</h1>
            
            <!-- success list div --> 
            <div class="flex gap-4 pt-[70px] pb-5 w-full px-4 overflow-x-auto">
                ${success.map(s => SuccessItem(s.id, s.name, s.game, s.imgPath)).join('')}
            </div>
        </div>
    `
}

export const AlpineSuccessData = {
    dataKey: alpinDataKey,
    data: () => ({
        isUnlocked(id) {
            return UserData.getExistingUserData().getSuccess().includes(id)
        }
    })
}