import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useProduct from "../../Hooks/useProduct";
import Loading from "../SharedComponent/Loading";

const Purchase = () => {
  const { productId } = useParams();
  const [product, setProduct] = useProduct(productId);
  const [user] = useAuthState(auth);
  const {
    img,
    name,
    type,
    material,
    position,
    description,
    minimum_order_quantity,
    quantity,
    price,
  } = product;

  if (product === {}) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>
            <span className="font-bold">Type: </span>
            {type}
          </p>
          <p>
            <span className="font-bold">Material: </span>
            {material}
          </p>
          <p>
            <span className="font-bold">Position: </span>
            {position}
          </p>
          <p>
            <span className="font-bold">Minimum Order Quantity: </span>
            {minimum_order_quantity}
          </p>
          <p>
            <span className="font-bold">Quantity: </span>
            {quantity}
          </p>
          <p>
            <span className="font-bold">Price: </span>
            ${price}
          </p>
          <div className="card-actions justify-end">
            <label for="my-modal-3" class="btn modal-button">
              Buy
            </label>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">Buy: {name}</h3>
          <div className="flex justify-center items-center mx-auto mt-6">
            <div id="purchase-form">
              <p className="mt-3"> 
                <span className="font-bold">Type: </span>
                {type}
              </p>
              
              <p className="mt-3">
                <span className="font-bold">Price: </span>$
                {price}
              </p>

              <div class="form-control w-full max-w-xs mt-6">
                <label class="label">
                  <span class="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={user?.displayName}
                  disabled
                  class="input input-bordered w-full max-w-xs"
                />
              
              </div>

              <div class="form-control w-full max-w-xs mt-6">
                <label class="label">
                  <span class="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  value={user?.email}
                  disabled
                  placeholder="Enter Email"
                  class="input input-bordered w-full max-w-xs"
                />
              
              </div>

              <div class="form-control w-full max-w-xs mt-6">
                <label class="label">
                  <span class="label-text">Purchase Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter quantity"
                  class="input input-bordered w-full max-w-xs"
                />
              
              </div>
              <button class="btn mt-5">Continue To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
