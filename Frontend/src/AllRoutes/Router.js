import React from 'react'
import Homepage from '../pages/Homepage'
import { Route,Routes } from 'react-router-dom'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage />} />
    
        </Routes>
    </div>
  )
}

export default Router