// 4 params : nom du succès + nom du jeu associé + %tage de completion + illustration (image/logo) du succès
export const Success = (name, gamename, completion, image) => {
    return `

    <div>
        <!-- 
        <p> success component here !</p>
        -->
        
        <!-- div de fond --> 
        <div class="bg-[#4F356E] flex flex-col justify-center items-center overflow-visible rounded-lg" style="width: 120px; height: 80px;">
        
            <!-- div pour l'image + son contour --> <!-- div de contour (%tage succès) -->
            <div class="h-full w-2/3 rounded-full border-4 border-[#FF16CD]" style="margin-top : -45%;">
                <!-- image du succès -->
                <img src="../../../public/assets/images/User.png" alt="succes-icon" class="mx-auto p-2">
            </div>
            
            <!-- div text --> 
            <div class="flex flex-col justify-evenly items-center h-2/3">
                <p class="font-light text-slate-50" style="font-size: small;">${name}</p>
                <p class="font-thin" style="font-size: x-small;">${gamename}</p>
            </div>
            
        </div>


    </div>

    `

}