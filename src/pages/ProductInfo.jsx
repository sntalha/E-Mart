import React, { useState } from 'react'
import { PageLayout } from '../components/PageLayout'
import { SectHeader } from '../components/SectHeader'
import ProductSlider from '../components/ProductSlider'
import styles from './styles/productinfo.module.scss'
import { singleProduct } from '../services/single-data'
import { Rating } from 'react-simple-star-rating'
import { Helpers } from "../services/helpers";
import ColorOptions from '../components/ColorOptions'
import ProductImageSlider from '../components/ProductImageSlider'
import { PrimaryButton } from '../components/PrimaryButton'
import { QuantityCounter } from '../components/QuantityCounter'
import ShippingCard from '../components/ShippingCard'
import deliveryIcon from '../assets/icons/icon-delivery.svg'
import returnIcon from '../assets/icons/icon-return.svg'

const ProductInfo = () => {
    const [activeColor, setActiveColor] = useState(singleProduct.colors?.[0] ?? null);

    return (
        <PageLayout>
            <div className="container">
                <div className="row mt-5 ">
                    <div className={`col-lg-7 ${styles.product_images_container}`}>
                        <figure>
                            <img src={singleProduct.images[0]} alt={singleProduct.name} />
                        </figure>
                        <ProductImageSlider images={singleProduct.images} />
                    </div>
                    <div className='col-lg-5'>
                        <div className={styles.product_content_container}>
                            <div>
                                <h1 className={styles.product_title}>{singleProduct.name}</h1>
                                <div className='d-flex gap-2 align-items-center'>
                                    <div><Rating readonly initialValue={singleProduct.rating} size={22} /></div>
                                    <span className={styles.in_stock}>In Stock</span>
                                </div>

                                <p className={styles.product_price}>{Helpers.priceFormatter(singleProduct.price)}</p>
                                <p className={styles.product_desc}>{singleProduct.description}</p>


                                <div className={`${styles.product_color_variants} d-flex gap-2 align-items-center`}>
                                    <span className={styles.product_color_title}>Colors:</span>
                                    <div className='d-flex gap-2 align-items-center'>
                                        {activeColor && <ColorOptions colorsList={singleProduct.colors} activeColor={activeColor} onChangeColor={setActiveColor}></ColorOptions>}
                                    </div>
                                </div>
                                <div className={`${styles.product_buy_container} d-flex gap-4 align-items-center`}>
                                    <div><QuantityCounter></QuantityCounter></div>
                                    <div><PrimaryButton onClick={() => { }}>Buy Now</PrimaryButton></div>
                                </div>
                                <div className={`${styles.product_shipping_container} d-flex flex-column my-5`}>
                                    <ShippingCard iconSrc={deliveryIcon} title="Free Delivery" desc="Enter your postal code for Delivery Availability"></ShippingCard>
                                    <ShippingCard iconSrc={returnIcon} title="Return Delivery" desc="Free 30 Days Delivery Returns."></ShippingCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <SectHeader head="Related Items" />
                    <ProductSlider />
                </div>
            </div>
        </PageLayout>
    )
}

export default ProductInfo;