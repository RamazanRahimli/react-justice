import React from "react";
import styles from "./Threebox.module.css";

const Threebox = () => {
  return (
    <div className={styles.threeBox}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <h1>
            <a href="">50 Years </a> of Experience in Various Cases
          </h1>
        </div>
        <div className={styles.rightBox}>
          <div className={styles.writeBox}>
            <span>
              <a href="">90</a>+
            </span>
            <strong>Awards</strong>
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics.
            </p>
          </div>
          <div className={styles.writeBox}>
            <span>
              <a href="">3K</a>+
            </span>
            <strong>Cases Wins</strong>
            <p>
            Separated they live in Bookmarksgrove right at the coast of the Semantics.
            </p>
          </div>
          <div className={styles.writeBox}>
            <span>
              <a href="">2K</a>+
            </span>
            <strong>Clients</strong>
            <p>
            Separated they live in Bookmarksgrove right at the coast of the Semantics.
            </p>
          </div>
          <div className={styles.writeBox}>
            <span>
              <a href="">200</a>+
            </span>
            <strong>Attorneys</strong>
            <p>
            Separated they live in Bookmarksgrove right at the coast of the Semantics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Threebox;
