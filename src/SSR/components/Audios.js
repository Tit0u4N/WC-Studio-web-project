import {UserData} from "../../js/global/UserData.js";

export const Audios =
    `
    <!-- container-style--hight --> 
    <div class="fixed h-[35px] w-[35px] bg-transparent hover:cursor-pointer flex mt-1 ml-1">
        <button x-data @click="$store.music.start()" x-show="!$store.music.isPlaying">
        <img src="assets/icons/music-note-slash-svgrepo-com.svg">
        <button x-data @click="$store.music.pause()" x-show="$store.music.isPlaying">
        <img src="assets/icons/music-note-svgrepo-com.svg">
    </div>

    <audio hidden loop id="backgroundMusic">
      <source src="/assets/musics/16bit toothless dancing synthwave 100bpm cmaj.wav" type="audio/wav">
      <source src="/assets/musics/toothlesssynthwave100bpmtest2.mp3" type="audio/mp3">
    </audio>
    `