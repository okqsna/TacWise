import React, {useState} from "react";
import "./flashcard_page.scss";
import Header from '../../components/header_user/header_user.jsx';
import Footer from '../../components/footer/footer.jsx';
import FlashcardSettings from "../../components/flashcard_settings/flashcard_settings.jsx";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const FlashcardPage = () => {
  const location = useLocation();
  const { data, cards } = location.state || {};

  const [cardSettings, setCardSettings] = useState({
      termsOn: false,
      studyMode: false,
      flashcard: 5
  });

  const handleCardSettingsSave = (newSettings) => {
    setCardSettings(newSettings);
  };

  return (
    <div className="FlashcardPage">
        <div className="FlashcardPage_header">
            <Header/>
        </div>
        <div className="FlashcardPage_main">
            <FlashcardSettings onSave={handleCardSettingsSave} module_data = {data} cardsAmount = {cards}/>
            <Link to="/studyflashcards" state={cardSettings} className="FlashcardPage_main_btn">Почати навчання</Link>
        </div>
        <Footer/>
    </div>
  );
}
export default FlashcardPage;