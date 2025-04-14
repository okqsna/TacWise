import { Routes, Route } from "react-router-dom";
import './main.css'
import LandingPage from './pages/landing_page/landing_page'
import FirstAidPage from "./pages/first_aid_page/first_aid_page";
import RegisterPage from './pages/register_page/RegisterPage.jsx';
import LoginPage from "./pages/login_page/login_page.jsx";
import DashboardPage from './pages/dashboard/dashboard.jsx';
import ModulePage from './pages/module_page/module_page.jsx';
import FlashcardPage from "./pages/flashcard_page/flashcard_page.jsx";
import FlashcardStudyPage from "./pages/flashcard_study_page/flashcard_study_page.jsx";

function Main(){
    return (
      <Routes>
        <Route path="/" element = {sessionStorage.getItem("token") ? <DashboardPage/> : <LandingPage />}/>
        <Route path="/registration" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/firstaidkit" element={<FirstAidPage/>} />
        <Route path="/module/:name" element={<ModulePage/>}/>
        <Route path="/flashcards/:id" element={<FlashcardPage/>}/>
        <Route path="/studyflashcards" element={<FlashcardStudyPage/>}/>
      </Routes>
    );
}

export default Main;