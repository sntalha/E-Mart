import React from 'react'
import cartIcon from '../assets/icons/cart.svg';
import styles from './styles/cart.module.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const isLogin = useSelector(state => state.user.isLogin);
    const navigate = useNavigate();
    return (
        <div className={styles.shopping_cart_icon}>
            <img onClick={() => isLogin ? navigate("/checkout") : navigate("/login")} src={cartIcon} alt='cart icon' />
        </div>
    )
}

export default Cart