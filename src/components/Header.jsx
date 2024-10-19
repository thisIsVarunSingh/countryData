import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../context/ThemeContext";

function Header() {
  const [isDark, setIsDark] = useContext(ThemeContext);

  const darkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`box-border flex justify-between py-1 px-12 font-bold border-b-2 ${
        isDark ? "bg-[#2b3945] text-white" : " text-black bg-white"
      }`}
    >
      <p className="text-3xl">Where in the worlds?</p>

      <div
        className="flex items-center cursor-pointer gap-2 hover:scale-90"
        onClick={darkMode}
      >
        <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        <p>{`${isDark ? "Light Mode" : "Dark Mode"}`}</p>
      </div>
    </div>
  );
}

export default Header;
