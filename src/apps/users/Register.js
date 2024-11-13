/**Users App - Register Page */
import { useContext } from "react";
import { UserContext } from "../../contexts/Contexts";
import rewardsPng from "../../static/img/rewards.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
const RegisterPage = () => {
  /**Toggle Password View State */
  const { togglePassword, togglePasswordView, userRegisterHandle } =
    useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    userRegisterHandle(new FormData(event.target));
  };

  return (
    <>
      <div className="bg-base-200 flex w-full mx-auto rounded-lg shadow-lg">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage: "url('https://picsum.photos/1024/1024')",
          }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src={rewardsPng} alt="" />
          </div>

          <p className="mt-3 text-xl text-center">Register & Earn Rewards</p>

          <button className="flex items-center justify-center mt-4 btn btn-primary w-full shadow-sm hover:shadow-lg">
            <div className="px-4 py-2 flex  items-center justify-center">
              <FaGoogle className="w-6 h-6 mr-2" />
              <span className="font-bold text-center">Sign up with Google</span>
            </div>
          </button>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b lg:w-1/4"></span>

            <div className="text-xs text-center uppercase">
              or sign up with email
            </div>

            <span className="w-1/5 border-b lg:w-1/4"></span>
          </div>

          <form method="post" id="register-form" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mt-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder="Enter Your Name"
                  className="input input-bordered input-primary w-full"
                />
              </label>
            </div>
            {/* Username */}
            <div className="mt-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Username</span>
                </div>
                <input
                  type="text"
                  name="username"
                  required
                  placeholder="Enter You Username"
                  className="input input-bordered w-full input-primary"
                />
              </label>
            </div>
            {/* Email Address */}
            <div className="mt-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Email Address</span>
                </div>
                <input
                  type="text"
                  name="email"
                  required
                  placeholder="Enter You Email Address"
                  className="input input-bordered w-full input-primary"
                />
              </label>
            </div>
            {/* Age */}
            <div className="mt-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Age</span>
                </div>
                <input
                  type="number"
                  name="age"
                  min={18}
                  max={99}
                  required
                  placeholder="Enter Your Age"
                  className="input input-bordered input-primary w-full"
                />
              </label>
            </div>
            {/* Age */}
            <div className="mt-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Enter Your Password"
                  className="input input-bordered input-primary w-full"
                />
              </label>
            </div>
            {/* Confirm Password */}
            <div className="mt-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Confirm Password</span>
                </div>
                <input
                  type={togglePassword ? "text" : "password"}
                  name="confirm_password"
                  required
                  placeholder="Confirm Your Password"
                  className="input input-bordered input-primary w-full"
                />
              </label>
            </div>
            {/* Toggle Password View*/}
            <div className="mt-4">
              <label className="label cursor-pointer flex items-center justify-start">
                <input
                  type="checkbox"
                  className="mr-2 toggle toggle-primary"
                  onClick={togglePasswordView}
                />
                <span className="label-text italic">Show Password</span>
              </label>
            </div>
            <div className="mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Sign Up
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b md:w-1/4"></span>

            <Link
              to="/login"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign in
            </Link>

            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
