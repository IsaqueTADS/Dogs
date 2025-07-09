import React from "react";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Login from "./Components/Login/Login";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
