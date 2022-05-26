import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            
            <div className="card-body">
              <h2 className="card-title">User Name: {user?.displayName}</h2>
              <p>Email Address: {user?.email}</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
