import React from "react";
import "./LandingPage.css";

interface SampleData {
  title: string;
  children: {
    title: string;
    content: string[];
  }[];
}

interface LandingPageProps {
  sampleData: SampleData;
}

const LandingPage: React.FC<LandingPageProps> = ({ sampleData }) => {
  const scrollToContent = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="LandingPage">
      <h1>{sampleData.title}</h1>
      <div className="LandingPage-container">
        <ul className="LandingPage-list">
          {sampleData.children.map((item, index) => (
            <li key={index} id={item.title} className="content-section">
              <div className="LandingPage-links">
                <a
                  key={index}
                  onClick={() => scrollToContent(item.title)}
                  href={`#${item.title}`}
                >
                  <h1>{item.title}</h1>
                </a>
              </div>
              <div className="LandingPage-content">
                <h3>{item.title}</h3>
                <ul>
                  {item.content.map((point, pointIndex) => (
                    <li key={pointIndex} className="LandingPage-content-list">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
