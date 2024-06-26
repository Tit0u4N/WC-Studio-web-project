
const writeSubPages = (page, subPages) => {
    return subPages.map(subPage => {
        return `
            <div x-show="isShowing('${subPage.name.toLowerCase()}')" class="container-style flex-auto w-full p-4">
                ${subPage()}
            </div>
        `
    }).join('')
}

export const LayoutSubPage = (pageKey, menuButtons, subPages) => {
    return `
            <div x-data="${pageKey.toLowerCase()}" class="flex gap-2 justify-between p-2 flex-auto">
                <div class="container-style w-2/5 max-w-[355px] flex flex-col gap-1 items-center p-2 flex-auto">
                    ${menuButtons.join('')}
                </div>
                ${writeSubPages(pageKey, subPages)}
            </div>
    `
}

