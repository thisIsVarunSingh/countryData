import React, { useContext, useEffect, useState } from "react";
import Cards from "./Cards";
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
    <div
      className={`flex flex-wrap justify-evenly gap-5 py-7 px-12 w-full min-h-screen ${
        isDark ? "bg-[#202c37]" : "bg-white"
      }`}
    >
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
        : Array.from({ length: 12 }).map((_, i) => <ShimmerCard key={i} />)}
    </div>
  );
}

export default CountriesList;
