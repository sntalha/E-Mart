import React from 'react'
import { PageLayout } from './PageLayout'
import authImg from '../assets/images/authImg.png'
import styles from './styles/authLayout.module.scss'

export const AuthLayout = ({children}) => {
  return (
    <PageLayout>
        <div className="container-fluid px-0">
            <div className="row m-0 p-0s">
                <div className="col-6 mx-auto p-0 d-lg-block d-none">
                    <figure className={styles.auth_img}>
                        <img src={authImg} alt="Auth Image" />
                    </figure>
                </div>
                <div className="col-lg-6 col-sm-8 col-11 mx-auto">
                    <div className={styles.form_wrapper}>
                    {children}
                    </div>
                </div>
            </div>
        </div>
    </PageLayout>
  )
}
