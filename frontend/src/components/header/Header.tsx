import React from "react";
import ResponsiveWrapper from "../wrappers/ResponsiveWrapper";
import "./Header.css";

interface HeaderProps {
  onItemClick: (itemName: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

interface HamburgerMenuProps {
  menuButtonHandler: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  isMenuOpen: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  menuButtonHandler,
  isMenuOpen,
}) => (
  <div className="nav-bar-container">
    <button className="burger" onClick={menuButtonHandler}>
      {[1, 2, 3].map((line) => (
        <div
          key={line}
          className={`line line${line} ${isMenuOpen ? "open" : ""}`}
        />
      ))}
    </button>
  </div>
);

const Header: React.FC<HeaderProps> = ({
  onItemClick,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const menuButtonHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className={`header-bar ${isMenuOpen ? "open" : ""}`}>
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
            isMenuOpen={isMenuOpen}
          />
        </div>
      </ResponsiveWrapper>
    </header>
  );
};

export default Header;
