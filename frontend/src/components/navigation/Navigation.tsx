// I have removed the modal from part 2
// Since it doesn't look neat

import React, { useState } from "react";
import { NavNode } from "../../interfaces/NavItemInterface";
import "./Navigation.css";
import ResponsiveWrapper from "../wrappers/ResponsiveWrapper";
// import Modal from "../common/Modal";

interface HeaderBarProps {
  navData: NavNode[];
  setIsMenuOpen: (isOpen: boolean) => void;
  onItemClick: (itemName: string) => void;
}

interface HamburgerMenuProps {
  menuButtonHandler: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  isOpen: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  menuButtonHandler,
  isOpen,
}) => (
  <div className="nav-bar-container">
    <button className="burger" onClick={menuButtonHandler}>
      {[1, 2, 3].map((line) => (
        <div
          key={line}
          className={`line line${line} ${isOpen ? "open" : ""}`}
        />
      ))}
    </button>
  </div>
);

const Navigation: React.FC<HeaderBarProps> = ({
  navData,
  setIsMenuOpen,
  onItemClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [secondActiveIndex, setSecondActiveIndex] = useState<number | null>(
    null
  );
  const [thirdActiveIndex, setThirdActiveIndex] = useState<number | null>(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const [modalContent, setModalContent] = useState<string | null>(null);

  // const openModal = (content: string) => {
  //   setIsModalOpen(true);
  //   setModalContent(content);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setModalContent(null);
  //   setIsOpen(false);
  // };

  const menuButtonHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setIsMenuOpen(!isOpen);
    // setActiveIndex(null);
    // setSecondActiveIndex(null);
  };
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
        // !list.children && openModal(`Content for ${list?.title}`);
        !list.children && setIsOpen(false);
        break;
      case 2:
        setSecondActiveIndex(secondActiveIndex === index ? null : index);

        setThirdActiveIndex(null);
        onItemClick(list?.title);
        // !list.children && openModal(`Content for ${list?.title}`);
        !list.children && setIsOpen(false);
        break;
      case 3:
        setThirdActiveIndex(thirdActiveIndex === index ? null : index);
        onItemClick(list?.title);
        setIsOpen(false);
        // openModal(`Content for ${list?.title}`);
        break;
    }
  };

  return (
    <div className={`header-bar ${isOpen ? "open" : ""}`}>
      <ResponsiveWrapper>
        <div className="header-bar-container">
          <div
            className="logo"
            onClick={(e) => {
              onItemClick("");
            }}
          >
            PayEasy
          </div>
          <HamburgerMenu
            menuButtonHandler={menuButtonHandler}
            isOpen={isOpen}
          />
          {isOpen && (
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
                                      {child.children.map(
                                        (fChild, fChildIndex) => (
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
      {/* {isModalOpen && modalContent && (
        <Modal title="Modal Title" onClose={closeModal}>
          {modalContent}
        </Modal>
      )} */}
    </div>
  );
};

export default Navigation;
