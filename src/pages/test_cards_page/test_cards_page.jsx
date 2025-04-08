import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "../../components/test_cards/test_cards.scss";

const TestCardsPage = () => {
  return (
    <div className="test-cards-page">
      <Header />
      <main className="content">
        <h1>Налаштування тестових карток</h1>
        {}
      </main>
      <Footer />
    </div>
  );
};

export default TestCardsPage;
