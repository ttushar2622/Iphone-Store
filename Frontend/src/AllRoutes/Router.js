
import React from "react";
import Homepage from "../pages/Homepage";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../admin/dashboard";
import IpadPage from "../pages/IpadPage";
import Login from "../pages/Login";
import Register from "../pages/Register";



const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ipadPage" element={<IpadPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Router;
