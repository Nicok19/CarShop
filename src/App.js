import React from "react";
import { AppProvider } from "./AppContext";
import Header from "./Header";
import "./App.css";
import CarouselImg from "./carousel";
import SectionProducts from "./Products";


const App = () => {
  return (
    <AppProvider>
      <div>
        <div className="marginContainer">

          <Header />
          <CarouselImg />
          <SectionProducts />


        </div>
      </div>
    </AppProvider>
  );
};

export default App;
