import React from "react";
import img from "../../images/Group_1.png";
import styles from "../Header.Component/Header.module.css"

const Header = () => {
  return (
    <div>
    <div className={styles.header}>
      <img src={img} alt="Logo" className={styles.logo}></img>
      <ul className={styles.ul_1}>
        <li>Главная</li>
        <li>О нас</li>
        <li>Контакты</li>
      </ul>
    </div>
    <hr className={styles.line} />
    </div>
  
  );
};

export default Header;
