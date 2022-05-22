import React from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../Hooks/useProduct';

const Purchase = () => {
    const {productId} = useParams();
    const [product, setProduct] = useProduct(productId);

    return (
        <div>
            <h1>Purchase</h1>
        </div>
    );
};

export default Purchase;