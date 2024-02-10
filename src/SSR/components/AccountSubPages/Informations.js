import {FormField} from "../FormField.js";

export const Informations = (id = "Informations") => {
    return `
        <div class="flex flex-col justify-between h-full pb-8 pt-4">
        
            <h3>Nom et Prénom</h3>
            ${FormField("Username", "Exemple : thatcoolusername7979")}
            ${FormField("Surname", "Exemple : coolSurname")}
            ${FormField("Name", "Exemple : coolName")}
    
            <h3 class="pt-6">Mot de passe</h3>
            ${FormField("Password", "****************")}
            ${FormField("Confirm Password", "****************")}
            
        </div>
    `
}