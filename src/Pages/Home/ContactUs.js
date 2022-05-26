import React from "react";

const ContactUs = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <img className="rounded" src="https://i.postimg.cc/PJKrj8L9/contact.png" alt="contact" />
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="Email"
                placeholder="Email"
                class="input input-bordered"
              />
              
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Message</span>
              </label>
              <input
                type="Email"
                placeholder="Email"
                class="input input-bordered"
              />
              
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
