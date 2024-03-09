import React from "react";
import navData from "./assets/localization/data";
import "./App.css";
import Navigation from "./components/navigation/Navigation";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation navData={navData} />
      This is the rest of the body
      <br />
    </div>
  );
};

export default App;
