/**Default Axios Request */
import axios from "axios";
import { ErrorToast, ExceptionHandling } from "../utils/ToastPromiseHandling";
import { logOut } from "../utils/BaseUtils";
export const AxiosRequest = async (
  url,
  method,
  data,
  header,
  params,
  callback,
  toast_id
) => {
  let headers = {
    "Content-Type": "multipart/form-data",
  };
  if (header) {
    headers["Authorization"] = header;
  }
  headers["Accept"] = "application/json";
  try {
    const response = await axios({
      url: url,
      method: method,
      data: data,
      headers: headers,
      params: params,
    });
    if (callback) {
      callback(toast_id, response.data);
    }
    return response;
  } catch (error) {
    console.error(error);
    if (error.status && error.response.status === 401) {
      logOut();
    } else if (error.status && error.response.status === 400) {
      ExceptionHandling(toast_id, error);
    } else if (error.status && error.response.status === 404) {
      ExceptionHandling(toast_id, error);
    } else if (error.status && error.response.status === 403) {
      ExceptionHandling(toast_id, error);
    } else {
      ErrorToast(toast_id, error.message);
    }
  }
};
