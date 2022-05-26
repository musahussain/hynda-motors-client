import React from "react";

const ContactUs = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img className="rounded" src="https://i.postimg.cc/j52r7kCg/contact-removebg-preview.png" alt="contact" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="Email"
                placeholder="Email"
                className="input input-bordered"
              />
              
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <input
                type="Email"
                placeholder="Email"
                className="input input-bordered"
              />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
