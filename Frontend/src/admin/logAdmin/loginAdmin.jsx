import {  useState } from "react"
// import axios, { formToJSON } from "axios"
// import { useNavigate } from "react-router-dom"

import axios, { formToJSON } from "axios"
import { useNavigate } from "react-router-dom"
import "./admin.css"
import { useContext } from "react"
import { Authcontext } from "../authcontext"
import Swal from "sweetalert2"


export const Admin=()=>{
    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("");

const {enter,toggle}=useContext(Authcontext)


   const nav=useNavigate()

   const handelSubmit=(e)=>{
    e.preventDefault()
    const credentials={
      email,
      password
    }

    fetch("https://sore-nightshirt-slug.cyclic.app/apple/admin/login",{
      method:"POST",
      headers:{
       "content-type":"application/json"
      },
      body:JSON.stringify(credentials)
    }).then((res)=>res.json())
    .then((res)=>{
      console.log(res)
      localStorage.setItem("tokenauth",res.token)
      if(res.token){
        Swal.fire(
          '',
          'Log In Successfull',
          'success'
        )
        nav("/dashboard")
        toggle(true)
      }
    })
    .catch((err)=>{
      console.log("Wrong")
      alert("Wrong Credentials")})
  }
  return(
    <div className="hey">
   <div className="wrapper">
    <header>Login Form</header>
    <form  onSubmit={handelSubmit}>
      <div className="field email">
        <div className="input-area">
          <input type="text" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        
        </div>
        <div className="error error-txt">Email can't be blank</div>
      </div>
      <div className="field password">
        <div className="input-area">
          <input type="password" placeholder="Password"  value={password} onChange={(e)=>setpassword(e.target.value)} required  />
        
        </div>
        <div className="error error-txt">Password can't be blank</div>
      </div>
      <div className="pass-txt">Forgot password?</div>
      <input type="submit" value="Login" />
    </form>
    <div className="sign-txt">Not yet member?Go Signup now</div>
  </div>

      
    
    </div>
  )
}