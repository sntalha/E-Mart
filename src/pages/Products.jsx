import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { SectHeader } from '../components/SectHeader'
import { ProductCard } from '../components/ProductCard'
import dummyData from '../services/dummy.json'

const Products = () => {
    return (
        <PageLayout>
            <div className="container">
                <SectHeader head="This Month" title="Best Selling Products" />
                <div className='d-flex flex-wrap justify-content-center justify-content-md-between gap-3'>
                    {dummyData?.products?.map((item) => (
                        <div className='d-flex justify-content-center' key={item.id}>
                            <ProductCard data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    )
}

export default Products;