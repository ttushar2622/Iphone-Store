import { Box, Button, input, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import { Authcontext } from "../authcontext"
import Swal from "sweetalert2"

function AddProduct(ren) {
  let { enter, toggle } = useContext(Authcontext);
  console.log(enter)
  let [rena,setRen]=useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    let [state,setState]=useState({
      title:"",
      image:"",
      videos:"",
      price:0,
      category:""
    })



    let nav=useNavigate()
    let token = localStorage.getItem("tokenauth");

    const HandelSubmit=(e)=>{
         e.preventDefault()
         console.log("HELLO")
      axios({
        method: 'post',
        url: 'https://sore-nightshirt-slug.cyclic.app/apple/admin/add',
        headers:{
          authentication: token,
        },
        data: state
      }).then((res)=>{
        if(res){
          onClose()
          Swal.fire(
            '',
            'Added Successfull',
            'success'
          )
          setRen(!rena)
          ren(true)
            nav("/dashboard")
          
        
        }
      });

    }

    console.log(state)
    return (
      <>
        <Button 
        bg={"none"}
        border={"none"}
        
        onClick={onOpen}>Add</Button>
  
        <Modal  isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent bg="#434242">
            <ModalHeader color={"white"} >Add Product</ModalHeader>
            <ModalCloseButton />
            <Box p="20px" >
              <form action="" onSubmit={HandelSubmit}>
            <input style={{marginTop:"20px",border:"2px solid #19A7CE", color:"black" }}  type="text" placeholder='Title Name' value={state.title} onChange={(e)=>{
              console.log(state)
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
            <Button onClick={HandelSubmit} border={"2px solid #19A7CE"} display={"block"} m={"auto"} mt="20px">Add Item</Button>
            </form>
            </Box>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default AddProduct