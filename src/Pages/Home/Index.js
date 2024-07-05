import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AppProvider } from "../AppContext";
import Header from "../../Components/Header";
import "./Index.css";
import SectionProducts from "../../Components/ShowProducts/Products";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Home/Banner";
import ShowApi from "../../Components/Home/ShowApi/Index";
import ProductDetail from "../../Components/ShowProducts/Products/ProductDetail"; 

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
      <Footer />
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

