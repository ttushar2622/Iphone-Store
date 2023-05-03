import { Box } from "@chakra-ui/react";
import React from "react";

const Navbarbottom = () => {
  return (
    <div>
      <Box
        mb={"1rem"}
        width={{ base: "100%", md: "100%", lg: "100%", xl: "100%" }}
        border={{
          base: "none",
          md: "none",
          lg: "1px solid #e7e7e7",
          xl: "1px solid #e7e7e7",
        }}
        bgColor={"rgb(255, 255, 255)"}
      >
        <Box
          width={{ base: "100%", md: "100%", lg: "80%", xl: "50%" }}
          margin="auto"
          p={{ base: "0px", md: "0px", lg: "10px", xl: "10px" }}
        >
          <h1>
            Get up to ₹ 8000 instant savings on selected products with eligible
            HDFC Bank cards.*{" "}
            {
              <span style={{ color: "rgb(0, 132, 255)", cursor: "pointer" }}>
                Shop now ›
              </span>
            }{" "}
          </h1>
        </Box>
        {/* <img
          src="iphone14.png"
          alt="banner"
          style={{
            margin: "0px",
            cursor: "pointer",
            marginLeft: "-1px",
          }}
        /> */}
      </Box>
    </div>
  );
};

export default Navbarbottom;
