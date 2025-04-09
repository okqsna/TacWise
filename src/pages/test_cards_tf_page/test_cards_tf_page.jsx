import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Stuname from "../../components/stuname/stuname";
import "./test_card_tf_page.scss";

const TestCardTfPage = () => {
  return (
    <div className="test-card-tf-page">
      <div className="test-card-tf-page-header">
        <Header />
      </div>
      <main className="content">
        <Stuname />
      </main>
      <Footer />
    </div>
  );
};

export default TestCardTfPage;
