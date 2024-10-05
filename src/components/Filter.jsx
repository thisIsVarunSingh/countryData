import React from "react";
import style from "./Filter.module.css";

function Filter({ search }) {
  const data = ["Asia", "Americas", "Africa", "Europe", "Oceania"];
  return (
    <select
      defaultValue={"default"}
      className={style.filter}
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
