export const GameCard = (gameName, idGame = gameName.toLowerCase(), link = true) => {
    const alpineProps = link ? `x-data x-on:click="$store.pages.set('game/${idGame}')"` : '';
    return `
        <div ${alpineProps} class="bg-[#3D225D] rounded-3xl flex justify-center items-center text-white">${gameName}</div>
    `
}