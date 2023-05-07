import { useState } from "react";
import { Circle, Flex, Text } from "@chakra-ui/react";

function ColorSelector(props) {
  const [selectedColor, setSelectedColor] = useState(props.colors[0]);

  const handleClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <Flex alignItems="center">
      {props.colors.map((color, index) => (
        <Circle
          key={index}
          size="40px"
          bg={color}
          borderWidth={selectedColor === color ? "4px" : "2px"}
          borderColor="blue"
          mr={2}
          cursor="pointer"
          onClick={() => handleClick(color)}
        />
      ))}
      <Text ml={2}>Selected color: {selectedColor}</Text>
    </Flex>
  );
}

export default ColorSelector;
