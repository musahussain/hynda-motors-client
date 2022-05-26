import React from "react";

const SingleReview = ({ rv }) => {
  const { userName, review, rating } = rv;
  return (
    <div class="card bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <div class="avatar placeholder">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-24 ring ring-primary ring-offset-base-100 ring-offset-2">
            <span class="text-3xl">{userName.slice(0, 1)}</span>
          </div>
        </div>
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{userName}</h2>
        <p>{review}</p>
        <div class="rating">
        {
            (parseInt(rating) === 5) ? <>
            <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
            </> : <></>
        }
        {
            (parseInt(rating) === 4) ? <>
            <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          </> : <></>
        }
        {
            (parseInt(rating) === 3) ? <>
                <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
            </> : <></>
        }
        {
            (parseInt(rating) === 2) ? <>
                <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
            </> : <></>
        } 
        {
            (parseInt(rating) === 1) ? <>
                <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
            </> : <></>
        }
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
