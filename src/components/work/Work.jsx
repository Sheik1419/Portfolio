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
  superhomes,
  technomerates,
  onstru,
} from "../../assets/projects";

const projects = [
  {
    name: "Aditya Infrastructure",
    description:
      "Developed a B2B management system to track workflows, payment details, and manage vendor, warehouse, quotations, and assets.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Laravel", "JS Libraries"],
    link: "https://erpcontruction.com",
    // github: "https://github.com/sayyidmarvanvt/Gemini",
    image: aditya,
    category: "Completed",
  },
  {
    name: "DLR",
    description:
      "Developed a website with AI-powered labor, project, and attendance management, featuring interactive dashboards with detailed charts for insights.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP", "Ajax", "SQL", "JS Libraries"],
    link: "https://onstru.com/DLR/web",
    // github: "https://github.com/sayyidmarvanvt/Exedo-estate",
    image: dlr,
    category: "Completed",
  },
  {
    name: "Expert Corporate Solutions",
    description:
      "Developed a multi-product gift-selling website with order tracking, notifications, token raising, and an advanced admin panel.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP", "Ajax", "SQL", "JS Libraries"],
    link: "https://expertinternal.in/",
    // github: "https://apps.apple.com/in/app/expert-corporate-solutions/id6737750418",
    image: expert,
    category: "Completed",
  },
  {
    name: "Ayush Clinic",
    description:
      "Developed a website with patient management, appointment scheduling, billing, and integrated medical records functionality for streamlined healthcare services.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP", "Ajax", "SQL", "JS Libraries"],
    link: "https://ayushclinicapp.in",
    // github: "https://github.com/sayyidmarvanvt/modern-bankapp",
    image: ayush,
    category: "Completed",
  },
  {
    name: "LuckyMatrimony",
    description:
      "Developed a matrimonial website with an admin panel, personalized matchmaking, subscription plans, payment gateway, and privacy settings management.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP", "Ajax", "JS Libraries"],
    link: "https://luckymatrimony.com",
    // github: "https://github.com/sayyidmarvanvt/Disney-clone",
    image: lm,
    category: "Completed",
  },
  {
    name: "Nulinz",
    description:
      "Created a responsive website with 15+ Service pages, Blog, Startup section, Contact forms, and smooth animations for enhanced user experience.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP", "JS Libraries"],
    link: "https://nulinz.com/web_digital",
    // github: "https://github.com/sayyidmarvanvt/jmk",
    image: nulinz,
    category: "Completed",
  },
  {
    name: "Excoso",
    description:
      "Developed an e-commerce website with purchasing options, featuring an admin panel for efficient inventory management and product oversight.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Laravel", "JS Libraries"],
    link: "https://excoso.in/",
    // github: "https://github.com/sayyidmarvanvt/small-shopping-cart",
    image: excoso,
    category: "Completed,",
  },
  {
    name: "Fobas",
    description:
      "Developed order management and delivery tracking systems with integrated user reviews and feedback functionalities for improved customer experience.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP", "Ajax", "JS Libraries"],
    link: "https://fobas.in/",
    // github: "https://github.com/sayyidmarvanvt/nike-front",
    image: fobas,
    category: "Completed",
  },
  {
    name: "Helping Hand Foundation",
    description:
      "Created a foundation website supporting impoverished individuals and children, with a streamlined donation system for impactful contributions.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP", "Ajax", "JS Libraries"],
    link: "https://nhhf.in/",
    // github: "https://github.com/sayyidmarvanvt/nike-front",
    image: helping,
    category: "Completed",
  },
  {
    name: "Neptune Automation",
    description:
      "Developed a website with 10+ pages for a biomining company, showcasing machinery for rental and purchase, enhancing client accessibility.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP", "Ajax", "JS Libraries"],
    link: "https://play.google.com/store/apps/details?id=com.mpeople.memorise",
    // github: "https://github.com/sayyidmarvanvt/nike-front",
    image: neptune,
    category: "Completed",
  },
  {
    name: "Nuscma",
    description:
      "Developed a system to manage admissions, enrolment, recruitment, attendance, and generate detailed reports on expenses and fees.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP", "Ajax", "JS Libraries"],
    link: "https://nuscma.com/",
    // github: "https://github.com/sayyidmarvanvt/nike-front",
    image: nuscma,
    category: "Ongoing",
  },
  {
    name: "Rootments",
    description:
      "Developed a task management system for various users across locations and stores, featuring an interactive, user-friendly UI for seamless collaboration.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Laravel", "JS Libraries"],
    link: "https://rootments.com/",
    // github: "https://github.com/sayyidmarvanvt/nike-front",
    image: rootments,
    category: "Ongoing",
  },
  {
    name: "Superhomes",
    description:
      "Developed a task management system for a construction company across multiple locations, ensuring timely workflow management and deadline adherence.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Laravel", "JS Libraries"],
    link: "https://superhomes.co/",
    // github: "https://github.com/sayyidmarvanvt/nike-front",
    image: superhomes,
    category: "Ongoing",
  },
  {
    name: "Technomerates",
    description:
      "Developed a website for a construction company showcasing services, completed projects, ongoing work, and a contact form for inquiries.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP", "JS Libraries"],
    link: "https://technomerates.com/",
    // github: "https://github.com/sayyidmarvanvt/nike-front",
    image: technomerates,
    category: "Completed",
  },
  {
    name: "Onstru",
    description:
      "Developed a landing page for DLR Construction, featuring AI-powered labor, project, and attendance management with engaging dashboards and detailed insights.",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP", "JS Libraries"],
    link: "https://onstru.com/DLR/",
    // github: "https://github.com/sayyidmarvanvt/nike-front",
    image: onstru,
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
          className={`work__item ${selectedCategory === "All" ? "active-work" : ""
            }`}
          onClick={() => setSelectedCategory("All")}
        >
          ALL
        </button>
        <button
          className={`work__item ${selectedCategory === "Completed" ? "active-work" : ""
            }`}
          onClick={() => setSelectedCategory("Completed")}
        >
          COMPLETED
        </button>
        <button
          className={`work__item ${selectedCategory === "Ongoing" ? "active-work" : ""
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
