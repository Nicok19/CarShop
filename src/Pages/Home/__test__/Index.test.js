import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router} from "react-router-dom";
import AppContent from "./App";
import { AppProvider } from "../AppContext";

jest.mock("../../Components/Shared/Header/index", () => () => <div>Mock Header</div>);
jest.mock("../../Components/ShowProducts/index", () => () => <div>Mock Section Products</div>);
jest.mock("../../Components/Shared/Footer/index", () => () => <div>Mock Footer</div>);
jest.mock("../../Components/Home/Banner", () => () => <div>Mock Banner</div>);
jest.mock("../../Components/Home/ShowApi/Index", () => () => <div>Mock ShowApi</div>);
jest.mock("../../Components/ShowProducts/ProductDetail/ProductDetail", () => () => <div>Mock Product Detail</div>);

const renderAppContent = (route) => {
  window.history.pushState({}, 'Test page', route);
  return render(
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  );
};

test("renders header and home components on the home route", () => {
  renderAppContent("/");

  expect(screen.getByText(/mock header/i)).toBeInTheDocument();
  expect(screen.getByText(/mock banner/i)).toBeInTheDocument();
  expect(screen.getByText(/mock section products/i)).toBeInTheDocument();
  expect(screen.getByText(/mock showapi/i)).toBeInTheDocument();
  expect(screen.getByText(/mock footer/i)).toBeInTheDocument();
});

test("renders product detail on product route", () => {
  renderAppContent("/test-product");

  expect(screen.getByText(/mock header/i)).toBeInTheDocument();
  expect(screen.queryByText(/mock banner/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/mock section products/i)).not.toBeInTheDocument();
  expect(screen.getByText(/mock product detail/i)).toBeInTheDocument();
  expect(screen.queryByText(/mock showapi/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/mock footer/i)).not.toBeInTheDocument();
});
