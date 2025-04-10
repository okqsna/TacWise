import React, {useState} from "react";
import './flashcard_settings.scss';


const FlashcardSettings = () => {
    const [termsOn, setTermsOn] = useState(false);
    const [studyMode, setStudyMode] = useState(false);
    const [flashcard, setFlashcard] = useState(5);

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
            flashcard: flashcard
        }
        console.log(flashcardSettings);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        handleSave();
    }                                                   


    return (
        <div className="FlashcardSettings">
            <p className="FlashcardSettings_cap">Налаштування карток</p>
            <main>
                <div className="FlashcardSettings_row1">
                    <div className="FlashcardSettings_row1_quantity">
                        <div className="FlashcardSettings_row1_quantity_img"></div>
                        Кількість карток
                        <input className="FlashcardSettings_row1_quantity_input" type="number" min="1" defaultValue="5" onChange={handleFlashcardChange}/>
                    </div>
                    <div className="FlashcardSettings_row1_terms">
                        <div className="FlashcardSettings_row1_terms_txt">
                            <p className="FlashcardSettings_row1_terms_txt_p">Терміни <span>знизу</span></p>
                            <p className="FlashcardSettings_row1_terms_txt_p">Визначення <span>зверху</span></p>
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
        </div>
    );
}
export default FlashcardSettings;