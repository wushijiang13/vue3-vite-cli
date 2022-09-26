import {createI18n} from 'vue-i18n'
import {store} from '../../store/store'
import {messages} from "./language_pack/i18n_message";

let i18n=createI18n({
    legacy: false,
    locale:store.state.languages,
    fallbackLocale:"en",
    messages,
})

export {i18n}


