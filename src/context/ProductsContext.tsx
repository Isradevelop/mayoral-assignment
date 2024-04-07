import { Product } from "../interfaces/product.interface";
import { createContext, useState } from "react";
import { orderByPrice } from "../services/ProductsService";

export const ProductContext = createContext([] as any)

export const ProductsProvider = ({ children }: any) => {

    const [productsContextState, setProductsContextState] = useState<Product[]>([]);
    const [productsFilteredContextState, setProductsFilteredContextState] = useState<Product[]>([]);

    const orderProducts = (operator: '+' | '-'): void => {

        let sortedProducts = [];
        if (operator === '-') {
            sortedProducts = productsFilteredContextState.sort((a, b) => orderByPrice(a, b));
        } else {
            sortedProducts = productsFilteredContextState.sort((a, b) => orderByPrice(b, a));
        }
        setProductsFilteredContextState([...sortedProducts]);

    }

    const searchByChar = (char: string) => {
        if (char == '') {
            setProductsFilteredContextState(productsContextState);
            return;
        }

        const filteredArray = productsContextState.filter(({ name }) => name.toLowerCase().includes(char))
        setProductsFilteredContextState([...filteredArray])
    }

    return (
        <ProductContext.Provider value={{ productsContextState, orderProducts, setProductsContextState, searchByChar, productsFilteredContextState, setProductsFilteredContextState }}>
            {children}
        </ProductContext.Provider>
    )
}
