"use client";
import React from "react";
import styles from "./OfflineDesktop.module.scss";
import Header from "./Header";
import SearchSection from "./SearchSection";
import TrainingCard from "./TrainingCard";

function SchoolDesktop() {
  const firstCardDetails = [
    {
      text: "Місто: Київ",
      className: styles.cityDetail,
    },
    {
      text: "Вік: 18+",
      className: styles.ageDetail,
    },
    {
      text: "Вартість: 1500 грн",
      className: styles.priceDetail,
    },
  ];

  const secondCardDetails = [
    {
      text: "Місто: Київ | Львів | Дніпро",
      className: styles.multiCityDetail,
    },
    {
      text: "Вік: 18+",
      className: styles.ageDetail,
    },
    {
      text: "Вартість: 1500 грн",
      className: styles.priceDetail,
    },
  ];

  return (
    <main className={styles.offlinedesktop}>
      <Header />
      <SearchSection />

      <TrainingCard
        className={styles.trainingCard}
        titleClassName={styles.trainingTitle}
        dividerClassName={styles.cardDivider}
        detailsClassName={styles.trainingDetails}
        title="Одноденний тренінг + симуляція<br/>Тактична медицина<br/>за рекомендаціями TCCC-ASM в Києві"
        details={firstCardDetails}
      />

      <TrainingCard
        className={styles.secondCard}
        titleClassName={styles.secondCardTitle}
        dividerClassName={styles.secondCardDivider}
        detailsClassName={styles.secondCardDetails}
        title='"TCCC ASM" від NAEMT <br/>(1 день)<br/>Базовий курс з тактичної медицини'
        details={secondCardDetails}
      />
    </main>
  );
}

export default SchoolDesktop;
