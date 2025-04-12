import React, { useState } from "react";
import '../flashcard/flashcard.scss';

const Flashcard = ({ settings }) => {
    // example for MARCH MODULE
    const flashcardsData = [
        { term: "Якщо турнікет не зупинив кровотечу", definition: "Перевір правильність накладання або додай другий вище", studied: false },
        { term: "Що означає літера M в алгоритмі MARCH", definition: "Massive hemorrhage — масивна кровотеча", studied: false },
        { term: "Який засіб використовують для зупинки артеріальної кровотечі на кінцівці", definition: "Турнікет", studied: false },
        { term: "Час накладання турнікета потрібно", definition: "Записати на турнікеті або шкірі", studied: false },
        { term: "R в алгоритмі MARCH означає", definition: "Respiration — дихання", studied: false },
        { term: "Ознака напруженого пневмотораксу", definition:"Розширення грудної клітки з одного боку, задишка, посиніння.", studied: false },
        { term: "A в MARCH означає", definition: "Airway — прохідність дихальних шляхів", studied: false },
    ];

    const [currentCard, setCurrentCard] = useState(0);
    const [showDefinition, setShowDefinition] = useState(false);
    const totalCards = flashcardsData.length;
    const currentCardShow = flashcardsData[currentCard];

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
