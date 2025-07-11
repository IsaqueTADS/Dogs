import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import DogsSvg from "./Svg/DogsSvg";
import { UserContext } from "../Contexts/UserContext";

function Header() {
  const { data } = React.useContext(UserContext);

  console.log(data);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <DogsSvg />
        </Link>

        {data ? (
          <Link className={styles.login} to="/conta" >{data.nome}</Link>
        ) : (
          <Link className={styles.login} to="/login">
            login / criar
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
