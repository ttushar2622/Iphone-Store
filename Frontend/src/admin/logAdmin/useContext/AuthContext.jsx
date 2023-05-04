import { createContext, useState } from "react";



import React from 'react'

export const AuthContext=createContext()


export const AuthContextProvider = ({children}) => {
    let[state,setState]=useState(false)
  return (
    <AuthContext.Provider value={{state,setState}}>
    {children}
    </AuthContext.Provider>
  )
}
