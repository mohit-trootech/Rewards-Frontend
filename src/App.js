/**Base App With Routing & Providers Implementations */
/**Required React Modules */
import { BrowserRouter, Routes, Route } from "react-router-dom";
/**Components */
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
/**Rewards Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
/**Accounts Apps */
import RegisterPage from "./apps/users/Register";
import LoginPage from "./apps/users/Login";
import ChangePassword from "./apps/users/ChangePassword";
import ForgotPassword from "./apps/users/ForgotPassword";
import Profile from "./apps/users/Profile";
/**Providers */
import ThemeProvider from "./Providers/ThemeProvider";
import UserProvider from "./Providers/UserProvider";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PaymentProvider from "./Providers/PaymentProvider";
function App() {
  const initialOptions = {
    "client-id":
      "Ad-FteXT0_V-dUi3hzwkkW37SLwsQaJfNiScNwLS2NFpmX49QZWxt8BHl-7KnX0rCCwDVB7tYlb7ZRF4",
    currency: "USD",
    intent: "capture",
  };
  return (
    <>
      <UserProvider>
        <ThemeProvider>
          <PayPalScriptProvider options={initialOptions}>
            <PaymentProvider>
              <BrowserRouter>
                <NavBar />
                <ToastContainer
                  draggablePercent={60}
                  draggable
                  stacked
                  className="z-[999]"
                />
                <Routes>
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/change-password" element={<ChangePassword />} />
                  <Route path="/reset-password" element={<ForgotPassword />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<NoPage />} />
                </Routes>
                <Footer />
              </BrowserRouter>
            </PaymentProvider>
          </PayPalScriptProvider>
        </ThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
