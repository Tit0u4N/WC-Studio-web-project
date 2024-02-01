export const LayoutPage = (pageKey, content) => {
    return `
        <div x-data x-show="$store.pages.isShowing('${pageKey}')" class="page">
            ${content}
        </div>
    `
}
