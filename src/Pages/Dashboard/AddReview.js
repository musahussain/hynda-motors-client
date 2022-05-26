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


        const url = `http://localhost:5000/addreview`;
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
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <form onSubmit={handleSubmit(addReview)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Product Name</span>
              </label>
              <input
                class="input input-bordered w-full max-w-xs"
                placeholder='Product Name' {...register("productName", { required: true, maxLength: 90 })}
              />
            </div>

            
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your Rating for the Review</span>
              </label>
              <input className="input input-bordered w-full max-w-xs" placeholder='Rating' type="number" {...register("rating")} />
            </div>

            <p>Your Review</p>
            <textarea name="reviewText" class="textarea textarea-bordered" placeholder='Add Review' {...register("reviewText")}></textarea>
            <div class="card-actions justify-center">
            <input type='reset' value='Reset' class="btn btn-primary text-white" />
              <input type='submit' value='Add Review' class="btn btn-primary text-white" />
            </div>
            </form>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default AddReview;
