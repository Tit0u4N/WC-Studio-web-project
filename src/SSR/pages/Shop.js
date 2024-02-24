import {ButtonHover} from "../components/ButtonHover.js";
import {ShopBase} from "../components/ShopSubPages/ShopBase.js";
import {LayoutPage} from "../layouts/LayoutPage.js";
import {LayoutSubPage} from "../layouts/LayoutSubPage.js";
import {UserData} from "../../js/global/UserData.js";

const PageKey = 'shop'

const Buttons = [
    '<h2 class="pt-4 pb-6" >Shop</h2>',
    ButtonHover('Shop', {alpineProps: 'x-on:click="setShowing(\'shopbase\')"'}),
]

const SubPages = [
    ShopBase
]

export const Shop =
    LayoutPage(
        PageKey,
        `
                ${LayoutSubPage(PageKey, Buttons, SubPages)}
            `
    )

export const ShopAlpineData = {
    dataKey: PageKey,
    data : () => ({
        showing: 'shopbase',
        user : UserData.getExistingUserData(),
        isShowing(subpage) {
            console.log(this.showing, subpage)
            return this.showing === subpage;
        },
        setShowing(subpage) {
            if (this.showing === subpage)
                return
            this.showing = subpage;
        }
    })
}
