import React from 'react'
import searchIcon from '../assets/icons/search.svg'
import styles from './styles/search.module.scss'

export const Search = () => {
    return (
        <div className={`d-flex ${styles.global_search_container}`} role="search">
            <input className="form-control me-2" type="search" placeholder="What are you looking for?" aria-label="Search" />
            <img src={searchIcon} alt="search icon" />
        </div>
    )
}
