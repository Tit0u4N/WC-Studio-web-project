export const SoundSetter = (title, musicWavFileUrl) => {
    return `
    <div class="flex flex-row gap-6">
        <p>${title}</p>
        <!-- fonctions js pour controler le son 
        <audio controls src="${musicWavFileUrl}">
        </audio>
        <p> ON / OFF button </p>
        <p> volume slider </p>
        -->
    </div>
    `
}