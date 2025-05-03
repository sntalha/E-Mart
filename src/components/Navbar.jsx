import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles/navbar.module.scss'
import cartIcon from '../assets/icons/cart.svg'
import { SiderBar } from './SiderBar'
import { Search } from './Search'

export const Navbar = () => {
    return (
        <>
        <SiderBar></SiderBar>
        <nav className={`navbar navbar-expand-lg ${styles.app_navbar_container}`}>
            <div className="container">
                <a className="navbar-brand" href="#">E-Mart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"></span>
                </button>
                <div className="collapse navbar-collapse d-none" id="navbarSupportedContent">
                    <ul className="navbar-nav gap-2 mx-auto mb-2 mb-lg-0">
                        <li className={`nav-item ${styles.nav_link_item}`}>
                            <NavLink to="/" className="nav-link active">Home</NavLink>
                        </li>
                        <li className={`nav-item ${styles.nav_link_item}`}>
                            <NavLink to="/about" className="nav-link active">About</NavLink>
                        </li>
                        <li className={`nav-item ${styles.nav_link_item}`}>
                            <NavLink to="/contact" className="nav-link active">Contact Us</NavLink>
                        </li>
                        <li className={`nav-item ${styles.nav_link_item}`}>
                            <NavLink to="/signup" className="nav-link active">Sign Up</NavLink>
                        </li>
                    </ul>
                    <form className={`d-flex`} role="search">
                        <Search></Search>
                        <img src={cartIcon} alt="cart icon" />
                    </form>
                </div>
            </div>
        </nav>
        </>)
}
