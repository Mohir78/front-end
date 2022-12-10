import { NavLink, Link } from "react-router-dom";

//CSS
import c from "./HeaderNav.module.css";

//images
import britianFlag from '../../../assets/images/britian-flag.png';

//icons
import { AiFillCaretDown } from 'react-icons/ai';

const HeaderNav = () => {
  const headerLinks = [
    "My academic progress",
    "Segmenta online",
    "Materials",
    "Languages",
    "Curriculum CV",
    "Job",
    "Tests Themes",
    "Account",
    "Ticket",
  ];

  return (
    <div className={c["header-nav"]}>
      <div className="container">
        <div className={c["header-nav-inner"]}>
          <nav className={c["header-navigaton"]}>
            <ul className={c["header-nav__collection"]}>
              {headerLinks.map((link, index) => (
                <li className={c["header-nav__collection-item"]} key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `${c["header-nav__link-active"]} ${c["header-nav__link"]}`
                        : `${c["header-nav__link"]}`
                    }
                    to={`/${link.toLowerCase().split(" ").join("-")}`}
                  >
                    {link}
                  </NavLink>
                </li>
              ))}
              <li className={c["header-nav__collection-item"]}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `${c["header-nav__link-active"]} ${c["header-nav__link"]}`
                      : `${c["header-nav__link"]}`
                  }
                  to="/mallbox"
                >
                  Mallbox {/* Habar kelsa nechtaligi ko'rini turadigan badge bo'ladi */}
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={c["header-nav__right"]}>
            <div className={c["header-nav__lang"]}>
              <img src={britianFlag} alt="English language" />
              <AiFillCaretDown/>
            </div>
            <div className={c["log-out"]}>
              <Link to="/login">Log out</Link>
            </div>
            <div className={c["profile-img"]}>
              <img src="https://via.placeholder.com/50x56" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
