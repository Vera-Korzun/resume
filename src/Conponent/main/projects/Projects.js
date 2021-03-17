import React from "react";
import { projects } from "../../data/data";
import ProjectsWrapper from './ProjectsStyled'

const Projects = () => {
  return (
    <ProjectsWrapper>
     
        <h3 className="title">Projects</h3>
        <ul className="list projects__list">
          {projects.map((item, idx) => (
            <li className="projects__list-item" key={idx}>
              <h4>{item.name}</h4>
              <div className="projects__list-link">
              <a  className="link" href={item.link} rel="noreferrer noopener" target="_blank">
                {item.link}
              </a>
              <p > <span className="projects__list-link-tech"> ____________</span>&#91; {item.technology}
                &#93;
              </p>
              </div>
              
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
    </ProjectsWrapper>
  );
};

export default Projects;
