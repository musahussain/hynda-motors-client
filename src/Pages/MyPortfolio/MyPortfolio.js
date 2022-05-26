import React from "react";

const MyPortfolio = () => {
  return (
    <div>
      <h1 className="text-center text-4xl text-primary mt-12">My Portfolio</h1>
      <div className="flex justify-center items-center flex-col">
        <div className="card w-96 bg-base-100 shadow-xl mt-12">
          <figure>
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                <span className="text-3xl">M</span>
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">I am Muslim Hussain</h2>
            <p>
              <span className="font-bold">Email: </span>
              mdmuslimhussain1@gmail.com
            </p>
            <p>
              <span className="font-bold">Educational Background: </span>
              Studying in College. Inter first year.
            </p>

            <p>
              <span className="font-bold">Technologies I can use: </span>React,
              JavaScript, Node.js, MongoDb, Firebase, Heroku, Express.js
            </p>
          </div>
        </div>

        <div className="mt-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.postimg.cc/BZ88FJL0/insta-photo-img.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Insta Photo</h2>
              <div className="card-actions justify-end">
                <a href="https://insta-photo-5231d.web.app/"  className="btn btn-primary text-white">Live Website</a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.postimg.cc/prP1gsnQ/tronic.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Tronic</h2>
              <div className="card-actions justify-end">
                <a href="https://warehouse-887f5.web.app/" className="btn btn-primary text-white">Live Website</a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.postimg.cc/x17jnz5N/spiral.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Spiral</h2>
              <div className="card-actions justify-end">
                <a href="https://spiral-review.netlify.app/" className="btn btn-primary text-white">Live Website</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
