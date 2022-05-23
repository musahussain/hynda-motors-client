import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../SharedComponent/Loading';

const Signup = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const [currentUser, currentLoading, currentError] = useAuthState(auth);
      
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const navigate = useNavigate();


    const signup = async () => {
      if(name === '') {
        setLoginError('Name required');
        return;
      }
      if(email === '') {
        setLoginError('Email address required');
        return;
      } else if(password === '') {
        setLoginError('Password required');
        return;
      }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
    }

    const loginGoogle = () => {
        signInWithGoogle();
    }

    if(googleUser) {
      toast('Logged In');
    }

    if(user) {
      toast('Signed Up');
    }

    useEffect( () => {
        if(currentUser) {
            navigate('/');
        }
    }, [currentUser, navigate]);

    if(loading || googleLoading || updating) {
        return <Loading></Loading>
    }

    return (
        <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold mt-36 lg:mt-0">Sign Up </h1>
          <img className="mt-40" src="https://i.postimg.cc/90h6nvxM/login-image.png" alt="login banner" />
        </div>
        <div class="card mt-36 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
          <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Name"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="Email"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                placeholder="Password"
                class="input input-bordered"
                required
              />
              
            </div>
            <div class="form-control mt-6">
              <button onClick={signup} class="btn btn-primary text-white">Sign Up</button>
            </div>
            <label class="label">
                <Link to="/login" class="label-text-alt link link-hover">
                Already Have an Account? Login
                </Link>
              </label>
              <p><small className="text-red-600">{error?.message || googleError?.message || loginError}</small></p>
            {/* divider  */}
            <div class="divider">OR</div>
            <button onClick={loginGoogle} class="btn btn-neutral">Continue With Google</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Signup;