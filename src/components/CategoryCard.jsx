import React from 'react'
import styles from "./styles/card.module.scss";

export const CategoryCard = (props) => {
  return (
    <div className={styles.category_card_container}>
        <img src={props.image} alt={props.title} />
        <p>{props.title}</p>
    </div>
  )
}
