import React, { useEffect, useState } from 'react'
import ProductsAPI from '../api/ProductsAPI';
import ProductCard from '../components/ProductCard';
import TrendingProductCard from '../components/TrendingProductCard';

const TrendingProducts = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await ProductsAPI.getAll();
            setTrendingProducts(res.data);
        };
        fetchData();
    }, []);

    return (
        <section className='custom-best-seller-section'>
            <h2 className='text-center pb-5'>Trending Products</h2>
            <div className="container-fluid">
                <div className="row">
                    {
                        trendingProducts.slice(4,8).map((product) => {
                            return (
                                <div className="col-lg-3" key={product.id}>
                                    <TrendingProductCard product={product} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}

export default TrendingProducts
