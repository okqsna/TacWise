import React, {useState, useEffect} from "react";
import './flashcard_settings.scss';
import {setCards} from "../../services/userServices";
import { useLocation } from "react-router-dom";

const FlashcardSettings = ({onSave, module_data, cardsAmount}) => {
    const location = useLocation();
    const data = location.state.data;
    const [termsOn, setTermsOn] = useState(false);
    const [studyMode, setStudyMode] = useState(false);
    const [flashcard, setFlashcard] = useState(5);
    const [savedInfo, setSavedInfo] = useState(false)

    const handleTermsChange = () => {
        setTermsOn(!termsOn);
    };
    const handleStudyModeChange = () => {
        setStudyMode(!studyMode);
    }
    const handleFlashcardChange = (event) => {
        setFlashcard(event.target.value);
    }
    const handleSave = () => {
        const flashcardSettings = {
            termsOn: termsOn,
            studyMode: studyMode,
            flashcard: parseInt(flashcard)
        }
        setSavedInfo(true);
        onSave(flashcardSettings);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        handleSave();
    }

    useEffect(() => {
        const fetchData = async () => {
        try {
            const cards_data = await setCards(data.id, flashcard, studyMode);
            sessionStorage.setItem("flashcard", JSON.stringify(cards_data.data));
            sessionStorage.setItem("module", JSON.stringify(data.id));
        } catch (error) {
            console.error('Received an error:', error);
        } 
        };
        fetchData();
    }, [data.id, flashcard, studyMode]);

    return (
        <div className="FlashcardSettings">
            <p className="FlashcardSettings_cap">Налаштування карток</p>
            <main>
                <div className="FlashcardSettings_row1">
                    <div className="FlashcardSettings_row1_quantity">
                        <div className="FlashcardSettings_row1_quantity_img"></div>
                        Кількість карток
                        <input className="FlashcardSettings_row1_quantity_input" type="number" min="1" defaultValue="5" max={cardsAmount.cards_amount} onChange={handleFlashcardChange}/>
                    </div>
                    <div className="FlashcardSettings_row1_terms">
                        <div className="FlashcardSettings_row1_terms_txt">
                            <p className="FlashcardSettings_row1_terms_txt_p">Терміни <span className="span">знизу</span></p>
                            <p className="FlashcardSettings_row1_terms_txt_p">Визначення <span className="span">зверху</span></p>
                        </div>
                        <input className="FlashcardSettings_row1_terms_input" type="checkbox" onChange={handleTermsChange}/>
                    </div>
                </div>
                <div className="FlashcardSettings_row2">
                    <div className="FlashcardSettings_row2_studymode">
                        Режим повторення
                        <input className="FlashcardSettings_row2_studymode_input" type="checkbox" onChange={handleStudyModeChange}/>
                    </div>
                    <button className="FlashcardSettings_row2_save" onClick={handleSubmit}> Зберегти </button>
                </div>
            </main>
            <div className="FlashcardSettings_other">
            {
                savedInfo && (
                <div className="FlashcardSettings_saved_info">
                    Налаштування <span>успішно</span> збережені!
                </div>
                )
            }
            </div>
        </div>
    );
}
export default FlashcardSettings;