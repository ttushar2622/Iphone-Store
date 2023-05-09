import * as React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Checkbox,
  Link,
  Image,
  Flex,
  Box,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
  let name = React.useRef(null);
  let email = React.useRef(null);
  let gender = "male";
  let password = React.useRef(null);
  let access = "true";

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: name.current.value,
      email: email.current.value,
      gender,
      password: password.current.value,
      access,
    };
    console.log(data);
    //  https://sore-nightshirt-slug.cyclic.app/apple/admin/register

    if (!data.name || !data.email || !data.password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Fill All The Details!",
      });
      return;
    }
    try {
      axios
        .post(
          "https://sore-nightshirt-slug.cyclic.app/apple/admin/register",
          data
        )
        .then((res) => {
          console.log(res, res.status);
          if (res.status === 200) {
            Swal.fire({
              icon: "success",
              title: "",
              text: "User Registered Successfully!",
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
    name.current.value = "";
    email.current.value = "";
    password.current.value = "";
  };

  return (
    <Stack
      minH="100vh"
      direction={{ base: "column-reverse", md: "row" }}
      bgImage={
        "url(https://developer.apple.com/wwdc23/images/hero-p1-b2hwz1/wwdc-p1-large_2x.webp)"
      }
      objectFit="cover">
      <Flex flex={1}>
        <Image
          alt="Cover image"
          objectFit="cover"
          src="https://www.apple.com/v/home/az/images/promos/macbook-pro-14-and-16/promo_mbp__ek7p477bkp6q_large.jpg"
        />
      </Flex>
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={4}>
          <Stack align="center">
            <Heading color={"white"} fontSize="2xl">
              Register Here
            </Heading>
          </Stack>
          <VStack
            as="form"
            spacing={8}
            boxSize={{ base: "xs", sm: "sm", md: "md" }}
            h="max-content !important"
            bg={useColorModeValue("white", "gray.700")}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}>
            <VStack spacing={4} w="100%">
              <FormControl id="email">
                <FormLabel>UserName</FormLabel>
                <Input
                  rounded="md"
                  type="text"
                  placeholder="Entre your user name here"
                  ref={name}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  rounded="md"
                  type="email"
                  placeholder="Entre your user email here"
                  ref={email}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  rounded="md"
                  type="password"
                  placeholder="Entre your user password here"
                  ref={password}
                />
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Stack direction="row" justify="space-between" w="100%">
                <Checkbox colorScheme="green" size="md">
                  Remember me
                </Checkbox>
                <Link fontSize={{ base: "md", sm: "md" }}>
                  Forgot password?
                </Link>
              </Stack>
              <Button
                onClick={handleSubmit}
                bg="blue.500"
                color="white"
                _hover={{
                  bg: "green.500",
                }}
                rounded="md"
                w="100%">
                Register
              </Button>
              <Box>
                <NavLink
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "rgb(0, 125, 250)",
                  }}>
                  Go to Sign in Page
                </NavLink>
              </Box>
            </VStack>
          </VStack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Register;
