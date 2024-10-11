import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import style from "./style//SearchInput.module.css";
import ThemeContext from "../context/ThemeContext";

function SearchInput({ search }) {
  const [isDark] = useContext(ThemeContext);

  return (
    <div className={`${style.search} ${isDark ? style.dark : ""}`}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        type="text"
        className={`${isDark ? style.dark : ""}`}
        placeholder="Search for a Countries..."
        onChange={(e) => search(e.target.value.toLowerCase())}
      />
    </div>
  );
}

export default SearchInput;
