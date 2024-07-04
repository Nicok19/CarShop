import React from "react";
import { AppProvider } from "../AppContext";
import Header from "../../Components/Header";
import "./Index.css";
import SectionProducts from "../../Components/Products";
import Footer from "../../Components/Footer";

const App = () => {
  return (
    <AppProvider>
      <div>
        <div className="marginContainer">
          <Header />
          <SectionProducts />
        </div>
        <Footer/>
      </div>
    </AppProvider>
  );
};

export default App;
