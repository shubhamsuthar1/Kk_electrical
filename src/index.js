import React, { useState, useEffect } from "react";  // Import React, useState, useEffect
import ReactDOM from "react-dom/client";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import {
  Home,
  Product,
  ProductSection,
  Products,
  Service,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
  Action,
  Productinfo,
  Search,
  Customercare,
} from "./pages";
import ScrollToTop from "./components/ScrollToTop";
import { Preloader } from "./components";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Simulate an API call with a 2-second delay
    setTimeout(() => {
      setLoading(false); // Hide preloader after 2 seconds
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      {loading && <Preloader />} {/* Show preloader while loading */}
      <ScrollToTop>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productSection" element={<ProductSection />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/action" element={<Action />} />
            <Route path="/productinfo" element={<Productinfo />} />
            <Route path="/search" element={<Search />} />
            <Route path="/Customercare" element={<Customercare />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Provider>
      </ScrollToTop>
      <Toaster />
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
