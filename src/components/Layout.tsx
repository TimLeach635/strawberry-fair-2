import type React from "react";

interface LayoutProps {
  children?: React.ReactNode;
  isNarrow: boolean;
  isWide: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, isNarrow, isWide }) => {
  return <div id="root-layout" className="section">
    <div className={`container ${isNarrow ? "narrow-container" : ""} ${isWide ? "wide-container" : ""}`}>
      <div className="title-and-buttons">
        Title goes here
      </div>
      {children}
    </div>
  </div>
}
