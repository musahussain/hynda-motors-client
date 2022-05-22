import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [products] = useProducts();

    return (
        <div>
            <h1 className='text-center text-4xl text-neutral'>Bike Parts</h1>
            <div className='w-96 h-2 rounded bg-neutral mx-auto my-4'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
                {
                    products.map(pd => <Product key={pd._id} pd={pd}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;