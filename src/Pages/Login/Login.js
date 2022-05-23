import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { signInWithEmailAndPassword } from "firebase/auth";
import Loading from "../SharedComponent/Loading";
import { toast } from "react-toastify";

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [currentUser, currentLoading, currentError] = useAuthState(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
      const location = useLocation();
      let from = location.state?.from?.pathname || "/";


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');


    const login = () => {
        if(email === '') {
          setLoginError('Email address required');
          return;
        } else if(password === '') {
          setLoginError('Password required');
          return;
        }
        signInWithEmailAndPassword(email, password);
    }


    const googleSignIn = () => {
        signInWithGoogle();
    }

    if(googleUser) {
      toast('Signed In');
    }

    if(user) {
      toast('Logged In');
    }

    useEffect( () => {
        if(currentUser) {
            navigate('/');
        }
    }, [currentUser, navigate]);

    useEffect( () => {
        if (user  || googleUser) {
            navigate(from, { replace: true });
        }
    }, [from, navigate, user, googleUser]);

    if(loading || googleLoading) {
        return <Loading></Loading>
    }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mt-36 lg:mt-0">Login</h1>
          <img className="mt-40" src="https://i.postimg.cc/90h6nvxM/login-image.png" alt="login banner" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                placeholder="Password"
                className="input input-bordered"
                required
              />
              
            </div>
            <div onClick={login} className="form-control mt-6">
              <button className="btn btn-primary text-white">Login</button>
            </div>
            <label className="label">
                <Link to="/signup" className="label-text-alt link link-hover">
                New to Hynda Motors? Sign Up
                </Link>
              </label>
              <p><small className="text-red-600">{error?.message || googleError?.message || loginError}</small></p>
            {/* divider  */}
            <div className="divider">OR</div>
            <button onClick={googleSignIn}  className="btn btn-neutral">Continue With Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
