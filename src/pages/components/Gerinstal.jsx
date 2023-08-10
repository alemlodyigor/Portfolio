import React from "react";
import VideoPlayer from "./VideoPlayer";
import GerinstalVideo from "../../assets/gerinstal.mp4";

const Gerinstal = ({ onClose }) => {
  return (
    <div className="content-preview">
      <h2 className="content-preview__name">Ger-instal</h2>
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
          Ger-instal to firma elektryczna świadcząca usługi w tym zakresie.
          Strona stworzona przeze mnie ma formę informacyjną dla potencjalnego
          klienta. Na stronie znajduje się slider ze zdjęciami ich realizacji
          oraz kilka mniejszych komponentów takich jak formularz kontaktu czy
          mapa oraz inne. Przy tworzeniu strony języki które zostały użyte to
          HTML, SCSS, Javascript i PHP.Strona jest dostępna pod adresem
          <a href="https://ger-instal.pl/" target="_blank">
            {" "}
            Ger-instal
          </a>
          .
        </p>
        <h2 className="content-preview__desc__film">Film</h2>
      </div>
      <VideoPlayer data={GerinstalVideo} />
    </div>
  );
};

export default Gerinstal;
