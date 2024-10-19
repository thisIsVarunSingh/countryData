import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

function Cards({ name, population, region, capital, img, data }) {
  const [isDark] = useContext(ThemeContext);
  console.log(capital);

  return (
    <Link
      className={`w-64 max-h-96 no-underline relative rounded-md shadow-md hover:cursor-pointer hover:scale-105 ${
        isDark ? "bg-[#2b3945] text-white" : "bg-white text-black"
      }`}
      to={`/${name}`}
      state={data}
    >
      <div className="h-40">
        <img className="w-full h-full rounded-t-md" src={img} alt="" />
      </div>
      <div className="p-4">
        <h2 className="my-2">{name}</h2>
        <p className="my-2">
          <b>Population :</b> {population}
        </p>
        <p className="my-2">
          <b>Region :</b> {region}
        </p>
        <p className="my-2">
          <b>Capital :</b>{" "}
          {capital ? capital.map((capital) => capital).join(", ") : " "}
        </p>
      </div>
    </Link>
  );
}

export default Cards;
