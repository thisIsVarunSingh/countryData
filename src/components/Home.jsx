import React, { useContext, useState } from "react";
import CountriesList from "./CountriesList";
import style from "./Home.module.css";
import SearchInput from "./SearchInput";
import Filter from "./Filter";
import ThemeContext from "../context/ThemeContext";

function Home() {
  const [searchData, setSearchData] = useState("");
  const [isDark] = useContext(ThemeContext);

  return (
    <>
      <div className={`${style.search} ${isDark ? style.dark : ""}`}>
        <SearchInput search={setSearchData} />
        <Filter search={setSearchData} />
      </div>
      <CountriesList search={searchData} />
    </>
  );
}

export default Home;
