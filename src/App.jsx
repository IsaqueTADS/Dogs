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
import Photo from "./Components/Photo/Photo";
import UserProfile from "./Components/User/UserProfile";
import NotFound from "./Components/NotFound";
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
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>

          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
