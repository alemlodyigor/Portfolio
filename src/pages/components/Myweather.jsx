import React from "react";
import VideoPlayer from "./VideoPlayer";
import MyW from "../../assets/myw.mp4";

const Myweather = () => {
  return (
    <div className="content-preview">
      <h2 className="content-preview__name">Myweather</h2>
      <div className="content-preview__desc">
        <p>
          MyWeather to prosta aplikacja pokazująca prognozę pogody dla dowolnego
          miasta. Aplikacja używa API od
          <a href="https://www.weatherapi.com/" target="_blank">WeatherAPI</a>. Aplikacja
          automatycznie po załadowaniu sprawdza prognozę pogody dla miasta
          bazującego na geolokalizacji twojego IP. Po wyszukaniu miasta
          aplikacja dodaje je do ostatnich wyszukiwań. Aplikacja może być
          wyświetlana w dwóch językach: polski oraz angielski (domyślny).
          Została ona stworzona przy użyciu HTML, SCSS oraz JavaScript. Kod
          aplikacji jest dostępny na
          <a href="https://github.com/alemlodyigor/MyWeather" target="_blank"> Github</a>. Spis
          rzeczy które oferuje aplikacja:
        </p>
        <ul className="content-preview__desc__list">
          <li className="content-preview__desc__list__element">
            - Aktualna prognoza pogody
          </li>
          <li className="content-preview__desc__list__element">
            - Szczegółowa prognoza pogody na cały dzień
          </li>
          <li className="content-preview__desc__list__element">
            - Temperatura, prędkość wiatru jego kierunek oraz opady na cały
            dzień
          </li>
          <li className="content-preview__desc__list__element">
            - Prognoza pogody na następne 2 dni
          </li>
        </ul>
        <h2 className="content-preview__desc__film">Film</h2>
      </div>
      <VideoPlayer data={MyW} />
    </div>
  );
};

export default Myweather;
