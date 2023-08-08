import React from "react";
import VideoPlayer from "./VideoPlayer";

const Myweather = () => {
  return (
    <div className="content-preview">
      <h2 className="content-preview__name">Myweather</h2>
      <div className="content-preview__desc">
        <p>
          MyWeather to prosta aplikacja pokazująca prognozę pogody dla dowolnego
          miasta. Aplikacja używa API dostarczanego przez{" "}
          <a href="https://www.weatherapi.com/">WeatherAPI</a>. Aplikacja
          automatycznie po załadowaniu sprawdza prognozę pogody dla miasta
          bazującego na geolokalizacji twojego IP. Po wyszukaniu miasta
          aplikacja tworzy kafelek szybkiego wyszukiwania w bloku "Ostatnie
          wyszukiwania". Aplikacja może być wyświetlana w dwóch językach: polski
          oraz angielski (domyślny). Została ona stworzona przy użyciu HTML,
          SCSS oraz JavaScript. Kod aplikacji jest dostępny na{" "}
          <a href="https://github.com/alemlodyigor/MyWeather">Github</a>. Spis
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
            - Temperatura na cały dzień
          </li>
          <li className="content-preview__desc__list__element">
            - Prędkość oraz kierunek wiatru na cały dzień
          </li>
          <li className="content-preview__desc__list__element">
            - Opady atmosferyczne na cały dzień
          </li>
          <li className="content-preview__desc__list__element">
            - Prognoza pogody na następne 2 dni
          </li>
        </ul>
        <h2 className="content-preview__desc__film">Film</h2>
      </div>
      <VideoPlayer />
    </div>
  );
};

export default Myweather;
