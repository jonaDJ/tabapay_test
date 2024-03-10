import React, { useEffect, useState } from "react";
import { NavNode } from "../../interfaces/NavItemInterface";
import "./Navigation.css";
import ResponsiveWrapper from "../wrappers/ResponsiveWrapper";
import Modal from "../common/Modal";

interface HeaderBarProps {
  navData: NavNode[];
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

const Navigation: React.FC<HeaderBarProps> = ({ navData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [secondActiveIndex, setSecondActiveIndex] = useState<number | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string | null>(null);

  const openModal = (content: string) => {
    setIsModalOpen(true);
    setModalContent(content);
    console.log(content, isModalOpen, modalContent);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const menuButtonHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setActiveIndex(null);
    setSecondActiveIndex(null);
  };

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
          <HamburgerMenu
            menuButtonHandler={menuButtonHandler}
            isOpen={isOpen}
          />
          {(isOpen || !isMobile) && (
            <nav className="nav-list-container">
              <ul className="nav-list">
                {navData.map((item, index) => (
                  <React.Fragment key={index}>
                    <li
                      onClick={() => {
                        toggleSubMenu(index);
                        !item.children &&
                          openModal(`Content for ${item?.title}`);
                      }}
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
                                onClick={(e) => {
                                  toggleSecondSubMenu(childIndex, e);
                                  !child.children &&
                                    openModal(`Content for ${child?.title}`);
                                }}
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
                                          <li
                                            key={fChildIndex}
                                            onClick={(e) => {
                                              openModal(
                                                `Content for ${fChild.title}`
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
      {isModalOpen && modalContent && (
        <Modal title="Modal Title" onClose={closeModal}>
          {modalContent}
        </Modal>
      )}
    </div>
  );
};

export default Navigation;
