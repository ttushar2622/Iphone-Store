import { useState } from "react";
import React from 'react'
import { createContext } from "react";


export const Authcontext=createContext()

export const AuthcontextProvider = ({children}) => {
   let [auth,setAuth]=useState(false)
    let [enter,setEnter]=useState(false)
    
    const toggle=(n)=>{
        setEnter(n)
    }
   

  return (
    <div>
        <Authcontext.Provider value={{enter,toggle,auth,setAuth}}>
        {children}
        </Authcontext.Provider>
    </div>
  )
}
