import { Box, Button, Flex, Heading, Icon, Image, Spacer, Text } from '@chakra-ui/react';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rende-server-varun.onrender.com/cartItems`)
      .then((res) => {
        // console.log(res)
       setProducts(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  useEffect(()=>{
    const TotalPrice=products?.reduce((acc, product) => acc + product.price * product.quantity, 0)
    localStorage.setItem("BagTotal",JSON.stringify(TotalPrice))
  },[products])

  const calculateTotal = () => {
    return products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  };


  const handleIncreaseQuantity = (index) => {
    const newProducts = [...products];
    newProducts[index].quantity++;
    setProducts(newProducts);
  };

  const handleDecreaseQuantity = (index) => {
    const newProducts = [...products];
    if (newProducts[index].quantity === 1) {
      handleRemoveProduct(index);
    } else {
      newProducts[index].quantity--;
      setProducts(newProducts);
    }
  };

  const handleRemoveProduct = (index,id) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
    axios.delete(`https://rende-server-varun.onrender.com/cartItems/${id}`)
  };

  return (
    <Box w="100%" maxW="960px" mx="auto" py="8">
      <Flex alignItems="center">
        {/* <Icon as={FaShoppingCart} boxSize="32px" mr="2" /> */}
        <Heading>Review Your Cart</Heading>
      </Flex>
      <Box mt="8">
        <Box borderBottomWidth="1px" pb="4">
          <Flex justifyContent="space-between">
            <Text>Product Name</Text>
            <Text>Price</Text>
            <Text>Quantity</Text>
            <Text></Text>
          </Flex>
        </Box>
        {products.map((product, index) => (
          <Box key={index} borderBottomWidth="1px" py="4">
            <Flex justifyContent="space-between" alignItems="center">
              <Flex alignItems="center">
                <Image src={product.image} alt={product.title} boxSize="100px" objectFit="cover" mr="4" />
                <Text>{product.title}</Text>
              </Flex>
              <Text>${product.price.toFixed(2)}</Text>
              <Flex alignItems="center">
                <Button size="sm" variant="ghost" onClick={() => handleDecreaseQuantity(index)}>-</Button>
                <Text mx="2">{product.quantity}</Text>
                <Button size="sm" variant="ghost" onClick={() => handleIncreaseQuantity(index)}>+</Button>
              </Flex>
              <Button variant="ghost" onClick={() => handleRemoveProduct(index,product.id)}>
                <Icon as={FaTrash} />
              </Button>
            </Flex>
          </Box>
        ))}
        <Box py="4">
          <Flex justifyContent="space-between">
            <Text fontWeight="bold">Total</Text>
            <Text fontWeight="bold">${calculateTotal().toFixed(2)}</Text>
          </Flex>
        </Box>
        <Box mt="8">
          <Link  to={"/payment"}><Button colorScheme="blue">Checkout</Button></Link>
        </Box>
      </Box>
    </Box>
  );
};

export default CartPage;