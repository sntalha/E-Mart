import React from 'react'
import { PageLayout } from '../components/PageLayout'
import BannerSlider from '../components/BannerSlider'
import { SectHeader } from '../components/SectHeader'
import CategorySlider from '../components/CategorySlider'
import ProductSlider from '../components/ProductSlider'
import dummyData from '../services/dummy.json'
import { ProductCard } from '../components/ProductCard'
import { PrimaryButton } from '../components/PrimaryButton'
import { useNavigate } from 'react-router-dom'
import fimg from '../assets/images/featureImg.png'

export const Home = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <BannerSlider />
      <div className='container'>
        <SectHeader head="Categories" title="Browse by Categories" />
        <CategorySlider />
        <SectHeader head="This Month" title="Best Selling Products" />
        <ProductSlider />
        <SectHeader head="Our Products" title="Explore Our Products" />
        <div className='d-flex flex-wrap justify-content-center justify-content-md-between gap-3'>
          {dummyData?.products?.slice(0, 8).map((item) => (
            <div className='d-flex justify-content-center' key={item.id}>
              <ProductCard data={item} />
            </div>
          ))}
        </div>
        <div style={{width:200,textAlign:"center",margin:"20px auto"}}>
          <PrimaryButton onClick={()=>{navigate("/products")}}>View All Products</PrimaryButton>
        </div>
        <img src={fimg} alt="Feature Image" width={"100%"} className='mb-5' />
      </div>
    </PageLayout>
  )
}
