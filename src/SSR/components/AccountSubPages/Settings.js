import {NeonHeaderBar} from "../NeonHeaderBar.js";
import {SoundSetter} from "../SoundSetter.js";

export const Settings = (id = "Settings") => {
    return `
        <div>
            <h2>${id}</h2>
            <div class="pt-8">
                ${NeonHeaderBar("Sound")}
                <div class="p-4">
                    ${SoundSetter("Menu Background Music", "To Be Defined")}
                </div>
            </div>
        </div>
`
}