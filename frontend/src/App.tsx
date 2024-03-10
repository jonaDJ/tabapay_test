import React, { useState } from "react";
import navData from "./assets/localization/data";
import "./App.css";
import Navigation from "./components/navigation/Navigation";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const handleItemClick = (itemName: string) => {
    setClickedItem(itemName || null);
  };

  return (
    <div className="App">
      <Navigation
        navData={navData}
        setIsMenuOpen={setIsMenuOpen}
        onItemClick={handleItemClick}
      />

      <div className={`content ${isMenuOpen ? "menu-open" : ""}`}>
        {clickedItem ? (
          <div className="body-content">
            <h1>{clickedItem}</h1>
          </div>
        ) : (
          <div className="body-content">
            <h1>Landing Page</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
