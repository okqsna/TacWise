import React, { use, useState } from "react";
import '../flashcard/flashcard.scss';

import { learnedCard, setLastLearned } from "../../services/userServices.js";

const Flashcard = ({ settings }) => {
    const flashcardsData = JSON.parse(sessionStorage.getItem("flashcard"))
    const [currentCard, setCurrentCard] = useState(0);
    const [showDefinition, setShowDefinition] = useState(false);
    const [allCardsFinished, setAllCardsFinished] = useState(false);
    const totalCards = flashcardsData.length;
    const currentCardShow = flashcardsData[currentCard];

    const toggleCard = () => {
        setShowDefinition(prev => !prev);
    };

    const handleStudied = () => {
        const m_id = sessionStorage.getItem("module");
        learnedCard(m_id, currentCardShow.id);
        setLastLearned();
        flashcardsData.splice(currentCard, 1);
        sessionStorage.setItem("flashcard", JSON.stringify(flashcardsData));
        if (currentCard + 1 < totalCards - 1) {
            nextCard();
        }
        if (flashcardsData.length === 0) {
            setAllCardsFinished(true);
            console.log('done');
            return;
        }
        else if (currentCard > 0) {  
            prevCard();
        }
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
            <div className="Flashcard_main">
                {allCardsFinished ? (
                    <div className="Flashcard_finished">
                        <h2 className="Flashcard_finished_h2">Ви завершили вивчення всіх карток 🎉</h2>
                        <a href="/" className="Flashcard_finished_btn">Назад</a>
                    </div>
                ) : (
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
                            <button className="Flashcard_navigation_studied" onClick={handleStudied} disabled={currentCardShow.studied}>
                                Знаю
                            </button>
                            <button onClick={nextCard} disabled={currentCard === flashcardsData.length - 1}>Далі</button>
                        </div>
                    </div>
                )}
            </div>
        );

};

export default Flashcard;
