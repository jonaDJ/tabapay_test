import React, { ReactNode } from "react";
import "./ResponsiveWrapper.css";

interface ResponsiveWrapperProps {
  children: ReactNode;
}

const ResponsiveWrapper: React.FC<ResponsiveWrapperProps> = ({ children }) => {
  return <div className="ResponsiveWrapper">{children}</div>;
};

export default ResponsiveWrapper;
