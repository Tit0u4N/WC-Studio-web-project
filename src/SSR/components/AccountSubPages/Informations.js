import {FormField} from "../FormField.js";

export const Informations = (id = "Informations") => {
    return `
        <div class="flex flex-col justify-between h-full pb-8 pt-4">
        
            <div class="flex justify-start items-center">
                <h3 class="w-[20%]">Nom et Prénom</h3>
                <div class="w-3/4 h-[2px] rounded ml-4" id="aestheticNeon"></div>
            </div>
            
            ${FormField("Username", "Exemple : thatcoolusername7979")}
            ${FormField("Surname", "Exemple : coolSurname")}
            ${FormField("Name", "Exemple : coolName")}
    
            <div class="flex justify-start items-center pt-6">
                <h3 class="w-[20%]">Mot de passe </h3>
                <div class="w-3/4 h-[2px] rounded ml-4" id="aestheticNeon"></div>
            </div>
            
            ${FormField("Password", "****************")}
            ${FormField("Confirm Password", "****************")}
            
        </div>
    `
}