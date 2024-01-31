export const AccountSubPageCSSClasses = "container-style flex-auto w-full p-4"

const writeSubPages = (page, subPages) => {
    return subPages.map(subPage => {
        return `
            <div x-show="isShowing('${subPage.name.toLowerCase()}')" class="${AccountSubPageCSSClasses}">
                ${subPage()}
            </div>
        `
    }).join('')
}

export const layoutSubPage = (page, menuButtons, subPages) => {
    return `
        <div x-data x-show="$store.pages.isShowing('${page.toLowerCase()}')" class="page">
            <h1 >${page}</h1>
            <div x-data="${page}" class="flex gap-2 justify-between p-2 flex-auto">
                <div class="container-style w-2/5 max-w-[355px] flex flex-col gap-1 items-center p-2 flex-auto">
                    <h2 class="pt-4 pb-6" > ${page} </h2>                
                    ${menuButtons.join('')}
                </div>
                ${writeSubPages(page, subPages)}
            </div>
        </div>
    `
}

