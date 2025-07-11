import React from 'react'
import styles from "./styles/quantitycounter.module.scss"
import { IoAddOutline } from 'react-icons/io5'
import { AiOutlineMinus } from 'react-icons/ai'

export const QuantityCounter = ({small}) => {
  return (
    <div className={`${styles.product_quantity_counter} ${small && styles.product_quantity_counter_small} d-flex justify-content-between align-items-center`}>
        <span className={styles.update_counter_button}><AiOutlineMinus size={small ? 17 : 27}/></span>
        <span className={styles.counter_value}>1</span>
        <span className={styles.update_counter_button}><IoAddOutline size={small ? 17 : 27}/></span>
    </div>
  )
}
