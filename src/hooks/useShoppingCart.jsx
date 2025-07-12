import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProductIntoCart, decreaseProductQuantity, removeAllProducts, removeProductFromCart } from '../redux/features/cart-slice';
import { useNavigate } from 'react-router-dom';

export const useShoppingCart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.products) ?? [];
    const isLogin = useSelector((state) => state.user.isLogin);
    const navigate = useNavigate()

    const addProduct = (product) => {
        if (!isLogin) {
            navigate('/login');
            return;
        }
        if (!product) return;
        dispatch(addProductIntoCart(product));
    };

    const decreaseQuantity = (product) => {
        if (!product) return;
        dispatch(decreaseProductQuantity(product));
    };

    const removeProduct = (product) => {
        if (!product) return;
        dispatch(removeProductFromCart(product));
    };

    const clearCart = () => {
        dispatch(removeAllProducts());
    };

    const getCartCount = () => {
        return products.reduce((total, item) => total + item.quantity, 0) || 0;
    };

    const getCartProducts = () => {
        return products;
    };

    const getProductQuantity = (id) => {
        if (!id) return;
        return products.find(item => item.product_id === id)?.quantity ?? 0;
    };

    const getSingleProduct = (id) => {
        if (!id) return;
        return products.find(item => item.product_id === id);
    };
    return {
        products,
        addProduct,
        decreaseQuantity,
        removeProduct,
        getCartCount,
        getCartProducts,
        getProductQuantity,
        getSingleProduct,
        clearCart,
    };
}
