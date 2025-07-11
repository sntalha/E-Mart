import React from 'react'
import styles from './styles/sidebar.module.scss'
import { NavLink } from 'react-router-dom'
import { Search } from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/features/user-slice'
import Cart from './Cart'

export const SiderBar = () => {
    const isLogin = useSelector((state) => state.user.isLogin)
    const dispatch = useDispatch()
    const signOut = () => {
        dispatch(removeUser())
    }
    return (
        <div>
            <div className="offcanvas offcanvas-end w-auto" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">E-Mart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <Search></Search>
                    <br />
                    <ul className="navbar-nav gap-2 mx-auto mb-2 mb-lg-0">
                        <li className={`nav-item`}>
                            <NavLink to="/" className={`nav-link active ${styles.nav_link_item}`} data-bs-dismiss="offcanvas">Home</NavLink>
                        </li>
                        <li className={`nav-item`}>
                            <NavLink to="/about" className={`nav-link active ${styles.nav_link_item}`} data-bs-dismiss="offcanvas">About</NavLink>
                        </li>
                        <li className={`nav-item`}>
                            <NavLink to="/contact" className={`nav-link active ${styles.nav_link_item}`} data-bs-dismiss="offcanvas">Contact Us</NavLink>
                        </li>
                        {isLogin ?
                        <li className={`nav-item`}>
                            <NavLink onClick={signOut} className={`nav-link active ${styles.nav_link_item}`} data-bs-dismiss="offcanvas">Sign Out</NavLink>
                        </li>
                        : <li className={`nav-item`}>
                            <NavLink to="/signup" className={`nav-link active ${styles.nav_link_item}`} data-bs-dismiss="offcanvas">Sign Up</NavLink>
                        </li>}
                        <li className={`nav-item d-flex justify-content-start gap-1`}>
                            <NavLink to="/checkout" className={`nav-link mt-1 active ${styles.nav_link_item}`} data-bs-dismiss="offcanvas">My Cart</NavLink>
                            <Cart></Cart>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
