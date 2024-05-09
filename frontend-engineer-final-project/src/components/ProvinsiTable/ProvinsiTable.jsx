import React, { useState, useEffect } from "react";
import data from "../../utils/constants/provinces";
import styles from "./ProvinsiTable.module.css";

function ProvinsiTable({ initialData, onSubmit }) {
  // Use state to manage displayed provinces and handle data updates
  const [displayedProvinces, setDisplayedProvinces] = useState(initialData || data.provinces.slice(0, 5));

  // Side effect to update table data when new data is received (if onSubmit is provided)
  useEffect(() => {
    if (onSubmit) {
      const updateTableData = async (newData) => {
        setDisplayedProvinces([...displayedProvinces, newData]);
      };
      onSubmit(updateTableData); // Pass the update function as a callback
    }
  }, [onSubmit, displayedProvinces]);

  return (
    <div className={styles.container}>
      <section className={styles.provinces}>
        <h2 className={styles.provinces__title}>Provinsi</h2>
        <h3 className={styles.provinces__author}>
          Data Covid Berdasarkan Provinsi
        </h3>
        <div className={styles.provinces__container}>
          <table className={styles.provinces__table}>
            <thead>
              <tr>
                <th>No</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Dirawat</th>
                <th>Meninggal</th>
              </tr>
            </thead>
            <tbody>
              {displayedProvinces.map((province, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{province.kota}</td>
                  <td>{province.kasus}</td>
                  <td>{province.sembuh}</td>
                  <td>{province.dirawat}</td>
                  <td>{province.meninggal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default ProvinsiTable;
