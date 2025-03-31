import React, { useState } from "react";
import "./App.css";

function App() {
  const [numOfQuestions, setNumOfQuestions] = useState(10);
  const [difficulty, setDifficulty] = useState("medium");
  const [correctIncorrect, setCorrectIncorrect] = useState(true);
  const [written, setWritten] = useState(true);

  // Приклад функції "збереження" — просто виводить дані в alert
  const handleSaveSettings = () => {
    alert(`
Налаштування:
- Кількість запитань: ${numOfQuestions}
- Складність: ${difficulty}
- Правильно/Неправильно: ${correctIncorrect ? "Так" : "Ні"}
- Письмові відповіді: ${written ? "Так" : "Ні"}
    `);
  };

  return (
    <div className="page-container">
      {/* Заголовок */}
      <h1 className="main-title">Налаштуй тест</h1>

      <div className="content-row">
        {/* Блок "Кількість запитань" */}
        <div className="questions-block">
          <div className="questions-inner">
            <div className="questions-text">
              <span>Кількість запитань</span>
            </div>
            <div className="questions-input-wrapper">
              <input
                type="number"
                min="1"
                max="100"
                value={numOfQuestions}
                onChange={(e) => setNumOfQuestions(e.target.value)}
                className="questions-input"
              />
            </div>
          </div>
        </div>

        {/* Блок "Складність" */}
        <div className="difficulty-block">
          <div className="difficulty-inner">
            <div className="difficulty-title">Складність</div>
            <div className="difficulty-options">
              <label>
                <input
                  type="radio"
                  name="difficulty"
                  value="easy"
                  checked={difficulty === "easy"}
                  onChange={(e) => setDifficulty(e.target.value)}
                />
                <span className="easy-level">Легкий рівень</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="difficulty"
                  value="medium"
                  checked={difficulty === "medium"}
                  onChange={(e) => setDifficulty(e.target.value)}
                />
                <span className="medium-level">Середній рівень</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="difficulty"
                  value="hard"
                  checked={difficulty === "hard"}
                  onChange={(e) => setDifficulty(e.target.value)}
                />
                <span className="hard-level">Складний рівень</span>
              </label>
            </div>
          </div>
        </div>

        {/* Блок типів відповідей */}
        <div className="answer-types-block">
          <label className="answer-type-label">
            <input
              type="checkbox"
              checked={correctIncorrect}
              onChange={(e) => setCorrectIncorrect(e.target.checked)}
            />
            Правильно / Неправильно
          </label>
          <label className="answer-type-label">
            <input
              type="checkbox"
              checked={written}
              onChange={(e) => setWritten(e.target.checked)}
            />
            Письмові відповіді
          </label>
        </div>
      </div>

      {/* Кнопка збереження */}
      <button className="save-button" onClick={handleSaveSettings}>
        Зберегти налаштування
      </button>
    </div>
  );
}

export default App;
