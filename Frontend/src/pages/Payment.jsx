import {
    Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
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


const PaymentPage = () => {
  const [cartItems, setcartItems] = useState([]);
  const totalPrice = JSON.parse(localStorage.getItem("BagTotal") || 0);
  const [address, setaddress] = useState("");
  const [showPayBtn, setShowPayBtn] = useState(false);
  const [alert,setAlert]=useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://rende-server-varun.onrender.com/cartItems`)
      .then((res) => {
        // console.log(res)
        setcartItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const handleChange =(e)=>{
  //     const {name, value} = e.target;
  //     setaddress(prev => {
  //         return {...prev, [name] : value}
  //     })
  // }

  const handleAddress = () => {
    // e.preventDefault();
    localStorage.setItem("appleAdress", JSON.stringify(address));
    setShowPayBtn(true)
    // alert("Adress added")
  };

  const showAlert=()=>{
    setAlert(true)
    setTimeout(()=>{
        setAlert(false);
        navigate("/");
    },3000)
  }



  if(alert==true){
    return (<Alert
    status='success'
    variant='subtle'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    height='200px'
    marginBottom='50px'
  >
    <AlertIcon boxSize='40px' mr={0} />
    <AlertTitle mt={4} mb={1} fontSize='lg'>
      Order Placed Successfully
    </AlertTitle>
    <AlertDescription maxWidth='sm'>
      Thank you for shopping.
    </AlertDescription>
  </Alert>)
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
            onClick={showAlert}
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
