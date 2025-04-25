import React, { useState, useEffect } from "react";
import '../flashcard/flashcard.scss';
import { learnedCard, setLastLearned } from "../../services/userServices.js";

const Flashcard = ({ settings }) => {
    const flashCards = JSON.parse(sessionStorage.getItem("flashcard")) || [];
    const [cards, setCards] = useState(flashCards);
    const [currentCard, setCurrentCard] = useState(0);
    const [showDefinition, setShowDefinition] = useState(false);
    const [allCardsFinished, setAllCardsFinished] = useState(false);
    const totalCards = cards.length
    const currentCardShow = cards[currentCard] || {};

    const toggleCard = () => {
        setShowDefinition(prev => !prev);
    };

    useEffect(() => {
        if (cards.every(card => card.studied)) {
            setAllCardsFinished(true);
        } else {
            setAllCardsFinished(false);
        }
    }, [cards]);

    const handleStudied = () => {
        const m_id = sessionStorage.getItem("module");
        learnedCard(m_id, currentCardShow.id);
        setLastLearned();
        cards.splice(currentCard, 1);

        sessionStorage.setItem("flashcard", JSON.stringify(cards));
        setCards([...cards]);
    
        if (cards.length === 0) {
            console.log('done');
            return;
        }
    
        const currIndex = currentCard >= totalCards ? totalCards - 1 : currentCard;
        setCurrentCard(currIndex);
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
                ):(
                <div className="Flashcard">
                <div className={`Flashcard_card ${currentCardShow.studied ? 'studied' : ''}`} onClick={toggleCard}>
                    <div className="Flashcard_card_content">
                        <div className="Flashcard_card_content_txt">
                            {settings.termsOn
                                ? (showDefinition ? currentCardShow.term : currentCardShow.definition)
                                : (showDefinition ? currentCardShow.definition : currentCardShow.term)}
                        </div>
                    </div>
                </div>

                <div className="Flashcard_navigation">
                    <button onClick={prevCard} disabled={currentCard === 0}>Назад</button>
                    <button className="Flashcard_navigation_studied" onClick={handleStudied} disabled={currentCardShow.studied}>
                        Знаю
                    </button>
                    <button onClick={nextCard} disabled={currentCard === cards.length - 1}>Далі</button>
                </div>
            </div>
            )}   
        </div>
    );
};

export default Flashcard;
