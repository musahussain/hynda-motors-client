import React from "react";

const Discount = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.postimg.cc/zvtcCJb4/salegoinon.png"
          className="max-w-sm rounded-lg shadow-2xl" alt=""/>
        <div>
          <h1 className="text-5xl font-bold">Limited Time Offer</h1>
          <p className="py-6">
            Limited time offer going on. Upto 50% discount. Discount is available on all bike parts. So Order Now.
          </p>
          <button className="btn btn-primary text-white"><a href="#products">Get Started</a></button>
        </div>
      </div>
    </div>
  );
};

export default Discount;
