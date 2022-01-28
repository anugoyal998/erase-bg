import React from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="overflow-y-scroll h-screen scrollbar-hide">
      <Navbar />
      <Content />
    </div>
  );
};

export default App;
