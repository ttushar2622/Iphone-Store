import React from 'react'
import Homepage from '../pages/Homepage'
import { Route,Routes } from 'react-router-dom'
import { Dashboard } from '../admin/dashboard'
import IpadPage from '../pages/IpadPage'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ipadPage" element={<IpadPage/>} />
        </Routes>
    </div>
  )
}

export default Router