import React from "react";
import "../../styles/profile.scss";
import ProfileIMG from "../../assets/profileimg.png";
import Github from "../../assets/github.svg";
import X from "../../assets/x.png";

const Profile = () => {
  return (
    <div className="profile">
      <img src={ProfileIMG} alt="" className="profile__img" />
      <h1 className="profile__name">Alemlodyigor</h1>
      <div className="profile__socials">
        <div className="profile__socials__block">
          <a href="https://github.com/alemlodyigor" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a href="https://twitter.com/alemlodyigor" target="_blank">
            <img src={X} alt="" />
          </a>
        </div>
      </div>
      <p className="profile__desc">
        Igor, 20 letni fanatyk programowania z wielkimi ambicjami, a także
        fanatyk produkcji muzyki. Języki i frameworki, których używam przy
        swoich projektach:
      </p>
      <ul className="profile__list">
        <li className="profile__list__element">HTML</li>
        <li className="profile__list__element">CSS</li>
        <li className="profile__list__element">SCSS</li>
        <li className="profile__list__element">JavaScript</li>
        <li className="profile__list__element">
          PHP (tylko przy formularzu kontaktu)
        </li>
        <li className="profile__list__element">React</li>
        <li className="profile__list__element">
          Electron (tylko przy dystrybucji na systemy windows)
        </li>
        <li className="profile__list__element">Firebase</li>
      </ul>
    </div>
  );
};

export default Profile;
