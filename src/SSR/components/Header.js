export const Header =
    `<header class="flex justify-center items-center">
        <nav x-data class="flex justify-between items-center container px-4">
            <div class="basis-1/4">
                <a x-on:click="$store.pages.set('home')" class="cursor-pointer"><img src="/assets/images/Logo-WC-Studio.png" alt="Logo WC Studio"></a>
            </div>
            <div class="basis-2/4">
                <h1 class="text-center mt-3">WC STUDIO</h1>
            </div>
            <div class="basis-1/4 flex justify-end gap-2">
                <a x-on:click="$store.pages.set('shop')" class="cursor-pointer">SHOP</a>
                <a x-on:click="$store.pages.set('account')" class="cursor-pointer">ACCOUNT</a>
            </div>
        </nav>
    </header>`