import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import style from "./Header.module.css";
import ThemeContext from "../context/ThemeContext";

function Header() {
  const [isDark, setIsDark] = useContext(ThemeContext);
  // console.log(isDark);

  const darkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${style.header} ${isDark ? style.dark : ""}`}>
      <h1>Where in the worlds?</h1>

      <div className={style.mode} onClick={darkMode}>
        <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        <h2>{`${isDark ? "Light Mode" : "Dark Mode"}`}</h2>
      </div>
    </div>
  );
}

export default Header;
