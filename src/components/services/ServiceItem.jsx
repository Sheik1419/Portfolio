import React from "react";

const ServiceItem = ({ title, description, icon }) => {
  return (
    <div className="services__content">
      <div className="icon__box">
        <img src={icon} alt="" className="services__icon" />
        <div className="services__dot">
          <span className="dot"></span>
        </div>
      </div>
      <h3 className="services__title">{title}</h3>
      <p className="services__description">{description}</p>
    </div>
  );
};

export default ServiceItem;
