import React, { useContext } from "react";
import style from "./style/shimmercard.module.css";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

function ShimmerCard() {
  const [isDark] = useContext(ThemeContext);
  return (
    <Link className={`${style.shimmercard} ${isDark ? style.dark : ""}`} to={`/`}>
      <div className={style.shimmerimg}></div>
      <div className={style.shimmerdata}>
        <h2></h2>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </Link>
  );
}

export default ShimmerCard;
