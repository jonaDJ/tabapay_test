import React, { useState } from "react";
import { NavNode } from "../../interfaces/NavItemInterface";
import "./Navigation.css";

interface HeaderBarProps {
  navData: NavNode[];
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  onItemClick: (itemName: string) => void;
  isMenuOpen: boolean;
}

const Navigation: React.FC<HeaderBarProps> = ({
  navData,
  setIsMenuOpen,
  onItemClick,
  isMenuOpen,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [secondActiveIndex, setSecondActiveIndex] = useState<number | null>(
    null
  );
  const [thirdActiveIndex, setThirdActiveIndex] = useState<number | null>(null);

  const handleItemClick = (
    index: number,
    list: NavNode,
    layer: number,
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    switch (layer) {
      case 1:
        setActiveIndex(activeIndex === index ? null : index);
        setSecondActiveIndex(null);
        setThirdActiveIndex(null);
        onItemClick(list?.title);
        !list.children && setIsMenuOpen(false);
        break;
      case 2:
        setSecondActiveIndex(secondActiveIndex === index ? null : index);

        setThirdActiveIndex(null);
        onItemClick(list?.title);
        !list.children && setIsMenuOpen(false);
        break;
      case 3:
        setThirdActiveIndex(thirdActiveIndex === index ? null : index);
        onItemClick(list?.title);
        setIsMenuOpen(false);
        break;
    }
  };

  return (
    <>
      {isMenuOpen && (
        <nav className="nav-list-container">
          <ul className="nav-list">
            {navData.map((item, index) => (
              <React.Fragment key={index}>
                <li
                  onClick={(e) => handleItemClick(index, item, 1, e)}
                  className={`nav-list-sublist ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <div className="nav-list-subchild">
                    <label>{item.title}</label>
                    {item.children && (
                      <i
                        className={`dropdown-arrow ${
                          activeIndex === index ? "active" : ""
                        }`}
                      ></i>
                    )}
                  </div>
                  {item.children && activeIndex === index && (
                    <div className="submenu-container">
                      <ul className="submenu">
                        {
                          <li className="submenu-header">
                            <label className="submenu-title">
                              {item.title}
                            </label>
                            <div className="submenu-desc">desc....</div>
                          </li>
                        }
                        {item.children.map((child, childIndex) => (
                          <li
                            key={childIndex}
                            onClick={(e) =>
                              handleItemClick(childIndex, child, 2, e)
                            }
                            className={`submenu-list-items ${
                              secondActiveIndex === childIndex ? "active" : ""
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
                              {child.children && (
                                <i
                                  className={`dropdown-arrow ${
                                    secondActiveIndex === childIndex
                                      ? "active"
                                      : ""
                                  }`}
                                ></i>
                              )}
                            </div>
                            {child.children &&
                              secondActiveIndex === childIndex && (
                                <ul className="third-menu">
                                  {child.children.map((fChild, fChildIndex) => (
                                    <li
                                      className={`third-menu-list ${
                                        thirdActiveIndex === fChildIndex
                                          ? "active"
                                          : ""
                                      }`}
                                      key={fChildIndex}
                                      onClick={(e) => {
                                        handleItemClick(
                                          fChildIndex,
                                          fChild,
                                          3,
                                          e
                                        );
                                      }}
                                    >
                                      {fChild.title}
                                    </li>
                                  ))}
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
    </>
  );
};

export default Navigation;
