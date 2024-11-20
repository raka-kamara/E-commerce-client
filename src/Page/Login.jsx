import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from '../Components/Shared/GoogleLogin';
import useAuth from '../hooks/useAuth';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {Login} = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: {errors} } = useForm();

    const onSubmit = (data) => {
        Login(data.email, data.password)
        navigate("/")
      }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Welcome Again!
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", {required: true})}
                  
                />{errors.email && (<p className="text-red-500 text-sm font-light">Email is Required</p>)}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {required: true, minLength:6})}
                />
                {errors.password?.type === "required" && (<p className="text-red-600 text-sm font-light">Password is Required</p>)}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-ghost border-0 border-b-2 border-gray-500">
                  Login
                </button>
                
              </div>
            </form>
            <GoogleLogin/>
            <p className="my-4 text-sm text-center font-light">
             New Here? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;