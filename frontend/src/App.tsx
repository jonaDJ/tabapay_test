import React, { useState } from "react";
import navData from "./assets/localization/data";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import sampleData from "./assets/localization/sampleData";
import LandingPage from "./components/pages/LandingPage";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const handleItemClick = (itemName: string) => {
    setClickedItem(itemName || null);
  };

  return (
    <div className="App">
      <Header
        onItemClick={setClickedItem}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className={`content ${isMenuOpen ? "menu-open" : ""}`}>
        <Navigation
          navData={navData}
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
          onItemClick={handleItemClick}
        />
        {clickedItem ? (
          <div className="body-content">
            <h1>{clickedItem}</h1>
          </div>
        ) : (
          <div className="body-content">
            <LandingPage sampleData={sampleData} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
