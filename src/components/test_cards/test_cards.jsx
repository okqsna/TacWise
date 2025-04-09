import React from "react";
import "./test_cards.scss";

const TestCardsPage = () => {
  const question = {
    title: "Питання 1",
    text: "Яка столиця України?",
    answers: [
      { id: 1, text: "Київ", isCorrect: true },
      { id: 2, text: "Львів", isCorrect: false },
      { id: 3, text: "Одеса", isCorrect: false },
      { id: 4, text: "Харків", isCorrect: false },
    ],
  };

  const [selectedAnswerId, setSelectedAnswerId] = React.useState(null);

  const handleAnswerClick = (answerId) => {
    setSelectedAnswerId(answerId);
  };

  return (
    <div className="test-cards-page">
      <div className="test-cards-container">
        <div className="test-cards-title">Тестові завдання</div>

        <div className="question-box">
          <div className="question-title">{question.title}</div>
          <div className="question-text">{question.text}</div>

          <div className="answers">
            {question.answers.map((answer) => {
              const isSelected = selectedAnswerId === answer.id;
              const isCorrect = answer.isCorrect;
              const answerClass = isSelected
                ? isCorrect
                  ? "answer-option correct"
                  : "answer-option incorrect"
                : "answer-option";

              return (
                <div
                  key={answer.id}
                  className={answerClass}
                  onClick={() => handleAnswerClick(answer.id)}
                >
                  {answer.text}
                </div>
              );
            })}
          </div>
        </div>

        <div className="back-button" onClick={() => window.history.back()}>
          ← Назад
        </div>
      </div>
    </div>
  );
};

export default TestCardsPage;
