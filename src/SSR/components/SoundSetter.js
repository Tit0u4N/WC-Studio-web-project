export const SoundSetter = (title, musicWavFileUrl) => {
    return `
    <div class="flex flex-row items-center gap-6">
        <p class="pt-1">${title}</p> 
        <input type="range" min="0" max="1.0" step="0.01" value="0.50" x-data="$store.music" x-on:change="setVolume($event.target.value)"
               class="range accent-[#EDC1FE]">
    </div>
    `
}