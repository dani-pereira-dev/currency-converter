import { useEffect, useState } from "react";

import { getCurrencies } from "../services";
import { dropdownOptionBuilder } from "../utils/builder";
import { Options } from "../components/Dropdown/types";
import { CurrencyApi } from "../types";

export const useCurrencyList = () => {
    const [currencies, setCurrencies] = useState<CurrencyApi>({})
    const [dropDownsOptions, setDropDownsOptions] = useState<Options[]>()

    useEffect(() => {
        getCurrencies()
            .then(async response => {
                const currencies = await response.json()
                setCurrencies(currencies)

                const options = dropdownOptionBuilder(currencies)
                setDropDownsOptions(options)
            })
            .catch(error => {
                console.error('An error occurred while trying to get data', error)
            });
    }, []);

    return { currencies, dropDownsOptions };
}