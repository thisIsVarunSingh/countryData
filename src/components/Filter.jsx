import React, { useContext } from "react";
import style from "./style//Filter.module.css";
import ThemeContext from "../context/ThemeContext";

function Filter({ search }) {
  const data = ["Asia", "Americas", "Africa", "Europe", "Oceania"];
  const [isDark] = useContext(ThemeContext);

  return (
    <select
      defaultValue={"default"}
      className={`${style.filter} ${isDark ? style.dark : ""}`}
      onChange={(e) => {
        search(e.target.value.toLowerCase());
      }}
    >
      <option value="default" hidden disabled>
        Filter by region
      </option>
      {data.map((data) => {
        return (
          <option key={data} value={data}>
            {data}
          </option>
        );
      })}
    </select>
  );
}

export default Filter;
