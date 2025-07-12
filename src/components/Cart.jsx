import React from 'react'
import cartIcon from '../assets/icons/cart.svg';
import styles from './styles/cart.module.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useShoppingCart } from '../hooks/useShoppingCart';

const Cart = () => {
    const isLogin = useSelector(state => state.user.isLogin);
    const { getCartCount } = useShoppingCart();
    const count = getCartCount();
    const navigate = useNavigate();
    return (
        <div className={styles.shopping_cart_icon}>
            {count > 0 ? <span className={styles.cart_products_quantity}>{count}</span> : null}
            <img onClick={() => isLogin ? navigate("/checkout") : navigate("/login")} src={cartIcon} alt='cart icon' />
        </div>
    )
}

export default Cart