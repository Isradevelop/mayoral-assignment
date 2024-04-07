import { useContext } from 'react';
import styles from '../styles/OrderByPrice.module.css';
import { NumberOfColumnsContext } from '../context/NumberOfColumnsContext';

export const ChangeColumns = () => {

    const { incrementColumns, decrementColumns } = useContext(NumberOfColumnsContext);

    const incrementGridColumns = (): void => {
        incrementColumns();
    }

    const decrementGridColumns = (): void => {
        decrementColumns();
    }

    return (
        <div className={styles.container}>
            <span className={styles.less} onClick={() => decrementGridColumns()}>-</span>
            <span onClick={() => incrementGridColumns()}>+</span>
        </div>
    )
}
