import { Box } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const LoginManage = () => {
  return (
    <Box mt={"-21px"} mb={-16}>
      <NavLink to="/login" style={{ textDecoration: "none" }}>
        {" "}
        Sign in
      </NavLink>
    </Box>
  );
};

export default LoginManage;
