import './style/style.scss'
import Alpine from 'alpinejs'
import {AccountAlpineData} from "./SSR/pages/Account.js";

Alpine.data('account', AccountAlpineData)

Alpine.start()

