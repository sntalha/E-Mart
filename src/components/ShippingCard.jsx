import React from 'react'
import styles from '../pages/styles/productinfo.module.scss';

const ShippingCard = (props) => {
    return (
        <div className={styles.shipping_card}>
            <figure><img src={props.iconSrc} alt="delivery" /></figure>
            <div className={styles.shipping_card_content}>
                <h5>{props.title}</h5>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default ShippingCard