import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-36">
      <div class="card bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.postimg.cc/RF84LXLG/react-performance.jpg"
            alt=""
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            How will you improve the performance of a React Application?
          </h2>
          <p>
            There are some todo list to improve the performance of a react
            application. We can keep component state local where necessary.
            Memoizing React components to prevent unnecessary re-renders.
            Because unnecessary re-rendering decreases performance.
            Code-splitting in React using dynamic import()
          </p>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.postimg.cc/Y9kpSbzs/react-state.png"
            alt=""
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
          What are the different ways to manage a state in a React application?
          </h2>
          <p>
            There are four main types of state. 1. Local State, 2. Global State, 3. Server State, 4. URL State. In order to use state in our app react provides us a hook called useState. We can use   React context api to manage state. Redux is a another solution for state management.
          </p>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.postimg.cc/ZnNQGh1B/prototypical.png"
            alt=""
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
          How does prototypical inheritance work?
          </h2>
          <p>
          Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes.
          The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.
          </p>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.postimg.cc/DZrj6csL/react.png"
            alt=""
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
          Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
          </h2>
          <p>
          React compares the previous state with the updated state to decide if the component needs to be re-rendered. Modifying the state directly will disturb this process. As a result the component will behave unexpectedly.
          </p>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.postimg.cc/PrTxSrGw/array.png"
            alt=""
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
          You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
          </h2>
          <p>
            There are multitple ways to do this. I can create a for loop for this problem. Iterate over each product. Check if the product name and searched name matches. If the match is found the result is returned product. Or another way is to use the javascript higher order array functions. We can use filter to do this easily. Filter iterates an array and returns the expected result based upon conditions. Here the condition is if the product name === searched_name. If it finds a match then it return the product.
          </p>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.postimg.cc/pX3nqMZb/unittest.jpg"
            alt=""
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
          What is a unit test? Why should write unit tests?
          </h2>
          <p>
          Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
