import React from "react";
import styles from "./Twobox.module.css";
import { GiSuitcase } from "react-icons/gi";
import { IoPersonAddSharp } from "react-icons/io5";

const Twobox = () => {
  return (
    <div className={styles.twoBox}>
      <div className={styles.leftBox}>
        <h2>
          Our <a href="">Practice Areas</a>
        </h2>
        <div className={styles.writeBox}>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in.
          </p>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
          <button>Learn more</button>
        </div>
      </div>
      <div className={styles.rightBox}>
        <div className={styles.container}>
          <div className={styles.logoWriteBox}>
            <h5>
              <a href="">
                <GiSuitcase />
              </a>
            </h5>
            <div className={styles.textBox}>
              <a href="">Banking and Finance Law</a>
              <span>
                Far far away, behind the word mountains, far from the countries
              </span>
            </div>
          </div>
          <div className={styles.logoWriteBox}>
            <h5>
              <a href="">
                <IoPersonAddSharp />
              </a>
            </h5>
            <div className={styles.textBox}>
              <a href="">Commercial Law</a>
              <span>
                Far far away, behind the word mountains, far from the countries
              </span>
            </div>
          </div>
          <div className={styles.logoWriteBox}>
            <h5>
              <a href="">
                <IoPersonAddSharp />
              </a>
            </h5>
            <div className={styles.textBox}>
              <a href="">Corporate Law</a>
              <span>
                Far far away, behind the word mountains, far from the countries
              </span>
            </div>
          </div>
          <div className={styles.logoWriteBox}>
            <h5>
              <a href="">
                <IoPersonAddSharp />
              </a>
            </h5>
            <div className={styles.textBox}>
              <a href="">Criminal Law</a>
              <span>
                Far far away, behind the word mountains, far from the countries
              </span>
            </div>
          </div>
          <a href="" className={styles.aTag}>
            More practice Areas
          </a>
        </div>
      </div>
    </div>
  );
};

export default Twobox;
