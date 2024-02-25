export const Audios =
    `
    <div class="fixed bottom-0 left-0 m-4 size-[40px] container-style--hight hover:cursor-pointer flex rounded-xl p-1">
        <button x-data x-on:click="$store.music.start()" x-show="!$store.music.isPlaying">
        <img src="/assets/icons/music-note-slash-svgrepo-com.svg" alt="slashed music note">
        <button x-data x-on:click="$store.music.pause()" x-show="$store.music.isPlaying">
        <img src="/assets/icons/music-note-svgrepo-com.svg" alt="music note">
        <audio hidden loop id="backgroundMusic">
          <source src="/assets/musics/toothlesssynthwave100bpmtest2.mp3" type="audio/mp3">
        </audio>
    </div>
    `