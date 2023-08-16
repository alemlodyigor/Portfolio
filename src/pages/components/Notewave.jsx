import React from "react";

const Notewave = ({ onClose }) => {
  return (
    <div className="content-preview">
      <h2 className="content-preview__name">
        Notewave<span> [W realizacji]</span>
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
          NoteWave to prosty notatnik online. Pozwala on na tworzenie notatek
          oraz udostępnianie ich innym użytkownikom. Notatki zapisują się na
          koncie, dzięki funkcji posiadania konta. Aplikacja jest napisana w
          React i pracuje na Firebase. Kod aplikacji jest dostępny na{" "}
          <a href="https://github.com/alemlodyigor/NoteWave">Github</a>
        </p>
      </div>
    </div>
  );
};

export default Notewave;
