import React from "react";
import Homepage from "../pages/Homepage";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../admin/dashboard";
import IpadPage from "../pages/IpadPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Iphone from "../pages/Iphone";
import Singleproduct from "../pages/singleproduct";
import Product from "../pages/Product";


const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ipadPage" element={<IpadPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/singlepage" element={<Singleproduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default Router;
