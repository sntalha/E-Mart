import React from 'react'
import { PageLayout } from '../components/PageLayout'
import styles from './styles/checkout.module.scss'
import { CartItem } from '../components/CartItem'
import CheckoutSummary from '../components/CheckoutSummary'

const Checkout = () => {
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
                        <CartItem></CartItem>
                        <CartItem></CartItem>
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
