import React from "react";
import { send } from "../../assets/assets";
import TextDecrypt from "../Utils/TextDecrypt";
import { TypeAnimation } from "react-type-animation";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        <TextDecrypt text={"Sheik Shah Shuaib"} />
      </h1>

      <TypeAnimation
        sequence={[
          "ReactJS Developer",
          2000,
          "Web Developer",
          2000,
          "Front End Developer",
          2000,
        ]}

        cursor={false}
        wrapper="span"
        speed={4}
        className="home__subtitle"
        repeat={Infinity}
      />

      <p className="home__description">
        Passionate Website Developer from Salem, India, crafting seamless web experiences with HTML, CSS, JavaScript, ReactJS, and modern CSS frameworks.
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
        <img src={send} alt="send icon" className="button__icon" />
      </a>
    </div>
  );
};

export default Data;
