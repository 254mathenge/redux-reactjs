/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductComponent from "./containers/ProductComponent";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<ProductListing/>} />
        <Route path="/product/:productId" element={<ProductComponent />} />
      
      </Routes>
      </Router>
    </div>
  );
}

export default App;
