import React from "react";
import { experience, experienceW } from "../../data/data";
import ExperienceWrapper from "./ExperienceStyled";

const Experience = () => {
  return (
    <ExperienceWrapper>
      <h3 className="title">Experience</h3>
      <ul className="list experience__list">
        {experience.map((item, idx) => (
          <li className="experience__list-item" key={idx}>
            <div className="experience__list-item-del">
              <p className="experience__describe-year">{item.year}</p>

              <div className="experience__list-describe">
                <p className="experience__describe">{item.work},</p>
                <p className="experience__describe">{item.name},</p>
                <p className="experience__describe">{item.place}</p>
              </div>
            </div>
            <ul className="experience__list-competence">
              {item.competence.map((competence, idx) => (
                <li key={idx}>{competence}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </ExperienceWrapper>
  );
};

export default Experience;
