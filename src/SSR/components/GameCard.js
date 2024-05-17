export const GameCard = (gameName, idGame = gameName.toLowerCase(), link = true) => {
    const alpineProps = link ? `x-data x-on:click="$store.pages.set('game/${idGame}')"` : '';
    const imgPath = link ? `/assets/games/${idGame}/cover.webp` : `./assets/images/soon.png`;
    return `
        <div ${alpineProps} class="bg-[#3D225D] rounded-3xl text-white flex flex-col bg-center bg-cover overflow-hidden h-[320px]"
            style="background-image: url('${imgPath}');"
        >
        <div class="game-title-container flex justify-center items-center bg-[#0000] w-full h-full hover:bg-[#00000020] transition-all duration-500">
            <h3 class="text-8xl text-center opacity-60 hover:opacity-100 transition-all duration-500">${gameName}</h3>
        </div>
        </div>
    `
}