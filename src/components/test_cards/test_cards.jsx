import React, { useState } from "react";

const ModulePage = ({ question, answers, correctAnswerIndex }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleAnswerClick = (index) => {
    setSelectedIndex(index);
  };

  const getClassName = (index) => {
    if (selectedIndex === null) return "answer-option";
    if (index === correctAnswerIndex) return "answer-option correct";
    if (index === selectedIndex) return "answer-option incorrect";
    return "answer-option";
  };

  return (
    <div className="module-page">
      <div className="module-container">
        <h2 className="module-title">Модуль запитання</h2>

        <div className="question-box">
          <div className="question-title">Запитання:</div>
          <div className="question-text">{question}</div>

          <div className="answers">
            {answers.map((answer, index) => (
              <div
                key={index}
                className={getClassName(index)}
                onClick={() => handleAnswerClick(index)}
              >
                {answer}
              </div>
            ))}
          </div>
        </div>

        <div className="back-button" onClick={() => window.history.back()}>
          ← Назад
        </div>
      </div>
    </div>
  );
};

export default ModulePage;
