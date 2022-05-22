import React from "react";

const Banner = () => {
    console.log(process.env.API_KEY)
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.postimg.cc/gjCLjS69/banner.png"
          className="max-w-sm rounded-lg shadow-2xl" alt="banner"
        />
        <div>
          <h1 className="text-5xl font-bold">Hynda Bike Parts</h1>
          <p className="py-6">
            We provide premium bike parts. Every parts quality is tested. We ship to every country. Customer support 24/7.
          </p>
          <button className="btn btn-primary text-white"><a href="#products">Get Started</a></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
