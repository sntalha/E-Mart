import React from 'react'
import styles from './styles/card.module.scss'
import cart from '../assets/icons/cart.svg'
import { Rating } from 'react-simple-star-rating'
import { useNavigate } from 'react-router-dom'
import { useShoppingCart } from '../hooks/useShoppingCart'

export const ProductCard = ({ data }) => {
    const navigate = useNavigate()
    const { addProduct } = useShoppingCart();

    return (
        <div className={styles.product_card_container} onClick={() => navigate('/product-info')}>
            <div className={styles.card_img_container}>
                <img src={data?.images[0]} alt="Product Image" />
            </div>
            <div className={styles.card_content}>
                <div className={styles.card_detail}>
                    <h6>{data?.name}</h6>
                    <p>Price: ${data?.price}</p>
                    <Rating initialValue={data?.rating} allowFraction={true} readonly={true} size={25}></Rating>
                </div>
                <div className={styles.cart_img}>
                    <img onClick={(e) => {
                        e.stopPropagation();
                        addProduct(data);
                    }} style={{ cursor: 'pointer' }} src={cart} alt="Cart Icon" />
                </div>
            </div>
        </div>
    )
}
