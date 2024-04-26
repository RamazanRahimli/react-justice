import React from "react";
import styles from "./Fourbox.module.css";
const Fourbox = () => {
  return (
    <div className={styles.fourBox}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <h1>
            <a href="">Happy</a>Clients
          </h1>
        </div>
        <div className={styles.rigthBox}>
          <div className={styles.writeBox}>
            <blockquote>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in. Separated they live in Bookmarksgrove right at the
              coast of the Semantics, a large language ocean.
            </blockquote>
            <div className={styles.imgBox}>
              <div className={styles.img1}></div>
              <div className={styles.nameBox}>
                <strong>Carl Anderson</strong>
                <span>CEO, Co-Founder</span>
              </div>
            </div>
          </div>
          <div className={styles.writeBox}>
            <blockquote>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in. Separated they live in Bookmarksgrove right at the
              coast of the Semantics, a large language ocean.
            </blockquote>
            <div className={styles.imgBox}>
              <div className={styles.img2}></div>
              <div className={styles.nameBox}>
                <strong>Carl Anderson</strong>
                <span>CEO, Co-Founder</span>
              </div>
            </div>
          </div>
          <div className={styles.writeBox}>
            <blockquote>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in. Separated they live in Bookmarksgrove right at the
              coast of the Semantics, a large language ocean.
            </blockquote>
            <div className={styles.imgBox}>
              <div className={styles.img3}></div>
              <div className={styles.nameBox}>
                <strong>Carl Anderson</strong>
                <span>CEO, Co-Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourbox;
