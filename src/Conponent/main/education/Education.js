import React from "react";
import { education, course } from "../../data/data";
import EducationWrapper from "./educationStyled";

const Education = () => {
  return (
    <EducationWrapper>
      <div>
        <h3 className="title">Education</h3>
        <ul className="list education__list">
          {education.map((item, idx) => (
            <li className="education__list-item" key={idx}>
              <p className="education__describe-year">{item.year}</p>
              <div className="education__list-describe">
                <div className="education__describe-place">
                  <p className="education__describe">{item.type},</p>
                  <p className="education__describe">{item.name},</p>
                </div>
                <p className="education__describe">{item.specialization},</p>
                <p className="education__describe"> {item.place}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="title">Courses</h3>
        <ul className="list">
          {course.map((item, idx) => (
            <li className="education__list-item" key={idx}>
              <p className="education__describe-year">{item.year}</p>
              <div className="education__describe-place">
                <p className="education__describe">{item.name},</p>
                <p className="education__describe">{item.type},</p>
              </div>
              <p className="education__describe"> {item.place}</p>
            </li>
          ))}
        </ul>
      </div>
    </EducationWrapper>
  );
};

export default Education;
