import React from "react";

const Midecco = ({ onClose }) => {
  return (
    <div className="content-preview">
      <h2 className="content-preview__name">
        Midecco<span> [W realizacji]</span>
      </h2>
      <div className="content-preview__close" onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="content-preview__desc">
        <p>
          Midecco to firma zajmująca się projektami łazienek oraz dystrybucją
          różnych rzeczy potrzebnych do realizacji tych projektów. Strona
          głownie ma formę informacyjną dla potencjalnych klientów. Ma ona takie
          elementy jak aktualności oraz wyprzedaże gdzie osoba zarządzająca
          stroną dodaje wpisy oraz produkty na wyprzedaży. Przy tworzeniu strony
          zostały wykorzystane takie języki jak: HTML, SCSS, JavaScript oraz
          Django. Strona będzie dostępna pod adresem <a href="#"> Midecco</a>.
        </p>
      </div>
    </div>
  );
};

export default Midecco;
