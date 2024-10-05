import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from "./SearchInput.module.css";

function SearchInput({ search }) {
  return (
    <div className={style.search}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        type="text"
        placeholder="Search for a Countries..."
        onChange={(e) => search(e.target.value.toLowerCase())}
      />
    </div>
  );
}

export default SearchInput;
