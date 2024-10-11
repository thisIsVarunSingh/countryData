import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import style from "./style//Header.module.css";
import ThemeContext from "../context/ThemeContext";

function Header() {
  const [isDark, setIsDark] = useContext(ThemeContext);
  // console.log(isDark);

  const darkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${style.header} ${isDark ? style.dark : ""}`}>
      <p>Where in the worlds?</p>

      <div className={style.mode} onClick={darkMode}>
        <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        <p>{`${isDark ? "Light Mode" : "Dark Mode"}`}</p>
      </div>
    </div>
  );
}

export default Header;
