import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/landing_page/landing_page'
import FirstAidPage from "./pages/first_aid_page/first_aid_page";
import RegisterPage from './pages/register_page/RegisterPage.jsx';
import LoginPage from "./pages/login_page/login_page.jsx";
import './main.css'

function Main(){
    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/firstaidkit" element={<FirstAidPage/>} />
        <Route path="/registration" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    );
}

export default Main;