import React from "react";
import { useLocation } from "react-router-dom";
import Header from '../../components/header_user/header_user.jsx';
import Flashcard from "../../components/flashcard/flashcard.jsx";
import Footer from "../../components/footer/footer.jsx";
import './flashcard_study_page.scss';

const FlashcardStudyPage = () => {
    const settings_location = useLocation();
    const settings = settings_location.state;


    return(
        <div className="FlashcardStudyPage">
            <div className="FlashcardStudyPage_header">
                <Header/>
            </div>
            <div className="FlashcardStudyPage_main">
                <Flashcard settings={settings}/>
            </div>
            <Footer/>
        </div>
    );
}
export default FlashcardStudyPage;
