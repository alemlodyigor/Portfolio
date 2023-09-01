import React, { useState } from "react";
import "../../styles/content.scss";
import Myweather from "./MyWeather";
import Gerinstal from "./Gerinstal";
import Destiny from "./Destiny";
import Expense from "./Expense";
import Numberguesser from "./Numberguesser";
import Midecco from "./Midecco";
import Notewave from "./Notewave";

const Content = () => {
  const [prev, setPrev] = useState("");

  const handleProjectClick = (project) => {
    if (prev === project) {
      setPrev("");
    } else {
      setPrev(project);
    }
  };

  const handleNavSwitch = () => {
    const navSwitch = document.querySelector(
      ".content-projects__nav__menu__switch"
    );
    const navList = document.querySelector(".content-projects__nav__menu");

    navSwitch.classList.toggle("hidden");
    navList.classList.toggle("hidden");
  };

  return (
    <div className="content">
      <div className="content-projects">
        <nav className="content-projects__nav">
          {/*  */}
          <div className="content-projects__nav__menu__switch">
            <h2 className="content-projects__nav__menu__switch__h2">
              Projects
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="content-projects__nav__menu__switch__icon"
              onClick={handleNavSwitch}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <div className="content-projects__nav__menu hidden">
            <div className="content-projects__nav__menu__container">
              <h2 className="content-projects__nav__menu__switch__h2">
                Projects
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="content-projects__nav__menu__switch__icon"
                onClick={handleNavSwitch}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </div>
            <ul className="content-projects__nav__menu__list">
              <li
                onClick={() => handleProjectClick("myw")}
                className="content-projects__nav__menu__list__element"
              >
                Myweather
              </li>
              <li
                onClick={() => handleProjectClick("gerinstal")}
                className="content-projects__nav__menu__list__element"
              >
                Ger-instal
              </li>
              <li
                onClick={() => handleProjectClick("midecco")}
                className="content-projects__nav__menu__list__element"
              >
                Midecco
              </li>
              <li
                className="content-projects__nav__menu__list__element"
                onClick={() => handleProjectClick("notewave")}
              >
                NoteWave
              </li>
              <li
                onClick={() => handleProjectClick("expense")}
                className="content-projects__nav__menu__list__element"
              >
                ExpenseApp
              </li>
              <li
                onClick={() => handleProjectClick("numberguesser")}
                className="content-projects__nav__menu__list__element"
              >
                Number Guesser
              </li>
            </ul>
          </div>

          <ul className="content-projects__list">
            <li
              onClick={() => handleProjectClick("myw")}
              className="content-projects__list__element"
            >
              Myweather
            </li>
            <li
              onClick={() => handleProjectClick("gerinstal")}
              className="content-projects__list__element"
            >
              Ger-instal
            </li>
            <li
              onClick={() => handleProjectClick("midecco")}
              className="content-projects__list__element"
            >
              Midecco
            </li>
            <li
              className="content-projects__nav__menu__list__element"
              onClick={() => handleProjectClick("notewave")}
            >
              NoteWave
            </li>
            <li
              onClick={() => handleProjectClick("expense")}
              className="content-projects__list__element"
            >
              ExpenseApp
            </li>
            <li
              onClick={() => handleProjectClick("numberguesser")}
              className="content-projects__list__element"
            >
              Number Guesser
            </li>
          </ul>
        </nav>
        {prev === "myw" && <Myweather onClose={() => setPrev("")} />}
        {prev === "gerinstal" && <Gerinstal onClose={() => setPrev("")} />}
        {prev === "midecco" && <Midecco onClose={() => setPrev("")} />}
        {prev === "notewave" && <Notewave onClose={() => setPrev("")} />}
        {prev === "expense" && <Expense onClose={() => setPrev("")} />}
        {prev === "numberguesser" && (
          <Numberguesser onClose={() => setPrev("")} />
        )}
      </div>
    </div>
  );
};

export default Content;
