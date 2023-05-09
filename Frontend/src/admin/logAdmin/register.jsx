import {  useState } from "react"
import axios, { formToJSON } from "axios"
import { useNavigate } from "react-router-dom"
import "./admin.css"
import { useContext } from "react"
import { Authcontext } from "../authcontext"
import Swal from "sweetalert2"


export const AdminRegister=()=>{
  const [name,setName]=useState("");
  const [gender,setGender]=useState("");
    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("");

const {enter,toggle}=useContext(Authcontext)

   const nav=useNavigate()

   const handelSubmit=(e)=>{
    e.preventDefault()
    const credentials={
      name,
      gender,
      email,
      password
    }
  
    fetch("https://sore-nightshirt-slug.cyclic.app/apple/admin/register",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(credentials)
    })
    .then((res)=>res.json())
    .then((res)=>console.log(res))
    .catch((err)=>{
      Swal.fire(
        '',
        'Registration Successfull',
        'success'
      )
      nav("/dashboard")
      console.log("check")})
  }
  return(
    <div className="hey">
   <div className="wrapper">
    <header>SignUp Form</header>
    <form  onSubmit={handelSubmit}>
       
      <div className="field email">
         
        <div className="input-area">
       <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required />
       <input type="text" placeholder="Gender"  value={gender} onChange={(e)=>setGender(e.target.value)} required  />
         <input type="text" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} required />
         <input type="password" placeholder="Password"  value={password} onChange={(e)=>setpassword(e.target.value)} required  />
         
        </div>
      </div>
  
      <div className="pass-txt">Forgot password?</div>
      <input type="submit" value="Login" />
    </form>
    <div className="sign-txt">Not yet member?Go Signup now</div>
  </div>

      
    
    </div>
  )
}