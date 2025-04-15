import React from "react";
import styles from "./OfflineDesktop.module.scss";

const SearchSection = () => {
  return (
    <>
      <h2 className={styles.pageTitle}>
        <span className={styles.titleGreen}>Де</span>
        <span className={styles.titleDark}> отримати </span>
        <span className={styles.titleNormal}>практику</span>
        <span className={styles.titleDark}>?</span>
      </h2>
      <div className={styles.searchContainer}>
        <label htmlFor="citySearch" className={styles.searchLabel}>
          Введіть назву міста:
        </label>
        <input
          type="text"
          id="citySearch"
          className={styles.searchInput}
          aria-label="Введіть назву міста"
        />
      </div>
      <hr className={styles.divider} />
    </>
  );
};

export default SearchSection;
