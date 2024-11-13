/**React Toastify Success Toast */
import { SuccessToast } from "./ToastPromiseHandling";
import { SaveUpdateLocalstorage } from "../utils/BaseUtils";
export const UpdatePasswordSuccess = (id, message) => {
  SuccessToast(id, message.message);
};
export const userRegister = (id, response, successUrl) => {
  SuccessToast(id, response.message, successUrl);
};
export const userLogin = (id, response, successUrl) => {
  SaveUpdateLocalstorage("access", response.access);
  SaveUpdateLocalstorage("refresh", response.refresh);
  SuccessToast(id, response.message, successUrl);
};

export const userLogout = (id, response, successUrl) => {
  SuccessToast(id, response.message, successUrl);
};
export const FetchUserProfile = (id, response, successUrl) => {
  SuccessToast(id, response.message, successUrl);
};
export const UpdateUserEmail = (id, response, successUrl) => {
  SuccessToast(id, response.message, successUrl);
};
export const VerifyEmail = (id, response, successUrl) => {
  SuccessToast(id, response.message, successUrl);
};
export const OtpGenerated = (id, response, successUrl) => {
  SuccessToast(id, response.message, successUrl);
};
export const forgotPasswordOtpSentSuccess = (id, response, successUrl) => {
  SuccessToast(id, response.message, successUrl);
};
export const forgotPasswordOtpValidateSuccess = (id, response, successUrl) => {
  SuccessToast(id, response.message, successUrl);
};
