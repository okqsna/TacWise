import React, { useState } from "react";

const TestCardsPage = ({
  moduleTitle,
  level,
  score,
  question,
  correctAnswer,
  onBack,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (answer) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
    }
  };

  const getButtonClass = (answerType) => {
    if (selectedAnswer === null) return "answer-btn " + answerType;
    if (answerType === "true-btn") {
      return correctAnswer ? "answer-btn true-btn" : "answer-btn true-btn incorrect";
    }
    if (answerType === "false-btn") {
      return !correctAnswer ? "answer-btn false-btn" : "answer-btn false-btn incorrect";
    }
    return "answer-btn";
  };

  return (
    <div className="test-cards-page">
      <div className="content">
        <div className="module-info">
          <div className="module-title">{moduleTitle}</div>
          <div className="level-info">
            <div className="level">Рівень: {level}</div>
            <div className="divider"></div>
            <div className="score">Бали: {score}</div>
          </div>
        </div>

        <div className="question-container">
          <div className="question-title">Запитання</div>
          <div className="question-text">{question}</div>

          <div className="answers">
            <div
              className={getButtonClass("true-btn")}
              onClick={() => handleAnswer(true)}
            >
              Правильно
            </div>
            <div
              className={getButtonClass("false-btn")}
              onClick={() => handleAnswer(false)}
            >
              Неправильно
            </div>
          </div>
        </div>

        <div className="back-button" onClick={onBack}>
          ← Назад
        </div>
      </div>
    </div>
  );
};

export default TestCardsPage;
