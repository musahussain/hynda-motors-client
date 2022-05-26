import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const addReview = data => {
        const productName = data.productName;
        const review = data.reviewText;
        const rating = data.rating;
        const userName = user?.displayName;






        const order = {
            productName,
            review,
            userName,
            rating,
        };


        const url = `https://boiling-mountain-76234.herokuapp.com/addreview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast('Added Review Successfully');
        });
    }

  return (
    <div>
      <h1 className="text-3xl mt-6">Add A Review</h1>
      <div className="flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(addReview)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                placeholder='Product Name' {...register("productName", { required: true, maxLength: 90 })}
              />
            </div>

            
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Rating for the Review</span>
              </label>
              <input className="input input-bordered w-full max-w-xs" placeholder='Rating' type="number" {...register("rating")} />
            </div>

            <p>Your Review</p>
            <textarea name="reviewText" className="textarea textarea-bordered" placeholder='Add Review' {...register("reviewText")}></textarea>
            <div className="card-actions justify-center">
            <input type='reset' value='Reset' className="btn btn-primary text-white" />
              <input type='submit' value='Add Review' className="btn btn-primary text-white" />
            </div>
            </form>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default AddReview;
