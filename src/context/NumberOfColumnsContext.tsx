import { createContext, useState } from "react";

export const NumberOfColumnsContext = createContext('more' as any)

export const NumberOfColumnsProvider = ({ children }: any) => {

    const [numberOfColumnsContextState, setNumberOfColumnsContextState] = useState<'more' | 'less'>('more');

    const incrementColumns = (): void => {
        setNumberOfColumnsContextState('more');
    }

    const decrementColumns = () => {
        setNumberOfColumnsContextState('less');
    }

    return (
        <NumberOfColumnsContext.Provider value={{ numberOfColumnsContextState, incrementColumns, decrementColumns }}>
            {children}
        </NumberOfColumnsContext.Provider>
    )
}
