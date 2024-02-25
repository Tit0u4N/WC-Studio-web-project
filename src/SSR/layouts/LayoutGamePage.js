import {HeaderStatic} from "../components/Header.js";

export const LayoutGamePage = (gameName, content) => {

    return `
        ${HeaderStatic}
        ${content}
    `
}