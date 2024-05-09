import React from "react";
import styles from "./GlobalSection.module.css";
import data from "../../utils/constants/indonesia";


const GlobalSection = () => {
  // Mendapatkan data dari objek data
  const { indonesia } = data;
  const kasus = indonesia.find((item) => item.status === "Positif").total;
  const sembuh = indonesia.find((item) => item.status === "Sembuh").total;
  const meninggal = indonesia.find((item) => item.status === "Meninggal").total;

  return (
    <div className={styles.section}>
      <h2 className={styles.global}>Indonesia</h2>
      <h4 className={styles.global__title}>Data Covid-19</h4>
      <div className={styles.data}>
        <br />
        <p className={styles.data__kasus}>
          <span className={styles.data__label}>Kasus</span>
          <br></br>
          <span className={styles.data__value}>{kasus}</span>
        </p>
        <p className={styles.data__sembuh}>
          <span className={styles.data__label}>Sembuh</span>
          <br></br>
          <span className={styles.data__value}>{sembuh}</span>
        </p>
        <p className={styles.data__meninggal}>
          <span className={styles.data__label}>Meninggal</span>
          <br></br>
          <span className={styles.data__value}>{meninggal}</span>
        </p>
      </div>
    </div>
  );
};

export default GlobalSection;