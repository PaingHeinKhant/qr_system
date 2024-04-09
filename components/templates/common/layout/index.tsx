import React from "react";
import Navbar from "../nav";
const layout = ({ children }) => {
  return (
    <div className="h-screen">
      <Navbar />
      <main className="container">{children}</main>
    </div>
  );
};

export default layout;
