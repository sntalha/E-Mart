import React from 'react'
import styles from './styles/card.module.scss'
import cart from '../assets/icons/cart.svg'
import { Rating } from 'react-simple-star-rating'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const ProductCard = ({data}) => {
    const isLogin = useSelector((state) => state.user.isLogin)
    const navigate = useNavigate()
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
                    <img onClick={isLogin ? () => navigate('/cart') : () => navigate('/login')} src={cart} alt="Cart Icon" />
                </div>
            </div>
        </div>
    )
}
