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
} from "../../assets/projects";

const projects = [
  {
    name: "Living Brains",
    description:
      "Produced a responsive website for 'Living Brains', featuring home, about us, digital marketing, software and contact us screens, with smooth animations for enhanced user experience.",
    stacks: ["React Js", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    link: "https://livingbrains.net/",
    image: livingbrains,
    category: "Completed",
  },
  {
    name: "Shakti Cart",
    description:
      "Executing an e-commerce website for 'Shakti Cart', with 15= screens for products and purchasing options, with smooth animations for enhanced user experience.",
    stacks: ["React Js", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    link: "https://shakthi-cart.vercel.app/",
    image: shakticart,
    category: "Ongoing",
  },
  {
    name: "Nulinz",
    description:
      "Created a responsive website with 15+ Service pages, Blog, Startup section, Contact forms, and smooth animations for enhanced user experience.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    link: "https://nulinz.com/",
    image: nulinz,
    category: "Completed",
  },
  {
    name: "Cogo Smart",
    description:
      "Built a responsive website for 'CogoSmart' with 5+ pages, modern UI, smooth animations, and mobile-friendly design.",
    stacks: ["React Js", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    link: "https://cogosmart.com/",
    image: cogosmart,
    category: "Completed",
  },
  {
    name: "Sukoyo",
    description:
      "Built billing system with user-centric dashboards and modular screens for invoicing, sales, purchases, inventory, attendance, profiles, and forms.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Laravel"],
    link: "https://sukoyo.in/",
    image: sukoyo,
    category: "Completed",
  },
  {
    name: "Expert Corporate Solutions",
    description:
      "Developed a multi-product gift-selling website with order tracking, notifications, token raising, and an advanced admin panel.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
    link: "https://expertinternal.in/",
    image: expert,
    category: "Completed",
  },
  {
    name: "Rootments",
    description:
      "Developed a task management system for various users across locations and stores, featuring an interactive, user-friendly UI for seamless collaboration.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Laravel"],
    link: "https://rootments.com/",
    image: rootments,
    category: "Completed",
  },
  {
    name: "SiteSync",
    description:
      "Developed a task management system for a construction company across multiple locations, ensuring timely workflow management and deadline adherence.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Laravel"],
    link: "https://sitesync.site/",
    image: sitesync,
    category: "Completed",
  },
  {
    name: "ERP Construction",
    description:
      "Developed a B2B management system to track workflows, payment details, and manage vendor, warehouse, quotations, and assets.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Laravel"],
    link: "https://onstru.com/ERP/",
    image: aditya,
    category: "Completed",
  },
  {
    name: "Onstru DLR",
    description:
      "Developed a website with AI-powered labor, project, and attendance management, featuring interactive dashboards with detailed charts for insights.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
    link: "https://onstru.com/DLR/web/",
    image: onstru,
    category: "Completed",
  },
  {
    name: "Technomerates",
    description:
      "Developed a website for a construction company showcasing services, completed projects, ongoing work, and a contact form for inquiries.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
    link: "https://technomerates.com/",
    image: technomerates,
    category: "Completed",
  },
  {
    name: "URFWS",
    description:
      "Developed a landing page for URFWS - Used Refurbished Formwork Solutions, featuring services, projects, pricings and contact us pages with interactive and smooth UI.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
    link: "https://urfws.com/",
    image: urfws,
    category: "Completed",
  },
  {
    name: "Magarantham Mart",
    description:
      "Built interactive e-com site with admin dashboard for product, brand, offer, competition management, multi-login, and team collaboration.",
    stacks: ["HTML", "CSS", "Javascript", "Laravel"],
    link: "https://magaranthammart.com/",
    image: magarantham,
    category: "Ongoing",
  },
  {
    name: "Nuscma",
    description:
      "Developed a system to manage admissions, enrolment, recruitment, attendance, and generate detailed reports on expenses and fees.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Laravel"],
    link: "https://nuscma.com/",
    image: nuscma,
    category: "Ongoing",
  },
  {
    name: "Ayush Clinic",
    description:
      "Developed a website with patient management, appointment scheduling, billing, and integrated medical records functionality for streamlined healthcare services.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
    link: "https://ayushclinicapp.in/",
    image: ayush,
    category: "Completed",
  },
  {
    name: "LuckyMatrimony",
    description:
      "Developed a matrimonial website with an admin panel, personalized matchmaking, subscription plans, payment gateway, and privacy settings management.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
    link: "https://luckymatrimony.com/",
    image: lm,
    category: "Completed",
  },
  {
    name: "Excoso",
    description:
      "Developed an e-commerce website with purchasing options, featuring an admin panel for efficient inventory management and product oversight.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Laravel"],
    link: "https://excoso.in/",
    image: excoso,
    category: "Completed,",
  },
  {
    name: "Fobas",
    description:
      "Developed order management and delivery tracking systems with integrated user reviews and feedback functionalities for improved customer experience.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
    link: "https://fobas.in/",
    image: fobas,
    category: "Completed",
  },
  {
    name: "Helping Hand Foundation",
    description:
      "Created a foundation website supporting impoverished individuals and children, with a streamlined donation system for impactful contributions.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
    link: "https://nhhf.in/",
    image: helping,
    category: "Completed",
  },
  {
    name: "Neptune Automation",
    description:
      "Developed a website with 10+ pages for a biomining company, showcasing machinery for rental and purchase, enhancing client accessibility.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
    link: "https://play.google.com/store/apps/details?id=com.mpeople.memorise",
    image: neptune,
    category: "Completed",
  },
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

      <div className="work__filters container grid">
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
      </div>

      <Projects projects={filteredProjects} />
    </section>
  );
};

export default Work;
