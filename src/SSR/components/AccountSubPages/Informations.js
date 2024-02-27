import {FormField} from "../FormField.js";
import {NeonHeaderBar} from "../NeonHeaderBar.js";

export const Informations = (id = "Informations") => {
    return `
        <div class="flex flex-col justify-between h-full pb-8 pt-4">
        
            ${NeonHeaderBar("Your Username")}
            
            ${FormField("Username", "Exemple : thatcoolusername7979")}
            ${FormField("Surname", "Exemple : coolSurname")}
            ${FormField("Name", "Exemple : coolName")}
    
            <div class="pt-6">
                ${NeonHeaderBar("Change Password")}
            </div>
            
            ${FormField("Password", "****************")}
            ${FormField("Confirm Password", "****************")}
            
        </div>
    `
}