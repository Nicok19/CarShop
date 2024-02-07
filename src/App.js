import React from "react";
import Header from "./Header";
import "./App.css";
import CarouselImg from "./carousel";
const App = () => {
  return (
    <div>
      <div className="marginContainer">
        <Header />
        <CarouselImg />
      </div>
    </div>
  );
};

export default App;
