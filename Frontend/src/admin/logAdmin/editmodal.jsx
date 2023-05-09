import { Box, Button, input, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import axios from "axios"
import { useContext, useState } from "react"
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import { Authcontext } from "../authcontext"
import { MdModeEdit } from "react-icons/md";
import {useToast } from "@chakra-ui/react"
import Swal from "sweetalert2"
function Order(i) {
  console.log(i)
  const toast=useToast()

  let { enter, toggle } = useContext(Authcontext);
   const {
    _id,
    title,
      image,
      video,
      price,
      category
   }=i
   
   console.log(video)

    const { isOpen, onOpen, onClose } = useDisclosure()
    let [state,setState]=useState({
      title:title,
      image:image,
      videos:video,
      price:price,
      category:category
    })

    let nav=useNavigate()
    let token = localStorage.getItem("tokenauth");


     const handeltoast = () => {
        toast({
          title: "Hello",
          description: "This is a Chakra UI toast!",
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      }
  

    const HandelSubmit=(e)=>{
         e.preventDefault()
        axios.patch(`https://sore-nightshirt-slug.cyclic.app/apple/admin/update/${_id}`,state,{headers:{
          authentication: token,
          
        }}).then((res)=>{
        if(res){
          onClose()
          Swal.fire(
            '',
            'Item has been Edited',
            'success'
          )
         
        }
      }).catch((err)=>{
       console.log(err)
      })

    }
    return (
      <>
        <Button 
        bg={"none"}
        border={"none"}
        
        onClick={onOpen}><MdModeEdit/></Button>
  
        <Modal  isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent bg="#434242">
            <ModalHeader color={"white"} >Edit Product</ModalHeader>
            <ModalCloseButton />
            <Box p="20px" >
              <form action="" onSubmit={HandelSubmit}>
            <input style={{marginTop:"20px",border:"2px solid #19A7CE", color:"black" }}  type="text" placeholder='Title Name'
             value={state.title} onChange={(e)=>{
             setState((prev)=>{
              return {...prev,title:e.target.value}
            })
            }} required />
            <input style={{marginTop:"20px",border:"2px solid #19A7CE", color:"black" }}  type="text" placeholder='Image' value={state.image} onChange={(e)=>{
               setState((prev)=>{
                return {...prev,image:e.target.value}
              })
            }} required />
            <input style={{marginTop:"20px",border:"2px solid #19A7CE", color:"black" }}  type="text" placeholder='Videos' value={state.videos} onChange={(e)=>{
             setState((prev)=>{
              return {...prev,videos:e.target.value}
            })
             }} required/>
            <input style={{marginTop:"20px",border:"2px solid #19A7CE", color:"black" }}  type="number" placeholder='Price' value={state.price} onChange={(e)=>{
                      setState((prev)=>{
                        return {...prev,price:e.target.value}
                      })
            }} required />
            <input style={{marginTop:"20px",border:"2px solid #19A7CE", color:"black" }} 
             type="text" placeholder='Category' value={state.category} onChange={(e)=>{
                     setState((prev)=>{
                      return {...prev,category:e.target.value}
                    })
             }} required />

            <Button onClick={HandelSubmit} border={"2px solid #19A7CE"} display={"block"} m={"auto"} mt="20px">
              Edit Item
            </Button>

            </form>
            
            </Box>
          
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Order