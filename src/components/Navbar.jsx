import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles/navbar.module.scss'
import { SiderBar } from './SiderBar'
import { Search } from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/features/user-slice'
import Cart from './Cart'

export const Navbar = () => {
    const isLogin = useSelector((state) => state.user.isLogin)
    const dispatch = useDispatch()
    const signOut = () => {
        dispatch(removeUser())
    }
    return (
        <>
        <SiderBar></SiderBar>
        <nav className={`navbar navbar-expand-lg ${styles.app_navbar_container}`}>
            <div className="container">
                <a className="navbar-brand fw-normal" href="#">E-Mart</a>
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
                        { isLogin ?
                        <li className={`nav-item ${styles.nav_link_item}`}>
                            <NavLink onClick={signOut} className="nav-link active">Sign Out</NavLink>
                        </li>
                        :
                        <li className={`nav-item ${styles.nav_link_item}`}>
                            <NavLink to="/signup" className="nav-link active">Sign Up</NavLink>
                        </li>}
                    </ul>
                    <form className={`d-flex`} role="search">
                        <Search></Search>
                        <Cart></Cart>
                    </form>
                </div>
            </div>
        </nav>
        </>)
}
