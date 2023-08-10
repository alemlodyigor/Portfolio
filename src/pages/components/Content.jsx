import React, { useState } from "react";
import "../../styles/content.scss";
import Myweather from "./MyWeather";
import Gerinstal from "./Gerinstal";
import Destiny from "./Destiny";
import Expense from "./Expense";
import Numberguesser from "./Numberguesser";
import Midecco from "./Midecco";

const Content = () => {
  const [prev, setPrev] = useState("");

  const handleProjectClick = (project) => {
    if (prev === project) {
      setPrev("");
    } else {
      setPrev(project);
    }
  };

  return (
    <div className="content">
      <div className="content-projects">
        <nav className="content-projects__nav">
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
              onClick={() => handleProjectClick("destiny")}
              className="content-projects__list__element"
            >
              DestinyApp
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
        {prev === "destiny" && <Destiny onClose={() => setPrev("")} />}
        {prev === "expense" && <Expense onClose={() => setPrev("")} />}
        {prev === "numberguesser" && (
          <Numberguesser onClose={() => setPrev("")} />
        )}
      </div>
    </div>
  );
};

export default Content;
