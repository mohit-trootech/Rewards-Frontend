/* eslint-disable jsx-a11y/no-redundant-roles */
/**Update Profile Modal */
import { UserContext } from "../../contexts/Contexts";
import { useContext } from "react";
import { useEffect } from "react";
function UpdateProfile({ user }) {
  /**Update Profile Modal  */

  const {
    counter,
    setCounter,
    submitted,
    setSubmitted,
    otpBlock,
    setOtpBlock,
  } = useContext(UserContext);
  useEffect(() => {
    let timerId;
    if (submitted) {
      setCounter(30);
      timerId = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter <= 1) {
            clearInterval(timerId);
            setSubmitted(false);
            setOtpBlock(false);
            return 30;
          } else {
            return prevCounter - 1;
          }
        });
      }, 1000);
    }

    // Clean up the timer when the component unmounts or submitted is false
    return () => clearInterval(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted]);

  const {
    updateUserProfileHandle,
    updateUserEmailHandle,
    emailVerificationHandle,
    emailVerificationOtpHandle,
  } = useContext(UserContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    updateUserProfileHandle(new FormData(event.target));
  };
  const handleEmailSubmit = (event) => {
    event.preventDefault();
    updateUserEmailHandle(new FormData(event.target));
  };
  const handleVerifyEmailSubmit = (event) => {
    event.preventDefault();
    emailVerificationHandle(new FormData(event.target));
  };
  const handleVerificationOtpSubmit = (event) => {
    event.preventDefault();
    emailVerificationOtpHandle();
    setOtpBlock(true);
    setSubmitted(true);
  };

  return (
    <>
      <dialog id="update_profile" className="modal">
        <div className="modal-box max-w-5xl" style={{ scrollbarWidth: "none" }}>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute scale-95 transition-all hover:scale-100 hover:rotate-90 right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Update Profile!</h3>
          <div className="py-4">
            <form
              onSubmit={handleSubmit}
              role="form"
              className="w-full mt-5 sm:mt-8"
            >
              <div className="mx-auto w-full flex flex-col gap-5">
                {/* First Name */}
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Your First Name"
                    name="first_name"
                    defaultValue={user.first_name}
                    className="input input-bordered input-primary w-full"
                  />
                </label>
                {/* Last Name */}
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    name="last_name"
                    defaultValue={user.last_name}
                    className="input input-bordered input-primary w-full"
                  />
                </label>
                {/* Username */}
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">User Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Your Username"
                    name="username"
                    defaultValue={user.username}
                    className="input input-bordered input-primary w-full"
                  />
                </label>
                {/* Age */}
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Age</span>
                  </div>
                  <input
                    type="number"
                    placeholder="Enter Your Age"
                    name="age"
                    min={18}
                    max={100}
                    defaultValue={user.age}
                    className="input input-bordered input-primary w-full"
                  />
                </label>
                {/* Gender */}
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Gender</span>
                  </div>
                  <select
                    className="select select-bordered select-primary w-full"
                    name="gender"
                    defaultValue={user.gender}
                  >
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                  </select>
                </label>
                {/* Phone Number */}
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Phone Number</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter Your Phone"
                    name="phone"
                    pattern="^\d{10}$"
                    defaultValue={user.phone}
                    className="input input-bordered input-primary w-full"
                  />
                </label>
                {/*Address */}
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Phone Number</span>
                  </div>
                  <textarea
                    className="textarea textarea-primary"
                    placeholder="Enter Address"
                    name="address"
                    id="address"
                    defaultValue={user.address}
                    rows={4}
                  ></textarea>
                </label>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                  <a
                    role="button"
                    href="/change-password/"
                    className="btn btn-outline btn-primary btn-block max-w-[200px]"
                  >
                    Change Password
                  </a>
                  <button
                    type="submit"
                    role="button"
                    className="btn btn-primary btn-block max-w-[200px]"
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="update_email" className="modal">
        <div className="modal-box" style={{ scrollbarWidth: "none" }}>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute scale-95 transition-all hover:scale-100 hover:rotate-90 right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Update Email Address!</h3>
          <div className="py-4">
            <p className="text-sm">
              Note: Updating email address requires to verify account again,
              Update email at your own risk.
            </p>
            <form
              method="post"
              onSubmit={handleEmailSubmit}
              role="form"
              className="w-full mt-5 sm:mt-8"
            >
              <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Enter new email address"
                  name="email"
                  defaultValue={user.email}
                  className="input input-bordered input-primary w-full"
                />
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-end items-center">
                  <button
                    type="submit"
                    role="button"
                    className="btn btn-primary btn-block max-w-[200px]"
                  >
                    Update Email
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="verify_email" className="modal">
        <div className="modal-box" style={{ scrollbarWidth: "none" }}>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute scale-95 transition-all hover:scale-100 hover:rotate-90 right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Verify Email!</h3>
          <div className="py-4">
            <form
              method="post"
              onSubmit={handleVerifyEmailSubmit}
              role="form"
              className="w-full mt-5 sm:mt-8"
            >
              <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  name="otp"
                  className="input input-bordered input-primary w-full"
                />
                <span className="text-sm countdown">
                  Resend OTP After,
                  <span
                    className="px-2 text-primary font-bold"
                    style={{ "--value": counter }}
                  ></span>
                  Seconds
                </span>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-end items-center">
                  <button
                    onClick={handleVerificationOtpSubmit}
                    role="button"
                    className="btn btn-primary btn-block max-w-[200px]"
                    id="generate_otp"
                    disabled={otpBlock}
                  >
                    Generate OTP
                  </button>
                  <button
                    type="submit"
                    role="button"
                    className="btn btn-primary btn-block max-w-[200px]"
                  >
                    Verify
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default UpdateProfile;
