import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user, loading, error] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const userEmail = user.email;

  useEffect(() => {
    const url = `https://boiling-mountain-76234.herokuapp.com/order/${userEmail}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [userEmail]);

  const deleteItem = (id) => {
    setDeleteId(id);
  };

  const deleteOrder = () => {
    const url = `https://boiling-mountain-76234.herokuapp.com/order/${deleteId}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingOrders = orders.filter(
            (order) => order._id !== deleteId
          );
          setOrders(remainingOrders);
          toast("Deleted. You can now close the Modal");
        }

        console.log(data);
      });
  };

  return (
    <div>
      <h1 className="text-3xl mt-6 mb-6">My Orders: {orders.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <th>{orders.indexOf(order) + 1}</th>
                <td>{order.productName}</td>
                <td>{order.quantity}</td>
                <td>{order.status}</td>
                <td onClick={() => deleteItem(order._id)}>
                  <label htmlFor="my-modal-3" className="btn modal-button">
                    Cancel
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Are you sure you want to delete?</h3>
            <button onClick={deleteOrder} className="btn">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
