export const Home =
    `<div x-data x-show="$store.pages.isShowing('home')">
        <h1>HOME</h1>
        
        <div x-data="{
         game: '',
         fetchGame: function() {
            fetch('/game/memory')
                .then(data => {
                    this.game = data.text()
                })
            }
        }
        ">
        <button x-on:click="fetchGame()">Fetch Game</button>
        <div x-html="game"></div>
        
        </div>
    </div>`
