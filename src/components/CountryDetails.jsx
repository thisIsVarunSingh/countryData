import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
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
      capital: data.capital.map((capital) => capital).join(", "),
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

  console.log(data.capital);

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
    <div className={`${isDark ? "bg-[#2b3945] text-white h-full" : ""}`}>
      <button
        className={`mx-[50px] my-3 p-4 rounded-full font-bold text-xs cursor-pointer border hover:scale-110 ${
          isDark ? "bg-[#202c37] text-white" : "text-black bg-white"
        }`}
        id="button"
        onClick={() => history.back()}
      >
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>
      <div className="flex w-full flex-col md:flex-row min-h-screen px-[50px] py-[30px] gap-4 items-start">
        <div className="md:w-2/5 w-full min-w-[300px] ">
          <img className="w-full object-contain" src={data.flag} alt="" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold mb-6">{data.countryName}</h1>
          <div className="flex justify-between flex-col sm:flex-row">
            <div className="">
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
            <div className="">
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
          <p className="flex flex-wrap gap-y-4 items-center">
            <b>Border Countries: &nbsp;</b>
            {data.border.length > 0
              ? data.border.map((border) => {
                  return (
                    <Link
                      className={`no-underline py-3 px-5 rounded-xl mx-2.5 cursor-pointer border border-solid hover:scale-105 hover:font-bold ${
                        isDark
                          ? "border-white text-white"
                          : "border-black text-black"
                      }`}
                      key={border}
                      to={`/${border}`}
                    >
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
