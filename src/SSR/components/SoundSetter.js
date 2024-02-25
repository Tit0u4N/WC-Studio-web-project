// import {setMusicVolume} from "../../entry-client.js";

export const SoundSetter = (title, musicWavFileUrl) => {

    // function toggleMusic() {}

    return `
    <div class="flex flex-row items-center gap-6">
        <p class="pt-1">${title}</p>
        
        <label class="inline-flex items-center cursor-pointer rounded-full border-2 border-[#EDC1FE]">
          <!-- checked car la musique est activée par défaut ; les eventListenners prendront le relais par la suite -->  
          <input type="checkbox" checked class="sr-only peer" id="settingsMusicToggleButton">
          <div class="relative w-11 h-6 bg-transparent rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
          peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border 
          after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#EDC1FE]"></div>
        </label>

        
        <input type="range" min="0" max="1.0" step="0.1" value="0.5" x-data="$store.music" x-on:change="setVolume($event.target.value)"
               class="range accent-[#EDC1FE]">
        

    </div>
    `
}