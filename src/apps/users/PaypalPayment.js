/**Paypal Payment Handling */
import { PayPalButtons } from "@paypal/react-paypal-js";
import { PaymentContext } from "../../contexts/Contexts";
import { useContext } from "react";

const PaypalPayment = () => {
  const { createOrder, onApprove, updateTopUp, topup } =
    useContext(PaymentContext);
  return (
    <>
      <dialog id="wallet_topup" className="modal">
        <div className="modal-box" style={{ scrollbarWidth: "none" }}>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute scale-95 transition-all hover:scale-100 hover:rotate-90 right-2 top-2 text-gray-300">
              ✕
            </button>
          </form>
          <h3 className="text-gray-300 font-bold text-lg">Verify Email!</h3>
          <div className="">
            <div className="w-full mt-5">
              <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                <input
                  type="number"
                  placeholder="Enter Amount"
                  step={0.01}
                  name="topup"
                  onChange={updateTopUp}
                  className="text-gray-200 input input-bordered input-primary w-full"
                />
                <p className="text-sm text-gray-400 italic">
                  Note: Please enter amount you wanted to add.
                </p>
                <PayPalButtons
                  disabled={!topup}
                  style={{
                    layout: "horizontal",
                    color: "gold",
                    shape: "rect",
                    label: "paypal",
                  }}
                  message={{
                    align: "center",
                    color: "black",
                    position: "top",
                  }}
                  createOrder={createOrder}
                  onApprove={onApprove}
                />
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default PaypalPayment;
