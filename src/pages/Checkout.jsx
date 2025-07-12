import React from 'react'
import { PageLayout } from '../components/PageLayout'
import styles from './styles/checkout.module.scss'
import { CartItem } from '../components/CartItem'
import CheckoutSummary from '../components/CheckoutSummary'
import { useShoppingCart } from '../hooks/useShoppingCart'

const Checkout = () => {
    const { getCartProducts } = useShoppingCart();
    const products = getCartProducts();

    return (
        <PageLayout>
            <div className='container my-5 py-5'>
                <table class={`table align-middle table-borderless ${styles.table_container}`}>
                    <thead className='mb-5'>
                        <tr>
                            <td scope="col">Product</td>
                            <td scope="col">Price</td>
                            <td scope="col">Quantity</td>
                            <td scope="col">Subtotal</td>
                        </tr>
                    </thead>
                    <br />
                    <tbody>
                        {products && products.length > 0 ? products.map((product) => (
                            <CartItem key={product.product_id} data={product} />
                        )) : <tr><td colSpan="4" className='text-center'>No products found</td></tr>}
                    </tbody>
                </table>
                <div className='mt-5 d-flex justify-content-end'>
                    <CheckoutSummary></CheckoutSummary>
                </div>
            </div>
        </PageLayout>
    )
}

export default Checkout;
