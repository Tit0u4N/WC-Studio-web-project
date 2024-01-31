import {ButtonHover} from "../components/ButtonHover.js";
import {Inventory} from "../components/AccountSubPages/Inventory.js";
import {layoutSubPage} from "../layouts/layoutSubPage.js";

const Buttons = [
    ButtonHover('Inventory'),
    ButtonHover('Settings'),
    ButtonHover('Informations'),
    ButtonHover('Disconnect')
]

const SubPages = [
        Inventory
    ]


export const Account =
    `
        ${layoutSubPage('Account', Buttons, SubPages)}
    `


export const AccountAlpineData = {
    dataKey: 'account',
    data : () => ({
        showing: 'inventory',
        isShowing(subpage) {
            return this.showing === subpage;
        },
        setShowing(subpage) {
            this.showing = subpage;
        }
    })
}
