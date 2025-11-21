import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
          <div
            className={
              toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          {/* Education Section */}
          <div
            className={
              toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  B.Sc in Computer Science.
                </h3>
                <span className="qualification__subtitle">
                  Jairam Arts & Science College - Salem
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Higher Secondary</h3>
                <span className="qualification__subtitle">
                  St. John's Matriculation Higher Secondary School - Salem
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">React Js Developer</h3>
                <span className="qualification__subtitle">
                  Nulinz Technology - Salem
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Mar 2024 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">React JS Developer</h3>
                <span className="qualification__subtitle">Freelancer - Salem</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> June 2025 - Present
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
