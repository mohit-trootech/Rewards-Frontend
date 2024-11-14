/**React Toastify Success Toast */
import { SuccessToast } from "./ToastPromiseHandling";
import { SaveUpdateLocalstorage } from "../utils/BaseUtils";
export const UpdatePasswordSuccess = (message, id) => {
  SuccessToast(message.message, id);
};
export const userRegister = (response, id) => {
  SuccessToast(response.message, id);
};
export const userLogin = (response, id) => {
  SaveUpdateLocalstorage("access", response.access);
  SaveUpdateLocalstorage("refresh", response.refresh);
  SuccessToast(response.message, id);
};
export const changePassword = (response, id) => {
  SuccessToast(response.message, id);
};
export const generateOtp = (response, id) => {
  SuccessToast(response.message, id);
};
export const userLogout = (response, id) => {
  SuccessToast(response.message, id);
};
export const FetchUserProfile = (response, id) => {
  SuccessToast(response.message, id);
};
export const updateProfile = (response, id) => {
  SuccessToast("User Profile Updated Successfully", id);
};
export const updateEmail = (response, id) => {
  SuccessToast("User Email Updated Successfully", id);
};
export const VerifyEmail = (response, id) => {
  SuccessToast(response.message, id);
};
export const OtpGenerated = (response, id) => {
  SuccessToast(response.message, id);
};
export const resetPassword = (response, id) => {
  SuccessToast(response.message, id);
};
export const forgotPasswordOtpValidateSuccess = (response, id) => {
  SuccessToast(response.message, id);
};
