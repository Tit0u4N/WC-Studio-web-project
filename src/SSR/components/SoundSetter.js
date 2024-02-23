export const SoundSetter = (title, musicWavFileUrl) => {
    return `
    <div class="flex flex-row gap-6">
        <p>${title}</p>
        <p> ON / OFF button </p>
        <p> volume slider </p>
    </div>
    `
}