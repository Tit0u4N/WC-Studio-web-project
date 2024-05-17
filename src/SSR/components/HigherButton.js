export const HigherButton = (id = '', alpineProps = '', text) => {
    // className will be equal to a kebab-case version of the ID input (id in camelCase)
    // alpineProps = action (function) to exec (onclick)
    return `
    <div class="flex justify-center w-2/3 mx-auto">
        <div ${alpineProps} class="rounded-3xl div-under-login-button">
            <button id="${id}" type="submit" class="flex w-full justify-center rounded-3xl bg-[#3D225D] py-2.5
                                        text-2xl font-semibold leading-6 text-white shadow-xl hover:bg-purple-100
                                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                                        focus-visible:outline-purple-200 hover"
            >
                ${text}
            </button>
        </div>
    </div>
    `
}