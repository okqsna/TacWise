import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import '../flashcard/flashcard.scss';

import {learnedCard} from "../../services/userServices.js";

const Flashcard = ({ settings }) => {
    const flashcardsData = JSON.parse(sessionStorage.getItem("flashcard"))
    const [currentCard, setCurrentCard] = useState(0);
    const [showDefinition, setShowDefinition] = useState(false);
    const totalCards = flashcardsData.length;
    const currentCardShow = flashcardsData[currentCard];

    const location = useLocation();
    // const data = location.state.data;
    // const module_id = data.id; //id should be setten to the route

    const toggleCard = () => {
        setShowDefinition(prev => !prev);
    };

    const handleStudied = () => {
        flashcardsData[currentCard].studied = true;
        setCurrentCard(currentCard + 1);
    };

    const nextCard = () => {
        if (currentCard < totalCards - 1) {
            setCurrentCard(currentCard + 1);
            setShowDefinition(false);
        }
    };

    const prevCard = () => {
        if (currentCard > 0) {
            setCurrentCard(currentCard - 1);
            setShowDefinition(false);
        }
    };

    return (
        <div classname = "Flashcard_main">
            
            <div className="Flashcard">
                <div className={`Flashcard_card ${currentCardShow.studied ? 'studied' : ''}`} onClick={toggleCard}>
                    <div className="Flashcard_card_content">
                        {settings.termsOn ? (
                            <div className="Flashcard_card_content_txt">
                                {showDefinition ? currentCardShow.term : currentCardShow.definition}
                            </div>
                        ) : (
                            <div className="Flashcard_card_content_txt">
                                {showDefinition ? currentCardShow.definition : currentCardShow.term}
                            </div>
                        )}
                    </div>
                </div>

                <div className="Flashcard_navigation">
                    <button onClick={prevCard} disabled={currentCard === 0}>Назад</button>
                    <button className = "Flashcard_navigation_studied" onClick={handleStudied} disabled={currentCardShow.studied}>
                        Знаю
                    </button>
                    <button onClick={nextCard} disabled={currentCard === totalCards - 1}>Далі</button>
                </div>
            </div>
        </div>
    );
};

export default Flashcard;
