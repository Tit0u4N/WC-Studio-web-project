import {Neon} from "./Neon.js";

export const NeonHeaderBar = (title) => {
    return `
    <div class="flex justify-start items-center gap-2">
        <h3 class="w-auto text-nowrap">${title}</h3>
        ${Neon()}
    </div>
    `
}