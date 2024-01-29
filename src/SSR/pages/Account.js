export const Account =
    `<div x-data="account">
        <h1 >ACCOUNT</h1>
        <h1 class="text-3xl font-bold underline" x-on:click="alert('lol')" x-text="message"></h1>
        <div>
          <button x-on:click="increment()">Increment</button>
        
          <span x-text="count"></span>
        </div>
    </div>`

export const AccountAlpineData = () => ({
        message: 'I ❤️ Alpine lol',
        count: 0,
        increment() {
            this.count++
        }
    })
