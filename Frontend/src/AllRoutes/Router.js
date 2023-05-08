import React from "react";
import Homepage from "../pages/Homepage";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../admin/dashboard";
import IpadPage from "../pages/IpadPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Iphone from "../pages/Iphone";
import { Admin } from "../admin/logAdmin/loginAdmin";
import { AdminRegister } from "../admin/logAdmin/register";
import AddProduct from "../admin/logAdmin/Addprod";

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
        <Route path='/dashboard/admin/login' element={<Admin/>}/>
        <Route path='/dashboard/admin/Register' element={<AdminRegister/>}/>
        <Route path='/dashboard/admin/add' element={<AddProduct/>}/>
     
      </Routes>
    </div>
  );
};

export default Router;