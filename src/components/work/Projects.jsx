import React, { useState } from "react";
import "./work.css";

const Projects = ({ projects }) => {
  return (
    <div className="work__container container grid">
      {projects.map((project, index) => (
        <div className="project__card" key={index}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project__link"
          >
            <div className="project__img__card">
              <img
                src={project.image}
                alt={project.name}
                className="project__img"
              />
            </div>
          </a>

          <div className="project__data">
            <h3 className="project__title">{project.name}</h3>
            <p className="project__description">{project.description}</p>

            <ul className="tags">
              {project.stacks.map((stack, i) => (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__link"
                >
                  <li key={i}>{stack}</li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
