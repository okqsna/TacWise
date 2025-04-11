import { Routes, Route } from "react-router-dom";
import './main.css'
import LandingPage from './pages/landing_page/landing_page'
import FirstAidPage from "./pages/first_aid_page/first_aid_page";
import RegisterPage from './pages/register_page/RegisterPage.jsx';
import LoginPage from "./pages/login_page/login_page.jsx";
import DashboardPage from './pages/dashboard/dashboard.jsx';
import ModuleCard from "./components/module_card/module_card.jsx";
import ModulePage from './pages/module_page/module_page.jsx';

function Main(){
    return (
      <Routes>
        <Route path="/" element = {sessionStorage.getItem("token") ? <DashboardPage/> : <LandingPage />}/>
        <Route path="/firstaidkit" element={<FirstAidPage/>} />
        <Route path="/registration" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage />} />
        {/* temporary routes - DEVELOPMENT ONLY */}
        <Route path="/moduledev" element={<ModuleCard/>} />
        <Route path="/module" element={<ModulePage/>}/>
      </Routes>
    );
}

export default Main;