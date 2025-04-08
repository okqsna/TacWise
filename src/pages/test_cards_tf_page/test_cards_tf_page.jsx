import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "../../components/test_cards_tf/test_cards_tf.scss";

const TrueFalseTestCardsPage = () => {
  return (
    <div className="test-cards-page">
      <Header />
      <main className="content">
        <div className="module-info">
          <div className="module-title">Модуль 1: MARCH</div>
          <div className="level-info">
            <span className="level">Легкий рівень</span>
            <span className="divider"></span>
            <span className="score">Правильно / Неправильно</span>
            <span className="divider"></span>
            <span className="score">3/15</span>
          </div>
        </div>

        <div className="question-container">
          <div className="question-title">Запитання 3</div>
          <div className="question-text">
            Першим кроком у M.A.R.C.H. є оцінка дихання постраждалого.
          </div>
          <div className="answers">
            <button className="answer-btn true-btn">Правда</button>
            <button className="answer-btn false-btn">Брехня</button>
          </div>
        </div>

        <div className="back-button">Повернутись назад</div>
      </main>
      <Footer />
    </div>
  );
};

export default TrueFalseTestCardsPage;
