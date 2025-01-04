import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import Branch from './components/Branch'
import BranchForm from './components/BranchForm'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import BranchEdit from './components/BranchEdit'
import Register from './components/Register'
import Login from './components/Login'
import ResetPassword from './components/ResetPassword'
import ProtectedRoute from "./components/ProtectedRoute"
const App = () => {
  const token = localStorage.getItem("token")
  return (
    <div>
      
      <BrowserRouter>
     <div className='flex flex-row'>
      <Sidebar />
    <div className='flex-1'>
    <Routes>
        <Route path='/' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path='/branch' element={<ProtectedRoute><Branch /></ProtectedRoute>} />
        <Route path='/branchform' element={<ProtectedRoute><BranchForm /></ProtectedRoute>} />
        <Route path='/branch/:id' element={<ProtectedRoute><BranchEdit /></ProtectedRoute>} />
      </Routes>
    </div>
     </div>
     <ToastContainer />
      </BrowserRouter>
    </div>
  )
}

export default App
