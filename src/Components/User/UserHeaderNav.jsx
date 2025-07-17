import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import MinhasFotosSvg from "../Svg/MinhasFotosSvg";
import EstatisticasSvg from "../Svg/EstatisticasSvg";
import AdicionarFotoSvg from "../Svg/AdicionarFotoSvg";
import SairSvg from "../Svg/SairSvg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const mobile = useMedia("(max-width: 40rem)");
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate("/login");
  }
  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          } `}
        >
          {" "}
        </button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
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
    </>
  );
};
export default UserHeaderNav;
