import React from "react";
import "./flashcard_page.scss";
import Header from '../../components/header_user/header_user.jsx';
import Footer from '../../components/footer/footer.jsx';


const FlashcardPage = () => {
  return (
    <div className="FlashcardPage">
        <div className="FlashcardPage_header">
            <Header/>
        </div>
        <div className="FlashcardPage_main">
            this is main
        </div>
        <Footer/>
    </div>
  );
}
export default FlashcardPage;