import React from "react";
import { contacts, languages, softSkills, techSkills } from "../data/data";
import myPhoto from "../data/img/vera_korzun.jpg";
import InfoWrapper from "./InfoStyled";

const Info = () => {
  return (
    <InfoWrapper>
      <aside>
        <h2 className="info__title">Vera Korzun</h2>
        <h3 className="info__title-second">Front-end developer</h3>
        <img className="info__img" src={myPhoto} alt="My photo1" />
        <div className="info__contacts">
          <h3 className="info__title-second">Contacts</h3>
          <ul className="list info__list">
            {contacts.map((item, idx) => (
              <li className="info__list-item" key={idx}>
                <a
                  className="link info__list-link"
                  href={item.link}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <span className="info__list-icon">{item.icon}</span>
                  <span className="info__list-value">{item.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="info__title-second">Technical skills</h3>
          <ul className="list info__list">
            {techSkills.map((item, idx) => (
              <li className="info__list-item" key={idx}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="info__title-second">Soft skills</h3>
          <ul className="list info__list">
            {softSkills.map((item, idx) => (
              <li className="info__list-item" key={idx}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="info__title-second">Languages</h3>
          <ul className="list info__list">
            {languages.map((item, idx) => (
              <li className="info__list-item" key={idx}>
                <p className="info__list-icon">{item.name}: </p>
                <p className="info__list-value">{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </InfoWrapper>
  );
};

export default Info;
