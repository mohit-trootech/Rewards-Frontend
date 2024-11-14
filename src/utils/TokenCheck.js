/**Check Token Authorization */
import { loadLocalstorage, logOut, SaveUpdateLocalstorage } from "./BaseUtils";
import { rewardsApiDefaultAccountsUrl } from "./Constants";
import axios from "axios";
export const TokenCheck = () => {
  const refreshToken = loadLocalstorage("refresh");
  try {
    refreshToken
      ? axios
          .post(rewardsApiDefaultAccountsUrl + "token/refresh/", {
            refresh: refreshToken,
          })
          .then(function (response) {
            SaveUpdateLocalstorage("access", response.data.access);
            window.location.reload();
          })
          .catch(function (error) {
            console.error(error);
            logOut();
          })
      : logOut();
  } catch (error) {
    console.error(error);
  }
};
