import React from "react";
import "./about.css";
import { files, resume, work2 } from "../../assets/assets";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={work2} alt="" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            Frontend Web Developer with 8 months of experience crafting responsive, dynamic, and user-friendly web interfaces using HTML, CSS, JavaScript, ReactJS, jQuery, and Bootstrap. Adept at building cross-browser compatible apps and collaborating to deliver high-quality solutions.
          </p>
          <a download="Sheik_Shah_Shuaib_Resume.pdf" href={resume} className="button button--flex">
            Download CV
            <img src={files} alt="" className="button__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
