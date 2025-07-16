import React from "react";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Login from "./Components/Login/Login";
import "./App.css";
import { UserStorage } from "./Contexts/UserContext";
import User from "./Components/User/User";
import ProtectRoute from "./Components/Helper/ProtectRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={<ProtectRoute>{<User />}</ProtectRoute>}
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
