import React from "react";
import {useState} from  "react"
import { Box, Image, Heading, Text, Button, flexbox } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import ColorSelector from "./ColorSelector";


function Singleproduct() {
  const images = [
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202207-starlight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1655316263356",
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202207-starlight_AV1?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1655316262818",
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202207-starlight_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1655316265464",
  ];
  const colors = ["red", "white", "black"];
  const [isHighlighted1, setIsHighlighted1] = useState(false);
  const [isHighlighted2, setIsHighlighted2] = useState(false);
  const [isHighlighted3, setIsHighlighted3] = useState(false);
  const [isHighlighted4, setIsHighlighted4] = useState(false);
  const [isHighlighted5, setIsHighlighted5] = useState(false);

  const handleBoxClick1 = () => {
    setIsHighlighted1(!isHighlighted1);
  };
  const handleBoxClick2 = () => {
    setIsHighlighted2(!isHighlighted2);
  };
  const handleBoxClick3 = () => {
    setIsHighlighted3(!isHighlighted3);
  };
  const handleBoxClick4 = () => {
    setIsHighlighted4(!isHighlighted4);
  };
  const handleBoxClick5 = () => {
    setIsHighlighted5(!isHighlighted5);
  };

  return (
    <>
      <Box>
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="90%"
            margin="auto"
          >
            <Box>
              <Text fontSize="5xl">Buy iPhone</Text>
              <Text>
                From $429 or $17.87/mo.per month for 24 mo.months before
                trade‑in
              </Text>
            </Box>
            <Box>
              <Button borderRadius="20px">
                Get 3% Daily cashback using applecard
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box width="70%">
            <ImageSlider images={images} />
          </Box>
          <Box marginTop="-50px">
            <Box>
              <Text fontSize="3xl">Finish. Pick your favorite</Text>
            </Box>
            <Box>
              <ColorSelector colors={colors} />
            </Box>
            <Box>
              <br></br>
              <Text>Every iPhone SE (PRODUCT)RED purchase</Text>
              <Text>now contributes directly to fight</Text>
              <Text>Battle against covid-19</Text>
            </Box>
            <Box>
              <Text fontSize="3xl">Storage. How much space do you need?</Text>
            </Box>
            <Box
              margin="auto"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderRadius="15px"
              width="80%"
              
              borderColor="black"
              height="auto"
              padding="20px"
              onClick={handleBoxClick1}
              border={isHighlighted1 ? "2px solid blue" : "1px solid black"}
              boxShadow={isHighlighted1 ? "0 0 5px blue" : "1px solid black"}
              p="4"
              rounded="md"
              cursor="pointer"
            >
              <Box>62GB</Box>
              <Box>
                <Text>From $429</Text>
                <Text>or $17.89/mo</Text>
                <Text>for 24 mo.</Text>
              </Box>
            </Box>
            <Box
              margin="auto"
              marginTop="30px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderRadius="15px"
              width="80%"
              borderColor="black"
              height="auto"
              padding="20px"
              onClick={handleBoxClick2}
              border={isHighlighted2 ? "2px solid blue" : "1px solid black"}
              boxShadow={isHighlighted2 ? "0 0 5px blue" : "1px solid black"}
              p="4"
              rounded="md"
              cursor="pointer"
            >
              <Box>128GB</Box>
              <Box>
                <Text>From $479</Text>
                <Text>or $19.89/mo</Text>
                <Text>for 24 mo.</Text>
              </Box>
            </Box>
            <Box
              margin="auto"
              marginTop="30px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderRadius="15px"
              width="80%"
              borderColor="black"
              height="auto"
              padding="20px"
              onClick={handleBoxClick3}
              border={isHighlighted3 ? "2px solid blue" : "1px solid black"}
              boxShadow={isHighlighted3 ? "0 0 5px blue" : "1px solid black"}
              p="4"
              rounded="md"
              cursor="pointer"
            >
              <Box>256GB</Box>
              <Box>
                <Text>From $579</Text>
                <Text>or $24.89/mo</Text>
                <Text>for 24 mo.</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box textAlign='center' marginTop='30px'>
          <Text fontSize='4xl'>Payment option.Select the one which works for you.</Text>
        </Box>
        <Box width='70%' margin='auto' height='auto'display='flex'justifyContent='space-between'alignItems='center'>
        <Box
              margin="auto"
              marginTop="30px"
              borderRadius="15px"
              width="40%"
              borderColor="black"
              height="auto"
              padding="20px"
              onClick={handleBoxClick4}
              border={isHighlighted4 ? "2px solid blue" : "1px solid black"}
              boxShadow={isHighlighted4 ? "0 0 5px blue" : "1px solid black"}
              p="4"
              rounded="md"
              cursor="pointer"
            >
              <Box>
              <Text fontWeight='semibold'fontSize='2xl'>Buy</Text>
                <Text>$579.</Text>
                <Text fontSize='sm'>Pay with Apple Pay or other payment methods.</Text>
              </Box>
            </Box>
            <Box
              margin="auto"
              marginTop="30px"
              borderRadius="15px"
              width="40%"
              borderColor="black"
              height="auto"
              padding="20px"
              onClick={handleBoxClick5}
              border={isHighlighted5 ? "2px solid blue" : "1px solid black"}
              boxShadow={isHighlighted5 ? "0 0 5px blue" : "1px solid black"}
              p="4"
              rounded="md"
              cursor="pointer"
            >
              <Box>
                <Text fontWeight='semibold'fontSize='2xl'>Finance</Text>
                <Text>$24.12/mo.per month</Text>
                <Text>for 24 mo.</Text>
              </Box>
            </Box>
        </Box>
      </Box>
    </>
  );
}

export default Singleproduct;
