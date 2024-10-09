import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import style from "./CountryDetails.module.css";
import { Link, useLocation, useParams } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

function CountryDetails() {
  const [data, setData] = useState({});
  const pramas = useParams();
  const { state } = useLocation();
  const [isDark] = useContext(ThemeContext);

  function updateData(data) {
    setData({
      countryName: data.name.common,
      population: data.population,
      region: data.region,
      capital: data.capital,
      subregion: data.subregion,
      language: Object.values(data.languages)
        .map((lang) => lang)
        .join(", "),
      flag: data.flags.svg,
      tld: data.tld,
      native: Object.values(data.name.nativeName)[0].common,
      currency: Object.values(data.currencies)
        .map((currency) => currency.name)
        .join(", "),
      border: [],
    });
    if (data.borders) {
      Promise.all(
        data.borders.map((border) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((border) => border.json())
            .then(([border]) => border.name.common);
        })
      ).then((border) => {
        setTimeout(() => setData((prev) => ({ ...prev, border })));
      });
    }
  }

  useEffect(() => {
    if (state) {
      updateData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${pramas.country}`)
      .then((data) => data.json())
      .then(([data]) => {
        updateData(data);
      });
  }, [pramas]);

  if (Object.keys(data).length === 0) {
    data.border = [];
  }

  return (
    <div className={`${isDark ? style.dark : ""}`}>
      <button className={style.button} onClick={() => history.back()}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>
      <div className={style.content}>
        <div className={style.flag}>
          <img src={data.flag} alt="" />
        </div>
        <div className={style.details}>
          <h1>{data.countryName}</h1>
          <div>
            <div className={style.left}>
              <p>
                <b>Native Name:</b> {data.native}
              </p>
              <p>
                <b>Population:</b>{" "}
                {Number(data.population).toLocaleString("en-IN")}
              </p>
              <p>
                <b>Region:</b> {data.region}
              </p>
              <p>
                <b>Sub Region:</b> {data.subregion}{" "}
              </p>
              <p>
                <b>Capital:</b> {data.capital}
              </p>
            </div>
            <div className={style.right}>
              <p>
                <b>Top Level Domain:</b> {data.tld}
              </p>
              <p>
                <b>Currencies:</b> {data.currency}
              </p>
              <p>
                <b>Languages:</b> {data.language}
              </p>
            </div>
          </div>
          <p className={`${isDark ? style.darkborder : style.border}`}>
            <b>Border Countries: &nbsp;</b>
            {data.border.length > 0
              ? data.border.map((border) => {
                  return (
                    <Link key={border} to={`/${border}`}>
                      {border}
                    </Link>
                  );
                })
              : "No border country"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
