export const Head = (gameName = '' , script = []) => {
    const gameScript = gameName === `` ? '' : `<script defer type="module" src="/src/SSR/games/${gameName}/main.js"></script>`
    return gameScript + script.join('')
}
