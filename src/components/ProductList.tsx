import { useContext, useEffect, useState } from "react"
import { getProductsData } from "../services/ProductsService";
import { ProductItem } from "./ProductItem";
import styles from '../styles/CardList.module.css'
import { ProductContext } from "../context/ProductsContext";
import { NumberOfColumnsContext } from "../context/NumberOfColumnsContext";

export const ProductList = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { productsContextState, setProductsContextState, productsFilteredContextState, setProductsFilteredContextState } = useContext(ProductContext);
    const [products, setProducts] = useState(productsContextState);

    const { numberOfColumnsContextState } = useContext(NumberOfColumnsContext);
    const [numberOfColumns, setNumberOfColumns] = useState(productsContextState);

    const getProducts = async () => {
        const resp = await getProductsData();
        setIsLoading(false);
        setProductsContextState(resp);
        setProductsFilteredContextState(resp);
    }

    useEffect(() => {
        setIsLoading(true);
        getProducts();
    }, [])

    useEffect(() => {
        setProducts(productsFilteredContextState);
    }, [productsFilteredContextState])

    useEffect(() => {
        setNumberOfColumns(numberOfColumnsContextState);
    }, [numberOfColumnsContextState])

    return (
        <div
            className={numberOfColumns === 'more' ? styles.cardListContainerMoreColums : styles.cardListContainerLessColums}
        >
            {
                (isLoading)
                    ? <span>Cargando resultados...</span>
                    : (
                        products?.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))
                    )

            }
        </div>
    )
}
