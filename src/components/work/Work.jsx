import React, { useState } from "react";
import "./work.css";
import Projects from "./Projects";
import {
  aditya,
  dlr,
  expert,
  ayush,
  lm,
  nulinz,
  excoso,
  neptune,
  helping,
  fobas,
  nuscma,
  rootments,
  technomerates,
  onstru,
  sitesync,
  cogosmart,
  magarantham,
  sukoyo,
  simcothreads,
  livingbrains,
  shakticart,
  urfws,
  ds,
  flybirds,
} from "../../assets/projects";

const projects = [
  {
    name: "Nulinz",
    description:
      "Developed a responsive corporate website with 15+ service pages, blog, startup section, contact forms, and interactive animations using HTML, CSS, JavaScript, and Bootstrap.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    link: "https://nulinz.com/",
    image: nulinz,
    category: "Completed",
  },
  {
    name: "Flybirds",
    description:
      "Developed a responsive e-commerce website using Next.js, JavaScript, CSS, and Bootstrap, implementing modern interfaces, reusable components, and mobile-friendly layouts.",
    stacks: ["Next Js", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    link: "http://flybirdsleggings.com/",
    image: flybirds,
    category: "Completed",
  },
  {
    name: "Living Brains",
    description:
      "Developed a responsive digital marketing website using React.js, JavaScript, CSS, and Bootstrap, featuring service pages, company information, and animated user interfaces.",
    stacks: ["React Js", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    link: "https://livingbrains.net/",
    image: livingbrains,
    category: "Completed",
  },
  {
    name: "DS  Motors",
    description:
      "Developed a responsive EV bike website using Angular, TypeScript, HTML, CSS, and Bootstrap, featuring product showcases, blogs, company information, and contact functionality.",
    stacks: ["HTML", "CSS", "Typescript", "Angular TS", "Bootstrap"],
    link: "https://ds-motors.theglobalinfinity.com/",
    image: ds,
    category: "Completed",
  },
  {
    name: "Rootments",
    description:
      "Developed a Laravel-based task management system for clothing operations, enabling users across multiple locations and stores to manage tasks through an interactive interface.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Laravel"],
    link: "https://rootments.com/",
    image: rootments,
    category: "Completed",
  },
  {
    name: "SiteSync",
    description:
      "Developed a Laravel-based construction task management system for multiple locations, supporting workflow tracking, task coordination, and deadline management through a responsive interface.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Laravel"],
    link: "https://sitesync.site/",
    image: sitesync,
    category: "Completed",
  },
  {
    name: "Sukoyo",
    description:
      "Developed a Laravel-based billing system with dashboards for invoicing, sales, purchases, inventory, attendance, user profiles, and form management.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Laravel"],
    link: "https://sukoyo.in/",
    image: sukoyo,
    category: "Completed",
  },
  {
    name: "Expert Corporate Solutions",
    description:
      "Developed a PHP-based multi-product e-commerce website with order tracking, notifications, token management, purchasing workflows, and an administrative panel.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
    link: "https://expertinternal.in/",
    image: expert,
    category: "Completed",
  },
  {
    name: "Shakti Cart",
    description:
      "Developed a React-based e-commerce platform with 15+ screens, product management, purchasing workflows, responsive interfaces, and interactive user experiences.",
    stacks: ["React Js", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    link: "https://shakthi-cart.vercel.app/",
    image: shakticart,
    category: "Completed",
  },
  {
    name: "Excoso",
    description:
      "Developed a Laravel-based e-commerce platform with product purchasing functionality and an administrative panel for inventory management, product oversight, and business operations.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Laravel"],
    link: "https://excoso.in/",
    image: excoso,
    category: "Completed,",
  },
  {
    name: "Fobas",
    description:
      "Developed a PHP-based order management and delivery tracking system with customer reviews, feedback functionality, and responsive interfaces for improved order processing.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
    link: "https://fobas.in/",
    image: fobas,
    category: "Completed",
  },
  // {
  //   name: "ERP Construction",
  //   description:
  //     "Developed a B2B management system to track workflows, payment details, and manage vendor, warehouse, quotations, and assets.",
  //   stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Laravel"],
  //   link: "https://onstru.com/ERP/",
  //   image: aditya,
  //   category: "Completed",
  // },
  // {
  //   name: "Onstru DLR",
  //   description:
  //     "Developed a website with AI-powered labor, project, and attendance management, featuring interactive dashboards with detailed charts for insights.",
  //   stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
  //   link: "https://onstru.com/DLR/web/",
  //   image: onstru,
  //   category: "Completed",
  // },
  {
    name: "Technomerates",
    description:
      "Developed a responsive construction company website using HTML, CSS, JavaScript, Bootstrap, and PHP, showcasing services, completed projects, ongoing work, and contact functionality.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
    link: "https://technomerates.com/",
    image: technomerates,
    category: "Completed",
  },
  // {
  //   name: "URFWS",
  //   description:
  //     "Developed a landing page for URFWS - Used Refurbished Formwork Solutions, featuring services, projects, pricings and contact us pages with interactive and smooth UI.",
  //   stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
  //   link: "https://urfws.com/",
  //   image: urfws,
  //   category: "Completed",
  // },
  // {
  //   name: "Magarantham Mart",
  //   description:
  //     "Built interactive e-com site with admin dashboard for product, brand, offer, competition management, multi-login, and team collaboration.",
  //   stacks: ["HTML", "CSS", "Javascript", "Laravel"],
  //   link: "https://magaranthammart.com/",
  //   image: magarantham,
  //   category: "Ongoing",
  // },
  // {
  //   name: "Nuscma",
  //   description:
  //     "Developed a system to manage admissions, enrolment, recruitment, attendance, and generate detailed reports on expenses and fees.",
  //   stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Laravel"],
  //   link: "https://nuscma.com/",
  //   image: nuscma,
  //   category: "Ongoing",
  // },
  // {
  //   name: "Ayush Clinic",
  //   description:
  //     "Developed a website with patient management, appointment scheduling, billing, and integrated medical records functionality for streamlined healthcare services.",
  //   stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
  //   link: "https://ayushclinicapp.in/",
  //   image: ayush,
  //   category: "Completed",
  // },
  // {
  //   name: "LuckyMatrimony",
  //   description:
  //     "Developed a matrimonial website with an admin panel, personalized matchmaking, subscription plans, payment gateway, and privacy settings management.",
  //   stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
  //   link: "https://luckymatrimony.com/",
  //   image: lm,
  //   category: "Completed",
  // },
  {
    name: "Cogo Smart",
    description:
      "Developed a responsive React.js website with 5+ pages, modern UI components, smooth animations, and mobile-friendly layouts using JavaScript, CSS, and Bootstrap.",
    stacks: ["React Js", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    link: "https://cogosmart.com/",
    image: cogosmart,
    category: "Completed",
  },
  // {
  //   name: "Helping Hand Foundation",
  //   description:
  //     "Created a foundation website supporting impoverished individuals and children, with a streamlined donation system for impactful contributions.",
  //   stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
  //   link: "https://nhhf.in/",
  //   image: helping,
  //   category: "Completed",
  // },
  // {
  //   name: "Neptune Automation",
  //   description:
  //     "Developed a website with 10+ pages for a biomining company, showcasing machinery for rental and purchase, enhancing client accessibility.",
  //   stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
  //   link: "https://play.google.com/store/apps/details?id=com.mpeople.memorise",
  //   image: neptune,
  //   category: "Completed",
  // },
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="work section" id="work">
      <h2 className="section__title">Work</h2>
      <span className="section__subtitle">Most Recent Works</span>

      {/* <div className="work__filters container grid">
        <button
          className={`work__item ${
            selectedCategory === "All" ? "active-work" : ""
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          ALL
        </button>
        <button
          className={`work__item ${
            selectedCategory === "Completed" ? "active-work" : ""
          }`}
          onClick={() => setSelectedCategory("Completed")}
        >
          COMPLETED
        </button>
        <button
          className={`work__item ${
            selectedCategory === "Ongoing" ? "active-work" : ""
          }`}
          onClick={() => setSelectedCategory("Ongoing")}
        >
          ON GOING
        </button>
      </div> */}

      <Projects projects={filteredProjects} />
    </section>
  );
};

export default Work;
