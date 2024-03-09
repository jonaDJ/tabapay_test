import React, { useState } from "react";
import { NavNode } from "../../interfaces/NavItemInterface";
import "./Navigation.css";
import ResponsiveWrapper from "../wrappers/ResponsiveWrapper";

interface HeaderBarProps {
  navData: NavNode[];
}

const Navigation: React.FC<HeaderBarProps> = ({ navData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    setActiveIndex(null);
  };

  const toggleSubMenu = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`HeaderBar ${isOpen ? "open" : ""}`}>
      <ResponsiveWrapper>
        <div className="burger" onClick={toggleNav}>
          <div className={`line ${isOpen ? "line1-open" : ""}`} />
          <div className={`line ${isOpen ? "line2-open" : ""}`} />
          <div className={`line ${isOpen ? "line3-open" : ""}`} />
        </div>
        {isOpen && (
          <ul className="navList">
            {navData.map((item, index) => (
              <li key={index} onClick={() => toggleSubMenu(index)}>
                {item.title}
                {item.children && activeIndex === index && (
                  <ul>
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>{child.title}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </ResponsiveWrapper>
    </div>
  );
};

export default Navigation;
