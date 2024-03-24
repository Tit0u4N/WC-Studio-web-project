export const Header = `
    <header class="flex justify-center items-center p-4">
        <nav x-data class="flex justify-between items-center container-style w-full px-4">
            <div class="basis-1/4">
                <a x-on:click="$store.pages.set('home')" class="cursor-pointer"><img src="/assets/images/Logo-WC-Studio.png" alt="Logo WC Studio"></a>
            </div>
            <div class="basis-2/4">
                <h1 class="text-center mt-3">WC STUDIO</h1>
            </div> 
            <div class="basis-1/4 flex justify-end gap-3 ">
                <div class="nav-elem" x-show="$store.user.isConnected()">
                    <a x-on:click="$store.pages.set('shop')" class="cursor-pointer"><img src="/assets/images/Shop.png" alt="SHOP"></a>
                    <div class="money h-0">
                        <span x-text="$store.user.getMoney()" class="font-bold relative " id="money">xxxx</span>
                        <img class="relative " src="/assets/images/Money.png" alt="Logo money"></a>
                    </div>
                </div>
               
                <a x-on:click="$store.pages.set('account')" class="nav-elem cursor-pointer"><img src="/assets/images/User.png" alt="Account"></a>
            </div>
        </nav>
    </header>`