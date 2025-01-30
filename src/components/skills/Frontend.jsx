import React from "react";

const Frontend = () => {
  const frontendSkills3 = [
    {
      name: "HTML",
      icon: "bx bxl-html5 skills_icon",
    },
    {
      name: "CSS",
      icon: "bx bxl-css3 skills_icon",
    },
    {
      name: "JavaScript",
      icon: "bx bxl-javascript skills_icon",
    },
  ];
  const frontendSkills6 = [
    {
      name: "React JS",
      icon: "bx bxl-react skills_icon",
    },
    {
      name: "jQuery",
      icon: "bx bxl-jquery skills_icon",
    },
    {
      name: "Responsive",
      icon: "bx bx-mobile skills_icon",
    },
  ];
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>
      <div className="skills__box">
        <div className="skills__group">
          {frontendSkills3.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {frontendSkills6.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
