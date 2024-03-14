import { useState } from "react";
import { IconNav } from "../../SVG/IconNav";
import style from "./Navbar.module.css";
import { List, X } from "@phosphor-icons/react";

const contentNav = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Technology",
    link: "#technology",
  },
  {
    name: "Case studies",
    link: "#caseStudies",
  },
  {
    name: "About",
    link: "#about",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.navContainer}>
      <span>
        <p>compleet labs</p>
      </span>
      <nav className={`${style.navLinks} close ${isOpen ? style.open : ""}`}>
        {contentNav.map(({ name, link }) => (
          <a key={name} href={link}>
            {name}
          </a>
        ))}
        <div className={style.hireUs}>
          <IconNav /> <a href="#hireUs">Hire us</a>{" "}
        </div>
      </nav>
      <div className={style.mobileMenuToggle} onClick={toggleMenu}>
        <div className={`${style.hamburger} `}>
          {isOpen ? <X size={32} /> : <List size={32} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
