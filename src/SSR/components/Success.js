const success = [
    {
        id: 1,
        name: "First Game",
        game: "Game 1",
        imgPath: "success-icon.png",
    },
    {
        id: 2,
        name: "Second Game",
        game: "Game 2",
        imgPath: "success-icon.png",
    },
    {
        id: 3,
        name: "Third Game",
        game: "Game 3",
        imgPath: "success-icon.png",
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
        imgPath: "success-icon.png",
    },
    {
        id: 9,
        name: "You're not eatable",
        game: "snake",
        imgPath: "success-icon.png",
    },
    {
        id: 10,
        name: "OUCH! That hurts!",
        game: "snake",
        imgPath: "success-icon.png",
    },
    {
        id: 11,
        name: "Why are you running?",
        game: "snake",
        imgPath: "success-icon.png",
    },
    {
        id: 12,
        name: "Where are a you",
        game: "snake",
        imgPath: "success-icon.png",
    },
    {
        id: 13,
        name: "Not enough money",
        game: "Shop",
        imgPath: "success-icon.png"
    }

]

const alpinDataKey = 'success'

const SuccessItem = (id, name, game, imgPath) => {
    return `
    <div>
        <div x-data="${alpinDataKey}" class="success-background flex flex-col justify-center items-center overflow-visible rounded-lg">
            <div :class="isUnlocked(${id}) ? 'isUnlocked' : ''" class="success-image-container h-full w-2/3 rounded-full border-4">
                <img src="../../../public/assets/images/${imgPath}" alt="succes-icon" class="mx-auto p-2">
            </div>
            <div  class="flex flex-col justify-evenly items-center h-2/3">
                <p class="success-name-text font-light text-slate-50">${name}</p>
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
            <div class="flex gap-4 pt-[70px] w-full px-4 overscroll-x-auto">
                ${success.map(s => SuccessItem(s.id, s.name, s.game, s.imgPath)).join('')}
            </div>
        </div>

    `
}

export const AlpineSuccessData = {
    dataKey: alpinDataKey,
    data: () => ({
        isUnlocked(id) {
            return this.$store.user.data.getSuccess().includes(id)
        }
    })
}