import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import MinhasFotosSvg from "../Svg/MinhasFotosSvg";
import EstatisticasSvg from "../Svg/EstatisticasSvg";
import AdicionarFotoSvg from "../Svg/AdicionarFotoSvg";
import SairSvg from "../Svg/SairSvg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate("/login");
  }
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <MinhasFotosSvg />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <EstatisticasSvg />
        {mobile && "Estatístícas"}
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarFotoSvg />
        {mobile && "Adícionar Foto"}
      </NavLink>
      <button onClick={handleLogout}>
        <SairSvg />
        {mobile && " Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
