import React from 'react'
import styles from "../pages/styles/checkout.module.scss"
import { PrimaryButton } from './PrimaryButton'
import { useShoppingCart } from '../hooks/useShoppingCart'

const CheckoutSummary = () => {
  const { products } = useShoppingCart();

  const subtotal = products.reduce((sum, item) => {
    const price = typeof item.product.price === 'string' ? parseFloat(item.product.price) : item.product.price;
    return sum + (price * item.quantity);
  }, 0);

  return (
    <div className={`${styles.checkout_summary}`}>
      <h4>Cart Total</h4>
      <div className='d-flex justify-content-between border-bottom border-3 py-2'>
        <div>Subtotal:</div>
        <div>${subtotal.toFixed(2)}</div>
      </div>
      <div className='d-flex justify-content-between border-bottom border-3 py-2'>
        <div>Pay by:</div>
        <div>Card</div>
      </div>
      <div className='d-flex justify-content-between  py-2'>
        <div>Total:</div>
        <div>${subtotal.toFixed(2)}</div>
      </div>

      <div className='mt-5'>
        <PrimaryButton>Process to checkout</PrimaryButton>
      </div>
    </div>
  )
}

export default CheckoutSummary