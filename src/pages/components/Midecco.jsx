import React from "react";
import VideoPlayer from "./VideoPlayer";

const Midecco = () => {
  return (
    <div className="content-preview">
      <h2 className="content-preview__name">Midecco<span>[W realizacji]</span></h2>
      <div className="content-preview__desc">
        <p>
            Midecco to firma zajmująca się projektami łazienek oraz dystrybucją różnych rzeczy potrzebnych do realizacji tych projektów. Strona głownie ma formę informacyjną dla potencjalnych klientów. Ma ona takie elementy jak aktualności oraz wyprzedaże gdzie osoba zarządzająca stroną dodaje wpisy oraz produkty na wyprzedaży. Przy tworzeniu strony zostały wykorzystane takie języki jak: HTML, SCSS, JavaScript oraz Django. Strona jest dostępna pod adresem <a href="#">Midecco</a>.
        </p>
        <h2 className="content-preview__desc__film">Film</h2>
      </div>
      <VideoPlayer />
    </div>
  );
};

export default Midecco;
