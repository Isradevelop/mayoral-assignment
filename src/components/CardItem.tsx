import { getFinalPrice } from '../services/ProductsService'
import { Product } from '../interfaces/product.interface'
import styles from '../styles/CardItem.module.css'
import { Button } from '@mui/material'
import Image from 'next/image'

interface cardItemProps {
    product: Product
}

export const CardItem = ({ product }: cardItemProps) => {

    const { image, name, price, discount, hasVariants } = product;

    return (
        <div className={styles.cardItemContainer}>
            <div className={styles.header}>
                <Image src="/images/no-image.png" width={350} height={350} layout='fill' />
            </div>
            <div className={styles.description}>{name}</div>
            <div>
                <div className={discount ? styles.priceDisabled : styles.price}>{price}€</div>
                {
                    discount && <div className={styles.textDiscount}>{getFinalPrice(price, discount)}€(-{discount}%)</div>
                }
            </div>

            <div className={styles.moreColors}>
                {
                    hasVariants ? 'más colores' : ''
                }
            </div>

            <div className={styles.addButtonContainer}>
                <Button variant="contained" className={styles.addButton}>Añadir</Button>
            </div>
        </div>
    )
}
