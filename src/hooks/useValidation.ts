import { useEffect, useState } from 'react'
import { amountValidation } from '../utils'

export const useValidation = (amount: string) => {
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        setError(false)

        if (!amountValidation(amount)) {
            setError(true)
        }

    }, [amount])

    return { error }
}
