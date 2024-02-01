
export const ButtonHover = (text, options = {}) => {
    const { id = '', alpineProps = '', className = '' } = options
    return `<div id="${id}" ${alpineProps} class="button-hover flex items-center justify-center cursor-pointer ${className}">
                <span>${text}</span>
            </div>`
}