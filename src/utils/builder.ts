import { Options } from "../components/Dropdown/types"
import { CurrencyApi } from "../types"

export const dropdownOptionBuilder = (currencies: CurrencyApi): Options[] =>
    Object.keys(currencies).map(key => ({
        label: currencies[key].name,
        value: key
    }))
