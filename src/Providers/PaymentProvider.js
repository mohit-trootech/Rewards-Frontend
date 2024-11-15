/**Payment Provider */
import { useState } from "react";
import { PaymentContext } from "../contexts/Contexts";

const PaymentProvider = ({ children }) => {
  /**Payment Provider Context */
  const [topup, setTopup] = useState(0);
  const updateTopUp = (event) => {
    setTopup(event.target.value);
  };
  const createOrder = async (data, actions) => {
    alert(topup);

    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: topup,
          },
        },
      ],
    });
  };
  const onApprove = async (data, actions) => {
    return actions.order.capture().then(function (order) {
      console.log(order);
    });
  };
  const data = {
    createOrder,
    onApprove,
    updateTopUp,
    topup,
  };

  return (
    <PaymentContext.Provider value={data}>{children}</PaymentContext.Provider>
  );
};

export default PaymentProvider;
