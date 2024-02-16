import React from "react";
import { AppProvider } from "./AppContext";
import Header from "./Header";
import "./App.css";
import CarouselImg from "./Carousel";
import SectionProducts from "./Products";
import Footer from "./Footer";

const App = () => {
  return (
    <AppProvider>
      <div>
        <div className="marginContainer">
          <Header />
          <CarouselImg />
          <SectionProducts />
        </div>
        <Footer/>
      </div>
    </AppProvider>
  );
};

export default App;
