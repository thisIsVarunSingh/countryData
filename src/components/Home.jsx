import React, { useState } from "react";
import CountriesList from "./CountriesList";
import style from "./Home.module.css";
import SearchInput from "./SearchInput";
import Filter from "./Filter";

function Home() {
  const [searchData, setSearchData] = useState("");

  return (
    <>
      <div className={style.search}>
        <SearchInput search={setSearchData} />
        <Filter search={setSearchData} />
      </div>
      <CountriesList search={searchData} />
    </>
  );
}

export default Home;
