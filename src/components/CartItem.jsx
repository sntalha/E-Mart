import React from 'react'
import styles from '../pages/styles/checkout.module.scss'
import { QuantityCounter } from './QuantityCounter'
import cross from "../assets/icons/crossIcon.png"
import { useShoppingCart } from '../hooks/useShoppingCart'
import { Helpers } from '../services/helpers'

export const CartItem = ({data}) => {
    const { addProduct, decreaseQuantity, removeProduct } = useShoppingCart();
    return (
        <tr className={`${styles.table_row}`}>
            <td>
                <div className={`${styles.product_cell}`}>
                    <div className={`${styles.img_container}`}>
                        <img className={`${styles.product_img}`} src={data?.product.images[0]} alt="product" />
                        <img className={`${styles.cross_icon}`} onClick={()=>removeProduct(data?.product)} src={cross} alt="cross" />
                    </div>
                    <p>{data?.product.name}</p>
                </div>
            </td>
            <td>{Helpers.priceFormatter(data?.product.price)}</td>
            <td>
                <QuantityCounter  small qty={data?.quantity} onIncrement={() => {addProduct(data?.product)}} onDecrement={() => {decreaseQuantity(data?.product)}}></QuantityCounter>
            </td>
            <td>{Helpers.priceFormatter(data?.product.price * data?.quantity)}</td>
        </tr>)
}
