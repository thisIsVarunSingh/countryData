import React from "react";
import style from "./card.module.css";
import { Link } from "react-router-dom";

function Cards({ name, population, region, capital, img, data }) {
  return (
    <Link className={style.card} to={`/${name}`} state={data}>
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
