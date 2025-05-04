import React from 'react'
import styles from './styles/button.module.scss'

export const PrimaryButton = (props) => {
    return (
        <button
            className={styles.button_container}
            onClick={props.onClick}
            disabled={props.disabled}>
            {props.loading ? <div class="spinner-border" role="status"></div> : props.children}
        </button>
    )
}
