import React from "react";
import styles from "./OfflineDesktop.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>TacWise</h1>
      <nav className={styles.navContainer}>
        <a href="#" className={styles.navItemLight}>
          Моя аптечка
        </a>
        <a href="#" className={styles.navItemAccent}>
          Навчання
        </a>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ada2251d58e39de33893ce5d3e09f0c0534a9bf8?placeholderIfAbsent=true&apiKey=2b8ed67deaf7468391291ada83fe6c08"
          alt="Profile"
          className={styles.profileIcon}
        />
      </nav>
    </header>
  );
};

export default Header;
