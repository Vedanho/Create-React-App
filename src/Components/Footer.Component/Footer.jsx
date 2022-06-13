import React from "react";
import styles from "../Footer.Component/Footer.module.css"
import img from "../../images/logo_footer.png"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.footer_items}>
        <li><img src = {img} alt = 'Logo'></img></li>
        <li>Партнерам</li>
        <li>Разработчикам</li>
        <li>Вакансии</li>
      </ul>
      ООО “интукод”, 2020г.
    </div>
  );
};

export default Footer;
