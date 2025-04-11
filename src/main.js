import { Routes, Route } from "react-router-dom";
import './main.css'
import LandingPage from './pages/landing_page/landing_page'
import FirstAidPage from "./pages/first_aid_page/first_aid_page";
import RegisterPage from './pages/register_page/RegisterPage.jsx';
import LoginPage from "./pages/login_page/login_page.jsx";
import DashboardPage from './pages/dashboard/dashboard.jsx';
import ModuleCard from "./components/module_card/module_card.jsx";

function Main(){
    return (
      <Routes>
        <Route path="/" element = {sessionStorage.getItem("token") ? <DashboardPage/> : <LandingPage />}/>
        <Route path="/firstaidkit" element={<FirstAidPage/>} />
        <Route path="/registration" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage />} />
        {/* temporary route - DEVELOPMENT ONLY */}
        <Route path="/moduledev" element={<ModuleCard/>} />
      </Routes>
    );
}

export default Main;