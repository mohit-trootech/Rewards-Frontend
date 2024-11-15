import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/Contexts";
import updatePasswordGif from "../../static/img/password_change.webp";

function ForgotPassword() {
  /**Forgot Password Steps */
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
  const { resetPasswordHandle, resetPasswordDoneHandle } =
    useContext(UserContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (otpBlock) {
      resetPasswordDoneHandle(new FormData(event.target));
    } else {
      resetPasswordHandle(new FormData(event.target));
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200 pt-5">
        <div className="drop-shadow-xl w-full rounded-md flex justify-between items-stretch">
          <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0 my-auto">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold">
              Reset Your Password
            </h1>
            <p className="text-sm text-center mt-2 ilatic">
              Remember your password?
              <a href="/login/" className="underline ml-1 text-primary">
                Login here
              </a>
            </p>
            <form
              method="post"
              onSubmit={handleSubmit}
              className="w-full mt-5 sm:mt-8"
            >
              <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  name="email"
                  className="input input-bordered input-primary w-full"
                />
                {otpBlock && (
                  <>
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      name="otp"
                      className="input input-bordered input-primary w-full"
                    />
                    <input
                      type="text"
                      placeholder="Enter New Password"
                      name="new_password"
                      className="input input-bordered input-primary w-full"
                    />
                    <input
                      type="text"
                      placeholder="Confirm New Password"
                      name="confirm_password"
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
                  </>
                )}
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={submitted}
                >
                  {otpBlock ? "Reset Password" : "Generate OTP"}
                </button>
              </div>
            </form>
          </div>
          <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
            <img src={updatePasswordGif} alt="login" className="h-[500px]" />
          </div>
        </div>
      </div>
    </>
  );
}
export default ForgotPassword;
