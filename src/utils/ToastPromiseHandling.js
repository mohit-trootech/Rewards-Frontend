/**Exception Handling Toast*/
import { toast } from "react-toastify";

const UpdateToast = (message, type, toast_id) => {
  toast.update(toast_id, {
    render: message,
    type: type,
    isLoading: false,
    autoClose: 7000,
    draggable: true,
    closeButton: true,
  });
};
export const ExceptionHandling = (errors, toast_id) => {
  Object.values(errors.response.data).forEach((error) => {
    if (typeof error == "string") {
      UpdateToast(error, "error", toast_id);
    } else {
      error.forEach((err) => {
        UpdateToast(err, "error", toast_id);
      });
    }
  });
};

export const LoadingToast = (message, options) => {
  return toast.loading(message, options);
};

export const ErrorToast = (message, toast_id) => {
  UpdateToast(message, "error", toast_id);
};

export const SuccessToast = (response, toast_id) => {
  UpdateToast(response, "success", toast_id);
};
