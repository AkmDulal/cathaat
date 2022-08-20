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
          
          <Route element={<PrivateRoute isLogged={currentUser} />}>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="/generaluser-registration" element={<GeneralUserReg />}></Route>
            <Route path="/login" element={<LoginPages />}></Route>
            <Route path="/forgot-password" element={<ForgotPassword />}></Route>
            <Route path="/services-provider-registration" element={<ServicesProviderRegistration />}></Route>
            <Route path="/services-provider-registration-from" element={<SubscriptionPackagFrom />}></Route>
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
