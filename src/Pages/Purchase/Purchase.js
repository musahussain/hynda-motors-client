import React from "react";
import { useParams } from "react-router-dom";
import useProduct from "../../Hooks/useProduct";

const Purchase = () => {
  const { productId } = useParams();
  const [product, setProduct] = useProduct(productId);
  const {img, name, type, material, position, description, minimum_order_quantity, quantity, price, _id} = product;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p><span className="font-bold">Type: </span>{type}</p>
        <p><span className="font-bold">Material: </span>{material}</p>
        <p><span className="font-bold">Position: </span>{position}</p>
        <p><span className="font-bold">Minimum Order Quantity: </span>{minimum_order_quantity}</p>
        <p><span className="font-bold">Quantity: </span>{quantity}</p>
        <p><span className="font-bold">Price: </span>{price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary text-white">Continue To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
