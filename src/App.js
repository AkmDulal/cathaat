import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css';
import { ToastContainer } from "react-toastify";
// import useAuth from './hooks/useAuth';
// Components
import PrivateRoute from "./Helper/PrivateRoute"
import AuthService from "./Helper/Auth.Services"
import Layout from "./Components/Layout/Layout"
// Pages
import HomePages from "./Pages/HomePages"
import Registration from "./Pages/Registration"
import GeneralUserReg from "./Pages/GeneralUser/GeneralUserReg"
import LoginPages from "./Pages/GeneralUser/LoginPages"
import ForgotPassword from "./Pages/ForgotPassword"
import ServicesProviderRegistration from "./Pages/ServiceProvider/ServicesProviderRegistration"
import SubscriptionPackagFrom from "./Pages/ServiceProvider/SubscriptionPackagFrom"
import NeearShopMap from "./Pages/NeearShopMap"
import AboutUs from "./Pages/AboutUs"
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import ReturnsRefunds from "./Pages/ReturnsRefunds"
import ContactUs from "./Pages/ContactUs"
import FawPages from "./Pages/FawPages"
import FaqDetails from "./Pages/FaqDetails"

function App() {
  // const { setAuth } = useAuth();
  const userData = AuthService.getCurrentUser();
  const [currentUser, setCurrentUser] = useState(false)
  useEffect(() => {
    if (Number(userData) === 0) {
      setCurrentUser(false)
    } else {
      setCurrentUser(true)
    }
  }, [userData])
  console.log(currentUser, "currentUser 0")
  return (
    <div className="App">
      <Layout>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePages />}></Route>
          <Route path="/neearest-shop-locations" element={<NeearShopMap />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/returns-refunds" element={<ReturnsRefunds />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/faq" element={<FawPages />}></Route>
          <Route path="/faq-details" element={<FaqDetails />}></Route>

          <Route element={<PrivateRoute isLogged={currentUser} />}>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="/generaluser-registration" element={<GeneralUserReg />}></Route>
            <Route path="/login" element={<LoginPages />}></Route>
            <Route path="/forgot-password" element={<ForgotPassword />}></Route>
            <Route path="/services-provider-registration" element={<ServicesProviderRegistration />}></Route>
            <Route path="/services-provider-registration-from/:id" element={<SubscriptionPackagFrom />}></Route>
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
