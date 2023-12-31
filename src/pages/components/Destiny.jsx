import React from "react";
import VideoPlayer from "./VideoPlayer";

const Destiny = ({ onClose }) => {
  return (
    <div className="content-preview">
      <h2 className="content-preview__name">
        Destiny<span> [W realizacji]</span>
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
          DestinyApp to komunikator inspirowany takimi aplikacjami jak Messenger
          i Discord. Łączy on funkcje z tych dwóch aplikacji w jednym. Aplikacja
          umożliwia rejestrację za pomocą emaila i hasła oraz dodanie swojego
          awataru. Aplikacja została stworzona za pomocą React oraz SCSS. Bazą
          danych do aplikacji jest FireBase. Strona bedzie dostępna pod adresem
          <a href="#"> Destiny</a>. Najważniejsze funkcje która finalnie będzie
          mieć aplikacja:
        </p>
        <ul className="content-preview__desc__list">
          <li className="content-preview__desc__list__element">
            Wysyłanie wiadomości i wysyłanie załączników
          </li>
          <li className="content-preview__desc__list__element">
            Rozmowy głosowe
          </li>
          <li className="content-preview__desc__list__element">
            Rozmowy wideo
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Destiny;
