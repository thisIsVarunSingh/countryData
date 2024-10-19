import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function SearchInput({ search }) {
  const [isDark] = useContext(ThemeContext);

  return (
    <div
      className={`flex items-center gap-1 px-4 py-2.5 rounded-md shadow-lg ${
        isDark ? "bg-[#2b3945] text-white" : " text-black bg-white"
      }`}
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        type="text"
        className={`border-0 w-64 text-xl ${
          isDark ? "bg-[#2b3945] text-white" : " text-black bg-white"
        }`}
        placeholder="Search for a Countries..."
        onChange={(e) => search(e.target.value.toLowerCase())}
      />
    </div>
  );
}

export default SearchInput;
