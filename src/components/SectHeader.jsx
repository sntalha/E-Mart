import React from 'react'
import sq1 from "../assets/icons/sq1.png";
import styles from "./styles/sectheader.module.scss";

export const SectHeader = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={sq1} alt="" />
                <p>{props.head}</p>
            </div>
            <h2 className={styles.title}>{props.title}</h2>
        </div>
    )
}
