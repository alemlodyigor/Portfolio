import React from "react";
import VideoPlayer from "./VideoPlayer";

const Numberguesser = () => {
  return (
    <div className="content-preview">
      <h2 className="content-preview__name">Number Guesser</h2>
      <div className="content-preview__desc">
        <p>
            Number guesser to prosta aplikacja z kursu <a href="">Jonasa Schmedtmanna</a>. System na początku każdej rozgrywki losuje liczbę z zakresu 1-20 a użytkownik ma ją zgadnąć wpisując swój typ w danym polu. Z każdą złą odpowiedzią użytkownik traci jeden punkt. Aplikacja została przeze mnie na początku mojej kariery programisty podczas robienia kursu JavaScript. Można ją sprawdzić pod tym adresem
            <a href="https://alestaryigor.ct8.pl/gra/">Number Guesser</a>.
        </p>
        <h2 className="content-preview__desc__film">Film</h2>
      </div>
      <VideoPlayer />
    </div>
  );
};

export default Numberguesser;
