import { useState } from "react";
import React from 'react'
import { createContext } from "react";


export const Authcontext=createContext()

export const AuthcontextProvider = ({children}) => {
    let [enter,setEnter]=useState(false)
    
    const toggle=(n)=>{
        setEnter(n)
    }
   

  return (
    <div>
        <Authcontext.Provider value={{enter,toggle}}>
        {children}
        </Authcontext.Provider>
    </div>
  )
}
