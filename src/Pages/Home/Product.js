import React from "react";

const Product = ({pd}) => {
    const {name, img, type, material, position, price} = pd;
  return (
    <div class="card w-96 mx-auto bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p><span className="font-bold">Type:</span> {type}</p>
        <p><span className="font-bold">Material:</span> {material}</p>
        <p><span className="font-bold">Position:</span> {position}</p>
        <p><span className="font-bold">Price:</span> {price}</p>
        <div class="card-actions">
          <button class="btn btn-primary text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
