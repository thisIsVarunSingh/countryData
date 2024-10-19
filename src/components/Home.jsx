import React, { useContext, useState } from "react";
import CountriesList from "./CountriesList";
import SearchInput from "./SearchInput";
import Filter from "./Filter";
import ThemeContext from "../context/ThemeContext";

function Home() {
  const [searchData, setSearchData] = useState("");
  const [isDark] = useContext(ThemeContext);

  return (
    <>
      <div
        className={`flex flex-wrap gap-1 items-center px-12 py-12 justify-between ${
          isDark ? "bg-[#202c37] text-white" : " text-black bg-white"
        }`}
      >
        <SearchInput search={setSearchData} />
        <Filter search={setSearchData} />
      </div>
      <CountriesList search={searchData} />
    </>
  );
}

export default Home;
