import React from "react";
import { AppProvider } from "../AppContext";
import Header from "../../Components/Header";
import "./Index.css";
import SectionProducts from "../../Components/Products";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";
import ShowApi from "../../Components/ShowApi/Index";

const App = () => {
  return (
    <AppProvider>
      <div>
        <div className="marginContainer">
          <Header />
          <Banner />
          <SectionProducts />
        </div>
        <ShowApi/>
        <Footer/>
      </div>
    </AppProvider>
  );
};

export default App;
