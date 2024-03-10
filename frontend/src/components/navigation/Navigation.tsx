import React, { useEffect, useState } from "react";
import { NavNode } from "../../interfaces/NavItemInterface";
import "./Navigation.css";
import ResponsiveWrapper from "../wrappers/ResponsiveWrapper";

interface HeaderBarProps {
  navData: NavNode[];
}

const Navigation: React.FC<HeaderBarProps> = ({ navData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [secondActiveIndex, setSecondActiveIndex] = useState<number | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const menuButtonHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setActiveIndex(null);
    setSecondActiveIndex(null);
  };

  console.log(activeIndex, secondActiveIndex);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (!isMobile) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const toggleSubMenu = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    setSecondActiveIndex(null);
  };

  const toggleSecondSubMenu = (
    index: number,
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setSecondActiveIndex(secondActiveIndex === index ? null : index);
  };

  return (
    <div className={`header-bar ${isOpen ? "open" : ""}`}>
      <ResponsiveWrapper>
        <div className="header-bar-container">
          <div className="logo">PayEasy</div>
          <div className="nav-bar-container">
            <button className="burger" onClick={menuButtonHandler}>
              <div className={`line line1 ${isOpen ? "open" : ""}`} />
              <div className={`line line2 ${isOpen ? "open" : ""}`} />
              <div className={`line line3 ${isOpen ? "open" : ""}`} />
            </button>
          </div>

          {(isOpen || !isMobile) && (
            <nav className="nav-list-container">
              <ul className="nav-list">
                {navData.map((item, index) => (
                  <React.Fragment key={index}>
                    <li
                      onClick={() => toggleSubMenu(index)}
                      className={`nav-list-sublist ${
                        activeIndex === index ? "active" : ""
                      }`}
                    >
                      <div className="nav-list-subchild">
                        <label>{item.title}</label>
                        {item.children && <i className="dropdown-arrow"></i>}
                      </div>
                      {item.children && activeIndex === index && (
                        <div className="submenu-container">
                          <ul className="submenu">
                            {!isMobile && (
                              <li className="submenu-header">
                                <label className="submenu-title">
                                  {item.title}
                                </label>
                                <div className="submenu-desc">desc....</div>
                              </li>
                            )}
                            {item.children.map((child, childIndex) => (
                              <li
                                key={childIndex}
                                onClick={(e) =>
                                  toggleSecondSubMenu(childIndex, e)
                                }
                                className={`submenu-list-items ${
                                  secondActiveIndex === childIndex
                                    ? "active"
                                    : ""
                                }`}
                              >
                                <div className="submenu-list-subchild">
                                  <label
                                    className={`third-menu-title ${
                                      secondActiveIndex === childIndex
                                        ? "active"
                                        : ""
                                    }`}
                                  >
                                    {child.title}
                                  </label>

                                  {isMobile && child.children && (
                                    <i className="dropdown-arrow"></i>
                                  )}
                                </div>
                                {child.children &&
                                  (!isMobile ||
                                    secondActiveIndex === childIndex) && (
                                    <ul className="third-menu">
                                      {child.children.map(
                                        (fChild, fChildIndex) => (
                                          <li key={fChildIndex}>
                                            {fChild.title}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </ResponsiveWrapper>
    </div>
  );
};

export default Navigation;
