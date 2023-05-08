import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const PaymentPage = () => {
  const [cartItems, setcartItems] = useState([]);
  const totalPrice = JSON.parse(localStorage.getItem("BagTotal") || 0);
  const [address, setaddress] = useState("");
  const [showPayBtn, setShowPayBtn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://rende-server-varun.onrender.com/cartItems`)
      .then((res) => {
        console.log(res)
        setcartItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("cartItems", cartItems);
 

  const handleAddress = () => {
    // e.preventDefault();
    localStorage.setItem("appleAdress", JSON.stringify(address));
    setShowPayBtn(true)
    // alert("Adress added")
  };

  const handleOrderPlaced=()=>{

    // for post the orders
    cartItems.length > 0 &&
    cartItems.forEach((el) => [
      axios.post(
        `https://rende-server-varun.onrender.com/orders`, el
      ),
    ]);

    // for empty the cart
    cartItems.length > 0 &&
    cartItems.forEach((el) => [
      axios.delete(
        `https://rende-server-varun.onrender.com/cartItems/${el.id}`
      ),
    ]);

    Swal.fire(
      '',
      'Order Placed Successfully',
      'success'
    )

   
    setTimeout(()=>{
        
        navigate("/");
    },5000)
  }


  return (
    <Box w="100%" maxW="960px" mx="auto" py="8">
      <Heading size="lg" mb="8">
        Payment Details
      </Heading>
      <Stack spacing="6">
        <Box>
          <FormControl>
            <FormLabel>Name on Card</FormLabel>
            <Input type="text" placeholder="John Doe" name="name" />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Card Number</FormLabel>
            <Input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Expiration Date</FormLabel>
            <Stack direction="row">
              <Input type="text" placeholder="MM" />
              <Input type="text" placeholder="YYYY" />
            </Stack>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>CVV</FormLabel>
            <Input type="text" placeholder="xxx" />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Billing Address</FormLabel>
            <Input
              type="text"
              placeholder="123 Main St."
              name="address"
              onChange={(e) => setaddress(e.target.value)}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input type="text" placeholder="New York" />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>State</FormLabel>
            <Input type="text" placeholder="NY" />
          </FormControl>
        </Box>
        <Box>
          <Box mt="4">
            <Text fontSize="md" fontWeight="bold">
              Total Price: ${totalPrice}
            </Text>
          </Box>
        </Box>
        <Box>
          <Flex gap="30px">
            <Button
              colorScheme="blue"
              size="lg"
              isFullWidth
              onClick={handleAddress}
            >
              Add Address
            </Button>
            <Button 
            colorScheme="blue" size="lg" isFullWidth
            isDisabled={!showPayBtn}
            onClick={handleOrderPlaced}
            >
              Pay Now
            </Button>
          </Flex>
        </Box>
        <Box>
          <Text fontSize="sm" color="gray.600" textAlign="center">
            Your payment information is securely processed. We do not store your
            credit card details.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default PaymentPage;
