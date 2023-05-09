import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { Authcontext } from "../admin/authcontext";
import { useContext } from "react";

const LoginManage = () => {
  const { auth, setAuth } = useContext(Authcontext);
  return (
    <Box mt={"-21px"} mb={-16}>
      {!auth ? (
        <NavLink to="/login" style={{ textDecoration: "none" }}>
          {" "}
          Login{" "}
        </NavLink>
      ) : (
        <Button
          style={{
            marginTop: "-10px",
            backgroundColor: "red",
            color: "white",
            borderRadius: "0px",
            border: "none",
            padding: "10px 20px",
            textDecoration: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            setAuth(false);
          }}>
          Logout
        </Button>
        // sagar
      )}
    </Box>
  );
};

export default LoginManage;
