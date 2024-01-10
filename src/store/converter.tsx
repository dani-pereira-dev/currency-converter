import { Dispatch, FC, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

import { INITIAL_STATE } from "../constants"
import { Currency } from "../types";

export interface ConverterContextType {
    amount: string;
    setAmount: Dispatch<SetStateAction<string>>;
    from: Currency;
    setFrom: Dispatch<SetStateAction<Currency>>;
    to: Currency;
    setTo: Dispatch<SetStateAction<Currency>>;

}

export interface ContextProps {
    children: ReactNode;
}

const ConverterContext = createContext<ConverterContextType>({} as ConverterContextType)

export const ConverterProvider: FC<ContextProps> = ({ children }) => {
    const [amount, setAmount] = useState<string>(INITIAL_STATE.amount); 
    const [from, setFrom] = useState<Currency>(INITIAL_STATE.from);
    const [to, setTo] = useState<Currency>(INITIAL_STATE.to);

    const value: ConverterContextType = {
        amount,
        setAmount,
        from,
        setFrom,
        to,
        setTo
    }

    return <ConverterContext.Provider value={value}>{children}</ConverterContext.Provider>
}

export const useCoverterContext = (): ConverterContextType => useContext(ConverterContext);