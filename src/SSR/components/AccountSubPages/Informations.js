import {FormField} from "../FormField.js";

export const Informations = (id = "Informations") => {
    return `
        <div class="flex flex-col justify-between h-full pb-8 pt-4">
        
            <div class="flex justify-start items-center gap-2">
                <h3 class="w-auto text-nowrap">Your Informations</h3>
                <div class="aestheticNeon w-full h-[2px] rounded mx-2"></div>
            </div>
            
            ${FormField("Username", "Exemple : thatcoolusername7979")}
            ${FormField("Surname", "Exemple : coolSurname")}
            ${FormField("Name", "Exemple : coolName")}
    
            <div class="flex justify-start items-center gap-2 pt-6">
                <h3 class="w-auto text-nowrap">Change Password</h3>
                <div class="aestheticNeon w-full h-[2px] rounded mx-2"></div>
            </div>
            
            ${FormField("Password", "****************")}
            ${FormField("Confirm Password", "****************")}
            
        </div>
    `
}