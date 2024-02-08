import { LayoutPage } from "../layouts/LayoutPage";
import { LayoutSubPage } from "../layouts/layoutSubPage";
// import { forms } from ;

const PageKey = 'login';

// il faut run la commande suivante (installer les forms de tailwind) pour voir le form sur la page 
// npm install -D @tailwindcss/forms
export const Login =

`
<div style="overflow: hidden; height: 70vh">
    <div class="h-full">
    
        <!-- à enlever 
      <div>
        <h1 class="flex justify-center">HEADER COMPONENT</h1>
      </div>
        -->
    
      <div class="mx-auto w-full">
        <!-- <img class="mx-auto h-20 w-auto" src="../../../public/assets/images/Logo-WC-Studio.png" alt="WC Studios"> -->
        <h2 class="mt-10 text-center text-6xl font-bold leading-9 tracking-tight text-white">SIGN IN TO YOUR ACCOUNT</h2>
      </div>
    
      <div class="mt-10 mx-auto w-1/3">
        <form class="space-y-10" action="#" method="POST">
          <!-- div form username -->
          <div>
            <label for="username" class="block text-xl font-medium leading-6 text-white">Username : </label>
            <div class="mt-2">
              <input id="username" name="username" autocomplete="username" placeholder="Example : thatcoolusername6969" required 
                    class="block w-full rounded-2xl border-2 border-purple-300 px-3.5 py-2 text-gray-300 shadow-xl 
                           text-xl leading-6 bg-[#4F356E]"
              >
            </div>
          </div>
    
          <!-- div form password + forgot password link -->
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-xl font-medium leading-6 text-white">Password : </label>
              <div class="text-lg">
                <a href="#" class="font-semibold text-purple-200 hover:text-white">Forgot password?</a>
              </div>
            </div>
            <div id="password-class" class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" placeholder="Example : ****************" required 
                    class="block w-full rounded-2xl border-2 border-purple-300 px-3.5 py-2 text-gray-300 shadow-xl
                           text-xl leading-6 bg-[#4F356E]"
              >
            </div>
          </div>
    
          <!-- div pour centrer le bouton de login -->
          <div class="flex justify-center w-2/3 mx-auto">
              <!-- div + padding pour "simuler" un border en dégradé -->
              <div id="div-under-login-button" class="rounded-3xl">
                <button id="login-button" type="submit" class="flex w-full justify-center rounded-3xl bg-[#4F356E] py-2.5
                                             text-2xl font-semibold leading-6 text-white shadow-xl hover:bg-purple-100
                                             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                                             focus-visible:outline-purple-200 hover:text-[#4F356E]"
                >Sign in</button>
              </div>
          </div>
        </form>
    
        <p class="mt-10 text-center text-lg text-gray-500">
          Not a member?
          <!-- rediriger vers /register -->
          <a href="#" class="font-semibold leading-6 text-purple-200 hover:text-white">Create an account</a>
        </p>
      </div>
    </div>
</div>

`