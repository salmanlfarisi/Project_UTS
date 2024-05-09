// FormCovid.js

import React, { useState } from "react";
import styles from "./FormCovid.module.css";

function FormCovid({ onUpdateProvinsiTable }) {
  const [province, setProvince] = useState("");
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    const newData = {
      kota: province,
      kasus: status,
      dirawat: quantity, // Ubah 'jumlah' menjadi 'dirawat' sesuai dengan struktur data Provinsi
      sembuh: 0, // Misalnya, awalnya belum ada data sembuh
      meninggal: 0, // Misalnya, awalnya belum ada data meninggal
    };
    onUpdateProvinsiTable(newData); // Panggil prop onUpdateProvinsiTable dengan data baru
    setProvince("");
    setStatus("");
    setQuantity(0);
  };

  return (
    <div className={styles.container}>
      <img className={styles.form__image} src="form.png" alt="Formulir Covid-19" />
      <section className={styles.form}>
        <h2 className={styles.form__h2}>Form Covid</h2>
        <form onSubmit={handleClick}>
          <label className={styles.form__label}>Provinsi</label>
          <input
            className={styles.form__input}
            type="text"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          />
          <label className={styles.form__label}>Status</label>
          <input
            className={styles.form__input}
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <label className={styles.form__label}>Jumlah</label>
          <input
            className={styles.form__input}
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <br />
          <br />
          <button type="submit" className={styles.form__button}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default FormCovid;
