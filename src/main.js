import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/landing_page/landing_page'
import FirstAidPage from "./pages/first_aid_page/first_aid_page";
import './main.css'

function Main(){
    return(
        <Routes>
            <Route path ='/' element = {<LandingPage/>}/>
            <Route path ='/firstaidkit' element = {<FirstAidPage/>}/>
        </Routes>
    );
}

export default Main;