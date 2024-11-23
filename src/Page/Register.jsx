import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../Components/Shared/GoogleLogin";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
    const { CreateUser } = useAuth();

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
      const email = data.email;
      const role = data.role;
    const status = role === "buyer" ? "approved" : "pending";
    const wishlist = [];

    const userData = { email, role, status, wishlist };

    CreateUser(data.email, data.password).then(() => {
      axios.post("https://gadget-shop-server-three.vercel.app/users", userData).then((res) => {
        if(res.data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Registration Successful",
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/");
        }
      });
    });
    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Welcome to the family!</p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm font-light">
                    Email is Required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                    pattern:
                    /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                />
               {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">Password must be 8 characters</p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one number
                      and one special character.
                    </p>
                  )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => {
                      if (watch("password") != value) {
                        return "Your password do not match";
                      }
                    },
                  })}
                />
                {errors.confirmPassword?.type === "required" && (
                  <p className="text-red-600 text-sm font-light">
                    Both passwords must match
                  </p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Select Role</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  {...register("role", { required: true })}
                >
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </select>
                {errors.role && (
                  <p className="text-red-500 text-sm font-light">
                    You must select your role
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-ghost border-0 border-b-2 border-gray-500"
                >
                  Register
                </button>
              </div>
            </form>
            <GoogleLogin />
            <p className="my-4 text-sm text-center font-light">
              Already Have an Account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
