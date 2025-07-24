import React from "react";

const Backend = () => {
  const backendSkills3 = [
    {
      name: "Laravel",
      icon: "fa-brands fa-laravel skills_icon",
    },
    {
      name: "TailwindCSS",
      icon: "bx bxl-tailwind-css skills_icon",
    },
    {
      name: "Bootstrap",
      icon: "bx bxl-bootstrap skills_icon",
    },
  ];
  const backendSkills6 = [
    {
      name: "WordPress",
      icon: "bx bxl-wordpress skills_icon",
    },
    {
      name: "GitHub",
      icon: "bx bxl-github skills_icon",
    },
    {
      name: "REST APIs",
      icon: "bx bx-git-branch skills_icon",
    },
  ];
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frameworks & Tools</h3>
      <div className="skills__box">
        <div className="skills__group">
          {backendSkills3.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {backendSkills6.map((skill, index) => (
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

export default Backend;

