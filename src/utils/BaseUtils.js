/**Base Utils Rewards Web */

export const loadLocalstorage = (key) => {
  /**Load Item From local storage */
  return localStorage.getItem(key);
};
export const SaveUpdateLocalstorage = (key, value) => {
  /**Save Item To local storage */
  return localStorage.setItem(key, value);
};
export const RemoveLocalstorage = (key) => {
  /**Remove Item From local storage */
  localStorage.removeItem(key);
};

/**User Logout Utility */
export const logOut = () => {
  /**User Logout */
  RemoveLocalstorage("access");
  RemoveLocalstorage("refresh");
  window.location.href = "/login";
};

/**Get User's Bearer Token */
export const getBearerToken = () => {
  return "Bearer " + loadLocalstorage("access");
};
