import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Filter({ search }) {
  const data = ["Asia", "Americas", "Africa", "Europe", "Oceania"];
  const [isDark] = useContext(ThemeContext);

  return (
    <select
      defaultValue={"default"}
      className={`w-52 p-2 text-lg rounded-md ${
        isDark ? "bg-[#2b3945] text-white" : " text-black bg-white"
      }`}
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
