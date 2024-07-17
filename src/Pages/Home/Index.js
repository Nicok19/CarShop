import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AppProvider } from "../AppContext";
import Header from "../../Components/Shared/Header/index";
import "./Index.css";
import SectionProducts from "../../Components/ShowProducts/index";
import Footer from "../../Components/Shared/Footer/index";
import Banner from "../../Components/Home/Banner";
import ShowApi from "../../Components/Home/ShowApi/Index";
import ProductDetail from "../../Components/ShowProducts/ProductDetail/ProductDetail"; 

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      <Header />
      {isHomePage && <Banner />}
      <Routes>
        <Route exact path="/" element={<SectionProducts />} />
        <Route path="/:productSlug" element={<ProductDetail />} />
      </Routes>
      {isHomePage && <ShowApi />}
      {isHomePage && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  );
};

export default App;


