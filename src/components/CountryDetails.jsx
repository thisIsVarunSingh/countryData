import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import style from "./CountryDetails.module.css";
import { Link, useLocation, useParams } from "react-router-dom";

function CountryDetails() {
  const [data, setData] = useState({});
  const pramas = useParams();
  const { state } = useLocation();

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
    <>
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
              <p>Native Name: {data.native}</p>
              <p>Population: {data.population}</p>
              <p>Region: {data.region}</p>
              <p>Sub Region: {data.subregion} </p>
              <p>Capital: {data.capital}</p>
            </div>
            <div className={style.right}>
              <p>Top Level Domain: {data.tld}</p>
              <p>Currencies: {data.currency}</p>
              <p>Languages: {data.language}</p>
            </div>
          </div>
          <p className={style.border}>
            Border Countries:
            {data.border.map((border) => {
              return (
                <Link key={border} to={`/${border}`}>
                  {border}
                </Link>
              );
            })}
          </p>
        </div>
      </div>
    </>
  );
}

export default CountryDetails;
