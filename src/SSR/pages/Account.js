import {ButtonHover} from "../components/ButtonHover.js";
import {Inventory} from "../components/AccountSubPages/Inventory.js";
import {Settings} from "../components/AccountSubPages/Settings.js";
import {Informations} from "../components/AccountSubPages/Informations.js";
import {LayoutPage} from "../layouts/LayoutPage.js";
import {LayoutSubPage} from "../layouts/LayoutSubPage.js";
import {FormField} from "../components/FormField.js";
import {UserData} from "../../js/global/UserData.js";




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
                ${LayoutSubPage(PageKey, Buttons, SubPages)}
            `
        )



export const AccountAlpineData = {
    dataKey: PageKey,
    data : () => ({
        showing: 'inventory',
        user : UserData.getExistingUserData(),
        isShowing(subpage) {
            return this.showing === subpage;
        },
        setShowing(subpage) {
            if (this.showing === subpage)
                return
            if (subpage === 'disconnect') {
                this.user.reset()
                window.location.href = '/login'
            }
            this.showing = subpage;
        }
    })
}
