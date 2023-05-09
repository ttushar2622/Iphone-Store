import React from "react";
import { BsBag } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";

const BagIcon = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        marginTop: "4px",
        fontSize: "18px",
        gap: "2rem",
      }}>
      <NavLink to="/cart">
        <BsBag />
      </NavLink>

      <NavLink to="/dashboard">
        <RiAdminFill />
      </NavLink>
    </div>
  );
};

export default BagIcon;
