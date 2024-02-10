// ?? params : ...
export const FormField = (label, placeholder) => {
    const lowercaseLabel = label.toLowerCase();
    return `
    <!-- main component div --> 
    <div>
        <label for="${lowercaseLabel}" class="block text-xl font-medium leading-6 text-white">${label} : </label>
        <div class="mt-2">
          <input id="${lowercaseLabel}" name="${lowercaseLabel}" autocomplete="${lowercaseLabel}" 
                 placeholder="${placeholder}" required 
                 class="block w-full rounded-2xl border-2 border-purple-300 px-3.5 py-2 text-gray-300 shadow-xl 
                       text-xl leading-6 bg-[#4F356E]"
          >
        </div>
    </div>
    `
}