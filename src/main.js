import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/landing_page/landing_page'
import FirstAidPage from "./pages/first_aid_page/first_aid_page";
import RegistrationForm from "./pages/registartion_form/RegisterPage";
import LoginPage from "./pages/log_in_page/login_page";
import './main.css'

function Main(){
    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/firstaidkit" element={<FirstAidPage />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    );
}

export default Main;