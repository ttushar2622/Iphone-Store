import { Box, Stack, Image, Text, Button, Link, useDisclosure } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { Authcontext } from "./authcontext";
import AddProduct from "./logAdmin/Addprod";
import { MdModeEdit } from "react-icons/md";
import Edit from "./logAdmin/editmodal";
export const Dashboard = () => {
  let { enter, toggle } = useContext(Authcontext);
  let [render,setRender]=useState(false);
  let token = localStorage.getItem("tokenauth")
  const { isOpen, onOpen, onClose } = useDisclosure()

  let nav = useNavigate();
  let [data, setData] = useState([]);

  const handelData = () => {
    axios
      .get(`https://sore-nightshirt-slug.cyclic.app/apple/admin`, {
        headers: {
          authentication: token,
        },
      })
      .then((res) => {
        setData(res.data);
      
      })
      .catch((err) => err);
  };

 


  const handelDelete = (id) => {
   
      axios.delete(`https://sore-nightshirt-slug.cyclic.app/apple/admin/delete/${id}`,{
        headers: {
          authentication: token,
        }
      }).then((res)=>{
        handelData()
        setRender(!render)
      })
  };

   
   useEffect(() => {
    handelData();
  }, [render]);

  return (
    <>
      <Stack direction="row" minHeight={"400px"} minWidth={"300px"} bgColor={'rgb(203 230 213)'}>
        <Stack
          w="20%"
          fontSize={"20px"}
          ml="20px"
          p="20px"
          bg="#263159"
          color="white"
          fontWeight="400"
          textAlign={"start"}
          
        >
          <Box  fontSize={["10px","13px","13px","20px"]} cursor={"pointer"}>
            <Link href="/dashboard"> Dash</Link>
          </Box>
          <hr />
          <Box fontSize={["10px","13px","13px","20px"]}  cursor={"pointer"}>
               {/* <NavLink to="/dashboard/admin/add">ADD</NavLink> */}
            {   enter?  <AddProduct/>:"Login to Add"}
          </Box>
          {/* <hr />
          <Box fontSize={["10px","13px","13px","20px"]} cursor={"pointer"}>
            <Link  href="/admin/orders">Orders</Link>
          </Box> */}
          <hr />
          <Box fontSize={["10px","13px","13px","20px"]} cursor={"pointer"}>
          {enter?"Logged In":<Link href="/dashboard/admin/login">LogIn</Link>}
          {/* <Link href="/dashboard/admin/login">LogIn</Link> */}
          </Box>
          <hr />
          <Box fontSize={["10px","13px","13px","20px"]} cursor={"pointer"}>
            <Link href="/dashboard/admin/register">Register</Link>
          </Box>
        </Stack>
        
        <Box  bgSize="cover" minheight="100vh" bgPosition="center" width={"100%"} backgroundRepeat="no-repeat"
         backgroundImage="url('https://www.macworld.com/wp-content/uploads/2023/03/apple-store-korea-gangham-wallpaper.jpg?quality=50&strip=all')"  >
       <Box>

       
        <Text 
       color="white"
        fontWeight={"600"}
        letterSpacing={"2px"}
        textAlign={"center"}
        fontSize={"30px"}
        >ADMIN PANNEL</Text>
       </Box>

        <TableContainer width="100%">
          <Table  color="white"  width={["60%","100%","100%","100%"]} variant="simple">
            
           {/* {enter?:"LOGIN FIRST"}  */}
          {enter?<>
            <TableCaption>Dashboard Handel</TableCaption>
          <Thead >
              <Tr color="white">
                <Th color="white">Id</Th>
                <Th color="white">Image</Th>
                <Th color="white">Price</Th>
                <Th color="white">Category</Th>
                <Th color="white">Edit</Th>
                <Th color="white">Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((item,index) => (
                <Tr>
                  <Td>{index+1}</Td>
                  <Td w="20%">
                    <Image  src={item.image} />
                  </Td>
                  <Td>{item.price}</Td>
                  <Td>
                  {item.category}
                  </Td>
                  <Td>
                  <Edit
                  {...item}
                  />
                  </Td>


                  <Td> <AiFillDelete cursor={"pointer"} onClick={()=>handelDelete(item._id)} /></Td>
               
                </Tr>
              ))}
            </Tbody></>:<TableCaption color="white">Admin Should Be Logged In First</TableCaption>}
          </Table>
        </TableContainer>
        </Box>
      </Stack>
    </>
  );
};


