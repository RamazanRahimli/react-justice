import React from "react";
import styles from "./Firstbox.module.css";

const Education = () => {
  return (
    <div className={styles.firstBox}>
      <div className={styles.writeBox}>
        <h1>
          <a href="">We Fight</a> For Your Right
        </h1>
        <span>
          Another cool free template by the fine folks at
          <a href="">Colorlib</a>.
        </span>
        <button>Free consultation</button>
      </div>
    </div>
  );
};

export default Education;
