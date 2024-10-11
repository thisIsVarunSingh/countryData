import React, { useContext } from "react";
import style from "./style/card.module.css";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

function Cards({ name, population, region, capital, img, data }) {
  const [isDark] = useContext(ThemeContext);

  return (
    <Link
      className={`${style.card} ${isDark ? style.dark : ""}`}
      to={`/${name}`}
      state={data}
    >
      <div className={style.img}>
        <img src={img} alt="" />
      </div>
      <div className={style.data}>
        <h2>{name}</h2>
        <p>
          <b>Population :</b> {population}
        </p>
        <p>
          <b>Region :</b> {region}
        </p>
        <p>
          <b>Capital :</b> {capital}
        </p>
      </div>
    </Link>
  );
}

export default Cards;
