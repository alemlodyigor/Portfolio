import React from "react";
import VideoPlayer from "./VideoPlayer";
import ExpenseVideo from "../../assets/expense.mp4";

const Expense = () => {
  return (
    <div className="content-preview">
      <h2 className="content-preview__name">Expense</h2>
      <div className="content-preview__desc">
        <p>
            ExpenseApp to prosta aplikacja, która rejestruje dodawane przez użytkownika dochody oraz wydatki. Jest to aplikacja sprzed paru miesięcy która została przeze mnie napisana na początku mojej kariery z programowaniem, gdy jeszcze nawet nie ukończyłem kursu JavaScript. Jest ona tu podana tylko w celach informacyjnych a nie referencyjnych. Można ją zobaczyć pod tym adresem <a href="https://alestaryigor.ct8.pl/expense/" target="_blank"> ExpenseApp</a>.
        </p>
        <h2 className="content-preview__desc__film">Film</h2>
      </div>
      <VideoPlayer data={ExpenseVideo}/>
    </div>
  );
};

export default Expense;
