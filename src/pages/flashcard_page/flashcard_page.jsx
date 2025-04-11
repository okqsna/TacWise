import React from "react";
import "./flashcard_page.scss";
import Header from '../../components/header_user/header_user.jsx';
import Footer from '../../components/footer/footer.jsx';
import FlashcardSettings from "../../components/flashcard_settings/flashcard_settings.jsx";

const FlashcardPage = () => {
  return (
    <div className="FlashcardPage">
        <div className="FlashcardPage_header">
            <Header/>
        </div>
        <div className="FlashcardPage_main">
            <FlashcardSettings/>
        </div>
        <Footer/>
    </div>
  );
}
export default FlashcardPage;