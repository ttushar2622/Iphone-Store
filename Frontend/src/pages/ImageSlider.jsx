import { useState } from "react";
import { Box, Button, Flex, Image } from "@chakra-ui/react";

function ImageSlider(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = props.images;

  const previousImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const nextImage = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <Flex alignItems="center">
      <Button onClick={previousImage} mr={2}>
        {"<"}
      </Button>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={images[currentImageIndex]} alt="slider image" />
      </Box>
      <Button onClick={nextImage} ml={2}>
        {">"}
      </Button>
    </Flex>
  );
}

export default ImageSlider;
