import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import style from "./countrieslist.module.css";

function CountriesList({ search }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className={style.countryList}>
      {data
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
        })}
    </div>
  );
}

export default CountriesList;
