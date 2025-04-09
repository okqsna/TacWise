import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Stuname from "../../components/stuname/stuname";
import "./test_cards.scss";

const TestCardsPage = () => {
  return (
    <div className="test-cards-page">
      <div className="test-cards-page-header">
        <Header />
      </div>
      <main className="content">
        <Stuname />
      </main>
      <Footer />
    </div>
  );
};

export default TestCardsPage;
