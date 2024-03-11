import React, { useEffect, useState } from "react";
import navData from "./assets/localization/data";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LandingPage from "./components/pages/LandingPage";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [sampleData, setSampleData] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:5000/sampleData")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSampleData(data);
        console.log("sampleData2");
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }, []);

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
            {sampleData && <LandingPage sampleData={sampleData} />}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
