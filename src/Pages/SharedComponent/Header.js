import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "./Loading";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const siteTitle = (
    <>
      <Link to="/" className="btn btn-ghost normal-case text-2xl text-primary">
        Hynda Motors
      </Link>
    </>
  );

  const menuItems = (
    <>
      <li className="text-lg">
        <Link to="/">Home</Link>
      </li>
      <li className="text-lg">
        <Link to="/blog">Blog</Link>
      </li>
      {
        user && <li className="text-lg">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      }
    </>
  );

  const logout = () => {
    signOut(auth);
    navigate('/');
    toast('Signed Out');
  };

  if(loading) {
    return <Loading></Loading>
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        {siteTitle}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={logout} className="btn btn-ghost">
            Sign Out
          </button>
        ) : (
          <Link to="/login" className="btn btn-primary text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
