/**User Provider Contexts */
import { useState } from "react";
import { UserContext } from "../contexts/Contexts";
import { loadLocalstorage } from "../utils/BaseUtils";
import { AxiosRequest } from "../utils/AxiosRequest";
import { rewardsApiDefaultAccountsUrl } from "../utils/Constants";
import { LoadingToast } from "../utils/ToastPromiseHandling";
import { userRegister, userLogin } from "../utils/SuccessToasts";
const UserProvider = ({ children }) => {
  /**User Provider */
  let id = null;
  const [user, setUser] = useState(loadLocalstorage("user") || null);
  /**Toggle Password View State */
  const [togglePassword, setTogglePassword] = useState(false);
  const togglePasswordView = () => {
    setTogglePassword(!togglePassword);
  };
  /**Axios Request */
  /**User Registering Context */
  const userRegisterHandle = (data) => {
    id = LoadingToast("Registering User...");
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
    id = LoadingToast("Logging In...");
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

  /**User Logout Context */

  /**Export Default Data */
  const data = {
    user,
    setUser,
    togglePassword,
    togglePasswordView,
    userRegisterHandle,
    userLoginHandle,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
