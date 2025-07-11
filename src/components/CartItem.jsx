import React from 'react'
import styles from '../pages/styles/checkout.module.scss'
import pc1 from "../assets/images/pc1.png"
import { QuantityCounter } from './QuantityCounter'
import cross from "../assets/icons/crossIcon.png"

export const CartItem = () => {
    return (
        <tr className={`${styles.table_row}`}>
            <td>
                <div className={`${styles.product_cell}`}>
                    <div className={`${styles.img_container}`}>
                        <img className={`${styles.product_img}`} src={pc1} alt="product" />
                        <img className={`${styles.cross_icon}`} src={cross} alt="cross" />
                    </div>
                    <p>LCD Monitor</p>
                </div>
            </td>
            <td>$10.00</td>
            <td>
                <QuantityCounter small></QuantityCounter>
            </td>
            <td>$10.00</td>
        </tr>)
}
