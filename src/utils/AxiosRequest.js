/**Default Axios Request */
import axios from "axios";
import { ErrorToast, ExceptionHandling } from "../utils/ToastPromiseHandling";
import { TokenCheck } from "../utils/TokenCheck";
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
      callback(response.data, toast_id);
    }
    return response;
  } catch (error) {
    console.error(error);
    if (error.status && error.response.status === 401) {
      TokenCheck();
    } else if (error.status && error.response.status === 400) {
      ExceptionHandling(error, toast_id);
    } else if (error.status && error.response.status === 404) {
      ExceptionHandling(error, toast_id);
    } else if (error.status && error.response.status === 403) {
      ExceptionHandling(error, toast_id);
    } else {
      ErrorToast(error.message, toast_id);
    }
  }
};
