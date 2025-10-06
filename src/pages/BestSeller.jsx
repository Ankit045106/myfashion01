import React, { useEffect, useState } from 'react'
import ProductsAPI from '../api/ProductsAPI';
import ProductCard from '../components/ProductCard';

const BestSeller = () => {
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await ProductsAPI.getAll();
            setBestSeller(res.data);
        };
        fetchData();
    }, []);

    return (
        <section className='custom-best-seller-section'>
            <h2 className='text-center py-2'>Best Seller</h2>
            <div className="container-fluid">
                <div className="row">
                    {
                        bestSeller.slice(0,4).map((product) => {
                            return (
                                <div className="col-lg-3" key={product.id}>
                                    <ProductCard product={product} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}

export default BestSeller
