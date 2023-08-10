import React from "react";
import VideoPlayer from "./VideoPlayer";
import NumberguesserVideo from "../../assets/numberguesser.mp4";

const Numberguesser = ({ onClose }) => {
  return (
    <div className="content-preview">
      <h2 className="content-preview__name">Number Guesser</h2>
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
          Number guesser to prosta aplikacja z kursu
          <a
            href="https://www.udemy.com/user/jonasschmedtmann/"
            target="_blank"
          >
            {" "}
            Jonasa Schmedtmanna
          </a>
          . System na początku każdej rozgrywki losuje liczbę z zakresu 1-20 a
          użytkownik ma ją zgadnąć wpisując swój typ w danym polu. Z każdą złą
          odpowiedzią użytkownik traci jeden punkt. Aplikacja została przeze
          mnie na początku mojej kariery programisty podczas robienia kursu
          JavaScript. Można ją sprawdzić pod tym adresem
          <a href="https://alestaryigor.ct8.pl/gra/" target="_blank">
            {" "}
            Number Guesser
          </a>
          .
        </p>
        <h2 className="content-preview__desc__film">Film</h2>
      </div>
      <VideoPlayer data={NumberguesserVideo} />
    </div>
  );
};

export default Numberguesser;
