import {FormField} from "../FormField.js";
import {NeonHeaderBar} from "../NeonHeaderBar.js";
import {ButtonHover} from "../ButtonHover.js";
import { HigherButton } from "../HigherButton.js";

const PageKey = "account/informations";

export const Informations = (id = "Informations") => {
    return `
        <div class="flex flex-col justify-between h-full py-4">
        
            ${NeonHeaderBar("Your Username")}
            
            ${FormField("Username", "Exemple : thatcoolusername7979")}
            ${FormField("Surname", "Exemple : coolSurname")}
            ${FormField("Name", "Exemple : coolName")}
    
            <div class="pt-6">
                ${NeonHeaderBar("Change Password")}
            </div>
            
            ${FormField("Password", "****************")}
            ${FormField("Confirm Password", "****************")}

            <div class="pt-4">
                ${HigherButton('savePasswordButton', 'x-on:click="savePassword()"', 'Save Changes')}
            </div>
            
        </div>
    `
}

export const InformationsAlpineData = {
    dataKey : PageKey,
    data : () => ({
        savePassword() {
            // tester si le nouveau password est correct (ou si la modif est acceptable)
            console.log("save password button has been clicked !");
        }
    })
}