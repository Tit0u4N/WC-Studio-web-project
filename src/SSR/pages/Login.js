import { LayoutPage } from "../layouts/LayoutPage";
import { LayoutSubPage } from "../layouts/layoutSubPage";
// import { forms } from ;

const PageKey = 'login';

// il faut run la commande suivante (installer les forms de tailwind) pour voir le form sur la page 
// npm install -D @tailwindcss/forms
export const Login =

`
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 transform scale-200">

    <!-- à enlever 
  <div>
    <h1 class="flex justify-center">HEADER COMPONENT</h1>
  </div>
    -->

  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <!-- <img class="mx-auto h-20 w-auto" src="../../../public/assets/images/Logo-WC-Studio.png" alt="WC Studios"> -->
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="username" class="block text-sm font-medium leading-6 text-white">Username : </label>
        <div class="mt-2">
          <input id="username" name="username" autocomplete="username" placeholder="Example : thatcoolusername6969" required 
                class="block w-full rounded-2xl border-2 border-purple-300 py-1.5 text-gray-300 shadow-sm 
                       sm:text-sm sm:leading-6 bg-[#4F356E]"
          >
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-white">Password : </label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-purple-200 hover:text-white">Forgot password?</a>
          </div>
        </div>
        <div id="password-class" class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" placeholder="Example : ****************" required 
                class="block w-full rounded-2xl border-2 border-purple-300 py-1.5 text-gray-300 shadow-sm 
                       sm:text-sm sm:leading-6 bg-[#4F356E]"
          >
        </div>
      </div>

      <!-- div + padding pour "simuler" un border en dégradé -->
      <div id="div-under-login-button" class="rounded-3xl">
        <button id="login-button" type="submit" class="flex w-full justify-center rounded-3xl bg-[#4F356E] px-3 py-1.5 
                                     text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-100
                                     focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                                     focus-visible:outline-purple-200 hover:text-[#4F356E]"
        >Sign in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <!-- rediriger vers /register -->
      <a href="#" class="font-semibold leading-6 text-purple-200 hover:text-white">Create an account</a>
    </p>
  </div>
</div>

`