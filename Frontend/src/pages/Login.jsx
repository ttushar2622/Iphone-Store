import { useContext, useRef, useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Center,
  InputGroup,
  InputRightElement,
  Checkbox,
  Link,
  Box,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { Authcontext } from "../admin/authcontext";


const Login = () => {
 let {setAuth}=useContext(Authcontext)

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate= useNavigate();

  let email = useRef(null);
  let password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: email.current.value,
      password: password.current.value,
    };
    // console.log(data);

    if (!data.email || !data.password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Fill All The Details!",
      });
      return;
    }
    try {
      axios
        .post("https://sore-nightshirt-slug.cyclic.app/apple/admin/login", data)
        .then((res) => {
          console.log(res, res.status);
          if (res.status === 200) {
            Swal.fire({
              icon: "success",
              title: "",
              text: "User Logged In Successfully!",
            });
            setTimeout(() => {
              setAuth(true)
              navigate("/")
            }, 2500);
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something Went Wrong!",
            });
          }
        });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something Went Wrong!",
      });
    }
  };

  return (
    <Container
      maxW="100%"
      p={{ base: 5, md: 10 }}
      bgImage={
        "url(https://developer.apple.com/wwdc23/images/hero-p1-b2hwz1/wwdc-p1-large_2x.webp)"
      }
      bgPosition="center">
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading color={"white"} fontSize="2xl">
              Sign in to your Apple ID
            </Heading>
          </Stack>
          <VStack
            as="form"
            boxSize={{ base: "xs", sm: "sm", md: "md" }}
            h="max-content !important"
            bg={"rgb(255, 255, 255)"}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
            spacing={8}>
            <VStack spacing={4} w="100%">
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input rounded="md" type="email"  ref={email}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input rounded="md" type={show ? "text" : "password"} ref={password} />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      rounded="md"
                      bg={useColorModeValue("gray.300", "gray.700")}
                      _hover={{
                        bg: useColorModeValue("gray.400", "gray.800"),
                      }}
                      onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
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
                bg="blue.300"
                color="white"
                _hover={{
                  bg: "green.500",
                }}
                rounded="md"
                w="100%">
                Sign in
              </Button>

              <Box>
                <NavLink
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "rgb(0, 125, 250)",
                  }}>
                  Don't have an Apple ID ? Create one now.
                </NavLink>
              </Box>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </Container>
  );
};

export default Login;
