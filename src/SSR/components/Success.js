// 4 params : nom du succès + nom du jeu associé + %tage de completion + illustration (image/logo) du succès
export const Success = (name, gamename, completion, image) => {
    return `

    <div>
        <!-- div de fond --> 
        <div id="successBackground" 
             class="bg-[#4F356E] flex flex-col justify-center items-center overflow-visible rounded-lg">
        
            <!-- div pour l'image + son contour (%tage succès) -->
            <div id="sImageContainer" class="h-full w-2/3 rounded-full border-4 border-[#FF16CD]">
                <!-- image du succès -->
                <img src="../../../public/assets/images/User.png" alt="succes-icon" class="mx-auto p-2">
            </div>
            
            <!-- div text --> 
            <div class="flex flex-col justify-evenly items-center h-2/3">
                <p id="successNameText" class="font-light text-slate-50">${name}</p>
                <p id="sGameNameText" class="font-thin">${gamename}</p>
            </div>
            
        </div>


    </div>

    `

}