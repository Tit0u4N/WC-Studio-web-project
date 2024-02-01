import {ButtonHover} from "../components/ButtonHover.js";
import {Inventory} from "../components/AccountSubPages/Inventory.js";
import {LayoutSubPage} from "../layouts/layoutSubPage.js";
import {Settings} from "../components/AccountSubPages/Settings.js";
import {Informations} from "../components/AccountSubPages/Informations.js";
import {LayoutPage} from "../layouts/LayoutPage.js";


const PageKey = 'account'

const Buttons = [
    '<h2 class="pt-4 pb-6" >Account</h2>',
    ButtonHover('Inventory', {alpineProps: 'x-on:click="setShowing(\'inventory\')"'}),
    ButtonHover('Settings', {alpineProps: 'x-on:click="setShowing(\'settings\')"'}),
    ButtonHover('Informations', {alpineProps: 'x-on:click="setShowing(\'informations\')"'}),
    ButtonHover('Disconnect', {alpineProps: 'x-on:click="setShowing(\'disconnect\')"'})
]

const SubPages = [
        Inventory,
        Settings,
        Informations
    ]

export const Account =
        LayoutPage(
            PageKey,
            `
                <h1>Account</h1>
                ${LayoutSubPage(PageKey, Buttons, SubPages)}
            `
        )



export const AccountAlpineData = {
    dataKey: PageKey,
    data : () => ({
        showing: 'inventory',
        isShowing(subpage) {
            return this.showing === subpage;
        },
        setShowing(subpage) {
            if (this.showing === subpage)
                return
            if (subpage === 'disconnect')
                return window.location.href = '/login'
            this.showing = subpage;
        }
    })
}
