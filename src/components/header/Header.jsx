import React, { useState } from "react";
import "./header.css";
import DarkMode from "../DarkMode/DarkMode";

// Define an array of navigation items
const navItems = [
  {
    id: "home",
    name: "Welcome",
    icon: "uil uil-estate",
  },
  {
    id: "about",
    name: "About",
    icon: "uil uil-user",
  },
  {
    id: "skills",
    name: "Skills",
    icon: "uil uil-file-alt",
  },
  {
    id: "services",
    name: "Services",
    icon: "uil uil-briefcase-alt",
  },
  {
    id: "work",
    name: "Portfolio",
    icon: "uil uil-scenery",
  },
  {
    id: "contact",
    name: "Contact",
    icon: "uil uil-message",
  },
];

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("#home");
  console.log(active);

  return (
    <header className="header">
      <nav className="nav container">
  
         
        
        <div className={menu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {navItems.map((item) => (
              <li className="nav__item" key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setActive(`#${item.id}`)}
                  className={
                    active === `#${item.id}`
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className={`${item.icon} nav__icon`}></i>
                  <span className="nav__tooltip"> {item.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setMenu(!menu)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setMenu(!menu)}>
          <i className="uil uil-apps"></i>
        </div>
        <DarkMode/>
      </nav>
    </header>
  );
};

export default Header;
