import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/landing_page/landing_page'
import './main.css'

function Main(){
    return(
        <Routes>
            <Route path ='/' element = {<LandingPage/>}/>
        </Routes>
    );
}

export default Main;