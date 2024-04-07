import { ChangeEvent, useContext } from 'react';
import styles from '../styles/SearchBar.module.css';
import { ProductContext } from '../context/ProductsContext';

export const OrderSelectComponent = () => {

    const { orderProducts } = useContext(ProductContext);

    const orderByPrice = (ev: ChangeEvent<HTMLSelectElement>): void => {
        const value = ev.currentTarget.value;
        if (value == '') return;
        orderProducts(value);
    }

    return (
        <select className={styles.orderSelect} onChange={(ev) => orderByPrice(ev)} placeholder='Ordenar'>
            <option value="">Ordenar</option>
            <option value='-'>Precio más bajo</option>
            <option value="+">Precio más alto</option>
        </select>
    )
}
