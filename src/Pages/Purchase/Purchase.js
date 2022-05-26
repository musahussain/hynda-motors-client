import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
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

  const addOrder = (event) => {
    event.preventDefault();
    const userName = event.target?.username.value;
    const emailAddress = event.target.email.value;
    const phone = event.target.phone.value;
    const orderQuantity = event.target.quantity.value;
    if(orderQuantity < minimum_order_quantity || orderQuantity > quantity) {
      toast.error(`Purchase Qunatity can't be less than ${minimum_order_quantity} and can't be more than ${quantity}`);
      return;
    } 
    const order = {
      name: userName,
      email: emailAddress,
      phone,
      quantity: orderQuantity,
      productName: product.name,
      productId,
    };

    const url = `https://boiling-mountain-76234.herokuapp.com/order`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged) {
          toast(`Your Order for ${order.productName} was Successfull`);
        } else {
          toast.error(`Your Order for ${order.productName} was failed`);
        }
      });
  };

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
            <span className="font-bold">Available Quantity: </span>
            {quantity}
          </p>
          <p>
            <span className="font-bold">Price: </span>${price}
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
                <span className="font-bold">Price: </span>${price}
              </p>

              <form onSubmit={addOrder}>
                <div class="form-control w-full max-w-xs mt-6">
                  <label class="label">
                    <span class="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    name="username"
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
                    name="email"
                    value={user?.email}
                    disabled
                    placeholder="Enter Email"
                    class="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div class="form-control w-full max-w-xs mt-6">
                  <label class="label">
                    <span class="label-text">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number"
                    class="input input-bordered w-full max-w-xs"
                    required
                  />
                </div>

                <div class="form-control w-full max-w-xs mt-6">
                  <label class="label">
                    <span class="label-text">Purchase Quantity</span>
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Enter quantity"
                    class="input input-bordered w-full max-w-xs"
                    required
                  />
                </div>

                <label
                  for="my-modal-3"
                  
                >
                  <input
                class="btn mt-5"
                type="submit"
                value="Continue To Checkout"
              />
                </label>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
