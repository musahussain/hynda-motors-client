import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Loading from '../SharedComponent/Loading';
import Product from './Product';

const Products = () => {
    const [products] = useProducts();
    const slicedProducts = products.slice(0, 6);

    return (
        <div id='products'>
            <h1 className='text-center my-12 text-4xl text-neutral'>Bike Parts</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
                {
                    slicedProducts.map(pd => <Product key={pd._id} pd={pd}></Product>)
                }
                {
                    (products.length === 0) && <Loading></Loading>
                }
            </div>
        </div>
    );
};

export default Products;