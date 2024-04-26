import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import styles from "./Header.module.css";

const header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <h1>Justice</h1>
          <span></span>
        </div>
        <div className={styles.menuBox}>
          <nav>
            <ul>
              <li>
                <a href="" className={styles.homeTag}>
                  Home
                </a>
              </li>
              <li>
                <a href="">Practice Areas</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Attorneys</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li className={styles.menuTag}>
                <FiAlignJustify />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default header;
