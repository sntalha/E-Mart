import React from 'react'
import styles from "./styles/footer.module.scss"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import sendIcon from "../assets/icons/send.svg"
import GooglePlay from "../assets/images/googleplay.png"
import AppStore from "../assets/images/appstore.png"
import QrCode from "../assets/images/qrcode.png"

export const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.column}>
                        <h3>E-Mart</h3>
                        <p className={styles.subscribeTitle}>Subscribe</p>
                        <p>Get 10% off your first order</p>
                        <div className={styles.emailInputWrapper}>
                            <input type="email" placeholder="Enter your email" />
                            <img src={sendIcon} alt="send icon" />
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4>Support</h4>
                        <p>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
                        <p>exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>

                    <div className={styles.column}>
                        <h4>Account</h4>
                        <p>My Account</p>
                        <p>Login / Register</p>
                        <p>Cart</p>
                        <p>Wishlist</p>
                        <p>Shop</p>
                    </div>

                    <div className={styles.column}>
                        <h4>Quick Link</h4>
                        <p>Privacy Policy</p>
                        <p>Terms Of Use</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>

                    <div className={styles.column}>
                        <h4>Download App</h4>
                        <p>Save $3 with App New User Only</p>
                        <div className={styles.qrWrapper}>
                            <img src={QrCode} alt="QR code" />
                            <div className={styles.storeButtons}>
                                <img src={GooglePlay} alt="Google Play" />
                                <img src={AppStore} alt="App Store" />
                            </div>
                        </div>
                        <div className={styles.socialIcons}>
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>
                <div className={`mt-2 ${styles.copyright_container}`}>
                    <span>&copy; Copyright E-Mart 2022. All right reserved</span>
                </div>
            </footer>
        </div>
    )
}
