import React from "react";
import styles from "./Footer.module.css";
import DogsSvgFooter from "./Svg/DogsSvgFooter";

const Footer = () => {
  return <footer className={styles.footer}>
    <DogsSvgFooter/>
    <p>Dogs. Alguns direitos reservados</p>
  </footer>;
};

export default Footer;
