/**User Provider Contexts */
import { useState } from "react";
import { UserContext } from "../contexts/Contexts";
import { AxiosRequest } from "../utils/AxiosRequest";
import { rewardsApiDefaultAccountsUrl } from "../utils/Constants";
import { LoadingToast } from "../utils/ToastPromiseHandling";
import {
  userLogin,
  updateEmail,
  updateProfile,
  userRegister,
  changePassword,
  generateOtp,
  VerifyEmail,
  resetPassword,
} from "../utils/SuccessToasts";
import { getBearerToken } from "../utils/BaseUtils";
const UserProvider = ({ children }) => {
  /**User Provider */
  let id = null;
  const [user, setUser] = useState(null);
  /**Toggle Password View State */
  const [togglePassword, setTogglePassword] = useState(false);
  const togglePasswordView = () => {
    setTogglePassword(!togglePassword);
  };
  /**User Registering Context */
  const userRegisterHandle = (data) => {
    /**Axios Request for User Registration */
    id = LoadingToast("Registering User...", {
      onClose: () => {
        window.location.href = "/login";
      },
    });
    AxiosRequest(
      rewardsApiDefaultAccountsUrl + "register/",
      "POST",
      data,
      null,
      null,
      userRegister,
      id
    );
  };
  /**User Login Context */
  const userLoginHandle = (data) => {
    /**Axios Request for User Login */
    id = LoadingToast("Logging In...", {
      onClose: () => {
        window.location.href = "/";
      },
    });
    AxiosRequest(
      rewardsApiDefaultAccountsUrl + "login/",
      "POST",
      data,
      null,
      null,
      userLogin,
      id
    );
  };
  /**Fetch User Profile */
  const fetchUserHandle = async () => {
    /**Axios Request to Fetch User Profile */
    await AxiosRequest(
      rewardsApiDefaultAccountsUrl + "profile",
      "GET",
      null,
      getBearerToken(),
      null,
      setUser,
      null
    );
  };
  /**User Password Change Context */
  const updatePasswordHandle = async (data) => {
    /**Axios Request to Update User Password */
    id = LoadingToast("Updating Password...");
    await AxiosRequest(
      rewardsApiDefaultAccountsUrl + "change-password/",
      "PATCH",
      data,
      getBearerToken(),
      null,
      changePassword,
      id
    );
  };
  /**User Password Reset Context */
  const resetPasswordHandle = async (data) => {
    /**Axios Request to Update User Password */
    id = LoadingToast("Resetting Password...");
    await AxiosRequest(
      rewardsApiDefaultAccountsUrl + "reset-password/",
      "POST",
      data,
      null,
      null,
      resetPassword,
      id
    );
  };
  /**User Password Reset Context */
  const resetPasswordDoneHandle = async (data) => {
    /**Axios Request to Update User Password */
    id = LoadingToast("Resetting Password...");
    await AxiosRequest(
      rewardsApiDefaultAccountsUrl + "reset-password/",
      "PATCH",
      data,
      null,
      null,
      resetPassword,
      id
    );
  };
  /**Update User Profile Context */
  const updateUserProfileHandle = async (data) => {
    /**Axios Request to Update User Password */
    id = LoadingToast("Updating Password...");
    const response = await AxiosRequest(
      rewardsApiDefaultAccountsUrl + "profile/",
      "PATCH",
      data,
      getBearerToken(),
      null,
      updateProfile,
      id
    );
    if (response.status === 200) {
      setUser(response.data);
    }
  };
  /**Update User Email Context */
  const updateUserEmailHandle = async (data) => {
    /**Axios Request to Update User Eamil */
    id = LoadingToast("Updating Email...");
    await AxiosRequest(
      rewardsApiDefaultAccountsUrl + "change-email/",
      "PATCH",
      data,
      getBearerToken(),
      null,
      updateEmail,
      id
    );
  };
  /**Verify Email OTP */
  const emailVerificationOtpHandle = async (data) => {
    /**Axios Request to Update User Password */
    id = LoadingToast("Generating Otp...");
    await AxiosRequest(
      rewardsApiDefaultAccountsUrl + "verify-email/",
      "POST",
      data,
      getBearerToken(),
      null,
      generateOtp,
      id
    );
  };
  /**User Email Verification */
  const emailVerificationHandle = async (data) => {
    /**Axios Request to Update User Password */
    id = LoadingToast("Verifying Email...");
    await AxiosRequest(
      rewardsApiDefaultAccountsUrl + "verify-email/",
      "PATCH",
      data,
      getBearerToken(),
      null,
      VerifyEmail,
      id
    );
  };
  /**User Logout Context */

  /**Export Default Data */
  const data = {
    user,
    togglePassword,
    togglePasswordView,
    userRegisterHandle,
    userLoginHandle,
    fetchUserHandle,
    updatePasswordHandle,
    updateUserProfileHandle,
    updateUserEmailHandle,
    emailVerificationOtpHandle,
    emailVerificationHandle,
    resetPasswordHandle,
    resetPasswordDoneHandle,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
