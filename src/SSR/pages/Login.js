import { LayoutPage } from "../layouts/LayoutPage";

const PageKey = 'login';

export const Login = LayoutPage(PageKey,
`
    <div class="h-auto">
      <div class="mx-auto w-full">
        <h2 class="mt-10 text-center font-bold leading-9 tracking-tight">SIGN IN TO YOUR ACCOUNT</h2>
      </div>
    
      <div class="mt-10 mx-auto w-1/3">
        <form class="space-y-10">
          <div>
            <label for="username" class="block text-xl font-medium leading-6 text-white">Username : </label>
            <div class="mt-2">
              <input id="username" name="username" autocomplete="username" placeholder="thatcoolusername6969" required 
                    class="block w-full rounded-2xl border-2 border-purple-300 px-3.5 py-2 text-gray-300 shadow-xl 
                           text-xl leading-6 bg-[#4F356E]"
              >
            </div>
          </div>
    
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-xl font-medium leading-6 text-white">Password : </label>
            </div>
            <div id="password-class" class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" placeholder="****************" required 
                    class="block w-full rounded-2xl border-2 border-purple-300 px-3.5 py-2 text-gray-300 shadow-xl
                           text-xl leading-6 bg-[#4F356E]"
              >
            </div>
          </div>
    
          <div class="flex justify-center w-2/3 mx-auto">
              <div class="rounded-3xl div-under-login-button">
                <button id="login-button" type="submit" class="flex w-full justify-center rounded-3xl bg-[#4F356E] py-2.5
                                             text-2xl font-semibold leading-6 text-white shadow-xl hover:bg-purple-100
                                             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                                             focus-visible:outline-purple-200 hover:text-[#4F356E]"
                >Sign in</button>
              </div>
          </div>
        </form>
      </div>
    </div>
`);

