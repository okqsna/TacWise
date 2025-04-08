import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "../../styles/card_settings_page.scss";

const CardSettingsPage = () => {
  return (
    <div className="card-settings-page">
      <Header />
      <main className="content">
        <h1>Налаштування картки</h1>
      </main>
      <Footer />
    </div>
  );
};

export default CardSettingsPage;

// cringe
