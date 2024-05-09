import React from "react";
import styles from "./Hero.module.css";

function Hero () {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Covid ID</h2>
                    <h3 className={styles.hero__genre}>Monitoring Perkembangan Covid</h3>
                    <p className={styles.hero__description}>
                        Menjaga diri dari virus mematikan itu sangat-lah mudah
                    </p>
                    <button className={styles.hero__button}>Vaccine</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image}
                    src="./public/medical.png" 
                    alt="medical" />
                </div>
            </section>
        </div>
    )
}

export default Hero;