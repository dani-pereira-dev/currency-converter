export const BASE_API_URL = 'https://api.vatcomply.com'

export const INITIAL_STATE = {
    amount: '1',
    from: { currency: "USD", name: "US Dollar", symbol: "$" },
    to: { currency: "EUR", name: "Euro", symbol: "€" },
    symbol: '$'
}

export const errorMessage = "Enter only numbers greater than zero"