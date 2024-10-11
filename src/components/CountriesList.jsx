import React, { useContext, useEffect, useState } from "react";
import Cards from "./Cards";
import style from "./style/countrieslist.module.css";
import ThemeContext from "../context/ThemeContext";
import ShimmerCard from "./ShimmerCard";

function CountriesList({ search }) {
  const [data, setData] = useState([]);
  const [isDark] = useContext(ThemeContext);
  const shimmer = [];
  shimmer.length = 20;

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className={`${style.countryList} ${isDark ? style.dark : ""}`}>
      {data.length
        ? data
            .filter(
              (data) =>
                data.name.common.toLowerCase().includes(search) ||
                data.region.toLowerCase().includes(search)
            )
            .map((data) => {
              return (
                <Cards
                  key={data.name.common}
                  name={data.name.common}
                  population={data.population.toLocaleString("en-IN")}
                  region={data.region}
                  capital={data.capital}
                  img={data.flags.png}
                  data={data}
                />
              );
            })
        : Array.from({ length: 12 }).map((_, i) => <ShimmerCard />)}
    </div>
  );
}

export default CountriesList;
