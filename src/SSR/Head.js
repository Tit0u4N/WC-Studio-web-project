export const Head = (gameName = '' , script = []) => {
    const gameScript = gameName === `` ? '' : `<script defer src="/src/SSR/games/${gameName}/main.js"></script>`
    return gameScript + script.join('')
}
