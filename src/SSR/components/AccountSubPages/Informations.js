import {FormField} from "../FormField.js";
import {NeonHeaderBar} from "../NeonHeaderBar.js";
import { HigherButton } from "../HigherButton.js";
import {UserData} from "../../../js/global/UserData.js";

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
                ${HigherButton('savePasswordButton', '', 'Save Changes')}
            </div>
            
        </div>
    `
};
