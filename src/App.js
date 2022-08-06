import { Routes, Route } from "react-router-dom";
import './App.css';
// Components
import Layout from "./Components/Layout/Layout"
// Pages
import HomePages from "./Pages/HomePages"
import Registration from "./Pages/Registration"
import GeneralUserReg from "./Pages/GeneralUser/GeneralUserReg"
import LoginPages from "./Pages/GeneralUser/LoginPages"
import ForgotPassword from "./Pages/ForgotPassword"
import ServicesProviderRegistration from "./Pages/ServiceProvider/ServicesProviderRegistration"
import SubscriptionPackagFrom from "./Pages/ServiceProvider/SubscriptionPackagFrom"
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePages />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/generaluser-registration" element={<GeneralUserReg />}></Route>
          <Route path="/login" element={<LoginPages />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/services-provider-registration" element={<ServicesProviderRegistration />}></Route>
          <Route path="/services-provider-registration-from" element={<SubscriptionPackagFrom />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
