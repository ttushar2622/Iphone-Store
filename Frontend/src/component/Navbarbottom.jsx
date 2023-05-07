import { Box } from "@chakra-ui/react";
import React from "react";

const Navbarbottom = () => {
  return (
    <Box
      width={{ base: "100%", md: "100%", lg: "100%", xl: "100%" }}
      bgColor={"rgb(255, 255, 255)"}>
      <Box
        
        bgColor={"rgb(255, 255, 255)"}
        width={{ base: "100%", md: "100%", lg: "80%", xl: "50%" }}
        margin="auto"
        pt={"10px"}
        pb={"1px"}
       >
        <p>
          Get up to ₹ 8000 instant savings on selected products with eligible
          HDFC Bank cards.*{" "}
          {
            <span style={{ color: "rgb(0, 132, 255)", cursor: "pointer" }}>
              Shop now ›
            </span>
          }{" "}
        </p>
      </Box>
    </Box>
  );
};

export default Navbarbottom;
