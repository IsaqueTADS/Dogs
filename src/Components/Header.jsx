import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import DogsSvg from "./Svg/DogsSvg";
import { UserContext } from "../Contexts/UserContext";

function Header() {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <DogsSvg />
        </Link>

        {data ? (
          <Link className={styles.login} to="/login">
            {data.nome}
            <Link to="/logim">
              <button onClick={userLogout}>Sair</button>
            </Link>
          </Link>
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
