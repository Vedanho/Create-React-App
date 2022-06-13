import React from "react";
import img from "../../images/Zero.png";
import styles from "../Main.Component/Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <img src={img} alt="Zero"></img>
      <ul className={styles.buttons}>
        <li>
          <button className={styles.button_1}>Увеличить</button>
        </li>
        <li>
          <button className={styles.button_2}>Уменьшить</button>
        </li>
        <li>
          <button className={styles.button_3}>Сбросить</button>
        </li>
      </ul>
    </div>
  );
};

export default Main;
