import { Product } from "interfaces/product.interface"
import data from '../data/data.json'


export const getProductsData = (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        resolve(data);
    })
}

export const orderByPrice = (a: Product, b: Product) => {
    const finalPriceA = a.discount ? getFinalPrice(a.price, a.discount) : a.price;
    const finalPriceB = b.discount ? getFinalPrice(b.price, b.discount) : b.price;
    return finalPriceA - finalPriceB;
}

export const getFinalPrice = (price: number, discount: number): number => {
    return price - price * (discount / 100);
}
